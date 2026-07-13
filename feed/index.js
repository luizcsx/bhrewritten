import { createSupabase }                from '../_lib/supabase.js';
import { readSession, jsonError, jsonOk } from '../_lib/session.js';

export async function onRequestGet({ request, env }) {
    const session = await readSession(request, env.SESSION_SECRET);
    if (!session) return jsonError('Unauthorized', 401);

    const db  = createSupabase(env);
    const uid = session.userId;

    const fRes = await db.select('friendships', `user_id=eq.${uid}&select=friend_id`);
    const friendIds = (fRes.data || []).map(r => r.friend_id);
    friendIds.push(uid); // include own posts

    const inClause = `(${friendIds.map(id => `"${id}"`).join(',')})`;

    const feedRes = await db.select(
        'feed_posts',
        `user_id=in.${inClause}` +
        `&select=id,content,created_at,user_id,users(id,username)` +
        `&order=created_at.desc&limit=30`
    );

    if (!feedRes.ok) return jsonError('Could not load feed', 500);
    return jsonOk({ posts: feedRes.data || [] });
}

export async function onRequestPost({ request, env }) {
    const session = await readSession(request, env.SESSION_SECRET);
    if (!session) return jsonError('Unauthorized', 401);

    const body    = await request.json().catch(() => ({}));
    const content = (body.content || '').trim();

    if (!content)          return jsonError('Post content cannot be empty.');
    if (content.length > 300) return jsonError('Post too long (max 300 characters).');

    const db = createSupabase(env);
    const ur = await db.select('users', `id=eq.${session.userId}&select=is_13`, true);
    if (ur.data?.is_13 && /https?:\/\//i.test(content)) {
        return jsonError('Links are not allowed for accounts with parental controls.', 403);
    }

    const ins = await db.insert('feed_posts', {
        user_id:    session.userId,
        content,
        created_at: new Date().toISOString()
    });

    if (!ins.ok) return jsonError('Could not post. Please try again.', 500);

    const post = Array.isArray(ins.data) ? ins.data[0] : ins.data;
    return jsonOk({ post }, {});
}

import { createSupabase }                from '../_lib/supabase.js';
import { readSession, jsonError, jsonOk } from '../_lib/session.js';

export async function onRequestGet({ request, env }) {
    const session = await readSession(request, env.SESSION_SECRET);
    if (!session) return jsonError('Unauthorized', 401);

    const db  = createSupabase(env);

    const fRes = await db.select(
        'friendships',
        `user_id=eq.${session.userId}&select=friend_id&limit=50`
    );
    if (!fRes.ok) return jsonError('Could not load friends', 500);

    const friendIds = (fRes.data || []).map(r => r.friend_id);
    if (friendIds.length === 0) return jsonOk({ friends: [] });

    const inClause = `(${friendIds.map(id => `"${id}"`).join(',')})`;
    const uRes = await db.select(
        'users',
        `id=in.${inClause}&select=id,username,is_online,last_seen&limit=50`
    );
    if (!uRes.ok) return jsonError('Could not load friend data', 500);

    return jsonOk({ friends: uRes.data || [] });
}

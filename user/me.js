import { createSupabase }               from '../_lib/supabase.js';
import { readSession, jsonError, jsonOk } from '../_lib/session.js';

export async function onRequestGet({ request, env }) {
    const session = await readSession(request, env.SESSION_SECRET);
    if (!session) return jsonError('Unauthorized', 401);

    const db  = createSupabase(env);
    const res = await db.select(
        'users',
        `id=eq.${session.userId}` +
        `&select=id,username,bucks,bits,trade_count,friend_count,message_count,` +
        `is_13,has_email,primary_clan_id,avatar_hash,is_online,last_seen,created_at`,
        true
    );

    if (!res.ok || !res.data) return jsonError('User not found', 404);

    let clan = null;
    if (res.data.primary_clan_id) {
        const cr = await db.select(
            'clans',
            `id=eq.${res.data.primary_clan_id}&select=id,title`,
            true
        );
        if (cr.ok && cr.data) clan = cr.data;
    }

    await db.update('users', `id=eq.${session.userId}`, {
        is_online: true,
        last_seen: new Date().toISOString()
    });

    return jsonOk({ user: res.data, clan });
}

import { createSupabase }                    from '../_lib/supabase.js';
import { createSessionCookie, jsonError }    from '../_lib/session.js';

export async function onRequestPost({ request, env }) {
    const ct = request.headers.get('Content-Type') || '';
    let body;
    if (ct.includes('application/x-www-form-urlencoded') || ct.includes('multipart/form-data')) {
        const fd = await request.formData();
        body = Object.fromEntries(fd.entries());
    } else {
        body = await request.json().catch(() => ({}));
    }

    const { username, password } = body;
    if (!username || !password) return jsonError('Username and password are required.');

    const db = createSupabase(env);
    const res = await db.select(
        'users',
        `username=eq.${encodeURIComponent(username.trim())}&select=id,password_hash,is_13`,
        true
    );

    if (!res.data) return jsonError('Invalid username or password.', 401);

    const user = res.data;

    const parts    = user.password_hash.split(':');   // pbkdf2:salt:hash
    const saltHex  = parts[1];
    const hashHex  = parts[2];
    const salt     = new Uint8Array(saltHex.match(/.{2}/g).map(b => parseInt(b, 16)));
    const enc      = new TextEncoder();
    const keyMat   = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
    const derived  = await crypto.subtle.deriveBits(
        { name: 'PBKDF2', hash: 'SHA-256', salt, iterations: 200000 }, keyMat, 256
    );
    const candidateHex = Array.from(new Uint8Array(derived)).map(b => b.toString(16).padStart(2,'0')).join('');

    if (candidateHex !== hashHex) return jsonError('Invalid username or password.', 401);

    const sessionCookie = await createSessionCookie(user.id, env.SESSION_SECRET);

    return new Response(null, {
        status: 302,
        headers: {
            'Location':   '/dashboard',
            'Set-Cookie': sessionCookie
        }
    });
}

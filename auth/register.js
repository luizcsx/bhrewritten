import { createSupabase }                    from '../_lib/supabase.js';
import { createSessionCookie, jsonError }    from '../_lib/session.js';

export async function onRequestPost({ request, env }) {
    const ct   = request.headers.get('Content-Type') || '';
    let body;

    if (ct.includes('application/x-www-form-urlencoded') || ct.includes('multipart/form-data')) {
        const fd = await request.formData();
        body = Object.fromEntries(fd.entries());
    } else {
        body = await request.json().catch(() => ({}));
    }

    const { username, password, password_confirmation, email, dob } = body;

    if (!username || !password || !dob) {
        return jsonError('Username, password and date of birth are required.');
    }
    if (!/^[A-Za-z0-9_]{3,20}$/.test(username.trim())) {
        return jsonError('Username must be 3–20 characters (letters, numbers, underscores).');
    }
    if (password.length < 6) {
        return jsonError('Password must be at least 6 characters.');
    }
    if (password !== password_confirmation) {
        return jsonError('Passwords do not match.');
    }

    const birth  = new Date(dob);
    const today  = new Date();
    let age      = today.getFullYear() - birth.getFullYear();
    const m      = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
    if (age < 6 || age > 120) return jsonError('Invalid date of birth.');
    const is_13 = age <= 13;

    const enc      = new TextEncoder();
    const salt     = crypto.getRandomValues(new Uint8Array(16));
    const saltHex  = Array.from(salt).map(b => b.toString(16).padStart(2,'0')).join('');
    const keyMat   = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
    const derived  = await crypto.subtle.deriveBits(
        { name: 'PBKDF2', hash: 'SHA-256', salt, iterations: 200000 }, keyMat, 256
    );
    const hashHex  = Array.from(new Uint8Array(derived)).map(b => b.toString(16).padStart(2,'0')).join('');
    const password_hash = `pbkdf2:${saltHex}:${hashHex}`;

    const db = createSupabase(env);

    const existing = await db.select('users', `username=eq.${encodeURIComponent(username.trim())}&select=id`, true);
    if (existing.data) {
        return jsonError('Username is already taken.');
    }

    const newUser = {
        username:      username.trim(),
        password_hash,
        email:         email?.trim() || null,
        has_email:     !!email?.trim(),
        dob,
        is_13,
        bucks:         10,
        bits:          0
    };

    const inserted = await db.insert('users', newUser);
    if (!inserted.ok) {
        console.error('Register insert error:', inserted.data);
        return jsonError('Could not create account. Please try again.', 500);
    }

    const user = Array.isArray(inserted.data) ? inserted.data[0] : inserted.data;

    const sessionCookie = await createSessionCookie(user.id, env.SESSION_SECRET);

    return new Response(null, {
        status: 302,
        headers: {
            'Location':   '/dashboard',
            'Set-Cookie': sessionCookie
        }
    });
}

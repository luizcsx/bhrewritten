const SESSION_MAX_AGE = 60 * 60 * 24 * 30; // seconds - 30 days
const COOKIE_NAME     = 'bhr_sess';

async function sign(payload, secret) {
    const enc     = new TextEncoder();
    const keyData = enc.encode(secret);
    const key     = await crypto.subtle.importKey(
        'raw', keyData, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
    );
    const data = enc.encode(payload);
    const sig  = await crypto.subtle.sign('HMAC', key, data);
    return btoa(String.fromCharCode(...new Uint8Array(sig)));
}

export async function createSessionCookie(userId, secret) {
    const expires = Math.floor(Date.now() / 1000) + SESSION_MAX_AGE;
    const payload = `${userId}:${expires}`;
    const sig     = await sign(payload, secret);
    const value   = `${payload}.${sig}`;
    return `${COOKIE_NAME}=${encodeURIComponent(value)}; HttpOnly; Secure; SameSite=Lax; Max-Age=${SESSION_MAX_AGE}; Path=/`;
}

export async function readSession(request, secret) {
    const cookieHeader = request.headers.get('Cookie') || '';
    const match = cookieHeader.split(';').find(c => c.trim().startsWith(COOKIE_NAME + '='));
    if (!match) return null;

    try {
        const raw   = decodeURIComponent(match.trim().slice(COOKIE_NAME.length + 1));
        const parts = raw.split('.');
        if (parts.length !== 3) return null;          // payload:expires + sig

        const payload = parts.slice(0, 2).join('.');  // "userId:expires"
        const sig     = parts[2];
        const expected = await sign(payload, secret);

        if (sig !== expected) return null;

        const [userId, expStr] = payload.split(':');
        if (Date.now() / 1000 > parseInt(expStr)) return null; // expired

        return { userId };
    } catch {
        return null;
    }
}
export function clearSessionCookie() {
    return `${COOKIE_NAME}=; HttpOnly; Secure; SameSite=Lax; Max-Age=0; Path=/`;
}

export function jsonError(message, status = 400) {
    return new Response(JSON.stringify({ error: message }), {
        status,
        headers: { 'Content-Type': 'application/json' }
    });
}

export function jsonOk(data, extraHeaders = {}) {
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json', ...extraHeaders }
    });
}

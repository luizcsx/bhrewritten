import { clearSessionCookie } from '../_lib/session.js';

export async function onRequestPost() {
    return new Response(null, {
        status: 302,
        headers: {
            'Location':   '/',
            'Set-Cookie': clearSessionCookie()
        }
    });
}

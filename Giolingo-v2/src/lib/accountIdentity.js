// A deterministic, non-deliverable Auth identifier; never an email to contact.
export const USERNAME_DOMAIN = 'users.giolingo.invalid';
export async function accountIdentity(kind, value) {
  const name = value.trim().normalize('NFKC').toLowerCase();
  if (kind === 'username') {
    if (!/^[\p{L}\p{N}_]{3,24}$/u.test(name)) throw new Error('username_format');
    const bytes = new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(name)));
    const encoded = Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('');
    return {email: `${encoded}@${USERNAME_DOMAIN}`, username: name};
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(name) || name.endsWith(`@${USERNAME_DOMAIN}`)) throw new Error('email_format');
  return {email: name};
}
export function accountLabel(user) {
  return user?.user_metadata?.username || (user?.email?.endsWith(`@${USERNAME_DOMAIN}`) ? 'Giolingo' : user?.email);
}

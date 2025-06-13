import { isTokenExpired } from './decodeToken';

const BASE_URL = import.meta.env.VITE_API_URL ?? '';

/**
 * Appelle le backend en injectant automatiquement le header Authorization
 * s’il existe dans localStorage, et en redirigeant vers /auth si le token expire.
 */
export async function http<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const token = localStorage.getItem('token');

  // Ajout automatique du prefix /api si l’appelant n’en fournit pas
  const url = endpoint.startsWith('http')
    ? endpoint
    : `${BASE_URL}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;

  const headers = new Headers(options.headers ?? {});

  if (token && !isTokenExpired(token)) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const response = await fetch(url, { ...options, headers });

  if (response.status === 401) {
    // Token expiré ou invalide → purge et reload
    localStorage.removeItem('token');
    window.location.href = '/auth';
    throw new Error('Session expirée');
  }

  if (!response.ok) {
    const message = (await response.json())?.message ?? response.statusText;
    throw new Error(message);
  }

  return response.json() as Promise<T>;
}

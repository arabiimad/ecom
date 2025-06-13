import { Auth, Register, AuthResponse, UserUpdateData, User } from '../types';
import { http } from './httpClient';

export const loginUser = (credentials: Auth) =>
  http<AuthResponse>('/auth/authenticate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });

export const registerUser = (userData: Register) =>
  http<AuthResponse>('/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });

export const updateUserDetails = (userData: UserUpdateData) =>
  http<User>('/customers', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });

export const fetchUserDetails = (token: string) =>
  // Pas besoin de passer le token ; http() l’ajoute automatiquement
  http<User>(`/auth/token?token=${encodeURIComponent(token)}`);

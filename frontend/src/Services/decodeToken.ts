import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  exp?: number; // Marked optional to handle undefined case
  [key: string]: unknown;
}

export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded: DecodedToken = jwtDecode<DecodedToken>(token);
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

    // Check if 'exp' exists and compare it with the current time
    if (decoded.exp) {
      return decoded.exp < currentTime;
    }
    return true; // If 'exp' is missing, assume the token is expired
  } catch (error) {
    return true; // Handle invalid token or decoding failure
  }
};

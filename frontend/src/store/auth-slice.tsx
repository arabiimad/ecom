import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchUserDetails,
  loginUser,
  registerUser,
  updateUserDetails,
} from '../Services/authService';
import { Auth, Register, User, AuthResponse, UserUpdateData } from '../types';
import { isTokenExpired } from '../Services/decodeToken';

/* ---------- Types ---------- */

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

/* ---------- Helpers ---------- */

const loadUser = (): User | null => {
  try {
    const raw = localStorage.getItem('user');
    return raw ? (JSON.parse(raw) as User) : null;
  } catch {
    return null;
  }
};

const getErrorMessage = (err: unknown): string =>
  err instanceof Error ? err.message : String(err);

/* ---------- Initial state ---------- */

const initialState: AuthState = {
  user: loadUser(),
  token: localStorage.getItem('token'),
  loading: false,
  error: null,
};

/* ---------- Thunks ---------- */

export const login = createAsyncThunk<
  AuthResponse,
  Auth,
  { rejectValue: string }
>('auth/login', async (credentials, thunkAPI) => {
  try {
    const data = await loginUser(credentials);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    return data;
  } catch (err: unknown) {
    return thunkAPI.rejectWithValue(getErrorMessage(err));
  }
});

export const register = createAsyncThunk<
  AuthResponse,
  Register,
  { rejectValue: string }
>('auth/register', async (userData, thunkAPI) => {
  try {
    const data = await registerUser(userData);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    return data;
  } catch (err: unknown) {
    return thunkAPI.rejectWithValue(getErrorMessage(err));
  }
});

export const updateUser = createAsyncThunk<
  User,
  UserUpdateData,
  { rejectValue: string }
>('auth/updateUser', async (userData, thunkAPI) => {
  try {
    const updated = await updateUserDetails(userData);
    localStorage.setItem('user', JSON.stringify(updated));
    return updated;
  } catch (err: unknown) {
    return thunkAPI.rejectWithValue(getErrorMessage(err));
  }
});

export const restoreUser = createAsyncThunk<
  User | null,
  void,
  { rejectValue: string }
>('auth/restoreUser', async (_, thunkAPI) => {
  const token = localStorage.getItem('token');
  if (token && !isTokenExpired(token)) {
    try {
      const user = await fetchUserDetails(token);
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } catch (err: unknown) {
      return thunkAPI.rejectWithValue(getErrorMessage(err));
    }
  }
  return null;
});

/* ---------- Slice ---------- */

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
  },
  extraReducers: (builder) => {
    builder
      // login
      .addCase(login.pending, (s) => {
        s.loading = true;
        s.error = null;
      })
      .addCase(login.fulfilled, (s, a) => {
        s.loading = false;
        s.user = a.payload.user;
        s.token = a.payload.token;
      })
      .addCase(login.rejected, (s, a) => {
        s.loading = false;
        s.error = a.payload ?? 'Login error';
      })
      // register
      .addCase(register.pending, (s) => {
        s.loading = true;
        s.error = null;
      })
      .addCase(register.fulfilled, (s, a) => {
        s.loading = false;
        s.user = a.payload.user;
        s.token = a.payload.token;
      })
      .addCase(register.rejected, (s, a) => {
        s.loading = false;
        s.error = a.payload ?? 'Register error';
      })
      // updateUser
      .addCase(updateUser.fulfilled, (s, a) => {
        s.user = a.payload;
      })
      // restoreUser
      .addCase(restoreUser.pending, (s) => {
        s.loading = true;
      })
      .addCase(restoreUser.fulfilled, (s, a) => {
        s.loading = false;
        s.user = a.payload;
        s.token = localStorage.getItem('token');
      })
      .addCase(restoreUser.rejected, (s, a) => {
        s.loading = false;
        s.error = a.payload ?? 'Restore error';
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

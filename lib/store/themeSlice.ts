import { createSlice } from '@reduxjs/toolkit';

type ThemeMode = 'light' | 'dark';

interface ThemeState {
  mode: ThemeMode;
  isInitialized: boolean;
}

const initialState: ThemeState = {
  mode: 'light',
  isInitialized: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      document.documentElement.classList.toggle('dark', state.mode === 'dark');
    },
    initializeTheme: (state) => {
      if (!state.isInitialized && typeof window !== 'undefined') {
        state.mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        state.isInitialized = true;
        document.documentElement.classList.toggle('dark', state.mode === 'dark');
      }
    },
  },
});

export const { toggleTheme, initializeTheme } = themeSlice.actions;
export default themeSlice.reducer;

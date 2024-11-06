'use client';

import { RootState } from '@/store/store';
import { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { darkTheme, lightTheme } from './theme';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { initializeTheme } from '@/store/themeSlice';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const dispatch = useDispatch();
  const { mode, isInitialized } = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    dispatch(initializeTheme());
  }, [dispatch]);

  if (!isInitialized) {
    return null;
  }

  return <SCThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>{children}</SCThemeProvider>;
}

'use client';

import { store } from '@/store/store';
import { Provider } from 'react-redux';
import { ReactNode } from 'react';

type ReactReduxProviderProps = {
  children: ReactNode;
};

const ReactReduxProvider = ({ children }: ReactReduxProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReactReduxProvider;

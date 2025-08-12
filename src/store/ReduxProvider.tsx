'use client';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './storeSetup';
import Loading from '@/components/shared/Loading';

interface ReduxProviderProps {
  children: React.ReactNode;
}

export default function ReduxProvider({ children }: ReduxProviderProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading type='cover' />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
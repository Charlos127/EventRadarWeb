import React, { ReactNode } from 'react';

import { AuthProvider } from './auth';
import { EventsProvider } from './events';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <AuthProvider>
      <EventsProvider>{children}</EventsProvider>
    </AuthProvider>
  );
}

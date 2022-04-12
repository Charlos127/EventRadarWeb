import React, { ReactNode } from 'react';

import { AuthProvider } from './auth';
import { SidebarDrawerProvider } from './sidebar';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <AuthProvider>
      <SidebarDrawerProvider>{children}</SidebarDrawerProvider>
    </AuthProvider>
  );
}

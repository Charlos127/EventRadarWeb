/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';

import history from '~/services/history';

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

interface SidebarDrawerContextData extends UseDisclosureReturn {
  toggleSidebar: () => void;
  isSidebarClosed: boolean;
}

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  const [isSidebarClosed, setIsSidebarClosed] = useState(false);

  const disclosure = useDisclosure();

  const { pathname } = history.location;

  useEffect(() => {
    disclosure.onClose();
  }, [pathname]);

  function toggleSidebar() {
    setIsSidebarClosed(!isSidebarClosed);
  }

  return (
    <SidebarDrawerContext.Provider
      value={{
        ...disclosure,
        toggleSidebar,
        isSidebarClosed,
      }}
    >
      {children}
    </SidebarDrawerContext.Provider>
  );
}

function useSidebarDrawer() {
  const context = useContext(SidebarDrawerContext);

  if (!context) {
    throw new Error(
      'useSidebarDrawer must be used within an SidebarDrawerProvider.',
    );
  }

  return context;
}

export { SidebarDrawerProvider, useSidebarDrawer };

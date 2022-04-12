import React, { ReactNode } from 'react';

import { Box } from '@chakra-ui/react';

interface BlankLayoutProps {
  children: ReactNode;
}

export function BlankLayout({ children }: BlankLayoutProps) {
  return <Box>{children}</Box>;
}

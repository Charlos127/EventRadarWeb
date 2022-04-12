import React, { ReactNode } from 'react';

import { Box, Stack } from '@chakra-ui/react';

export interface SectionProps {
  children: ReactNode;
}

export function Section({ children }: SectionProps) {
  return (
    <Box>
      <Stack spacing="6" mt="6" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}

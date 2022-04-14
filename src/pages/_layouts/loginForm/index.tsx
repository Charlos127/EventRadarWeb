import React, { ReactNode } from 'react';

import { Flex, Image } from '@chakra-ui/react';

import { Images } from '~/variables/';

interface LoginFormLayoutProps {
  children: ReactNode;
}

export function LoginFormLayout({ children }: LoginFormLayoutProps) {
  const { EventRadarBackground, Logo } = Images;

  return (
    <Flex
      justify="center"
      align="center"
      boxShadow="inset 0 0 0 2000px rgba(0, 0, 0, 0.3)"
      bgImage={EventRadarBackground}
      bgRepeat="no-repeat"
      bgAttachment="fixer"
      bgSize="cover"
      flexDir="column"
      h={['100%', '100%', '100%', '100vh']}
      w="100vw"
    >
      <Flex
        flexDir="column"
        bg="white"
        borderRadius="20"
        px="16"
        pt="2"
        pb="6"
        justify="center"
        align="center"
      >
        {children}
      </Flex>
    </Flex>
  );
}

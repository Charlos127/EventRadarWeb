import React, { ReactNode } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { Flex } from '@chakra-ui/react';

import { Header } from '~/components/Header';

interface DefaultLayoutProps {
  children: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Flex w="100vw" h={['100%', '100%', '100%', '100vh']}>
      <Flex w="100%" flexDir="column" align="center">
        <Header />
        <Flex
          as={PerfectScrollbar}
          w="100%"
          mt="70px"
          ml="40"
          mr="48"
          px="20"
          transition="all 0.5s ease"
          justify="center"
          py="6"
        >
          <Flex h="100%" w="100%" justify="center" maxW="1600px">
            {children}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

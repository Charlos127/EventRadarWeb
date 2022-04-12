import React from 'react';

import { Flex, Image, useBreakpointValue } from '@chakra-ui/react';

import LogoHDNBlack from '~/assets/images/logo-hdn-preto.png';
import LogoHDN from '~/assets/images/logo-hdn.png';
import { useSidebarDrawer } from '~/hooks/sidebar';

export function Logo() {
  const { isSidebarClosed } = useSidebarDrawer();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <Flex
      w="56"
      alignItems="center"
      bg={
        isDrawerSidebar || (!isDrawerSidebar && !isSidebarClosed)
          ? 'primary.500'
          : 'unset'
      }
      position={!isDrawerSidebar && isSidebarClosed ? 'absolute' : 'unset'}
      left={isSidebarClosed ? '16' : 'unset'}
    >
      <Image
        w="40"
        src={LogoHDN}
        alt="Logo Oxiteno Sidebar"
        display={
          isDrawerSidebar || (!isDrawerSidebar && !isSidebarClosed)
            ? 'block'
            : 'none'
        }
        position={!isDrawerSidebar ? 'absolute' : 'unset'}
        transition="all 0.2s ease"
      />
      <Image
        w="40"
        src={LogoHDNBlack}
        alt="Logo Oxiteno Sidebar SVG"
        display={!isDrawerSidebar && isSidebarClosed ? 'block' : 'none'}
        position="absolute"
        left="16"
        transition="all 0.2s ease"
      />
    </Flex>
  );
}

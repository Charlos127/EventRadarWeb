import React from 'react';

import { Flex, Image } from '@chakra-ui/react';

import LogoHDN from '~/assets/images/logo-hdn.png';

export function Logo() {
  return (
    <Flex w="56" alignItems="center">
      <Image w="40" src={LogoHDN} alt="Logo HDN Header" />
    </Flex>
  );
}

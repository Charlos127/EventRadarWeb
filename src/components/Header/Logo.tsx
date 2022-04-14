import React from 'react';
import { Link } from 'react-router-dom';

import { Flex, Image } from '@chakra-ui/react';

import { Images } from '~/variables/';

export function Logo() {
  const { Logo } = Images;
  return (
    <Flex as={Link} w="56" alignItems="center" to="/home">
      <Image w="40" src={Logo} alt="Logo Radar de eventos horizontal" />
    </Flex>
  );
}

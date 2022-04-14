import React from 'react';
import { FiMenu } from 'react-icons/fi';

import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  useBreakpointValue,
  useDisclosure,
  Icon,
} from '@chakra-ui/react';

import { Button } from '../Form/Button';
import { Avatar } from './Avatar';
import { Logo } from './Logo';
import { Navigation } from './Navigation';

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      mb="10"
      align="center"
      justify="center"
      position="fixed"
      left="0"
      py="4"
      px="20"
      bg="white"
      zIndex="5"
      boxShadow="md"
    >
      <Flex w="100%" maxW="1600px" align="center">
        <Logo />
        {isWideScreen ? (
          <Flex w="100%" justify="space-between">
            <Navigation />
            <Avatar />
          </Flex>
        ) : (
          <Flex>
            <Button ml="auto" variant="unstyled" onClick={onOpen}>
              <Icon as={FiMenu} h={5} w={5} color="primary.500" />
            </Button>
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton color="black" mt="4" />

                <DrawerBody mt="4">
                  <Avatar />
                  <Navigation isWideScreen />
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}

import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiLogOut } from 'react-icons/fi';

import {
  Flex,
  Text,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar as ChakraAvatar,
} from '@chakra-ui/react';

import { useAuth } from '~/hooks/auth';

export function Avatar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();

  function getName(): string {
    return user?.name || '';
  }

  return (
    <Menu
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
    >
      <MenuButton ml="auto">
        <Flex
          position="relative"
          w="56"
          alignItems="center"
          borderBottomColor="primary.500"
          borderBottomWidth="1px"
          justify="space-between"
        >
          <ChakraAvatar
            position="absolute"
            left="-2"
            bottom="-2"
            bg="gray.200"
            name={user?.name}
          />

          <Flex direction="column" pl="14">
            <Text
              fontWeight="semibold"
              fontSize="md"
              lineHeight="1"
              textAlign="left"
              color="text.500"
            >
              {getName()}
            </Text>
          </Flex>
          <Icon
            as={isOpen ? FiChevronUp : FiChevronDown}
            color="primary.500"
            h={6}
            w={6}
          />
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem
          onClick={signOut}
          icon={<Icon as={FiLogOut} color="primary.500" h={5} w={5} />}
        >
          Sair
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

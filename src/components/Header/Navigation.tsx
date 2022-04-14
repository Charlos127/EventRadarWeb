import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Flex, Text } from '@chakra-ui/react';

const routes = [
  {
    name: 'Eventos',
    path: '/home',
  },
  {
    name: 'Meus eventos',
    path: '/myevents',
  },
];

export function Navigation({
  isWideScreen = false,
}: {
  isWideScreen?: boolean;
}) {
  const location = useLocation();

  return (
    <Flex
      mt={isWideScreen ? '10' : ''}
      direction={isWideScreen ? 'column' : 'row'}
    >
      {routes.map(route => (
        <NavigationItem
          isWideScreen={isWideScreen}
          isActive={location.pathname.includes(route.path)}
          path={route.path}
          name={route.name}
          key={route.path}
        />
      ))}
    </Flex>
  );
}

type NavigationItemProps = {
  path: string;
  name: string;
  isWideScreen: boolean;
  isActive: boolean;
};

function NavigationItem({
  path,
  name,
  isWideScreen,
  isActive,
}: NavigationItemProps) {
  return (
    <Flex as={Link} to={path} px="4" py={isWideScreen ? '4' : '0'}>
      {isActive ? (
        <Text
          color="primary.500"
          fontWeight="extrabold"
          fontSize="md"
          borderBottomColor="primary.500"
          borderBottomWidth="3px"
        >
          {name}
        </Text>
      ) : (
        <Text fontWeight="bold" fontSize="md">
          {name}
        </Text>
      )}
    </Flex>
  );
}

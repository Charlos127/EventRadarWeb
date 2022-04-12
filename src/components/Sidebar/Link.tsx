import React from 'react';
import { IconType } from 'react-icons';

import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Icon,
  IconProps,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

import { useSidebarDrawer } from '~/hooks/sidebar';
import history from '~/services/history';

export interface LinkProps extends ChakraLinkProps {
  shouldMatchExactHref?: boolean;
  href: string;
  icon: IconProps | IconType | any | undefined;
  children: string;
}

export function Link({
  shouldMatchExactHref = false,
  href,
  icon,
  children,
  ...rest
}: LinkProps) {
  const { isSidebarClosed } = useSidebarDrawer();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  let isActive = false;

  const { pathname } = history.location;

  if (shouldMatchExactHref && pathname === href) {
    isActive = true;
  }

  if (!shouldMatchExactHref && pathname.startsWith(String(href))) {
    isActive = true;
  }

  return (
    <ChakraLink
      href={href}
      display="flex"
      alignItems="center"
      color={isActive ? 'secondary.500' : 'gray.200'}
      {...rest}
    >
      <Icon as={icon} fontSize="20" />
      <Text
        ml="4"
        fontWeight="medium"
        opacity={
          isDrawerSidebar || (!isDrawerSidebar && !isSidebarClosed) ? 1 : 0
        }
        overflow="hidden"
        textOverflow="ellipsis"
        display="-webkit-box"
        css={{
          WebkitLineClamp: 1,
          WebkitBoxOrient: 'vertical',
        }}
        mt="2px"
        transition="all 0.2s ease"
      >
        {children}
      </Text>
    </ChakraLink>
  );
}

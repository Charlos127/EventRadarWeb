import React from 'react';

import { Flex, OrderedList, ListItem } from '@chakra-ui/react';

export function Home() {
  return (
    <Flex direction="column" justify="center" align="center" w="100%" h="100%">
      Esse é um template da HDN contendo:
      <OrderedList>
        <ListItem>React com Javascript</ListItem>
        <ListItem>Context API</ListItem>
        <ListItem>ChakraUI</ListItem>
        <ListItem>Eslint + Prettier + Editor config</ListItem>
        <ListItem>Husky + Lint staged + Commitlint</ListItem>
      </OrderedList>
    </Flex>
  );
}

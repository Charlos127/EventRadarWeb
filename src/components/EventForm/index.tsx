import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { Flex, Icon } from '@chakra-ui/react';

import { Input } from '../Form/Input';

interface EventFormProps {
  closeModal: () => void;
}

export function EventForm({ closeModal }: EventFormProps) {
  return (
    <Flex
      zIndex="999"
      position="absolute"
      background="white"
      justifySelf="center"
      alignSelf="center"
      borderRadius="10"
      p="10"
      boxShadow="xl"
    >
      <Flex w="100%" h="100%" flexDir="column" justify="left">
        <Flex flexDir="row" justify="space-between">
          <Flex fontWeight="bold" fontSize="24">
            Novo Evento
          </Flex>

          <Icon as={AiOutlineClose} onClick={closeModal} cursor="pointer" />
        </Flex>

        <Flex mt="5" flexDir="row" gridGap="8">
          <Flex>campo</Flex>
          <Flex>campo</Flex>
          <Flex>campo</Flex>
          <Flex>campo</Flex>
          <Flex>campo</Flex>
        </Flex>
        <Flex mt="5" flexDir="row" gridGap="8">
          <Flex>campo</Flex>
          <Flex>campo</Flex>
          <Flex>campo</Flex>
          <Flex>campo</Flex>
          <Flex>campo</Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

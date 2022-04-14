import React from 'react';

import { Flex, Text } from '@chakra-ui/react';

export interface EventCardProps {
  title: string;
  bannerImage: string;
  state: string;
  city: string;
  address: string;
  startDate: number;
  endDate?: number;
}

export function EventCard({
  title,
  bannerImage,
  state,
  city,
  address,
  startDate,
  endDate,
}: EventCardProps) {
  const formatData = (data: number) => {
    const fullData = new Date(data);

    const monthName = fullData.toLocaleString('pt-BR', { month: 'short' });

    const formattedData = `${fullData.getDate()}, ${monthName.toUpperCase()} - ${fullData.getHours()}:${fullData.getMinutes()}`;

    return formattedData;
  };
  return (
    <Flex
      backgroundImage={bannerImage}
      backgroundSize="cover"
      backgroundPosition="center"
      flexDir="column"
      borderRadius="10"
      boxShadow="xl"
      transition="border 0.2s"
      w="sm"
      h="sm"
      _hover={{
        border: '1px',
        borderColor: 'gray.400',
        cursor: 'pointer',
      }}
    >
      <Flex
        borderRadius="10"
        flexDir="column"
        h="100%"
        mt="50%"
        background="white"
        w="100%"
        p="5"
      >
        <Flex w="100%">
          <Text color="#FF0000">{formatData(startDate)}</Text>
        </Flex>
        <Flex fontWeight="bold" fontSize="18" mt="2">
          {title}
        </Flex>
        <Flex mt="2">
          {address} - {state}, {city}
        </Flex>
      </Flex>
    </Flex>
  );
}

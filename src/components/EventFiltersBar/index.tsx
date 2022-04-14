import React, { useState, useEffect } from 'react';
import { FaSearch, FaCalendar } from 'react-icons/fa';

import { Flex, Icon } from '@chakra-ui/react';

import {
  getAllStates,
  getAllCitiesOfState,
} from '~/services/ibgeLocales-client/';

import { Button } from '../Form/Button';
import { Input } from '../Form/Input';
import { Select } from '../Form/Select';

interface EventFiltersBarProps {
  eventTypes: string;
  stateFilter?: string;
  setStateFilter?: any;
  cityFilter?: string;
  setCityFilter?: any;
  searchFilter: string;
  setSearchFilter: any;
  startDate: string;
  setStartDate: any;
  endDate: string;
  setEndDate: any;
  eventOpen?: boolean | undefined;
  setEventOpen?: any;
  onCreateEvent?: () => void;
}

export function EventFiltersBar({
  eventTypes,
  stateFilter,
  setStateFilter,
  cityFilter,
  setCityFilter,
  searchFilter,
  setSearchFilter,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  eventOpen,
  setEventOpen,
  onCreateEvent,
}: EventFiltersBarProps) {
  const [states, setStates] = useState<{ id: string; name: string }[]>([]);
  const [cities, setCities] = useState<{ id: string; name: string }[]>([]);

  const setupStates = async () => {
    const allStates = await getAllStates();

    if (allStates.isSucceeded) {
      const formatedStates = allStates.body?.map(state => {
        return { id: state.sigla, name: state.nome };
      });

      if (formatedStates) setStates(formatedStates);
    }
  };

  const setupCities = async (state: string) => {
    const allCities = await getAllCitiesOfState(state);

    if (allCities.isSucceeded) {
      const formatedCities = allCities.body?.map(city => {
        return { id: city.nome, name: city.nome };
      });

      if (formatedCities) setCities(formatedCities);
    }
  };

  useEffect(() => {
    setupStates();
    if (stateFilter) setupCities(stateFilter);
  }, [stateFilter, cityFilter]);

  return (
    <Flex
      bg="white"
      w="100%"
      borderRadius="10"
      boxShadow="xl"
      padding="5"
      flexDir="row"
      justify="space-between"
    >
      <Flex flexDir="row" gridGap="2">
        <Flex w="48">
          <Input
            placeholder="Pesquisar"
            name="search"
            type="text"
            value={searchFilter}
            onChange={e => setSearchFilter(e.target.value)}
            icon={<Icon as={FaSearch} />}
          />
        </Flex>
        {eventTypes === 'myEvents' && (
          <Flex w="48">
            <Select
              name="open"
              placeholder="Estado do evento"
              data={[
                {
                  id: 'true',
                  name: 'Aberto',
                },
                { id: 'false', name: 'Concluido' },
              ]}
              value={String(eventOpen)}
              onChange={e => {
                if (e.target.value === 'true') {
                  setEventOpen(true);
                  return;
                }
                if (e.target.value === 'false') {
                  setEventOpen(false);
                  return;
                }

                setEventOpen(undefined);
              }}
            />
          </Flex>
        )}

        {eventTypes === 'allEvents' && (
          <>
            <Flex w="48">
              <Select
                name="state"
                placeholder="Estado"
                data={states || undefined}
                value={stateFilter}
                onChange={e => {
                  setStateFilter(e.target.value);
                  setupCities(e.target.value);
                }}
              />
            </Flex>
            <Flex w="48">
              <Select
                w="100%"
                placeholder="Cidade"
                data={cities || undefined}
                isDisabled={!(cities.length > 0)}
                value={cityFilter}
                name="city"
                onChange={e => setCityFilter(e.target.value)}
              />
            </Flex>
          </>
        )}

        <Flex w="40">
          <Input
            placeholder="De"
            name="startDate"
            type="text"
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
            icon={<Icon as={FaCalendar} />}
          />
        </Flex>

        <Flex w="40">
          <Input
            placeholder="Até"
            name="endDate"
            type="text"
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
            icon={<Icon as={FaCalendar} />}
          />
        </Flex>
      </Flex>

      {eventTypes === 'myEvents' && (
        <Flex justify="center" align="center" h="100%">
          <Button
            w="100%"
            minH="10"
            textTransform="uppercase"
            onClick={onCreateEvent}
          >
            Criar evento
          </Button>
        </Flex>
      )}
    </Flex>
  );
}

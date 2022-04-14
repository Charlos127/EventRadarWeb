import React, { useState, useEffect } from 'react';

import { Flex } from '@chakra-ui/react';

import { EventCard } from '~/components/EventCard';
import { EventFiltersBar } from '~/components/EventFiltersBar';
import { useAuth } from '~/hooks/auth';
import { useEvents, Events } from '~/hooks/events';

export function Home() {
  const { user } = useAuth();
  const { getEvents } = useEvents();
  const [searchFilter, setSearchFilter] = useState('');
  const [stateFilter, setStateFilter] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [events, setEvents] = useState<Events[]>();

  const setupDates = () => {
    const today = new Date();
    const firstDay = new Date(today.setDate(today.getDate() - today.getDay()));
    const lastDay = new Date(
      today.setDate(today.getDate() - today.getDay() + 6),
    );

    const firstDayString = `${firstDay.getDate()}/${
      firstDay.getMonth() + 1
    }/${firstDay.getFullYear()}`;

    const lastDayString = `${lastDay.getDate()}/${
      lastDay.getMonth() + 1
    }/${lastDay.getFullYear()}`;

    setStartDate(firstDayString);
    setEndDate(lastDayString);
  };

  const getFilteredEvents = async () => {
    const res = await getEvents({
      search: searchFilter,
      state: stateFilter,
      city: cityFilter,
      startDate: new Date(startDate).getDate(),
      endDate: new Date(endDate).getDate(),
    });

    if (res) {
      setEvents(res);
    }
  };

  useEffect(() => {
    setStateFilter(user.state);
    setCityFilter(user.city);
    setupDates();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      getFilteredEvents();
    }, 1000);
    return () => clearTimeout(timer);
  }, [searchFilter, stateFilter, cityFilter, startDate, endDate]);

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      w="100%"
      h="100%"
      mt="20px"
    >
      <EventFiltersBar
        eventTypes="allEvents"
        stateFilter={stateFilter}
        setStateFilter={setStateFilter}
        cityFilter={cityFilter}
        setCityFilter={setCityFilter}
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />

      <Flex mt="10" w="100%" gridGap="10" justify="left" wrap="wrap">
        {events?.map(event => (
          <EventCard
            title={event.title}
            bannerImage={event.bannerImage}
            state={event.state}
            city={event.city}
            address={event.address}
            startDate={event.startDate}
          />
        ))}
      </Flex>
    </Flex>
  );
}

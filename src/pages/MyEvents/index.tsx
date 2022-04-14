import React, { useState, useEffect } from 'react';

import { Flex } from '@chakra-ui/react';

import { EventCard } from '~/components/EventCard';
import { EventFiltersBar } from '~/components/EventFiltersBar';
import { EventForm } from '~/components/EventForm';
import { useEvents, Events } from '~/hooks/events';

export function MyEvents() {
  const { getMyEvents } = useEvents();
  const [searchFilter, setSearchFilter] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [eventOpen, setEventOpen] = useState();
  const [events, setEvents] = useState<Events[]>();
  const [openEventForm, setOpenEventForm] = useState(false);

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
    const res = await getMyEvents({
      search: searchFilter,
      open: eventOpen,
      startDate: new Date(startDate).getDate(),
      endDate: new Date(endDate).getDate(),
    });

    if (res) {
      setEvents(res);
    }
  };

  const onCreateEvent = () => {
    setOpenEventForm(true);
  };

  useEffect(() => {
    setupDates();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      getFilteredEvents();
    }, 1000);
    return () => clearTimeout(timer);
  }, [searchFilter, eventOpen, startDate, endDate]);

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      w="100%"
      h="100%"
      mt="20px"
    >
      {openEventForm && (
        <EventForm closeModal={() => setOpenEventForm(false)} />
      )}
      <EventFiltersBar
        eventTypes="myEvents"
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        eventOpen={eventOpen}
        setEventOpen={setEventOpen}
        onCreateEvent={onCreateEvent}
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

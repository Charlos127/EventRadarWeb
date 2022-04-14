import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { httpClient } from '~/services/api-client';

interface EventsContextData {
  isLoading: boolean;
  getEvents(filters: EventsFilters): Promise<Events[]>;
  getMyEvents(filters: MyEventsFilters): Promise<Events[]>;
}

interface EventsProvierProps {
  children: ReactNode;
}

interface EventsFilters {
  search?: string;
  state?: string;
  city?: string;
  startDate?: number;
  endDate?: number;
}

interface MyEventsFilters {
  search?: string;
  open?: boolean;
  startDate?: number;
  endDate?: number;
}

export interface Events {
  title: string;
  description: string;
  bannerImage: string;
  state: string;
  city: string;
  address: string;
  startDate: number;
  endDate?: number;
  tickets: number;
  takenTickets: number;
}

const EventsContext = createContext<EventsContextData>({} as EventsContextData);

const EventsProvider = ({ children }: EventsProvierProps) => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const getEvents = useCallback(
    async ({
      search = undefined,
      state = undefined,
      city = undefined,
      startDate = undefined,
      endDate = undefined,
    }: EventsFilters) => {
      return [
        {
          title: 'Evento 1',
          description: 'evento maneiro',
          bannerImage:
            'https://images.unsplash.com/photo-1510511233900-1982d92bd835?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          state: 'SP',
          city: 'Campinas',
          address: 'Rua das flores 201',
          startDate: 1649956392961,
          tickets: 30,
          takenTickets: 15,
        },
        {
          title: 'Evento 2',
          description: 'evento massa',
          bannerImage:
            'https://images.unsplash.com/photo-1510511233900-1982d92bd835?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          state: 'SP',
          city: 'Campinas',
          address: 'Rua das margaridas 201',
          startDate: 1649956392961,
          tickets: 100,
          takenTickets: 15,
        },
      ];
    },
    [],
  );

  const getMyEvents = useCallback(
    async ({
      search = undefined,
      open = undefined,
      startDate = undefined,
      endDate = undefined,
    }: MyEventsFilters) => {
      return [
        {
          title: 'Evento 1',
          description: 'evento maneiro',
          bannerImage:
            'https://images.unsplash.com/photo-1510511233900-1982d92bd835?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          state: 'SP',
          city: 'Campinas',
          address: 'Rua das flores 201',
          startDate: 1649956392961,
          tickets: 30,
          takenTickets: 15,
        },
        {
          title: 'Evento 2',
          description: 'evento massa',
          bannerImage:
            'https://images.unsplash.com/photo-1510511233900-1982d92bd835?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          state: 'SP',
          city: 'Campinas',
          address: 'Rua das margaridas 201',
          startDate: 1649956392961,
          tickets: 100,
          takenTickets: 15,
        },
      ];
    },
    [],
  );

  return (
    <EventsContext.Provider
      value={{
        isLoading,
        getEvents,
        getMyEvents,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};

function useEvents() {
  const context = useContext(EventsContext);

  if (!context) {
    throw new Error('useEvents must be used within an EventsProvider.');
  }

  return context;
}

export { useEvents, EventsProvider };

/* eslint-disable no-param-reassign */
import { toast } from 'react-toastify';

import axios, { AxiosResponse } from 'axios';

import {
  getCitiesOfState,
  getStatesResponse,
  HttpResponse,
  HttpStatusCode,
} from './types';

const api = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/',
});

export const getAllStates = async (): Promise<
  HttpResponse<getStatesResponse[]>
> => {
  let statesResponse: AxiosResponse;
  try {
    statesResponse = await api.get('/estados?orderBy=nome');
  } catch (error: any) {
    statesResponse = error.response || { status: 500, data: null };
    toast.error(
      error?.response?.data?.message || 'Ops, tente novamente mais tarde',
    );
  }
  return {
    statusCode: statesResponse.status,
    body: statesResponse.data,
    isSucceeded: checkIfIsSucceeded(statesResponse?.status),
  };
};

export const getAllCitiesOfState = async (
  state: string,
): Promise<HttpResponse<getCitiesOfState[]>> => {
  let citiesResponse: AxiosResponse;
  try {
    citiesResponse = await api.get(`/estados/${state}/distritos?orderBy=nome`);
  } catch (error: any) {
    citiesResponse = error.response || { status: 500, data: null };
    toast.error(
      error?.response?.data?.message || 'Ops, tente novamente mais tarde',
    );
  }
  return {
    statusCode: citiesResponse.status,
    body: citiesResponse.data,
    isSucceeded: checkIfIsSucceeded(citiesResponse?.status),
  };
};

const checkIfIsSucceeded = (code: number): boolean =>
  code === HttpStatusCode.ok ||
  code === HttpStatusCode.created ||
  code === HttpStatusCode.noContent;

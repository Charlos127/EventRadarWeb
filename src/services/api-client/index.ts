/* eslint-disable no-param-reassign */
import { toast } from 'react-toastify';

import axios, { AxiosResponse } from 'axios';

import localStorage from '~/services/localStorage';

import { HttpRequest, HttpResponse, HttpStatusCode } from './types';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(async config => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `${token}`;
  }

  return config;
});

export const httpClient = async <T = any>({
  url,
  method,
  params,
  body,
  headers,
}: HttpRequest): Promise<HttpResponse<T>> => {
  let axiosResponse: AxiosResponse;
  try {
    axiosResponse = await api.request({
      url,
      method,
      data: body,
      headers,
      params,
    });
  } catch (error: any) {
    axiosResponse = error.response || { status: 500, data: null };
    toast.error(
      error?.response?.data?.message || 'Ops, tente novamente mais tarde.',
    );
  }
  return {
    statusCode: axiosResponse.status,
    body: axiosResponse.data,
    isSucceeded: checkIfIsSucceeded(axiosResponse?.status),
  };
};

const checkIfIsSucceeded = (code: number): boolean =>
  code === HttpStatusCode.ok ||
  code === HttpStatusCode.created ||
  code === HttpStatusCode.noContent;

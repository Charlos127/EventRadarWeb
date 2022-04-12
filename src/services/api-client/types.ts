export type HttpRequest = {
  url: string;
  method: HttpMethod;
  params?: any;
  headers?: any;
  body?: any;
};

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode;
  body?: T;
  isSucceeded: boolean;
};

export enum HttpStatusCode {
  ok = 200,
  created = 201,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500,
}

export type HttpMethod = 'post' | 'get' | 'put' | 'delete';

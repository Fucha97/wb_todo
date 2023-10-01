import { IResponse, PureRestRequest } from '@mihanizm56/fetch-api';
import { makeRequestConfig } from './make-request-config';

export const getTodosRequest = (): Promise<IResponse> =>
  new PureRestRequest().getRequest(makeRequestConfig());

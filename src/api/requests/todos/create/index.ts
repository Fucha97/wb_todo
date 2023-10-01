import { IResponse, PureRestRequest } from '@mihanizm56/fetch-api';
import { CreateTodoParamsType, makeRequestConfig } from './make-request-config';

export const createTodoRequest = (
  params: CreateTodoParamsType,
): Promise<IResponse> =>
  new PureRestRequest().postRequest(makeRequestConfig(params));

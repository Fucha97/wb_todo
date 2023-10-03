import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import { UpdateTodoParamsType, makeRequestConfig } from './make-request-config';

export const updateTodoRequest = (
  params: UpdateTodoParamsType,
): Promise<IResponse> =>
  new RestRequest().putRequest(makeRequestConfig(params));

import { IResponse, PureRestRequest } from '@mihanizm56/fetch-api';
import { UpdateTodoParamsType, makeRequestConfig } from './make-request-config';

export const updateTodoRequest = (
  params: UpdateTodoParamsType,
): Promise<IResponse> =>
  new PureRestRequest().putRequest(makeRequestConfig(params));

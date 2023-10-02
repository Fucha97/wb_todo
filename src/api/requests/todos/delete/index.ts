import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import { DeleteTaskParamsType, makeRequestConfig } from './make-request-config';

export const deleteTodoRequest = (
  params: DeleteTaskParamsType,
): Promise<IResponse> =>
  new RestRequest().deleteRequest(makeRequestConfig(params));

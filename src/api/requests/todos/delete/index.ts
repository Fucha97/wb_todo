import { IResponse, PureRestRequest } from '@mihanizm56/fetch-api';
import { DeleteTaskParamsType, makeRequestConfig } from './make-request-config';

export const deleteTodoRequest = (
  params: DeleteTaskParamsType,
): Promise<IResponse> =>
  new PureRestRequest().deleteRequest(makeRequestConfig(params));

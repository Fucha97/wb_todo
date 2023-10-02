import { IRequestParams } from '@mihanizm56/fetch-api';
import { getTodosEndpoint } from '@/api/endpoints';
import { TodoType } from '@/pages/todos/_redux/todo-module';
import { responseSchema } from './response-schema';

export type DeleteTaskParamsType = {
  id: TodoType['id'];
};

export const makeRequestConfig = ({
  id,
}: DeleteTaskParamsType): IRequestParams => ({
  endpoint: getTodosEndpoint(),
  responseSchema,
  body: {
    id,
  },
});

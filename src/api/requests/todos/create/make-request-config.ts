import { IRequestParams } from '@mihanizm56/fetch-api';
import { TodoType } from '@/pages/todos/_redux/todo-module';
import { getTodosEndpoint } from '@/api/endpoints';
import { responseSchema } from './response-schema';

export type CreateTodoParamsType = {
  title: TodoType['title'];
  description?: TodoType['description'];
};

export const makeRequestConfig = ({
  title,
  description,
}: CreateTodoParamsType): IRequestParams => ({
  endpoint: getTodosEndpoint(),
  responseSchema,
  body: {
    title,
    description,
  },
});

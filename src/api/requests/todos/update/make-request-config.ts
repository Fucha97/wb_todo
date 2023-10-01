import { IRequestParams } from '@mihanizm56/fetch-api';
import { getTodosEndpoint } from '@/api/endpoints';
import { TodoType } from '@/pages/todos/_redux/todo-module';

export type UpdateTodoParamsType = {
  todo: TodoType;
};

export const makeRequestConfig = ({
  todo,
}: UpdateTodoParamsType): IRequestParams => ({
  endpoint: getTodosEndpoint(),
  body: {
    todo,
  },
});

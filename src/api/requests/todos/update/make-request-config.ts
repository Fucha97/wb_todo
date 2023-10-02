import { IRequestParams } from '@mihanizm56/fetch-api';
import { getTodosEndpoint } from '@/api/endpoints';
import { TodoType } from '@/pages/todos/_redux/todo-module';

export type UpdateTodoParamsType = {
  updatedTodo: TodoType;
};

export const makeRequestConfig = ({
  updatedTodo,
}: UpdateTodoParamsType): IRequestParams => ({
  endpoint: getTodosEndpoint(),
  body: {
    updatedTodo,
  },
});

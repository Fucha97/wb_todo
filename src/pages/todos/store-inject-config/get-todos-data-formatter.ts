import { IResponse } from '@mihanizm56/fetch-api';
import { TodoType } from '../_redux/todo-module';

export const getTodosDataFormatter = ({
  data,
}: IResponse<{ todos: Array<TodoType> }>): Array<TodoType> => data.todos;

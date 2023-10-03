import { TODOS_REDUCER_NAME } from '@/pages/todos/_redux/todo-module/_constants';

export type TodoType = {
  id: string;
  title: string;
  isComplete: boolean;
  createdAt: string;
  description: string;
};
export type TodoStateType = {
  isLoading: boolean;
  todos: Array<TodoType>;
  updateTodoId: string | null;
};

export type TodoStorageStateType = {
  [TODOS_REDUCER_NAME]: TodoStateType;
};

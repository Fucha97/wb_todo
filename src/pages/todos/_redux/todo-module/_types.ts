import { TODOS_REDUCER_NAME } from '@/pages/todos/_redux/todo-module/_constants';

export enum ETodosActions {
  START_LOADING = 'START_LOADING',
  STOP_LOADING = 'STOP_LOADING',
  GET_TODOS = 'GET_TODOS',
  SET_TODOS = 'SET_TODOS',
  CREATE_TODO_SAGA = 'CREATE_TODO_SAGA',
  DELETE_TODO_SAGA = 'DELETE_TODO_SAGA',
  UPDATE_TODO_SAGA = 'UPDATE_TODO_SAGA',
  SET_TODOS_LOADING = 'SET_TODOS_LOADING',
  SET_UPDATE_TODO_ID = 'SET_UPDATE_TODO_ID',
  SET_DELETE_TODO_ID = 'SET_DELETE_TODO_ID',
}

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

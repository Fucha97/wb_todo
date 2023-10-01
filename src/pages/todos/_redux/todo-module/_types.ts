import { TODOS_REDUCER_NAME } from '@/pages/todos/_redux/todo-module/_constants';

export enum ETodosActions {
  START_LOADING = 'START_LOADING',
  STOP_LOADING = 'STOP_LOADING',
  GET_TODOS = 'GET_TODOS',
  SET_TODOS = 'SET_TODOS',
  CREATE_TODO = 'CREATE_TODO',
  UPDATE_TODO = 'UPDATE_TODO',
  DELETE_TODO = 'DELETE_TODO',
  SET_TODOS_LOADING = 'SET_TODOS_LOADING',
  SET_UPDATE_TODO_ID = 'SET_UPDATE_TODO_ID',
  SET_DELETE_TODO_ID = 'SET_DELETE_TODO_ID',
  SET_NEW_TODO_TITLE = 'SET_NEW_TODO_TITLE',
}

export type TodoType = {
  id: string;
  title: string;
  isComplete: boolean;
};
export type TodoStateType = {
  isLoading: boolean;
  todos: Array<TodoType>;
  newTodoTitle: string;
  updateTodoId: string | null;
};

export type TodoStorageStateType = {
  [TODOS_REDUCER_NAME]: TodoStateType;
};

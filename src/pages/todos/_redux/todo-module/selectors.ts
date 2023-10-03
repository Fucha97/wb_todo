import { createSelector } from 'reselect';
import {
  TodoStateType,
  TodoStorageStateType,
} from '@/pages/todos/_redux/todo-module/_types';
import { TODOS_REDUCER_NAME } from '@/pages/todos/_redux/todo-module/_constants';
import { initialTodoSlice } from '@/pages/todos/_redux/todo-module/reducer';

export const selectTodoSlice = (store: TodoStorageStateType): TodoStateType =>
  store[TODOS_REDUCER_NAME] || initialTodoSlice;

export const selectTodosLoading = createSelector(
  [selectTodoSlice],
  ({ isLoading }) => isLoading,
);

export const selectTodos = createSelector(
  [selectTodoSlice],
  ({ todos }) => todos,
);


export const selectUpdateTodoModalOpen = createSelector(
  [selectTodoSlice],
  ({ updateTodoId }) => Boolean(updateTodoId),
);

export const selectUpdateTodo = createSelector(
  [selectTodoSlice],
  ({ todos, updateTodoId }) => todos.find((todo) => todo.id === updateTodoId),
);


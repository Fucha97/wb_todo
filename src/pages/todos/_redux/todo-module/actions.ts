import { Action, BaseAction } from '@mihanizm56/redux-core-modules';
import {
  ETodosActions,
  TodoType,
  TodoStateType,
} from '@/pages/todos/_redux/todo-module/_types';

export const startLoadingAction: BaseAction = () => ({
  type: ETodosActions.START_LOADING,
});

export const stopLoadingAction: BaseAction = () => ({
  type: ETodosActions.STOP_LOADING,
});

export const getTodosAction: BaseAction = () => ({
  type: ETodosActions.GET_TODOS,
});

export const setTodosAction: Action<TodoStateType['todos']> = (payload) => ({
  type: ETodosActions.SET_TODOS,
  payload,
});

export const createTodoActionSaga: Action<{
  title: TodoType['title'];
  description?: TodoType['description'];
}> = (payload) => ({
  type: ETodosActions.CREATE_TODO_SAGA,
  payload,
});

export const updateTodoActionSaga: Action<TodoType> = (payload) => ({
  type: ETodosActions.UPDATE_TODO_SAGA,
  payload,
});

export const deleteTodoActionSaga: Action<TodoType['id']> = (payload) => ({
  type: ETodosActions.DELETE_TODO_SAGA,
  payload,
});

export const setUpdateTodoIdAction: Action<TodoType['id']> = (payload) => ({
  type: ETodosActions.SET_UPDATE_TODO_ID,
  payload,
});

export const setTodosLoadingAction: Action<TodoStateType['isLoading']> = (
  payload,
) => ({
  type: ETodosActions.SET_TODOS_LOADING,
  payload,
});

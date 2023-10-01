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
export const createTodoAction: Action<TodoType['title']> = (payload) => ({
  type: ETodosActions.CREATE_TODO,
  payload,
});
export const updateTodoAction: Action<TodoType> = (payload) => ({
  type: ETodosActions.UPDATE_TODO,
  payload,
});
export const deleteTodoAction: Action<TodoType['id']> = (payload) => ({
  type: ETodosActions.DELETE_TODO,
  payload,
});

export const setUpdateTodoIdAction: Action<TodoType['id']> = (payload) => ({
  type: ETodosActions.SET_UPDATE_TODO_ID,
  payload,
});

export const setNewTodoTitleAction: Action<TodoStateType['newTodoTitle']> = (
  payload,
) => ({
  type: ETodosActions.SET_NEW_TODO_TITLE,
  payload,
});

export const setTodosLoadingAction: Action<TodoStateType['isLoading']> = (
  payload,
) => ({
  type: ETodosActions.SET_TODOS_LOADING,
  payload,
});

export const TodosActions = {
  getTodosAction,
  setTodosAction,
  createTodoAction,
  updateTodoAction,
  deleteTodoAction,
  setTodosLoadingAction,
  setNewTodoTitleAction,
  setUpdateTodoIdAction,
};

export type TTodosActionProps = Partial<typeof TodosActions>;

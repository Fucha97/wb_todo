import { Reducer } from 'redux';
import { TodoStateType } from '@/pages/todos/_redux/todo-module/_types';
import {
  setTodosAction,
  setTodosLoadingAction,
  setUpdateTodoIdAction,
} from './actions';

export const initialTodoSlice: TodoStateType = {
  isLoading: false,
  todos: [],
  updateTodoId: null,
};

export const todoReducer: Reducer<TodoStateType> = (
  state: TodoStateType = initialTodoSlice,
  { type, payload },
) => {
  switch (type) {
    case setTodosLoadingAction.type:
      return {
        ...state,
        isLoading: payload,
      };
    case setTodosAction.type:
      return {
        ...state,
        todos: payload,
      };
    case setUpdateTodoIdAction.type:
      return {
        ...state,
        updateTodoId: payload,
      };
    default:
      return state;
  }
};

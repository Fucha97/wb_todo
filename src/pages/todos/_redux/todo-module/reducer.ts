import { Reducer } from 'redux';
import {
  ETodosActions,
  TodoStateType,
} from '@/pages/todos/_redux/todo-module/_types';

export const initialTodoSlice: TodoStateType = {
  isLoading: false,
  todos: [],
  newTodoTitle: '',
  updateTodoId: null,
};

export const todoReducer: Reducer<TodoStateType> = (
  state: TodoStateType = initialTodoSlice,
  { type, payload },
) => {
  switch (type) {
    case ETodosActions.SET_TODOS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case ETodosActions.SET_TODOS:
      return {
        ...state,
        todos: payload,
      };
    case ETodosActions.SET_NEW_TODO_TITLE:
      return {
        ...state,
        newTodoTitle: payload,
      };
    case ETodosActions.SET_UPDATE_TODO_ID:
      return {
        ...state,
        updateTodoId: payload,
      };
    default:
      return state;
  }
};

import { Reducer } from 'redux';
import {
  ETodosActions,
  TodoStateType,
} from '@/pages/todos/_redux/todo-module/_types';

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
    case ETodosActions.CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case ETodosActions.DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todoItem) => todoItem.id !== payload)],
      };
    case ETodosActions.UPDATE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map((todoItem) => {
            if (todoItem.id === payload.id) {
              return payload;
            }

            return todoItem;
          }),
        ],
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

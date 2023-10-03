import { call, put, select } from 'redux-saga/effects';
import { IResponse } from '@mihanizm56/fetch-api';
import {
  TodoType,
  setTodosLoadingAction,
  setTodosAction,
  selectTodoSlice,
} from '@/pages/todos/_redux/todo-module';
import { updateTodoRequest } from '@/api/requests/todos/update';

type IParams = {
  updatedTodo: TodoType;
};

export function* updateTodoWorkerSaga({ updatedTodo }: IParams) {
  try {
    const currentState = yield select(selectTodoSlice);

    yield put(setTodosLoadingAction(true));

    const { error, data, errorText }: IResponse<{ updatedTodo: TodoType }> =
      yield call(updateTodoRequest, {
        updatedTodo,
      });

    if (error) throw new Error(errorText);

    const currentTodos = [
      ...currentState.todos.map((todoItem) => {
        if (todoItem.id === data.updatedTodo.id) {
          return data.updatedTodo;
        }

        return todoItem;
      }),
    ];
    yield put(setTodosAction(currentTodos));
  } catch (error) {
    console.error(error);
  } finally {
    yield put(setTodosLoadingAction(false));
  }
}

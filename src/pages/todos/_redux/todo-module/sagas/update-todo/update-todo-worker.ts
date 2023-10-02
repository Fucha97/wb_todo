import { call, put } from 'redux-saga/effects';
import { IResponse } from '@mihanizm56/fetch-api';
import {
  TodoType,
  setTodosAction,
  setTodosLoadingAction,
  updateTodoAction,
} from '@/pages/todos/_redux/todo-module';
import { updateTodoRequest } from '@/api/requests/todos/update';
import { getTodosRequest } from '@/api/requests/todos/get';

type IParams = {
  updatedTodo: TodoType;
};

export function* updateTodoWorkerSaga({ updatedTodo }: IParams) {
  try {
    yield put(setTodosLoadingAction(true));

    const { error, data, errorText }: IResponse<{updatedTodo : TodoType}> = yield call(
      updateTodoRequest,
      {
        updatedTodo,
      },
    );

    if (error) throw new Error(errorText);

    yield put(updateTodoAction(data.updatedTodo));
  } catch (error) {
    console.error(error);
  } finally {
    yield put(setTodosLoadingAction(false));
  }
}

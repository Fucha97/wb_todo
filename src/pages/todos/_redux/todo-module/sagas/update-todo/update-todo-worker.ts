import { call, put } from 'redux-saga/effects';
import { IResponse } from '@mihanizm56/fetch-api';
import {
  TodoType,
  setTodosAction,
  setTodosLoadingAction,
} from '@/pages/todos/_redux/todo-module';
import { updateTodoRequest } from '@/api/requests/todos/update';
import { getTodosRequest } from '@/api/requests/todos/get';

type IParams = {
  todo: TodoType;
};

export function* updateTodoWorkerSaga({ todo }: IParams) {
  try {
    yield put(setTodosLoadingAction(true));

    const { error, errorText }: IResponse<never> = yield call(
      updateTodoRequest,
      {
        todo,
      },
    );

    if (error) throw new Error(errorText);

    const {
      error: getTodosError,
      data,
      errorText: getTodosErrorText,
    }: IResponse<{ todos: Array<TodoType> }> = yield call(getTodosRequest);
    if (getTodosError) {
      throw new Error(getTodosErrorText);
    }

    yield put(setTodosAction(data.todos));
  } catch (error) {
    console.error(error);
  } finally {
    yield put(setTodosLoadingAction(false));
  }
}

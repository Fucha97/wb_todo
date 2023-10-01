import { call, put } from 'redux-saga/effects';
import { IResponse } from '@mihanizm56/fetch-api';
import {
  TodoType,
  setNewTodoTitleAction,
  setTodosAction,
  setTodosLoadingAction,
} from '@/pages/todos/_redux/todo-module';
import { createTodoRequest } from '@/api/requests/todos/create';
import { getTodosRequest } from '@/api/requests/todos/get';

type ParamsType = {
  title: TodoType['title'];
};

export function* createTodoWorkerSaga({ title }: ParamsType) {
  try {
    yield put(setTodosLoadingAction(true));

    const { error, errorText }: IResponse<never> = yield call(
      createTodoRequest,
      {
        title,
      },
    );

    if (error) {
      throw new Error(errorText);
    }

    const {
      error: getTodosError,
      data,
      errorText: getTodosErrorText,
    }: IResponse<{ todos: Array<TodoType> }> = yield call(getTodosRequest);
    if (getTodosError) {
      throw new Error(getTodosErrorText);
    }

    yield put(setTodosAction(data.todos));
    yield put(setNewTodoTitleAction(''));
  } catch (error) {
    console.error(error);
  } finally {
    yield put(setTodosLoadingAction(false));
  }
}

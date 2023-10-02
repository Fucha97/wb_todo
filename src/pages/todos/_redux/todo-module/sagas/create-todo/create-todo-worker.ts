import { call, put } from 'redux-saga/effects';
import { IResponse } from '@mihanizm56/fetch-api';
import {
  TodoType,
  setTodosLoadingAction,
  createTodoAction,
} from '@/pages/todos/_redux/todo-module';
import { createTodoRequest } from '@/api/requests/todos/create';
import { getTodosRequest } from '@/api/requests/todos/get';

type ParamsType = {
  title: TodoType['title'];
  description?: TodoType['description']
};

export function* createTodoWorkerSaga(newTodoParams: ParamsType) {
  try {
    yield put(setTodosLoadingAction(true));

    const { error, data, errorText }: IResponse<{newTodo: TodoType}> = yield call(
      createTodoRequest,
      newTodoParams,
    );


    if (error) {
      throw new Error(errorText);
    }
    
    yield put(createTodoAction(data.newTodo));
  } catch (error) {
    console.error(error);
  } finally {
    yield put(setTodosLoadingAction(false));
  }
}

import { call, put, select } from 'redux-saga/effects';
import { IResponse } from '@mihanizm56/fetch-api';
import {
  TodoType,
  setTodosLoadingAction,
  setTodosAction,
  selectTodoSlice,
} from '@/pages/todos/_redux/todo-module';
import { createTodoRequest } from '@/api/requests/todos/create';

type ParamsType = {
  title: TodoType['title'];
  description?: TodoType['description'];
};

export function* createTodoWorkerSaga(newTodoParams: ParamsType) {
  try {
    const currentState = yield select(selectTodoSlice);

    yield put(setTodosLoadingAction(true));

    const { error, data, errorText }: IResponse<{ newTodo: TodoType }> =
      yield call(createTodoRequest, newTodoParams);

    if (error) {
      throw new Error(errorText);
    }
    const currentTodos = [...currentState.todos, data.newTodo];
    yield put(setTodosAction(currentTodos));
  } catch (error) {
    console.error(error);
  } finally {
    yield put(setTodosLoadingAction(false));
  }
}

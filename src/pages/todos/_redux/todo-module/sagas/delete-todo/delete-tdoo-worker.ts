import { call, put } from 'redux-saga/effects';
import { IResponse } from '@mihanizm56/fetch-api';
import { deleteTodoRequest } from '@/api/requests/todos/delete';
import { setTodosAction, setTodosLoadingAction } from '@/pages/todos/_redux/todo-module';
import { getTodosRequest } from '@/api/requests/todos/get';
import { TodoType } from '../../_types';

type ParamsType = {
  id: TodoType['id'];
};

export function* deleteTodoWorkerSaga({ id }: ParamsType) {
  try {
    yield put(setTodosLoadingAction(true));

    const { error, errorText }: IResponse<never> = yield call(
      deleteTodoRequest,
      {
        id,
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

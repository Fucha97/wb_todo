import { call, put } from 'redux-saga/effects';
import { IResponse } from '@mihanizm56/fetch-api';
import { deleteTodoRequest } from '@/api/requests/todos/delete';
import {
  deleteTodoAction,
  setTodosLoadingAction,
} from '@/pages/todos/_redux/todo-module';
import { TodoType } from '../../_types';

type ParamsType = {
  id: TodoType['id'];
};

export function* deleteTodoWorkerSaga({ id }: ParamsType) {
  try {
    yield put(setTodosLoadingAction(true));

    const { error, data, errorText }: IResponse<{ id: string }> = yield call(
      deleteTodoRequest,
      {
        id,
      },
    );
    if (error) throw new Error(errorText);

    yield put(deleteTodoAction(data.id));
  } catch (error) {
    console.error(error);
  } finally {
    yield put(setTodosLoadingAction(false));
  }
}

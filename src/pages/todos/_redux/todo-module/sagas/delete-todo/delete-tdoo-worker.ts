import { call, put, select } from 'redux-saga/effects';
import { IResponse } from '@mihanizm56/fetch-api';
import { deleteTodoRequest } from '@/api/requests/todos/delete';
import {
  setTodosAction,
  setTodosLoadingAction,
} from '@/pages/todos/_redux/todo-module';
import { TodoType } from '../../_types';

type ParamsType = {
  id: TodoType['id'];
};

export function* deleteTodoWorkerSaga({ id }: ParamsType) {
  try {
    const currentState = yield select(
      (state) => state['todo-module_todosSlice'],
    );

    yield put(setTodosLoadingAction(true));

    const { error, data, errorText }: IResponse<{ id: string }> = yield call(
      deleteTodoRequest,
      {
        id,
      },
    );
    if (error) throw new Error(errorText);
    const currentTodos = [
      ...currentState.todos.filter((todoItem) => todoItem.id !== data.id),
    ];
    yield put(setTodosAction(currentTodos));
  } catch (error) {
    console.error(error);
  } finally {
    yield put(setTodosLoadingAction(false));
  }
}

import { fork, take } from 'redux-saga/effects';
import {
  ETodosActions,
  updateTodoAction,
} from '@/pages/todos/_redux/todo-module';
import { updateTodoWorkerSaga } from './worker';

export const UPDATE_TODO_WATCHER_SAGA_NAME = 'UPDATE_TODO_WATCHER_SAGA_NAME';

export function* updateTodoWatcherSaga() {
  while (true) {
    const { payload }: ReturnType<typeof updateTodoAction> = yield take(
      ETodosActions.UPDATE_TODO,
    );
    yield fork(updateTodoWorkerSaga, { todo: payload });
  }
}

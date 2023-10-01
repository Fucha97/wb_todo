import { fork, take } from 'redux-saga/effects';
import { deleteTodoAction, ETodosActions } from '@/pages/todos/_redux/todo-module';
import { deleteTodoWorkerSaga } from './worker';

export const DELETE_TODO_WATCHER_SAGA_NAME = 'DELETE_TODO_WATCHER_SAGA_NAME';

export function* deleteTodoWatcherSaga() {
  while (true) {
    const { payload }: ReturnType<typeof deleteTodoAction> = yield take(
      ETodosActions.DELETE_TODO,
    );
    yield fork(deleteTodoWorkerSaga, { id: payload });
  }
}

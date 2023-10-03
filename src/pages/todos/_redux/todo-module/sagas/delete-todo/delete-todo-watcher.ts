import { fork, take } from 'redux-saga/effects';
import { deleteTodoActionSaga } from '@/pages/todos/_redux/todo-module';
import { deleteTodoWorkerSaga } from './delete-tdoo-worker';

export const DELETE_TODO_WATCHER_SAGA_NAME = 'DELETE_TODO_WATCHER_SAGA_NAME';

export function* deleteTodoWatcherSaga() {
  while (true) {
    const { payload }: ReturnType<typeof deleteTodoActionSaga> = yield take(
      deleteTodoActionSaga.type,
    );
    yield fork(deleteTodoWorkerSaga, { id: payload });
  }
}

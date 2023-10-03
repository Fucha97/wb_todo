import { fork, take } from 'redux-saga/effects';
import { createTodoActionSaga } from '../../actions';
import { createTodoWorkerSaga } from './create-todo-worker';

export const CREATE_TODO_WATCHER_SAGA_NAME = 'CREATE_TODO_WATCHER_SAGA_NAME';

export function* createTodoWatcherSaga() {
  while (true) {
    const { payload }: ReturnType<typeof createTodoActionSaga> = yield take(
      createTodoActionSaga.type,
    );
    yield fork(createTodoWorkerSaga, payload);
  }
}

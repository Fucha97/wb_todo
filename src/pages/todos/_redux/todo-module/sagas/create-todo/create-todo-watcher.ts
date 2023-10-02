import { fork, take } from 'redux-saga/effects';
import { ETodosActions } from '@/pages/todos/_redux/todo-module';
import { createTodoActionSaga } from '../../actions';
import { createTodoWorkerSaga } from './create-todo-worker';

export const CREATE_TODO_WATCHER_SAGA_NAME = 'CREATE_TODO_WATCHER_SAGA_NAME';

export function* createTodoWatcherSaga() {
  while (true) {
    const { payload }: ReturnType<typeof createTodoActionSaga> = yield take(
      ETodosActions.CREATE_TODO_SAGA,
    );
    yield fork(createTodoWorkerSaga, payload);
  }
}

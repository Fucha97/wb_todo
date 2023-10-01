import { fork, take } from 'redux-saga/effects';
import { ETodosActions } from '@/pages/todos/_redux/todo-module';
import { createTodoAction } from '../../actions';
import { createTodoWorkerSaga } from './worker';

export const CREATE_TODO_WATCHER_SAGA_NAME = 'CREATE_TODO_WATCHER_SAGA_NAME';

export function* createTodoWatcherSaga() {
  while (true) {
    const { payload }: ReturnType<typeof createTodoAction> = yield take(
      ETodosActions.CREATE_TODO,
    );
    yield fork(createTodoWorkerSaga, { title: payload });
  }
}

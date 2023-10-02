import { fork, take } from 'redux-saga/effects';
import {
  ETodosActions,
  updateTodoActionSaga,
} from '@/pages/todos/_redux/todo-module';
import { updateTodoWorkerSaga } from './update-todo-worker';

export const UPDATE_TODO_WATCHER_SAGA_NAME = 'UPDATE_TODO_WATCHER_SAGA_NAME';

export function* updateTodoWatcherSaga() {
  while (true) {
    const { payload }: ReturnType<typeof updateTodoActionSaga> = yield take(
      ETodosActions.UPDATE_TODO,
    );
    yield fork(updateTodoWorkerSaga, { todo: payload });
  }
}

import { StoreInjectConfig } from '@mihanizm56/redux-core-modules';
import { TODOS_REDUCER_NAME, todoReducer } from '../_redux/todo-module';
import {
  createTodoWatcherSaga,
  deleteTodoWatcherSaga,
  updateTodoWatcherSaga,
  CREATE_TODO_WATCHER_SAGA_NAME,
  DELETE_TODO_WATCHER_SAGA_NAME,
  UPDATE_TODO_WATCHER_SAGA_NAME,
} from '../_redux/todo-module/sagas';
import { getTodosConfig } from './_utils';

export const storeInjectConfig: StoreInjectConfig = {
  reducersToInject: [
    {
      name: TODOS_REDUCER_NAME,
      reducer: todoReducer,
    },
  ],
  sagasToInject: [
    {
      saga: createTodoWatcherSaga,
      name: CREATE_TODO_WATCHER_SAGA_NAME,
    },
    {
      saga: deleteTodoWatcherSaga,
      name: DELETE_TODO_WATCHER_SAGA_NAME,
    },
    {
      saga: updateTodoWatcherSaga,
      name: UPDATE_TODO_WATCHER_SAGA_NAME,
    },
  ],
  initialLoadManagerConfig: {
    requestConfigList: [getTodosConfig()],
  },
};
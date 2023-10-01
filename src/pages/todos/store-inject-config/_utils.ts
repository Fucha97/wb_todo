import { InitLoadManagerRequestOptionsType } from '@mihanizm56/redux-core-modules';
import { getTodosRequest } from '@/api/requests/todos/get';
import { TodoType } from '../_redux/todo-module';
import {
  setTodosAction,
  startLoadingAction,
  stopLoadingAction,
} from '../_redux/todo-module/actions';

export const getTodosConfig = (): InitLoadManagerRequestOptionsType => {
  const config: InitLoadManagerRequestOptionsType = {
    request: getTodosRequest,
    actionSuccess: setTodosAction,
    responseDataFormatter: (response: {
      todos: Array<TodoType>;
    }): Array<TodoType> => response.todos,
  };

  return {
    ...config,
    loadingStartAction: startLoadingAction,
    loadingStopAction: stopLoadingAction,
  };
};

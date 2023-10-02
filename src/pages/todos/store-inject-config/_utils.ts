import { InitLoadManagerRequestOptionsType } from '@mihanizm56/redux-core-modules';
import { IResponse } from '@mihanizm56/fetch-api';
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
    responseDataFormatter: ({
      data,
    }: IResponse<{ todos: Array<TodoType> }>): Array<TodoType> => data.todos,
  };

  return {
    ...config,
    loadingStartAction: startLoadingAction,
    loadingStopAction: stopLoadingAction,
  };
};

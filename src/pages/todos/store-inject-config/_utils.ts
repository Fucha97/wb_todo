import { InitLoadManagerRequestOptionsType } from '@mihanizm56/redux-core-modules';
import { getTodosRequest } from '@/api/requests/todos/get';
import {
  setTodosAction,
  startLoadingAction,
  stopLoadingAction,
} from '../_redux/todo-module/actions';
import { getTodosDataFormatter } from './get-todos-data-formatter';

export const getTodosConfig = (): InitLoadManagerRequestOptionsType => {
  const config: InitLoadManagerRequestOptionsType = {
    request: getTodosRequest,
    actionSuccess: setTodosAction,
    responseDataFormatter: getTodosDataFormatter,
  };

  return {
    ...config,
    loadingStartAction: startLoadingAction,
    loadingStopAction: stopLoadingAction,
  };
};

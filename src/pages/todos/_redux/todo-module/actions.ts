import { IReduxAction, IReduxBaseAction } from '@mihanizm56/redux-core-modules';
import {
  TodoType,
  TodoStateType,
} from '@/pages/todos/_redux/todo-module/_types';

const START_LOADING = 'START_LOADING';
export const startLoadingAction: IReduxBaseAction<
  typeof START_LOADING
> = () => ({
  type: START_LOADING,
});
startLoadingAction.type = START_LOADING;

const STOP_LOADING = 'STOP_LOADING';
export const stopLoadingAction: IReduxBaseAction<typeof STOP_LOADING> = () => ({
  type: STOP_LOADING,
});
stopLoadingAction.type = STOP_LOADING;

const GET_TODOS = 'GET_TODOS';
export const getTodosAction: IReduxBaseAction<typeof GET_TODOS> = () => ({
  type: GET_TODOS,
});
getTodosAction.type = GET_TODOS;

const SET_TODOS = 'SET_TODOS';
export const setTodosAction: IReduxAction<
  TodoStateType['todos'],
  typeof SET_TODOS
> = (payload) => ({
  type: SET_TODOS,
  payload,
});
setTodosAction.type = SET_TODOS;

const CREATE_TODO_SAGA = 'CREATE_TODO_SAGA';
export const createTodoActionSaga: IReduxAction<
  {
    title: TodoType['title'];
    description?: TodoType['description'];
  },
  typeof CREATE_TODO_SAGA
> = (payload) => ({
  type: CREATE_TODO_SAGA,
  payload,
});
createTodoActionSaga.type = CREATE_TODO_SAGA;

const UPDATE_TODO_SAGA = 'UPDATE_TODO_SAGA';
export const updateTodoActionSaga: IReduxAction<
  TodoType,
  typeof UPDATE_TODO_SAGA
> = (payload) => ({
  type: UPDATE_TODO_SAGA,
  payload,
});
updateTodoActionSaga.type = UPDATE_TODO_SAGA;

const DELETE_TODO_SAGA = 'DELETE_TODO_SAGA';
export const deleteTodoActionSaga: IReduxAction<
  TodoType['id'],
  typeof DELETE_TODO_SAGA
> = (payload) => ({
  type: DELETE_TODO_SAGA,
  payload,
});
deleteTodoActionSaga.type = DELETE_TODO_SAGA;

const SET_UPDATE_TODO_ID = 'SET_UPDATE_TODO_ID';
export const setUpdateTodoIdAction: IReduxAction<
  TodoType['id'],
  typeof SET_UPDATE_TODO_ID
> = (payload) => ({
  type: SET_UPDATE_TODO_ID,
  payload,
});
setUpdateTodoIdAction.type = SET_UPDATE_TODO_ID;

const SET_TODOS_LOADING = 'SET_TODOS_LOADING';
export const setTodosLoadingAction: IReduxAction<
  TodoStateType['isLoading'],
  typeof SET_TODOS_LOADING
> = (payload) => ({
  type: SET_TODOS_LOADING,
  payload,
});
setTodosLoadingAction.type = SET_TODOS_LOADING;

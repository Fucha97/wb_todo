import { memo } from 'react';
import classnames from 'classnames/bind';
import { connect } from 'react-redux';
import {
  createTodoActionSaga,
  deleteTodoActionSaga,
  getTodosAction,
  selectTodos,
  selectTodosLoading,
  selectUpdateTodo,
  selectUpdateTodoModalOpen,
  setUpdateTodoIdAction,
  TodoStorageStateType,
  updateTodoActionSaga,
} from '@/pages/todos/_redux/todo-module';
import { NewTodoForm } from './components/newTodoForm';
import { UpdateTodoModal } from './components/updateTodoModal';
import { TodoList } from './components/todoList';
import styles from './index.module.scss';

const BLOCK_NAME = 'TodosView';
const cn = classnames.bind(styles);

type PropsType = {
  loading: ReturnType<typeof selectTodosLoading>;
  createTodo: typeof createTodoActionSaga;
  updateTodoData: ReturnType<typeof selectUpdateTodo>;
  isModalOpen: ReturnType<typeof selectUpdateTodoModalOpen>;
  updateTodo: typeof updateTodoActionSaga;
  setUpdateTodoId: typeof setUpdateTodoIdAction;
  todos: ReturnType<typeof selectTodos>;
  getTodos: typeof getTodosAction;
  deleteTodo: typeof deleteTodoActionSaga;
};

export const TodosView = memo(
  ({
    loading,
    createTodo,
    updateTodoData,
    isModalOpen,
    updateTodo,
    setUpdateTodoId,
    todos,
    getTodos,
    deleteTodo,
  }: PropsType) => (
    <div className={cn(BLOCK_NAME)}>
      <div className={cn(`${BLOCK_NAME}__content-wrapper`)}>
        <NewTodoForm createTodo={createTodo} loading={loading} />
        <TodoList
          deleteTodo={deleteTodo}
          getTodos={getTodos}
          setUpdateTodoId={setUpdateTodoId}
          todos={todos}
          updateTodo={updateTodo}
        />
      </div>
      <UpdateTodoModal
        isModalOpen={isModalOpen}
        loading={loading}
        setUpdateTodoId={setUpdateTodoId}
        updateTodo={updateTodo}
        updateTodoData={updateTodoData}
      />
    </div>
  ),
);

const mapStateToProps = (state: TodoStorageStateType) => ({
  loading: selectTodosLoading(state),
  todos: selectTodos(state),
  updateTodoData: selectUpdateTodo(state),
  isModalOpen: selectUpdateTodoModalOpen(state),
});
const mapDispatchToProps = {
  createTodo: createTodoActionSaga,
  updateTodo: updateTodoActionSaga,
  setUpdateTodoId: setUpdateTodoIdAction,
  getTodos: getTodosAction,
  deleteTodo: deleteTodoActionSaga,
};

export const ConnectedWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodosView);

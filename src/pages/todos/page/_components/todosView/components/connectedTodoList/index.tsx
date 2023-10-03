import { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  deleteTodoActionSaga,
  getTodosAction,
  selectTodos,
  setUpdateTodoIdAction,
  TodoStorageStateType,
  updateTodoActionSaga,
} from '@/pages/todos/_redux/todo-module';
import { TodoListView } from './todoListView';

type PropsType = {
  todos: ReturnType<typeof selectTodos>;
  setUpdateTodoId: typeof setUpdateTodoIdAction;
  updateTodo: typeof updateTodoActionSaga;
  deleteTodo: typeof deleteTodoActionSaga;
  getTodos: typeof getTodosAction;
};

export const TodoListWrapper = ({
  todos,
  setUpdateTodoId,
  updateTodo,
  deleteTodo,
  getTodos,
}: PropsType) => {
  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <TodoListView
      deleteTodo={deleteTodo}
      setUpdateTodoId={setUpdateTodoId}
      todos={todos}
      updateTodo={updateTodo}
    />
  );
};

const mapStateToProps = (state: TodoStorageStateType) => ({
  todos: selectTodos(state),
});

const mapDispatchToProps = {
  updateTodo: updateTodoActionSaga,
  setUpdateTodoId: setUpdateTodoIdAction,
  deleteTodo: deleteTodoActionSaga,
  getTodos: getTodosAction,
};
export const ConnectedTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoListWrapper);

import { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  deleteTodoActionSaga,
  getTodosAction,
  selectTodos,
  setUpdateTodoIdAction,
  TodoStorageStateType,
  TodoType,
  updateTodoActionSaga,
} from '@/pages/todos/_redux/todo-module';
import { TodoListView } from './todo-list-view';

type MapStateToPropsType = {
  todos: ReturnType<typeof selectTodos>;
};

type MapDispatchToPropsType = {
  setUpdateTodoId: typeof setUpdateTodoIdAction;
  updateTodo: typeof updateTodoActionSaga;
  deleteTodo: typeof deleteTodoActionSaga;
  getTodos: typeof getTodosAction;
};

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

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

  const onDeleteTodo = (id: TodoType['id']) => {
    deleteTodo(id);
  };

  const onUpdateTodoIdClick = (id: TodoType['id']) => {
    setUpdateTodoId(id);
  };

  const onUpdateTodo = (newTodo: TodoType) => {
    updateTodo(newTodo);
  };

  return (
    <TodoListView
      onDeleteTodo={onDeleteTodo}
      onUpdateTodo={onUpdateTodo}
      onUpdateTodoClick={onUpdateTodoIdClick}
      todoItems={todos}
    />
  );
};

const mapStateToProps = (state: TodoStorageStateType): MapStateToPropsType => ({
  todos: selectTodos(state),
});

const mapDispatchToProps: MapDispatchToPropsType = {
  updateTodo: updateTodoActionSaga,
  setUpdateTodoId: setUpdateTodoIdAction,
  deleteTodo: deleteTodoActionSaga,
  getTodos: getTodosAction,
};
export const ConnectedTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoListWrapper);

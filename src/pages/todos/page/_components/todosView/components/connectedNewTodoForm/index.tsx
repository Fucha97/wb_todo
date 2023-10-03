import { SimpleInputPropsType } from '@wildberries/ui-kit';
import { useState } from 'react';
import { connect } from 'react-redux';
import {
  createTodoActionSaga,
  selectTodosLoading,
  TodoStorageStateType,
} from '@/pages/todos/_redux/todo-module';
import { NewTodoFormView } from './newTodoFormView';

type PropsType = {
  loading: ReturnType<typeof selectTodosLoading>;
  createTodo: typeof createTodoActionSaga;
};

export const NewTodoFormWrapper = ({ loading, createTodo }: PropsType) => {
  const [newTodo, setNewTodo] = useState<{
    title: string;
    description: string;
  }>({ title: '', description: '' });
  const todoCreateDisabled = newTodo.title.trim().length === 0;

  const handlerChangeTodo = (property: string, value: string) => {
    setNewTodo((prev) => ({ ...prev, [property]: value }));
  };

  const handlerChangeInput: SimpleInputPropsType['onChange'] = ({
    name,
    value,
  }) => {
    const splitedName = name.split('-');
    const currentProperty = splitedName[splitedName.length - 1];
    handlerChangeTodo(currentProperty, value);
  };

  const handleTodoCreate = () => {
    createTodo(newTodo);
    setNewTodo({ title: '', description: '' });
  };

  return (
    <NewTodoFormView
      loading={loading}
      newTodo={newTodo}
      onChangeInput={handlerChangeInput}
      onClickCreate={handleTodoCreate}
      todoCreateDisabled={todoCreateDisabled}
    />
  );
};

const masStateToProps = (state: TodoStorageStateType) => ({
  loading: selectTodosLoading(state),
});

const mapDispatchToProps = {
  createTodo: createTodoActionSaga,
};

export const ConnectedNewTodoForm = connect(
  masStateToProps,
  mapDispatchToProps,
)(NewTodoFormWrapper);

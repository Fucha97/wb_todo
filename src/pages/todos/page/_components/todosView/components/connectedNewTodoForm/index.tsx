import { SimpleInputPropsType } from '@wildberries/ui-kit';
import { useState } from 'react';
import { connect } from 'react-redux';
import {
  createTodoActionSaga,
  selectTodosLoading,
  TodoStorageStateType,
  TodoType,
} from '@/pages/todos/_redux/todo-module';
import { NewTodoFormView } from './newTodoFormView';

type MapStateToPropsType = {
  loading: ReturnType<typeof selectTodosLoading>;
};

type MapDispatchToPropsType = {
  createTodo: typeof createTodoActionSaga;
};

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

export const NewTodoFormWrapper = ({ loading, createTodo }: PropsType) => {
  const [newTodo, setNewTodo] = useState<{
    title: string;
    description: string;
  }>({ title: '', description: '' });
  const todoCreateDisabled = newTodo.title.trim().length === 0;

  const handlerChangeTodo = <Key extends keyof TodoType>(
    property: Key,
    value: TodoType[Key],
  ) => {
    setNewTodo((prev) => ({ ...prev, [property]: value }));
  };

  const handlerChangeTitleInput: SimpleInputPropsType['onChange'] = ({
    value,
  }) => {
    handlerChangeTodo('title', value);
  };

  const handlerChangeDescriptionInput: SimpleInputPropsType['onChange'] = ({
    value,
  }) => {
    handlerChangeTodo('description', value);
  };

  const handleTodoCreate = () => {
    createTodo(newTodo);
    setNewTodo({ title: '', description: '' });
  };

  return (
    <NewTodoFormView
      loading={loading}
      newTodo={newTodo}
      onChangeDescription={handlerChangeDescriptionInput}
      onChangeTitle={handlerChangeTitleInput}
      onClickCreate={handleTodoCreate}
      todoCreateDisabled={todoCreateDisabled}
    />
  );
};

const masStateToProps = (state: TodoStorageStateType): MapStateToPropsType => ({
  loading: selectTodosLoading(state),
});

const mapDispatchToProps: MapDispatchToPropsType = {
  createTodo: createTodoActionSaga,
};

export const ConnectedNewTodoForm = connect(
  masStateToProps,
  mapDispatchToProps,
)(NewTodoFormWrapper);

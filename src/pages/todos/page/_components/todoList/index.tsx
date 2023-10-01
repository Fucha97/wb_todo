import React, { useEffect } from 'react';
import classnames from 'classnames/bind';
import { connect } from 'react-redux';
import {
  SimpleInput,
  ButtonLink,
  ButtonClickEventType,
} from '@wildberries/ui-kit';
import { SimpleInputPropsType } from '@wildberries/ui-kit/lib/simple-input/types';
import i18next from 'i18next';
import {
  getTodosAction,
  TodoStorageStateType,
  selectTodos,
  selectTodosLoading,
  setTodosLoadingAction,
  createTodoAction,
  deleteTodoAction,
  setNewTodoTitleAction,
  updateTodoAction,
  setUpdateTodoIdAction,
  selectNewTodoTitle,
} from '@/pages/todos/_redux/todo-module';
import { TodoCard } from '@/pages/todos/page/_components/todoCard';
import { TRANSLATIONS } from '@/pages/todos/_constants/translations';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Todos';

type PropsType = {
  todos: ReturnType<typeof selectTodos>;
  loading: ReturnType<typeof selectTodosLoading>;
  newTodoTitle: ReturnType<typeof selectNewTodoTitle>;
  setNewTodoTitle: typeof setNewTodoTitleAction;
  createTodo: typeof createTodoAction;
  setUpdateTodoId: typeof setUpdateTodoIdAction;
  updateTodo: typeof updateTodoAction;
  deleteTodo: typeof deleteTodoAction;
  getTodos: typeof getTodosAction;
};

export const TodosWrapper = ({
  todos,
  loading,
  newTodoTitle,
  setNewTodoTitle,
  createTodo,
  setUpdateTodoId,
  updateTodo,
  deleteTodo,
  getTodos,
}: PropsType) => {
  const todoCreateDisabled = newTodoTitle.trim().length === 0;

  const handleChangeNewTodoTitle: SimpleInputPropsType['onChange'] = ({
    value,
  }) => {
    setNewTodoTitle(value);
  };

  const handleTodoCreate: (event?: ButtonClickEventType) => void = () => {
    createTodo(newTodoTitle);
  };

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <div className={cn(`${BLOCK_NAME}`)}>
      <div className={cn(`${BLOCK_NAME}__wrapper`)}>
        <div className={cn(`${BLOCK_NAME}__newTodo`)}>
          <div className={cn(`${BLOCK_NAME}__input`)}>
            <SimpleInput
              id="add-todo-item"
              name="add-todo-item"
              onChange={handleChangeNewTodoTitle}
              placeholder={i18next.t(TRANSLATIONS.newTodoItem)}
              value={newTodoTitle}
            />
          </div>
          <ButtonLink
            disabled={todoCreateDisabled || loading}
            isLoading={loading}
            onClick={handleTodoCreate}
            text="Add"
            variant="accent"
          />
        </div>
        {todos.map(({ id, isComplete, title }) => (
          <TodoCard
            key={id}
            deleteTodo={deleteTodo}
            id={id}
            isComplete={isComplete}
            onUpdateTodoClick={setUpdateTodoId}
            title={title}
            updateTodo={updateTodo}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: TodoStorageStateType) => ({
  loading: selectTodosLoading(state),
  todos: selectTodos(state),
  newTodoTitle: selectNewTodoTitle(state),
});

const mapDispatchToProps = {
  getTodos: getTodosAction,
  setTodosLoading: setTodosLoadingAction,
  createTodo: createTodoAction,
  deleteTodo: deleteTodoAction,
  setNewTodoTitle: setNewTodoTitleAction,
  updateTodo: updateTodoAction,
  setUpdateTodoId: setUpdateTodoIdAction,
};

export const Todos = connect(mapStateToProps, mapDispatchToProps)(TodosWrapper);

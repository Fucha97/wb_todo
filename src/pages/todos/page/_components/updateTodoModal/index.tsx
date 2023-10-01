import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { ButtonVariant, Modal, SimpleInput } from '@wildberries/ui-kit';
import { SimpleInputPropsType } from '@wildberries/ui-kit/lib/simple-input/types';
import {
  TodoType,
  TodoStorageStateType,
  selectTodosLoading,
  selectUpdateTodo,
  selectUpdateTodoModalOpen,
  setUpdateTodoIdAction,
  updateTodoAction,
} from '@/pages/todos/_redux/todo-module';

type PropsType = {
  updateTodoData: ReturnType<typeof selectUpdateTodo>;
  isModalOpen: ReturnType<typeof selectUpdateTodoModalOpen>;
  loading: ReturnType<typeof selectTodosLoading>;
  updateTodo: typeof updateTodoAction;
  setUpdateTodoId: typeof setUpdateTodoIdAction;
};

export const UpdateTodoModal = ({
  updateTodoData,
  loading,
  isModalOpen,
  // eslint-disable-next-line @typescript-eslint/no-shadow
  setUpdateTodoId,
  // eslint-disable-next-line @typescript-eslint/no-shadow
  updateTodo,
}: PropsType) => {
  const [todoForm, setTodoForm] = useState<TodoType>(updateTodoData);
  const todoUpdateDisabled = todoForm?.title?.trim().length === 0;

  const handleCloseModalClick = useCallback(() => {
    setUpdateTodoId(null);
  }, [setUpdateTodoId]);

  const handeUpdateTodoClick = useCallback(() => {
    updateTodo(todoForm);
    setUpdateTodoId(null);
  }, [todoForm, updateTodo, setUpdateTodoId]);

  const handleChangeNewTodoTitle: SimpleInputPropsType['onChange'] = ({
    value,
  }) => {
    setTodoForm((form) => ({
      ...form,
      title: value,
    }));
  };

  const actionsConfig = useMemo(
    () => ({
      actionButton: {
        variant: 'accent' as ButtonVariant,
        onClick: handeUpdateTodoClick,
        title: 'Save',
        isLoading: loading,
        disabled: loading || todoUpdateDisabled,
      },
      cancelButton: {
        onClick: handleCloseModalClick,
        variant: 'adaptive' as ButtonVariant,
        title: 'Close',
      },
    }),
    [loading, handeUpdateTodoClick, handleCloseModalClick, todoUpdateDisabled],
  );

  useEffect(() => {
    setTodoForm(updateTodoData);
  }, [updateTodoData]);

  return (
    <Modal
      actionsConfig={actionsConfig}
      isOpened={isModalOpen}
      isShowCloseIcon
      onClose={handleCloseModalClick}
      title="Update todo"
    >
      <SimpleInput
        id="update-todo-item"
        name="update-todo-item"
        onChange={handleChangeNewTodoTitle}
        placeholder="new title"
        value={todoForm?.title || ''}
      />
    </Modal>
  );
};

const masStateToProps = (state: TodoStorageStateType) => ({
  loading: selectTodosLoading(state),
  isModalOpen: selectUpdateTodoModalOpen(state),
  updateTodoData: selectUpdateTodo(state),
});

const mapDispatchToProps = {
  updateTodo: updateTodoAction,
  setUpdateTodoId: setUpdateTodoIdAction,
};
export const ConnectedUpdateTodoModal = connect(
  masStateToProps,
  mapDispatchToProps,
)(UpdateTodoModal);

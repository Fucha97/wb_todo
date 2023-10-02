import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ButtonVariant, Modal, SimpleInput } from '@wildberries/ui-kit';
import { SimpleInputPropsType } from '@wildberries/ui-kit/lib/simple-input/types';
import {
  TodoType,
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
  setUpdateTodoId,
  updateTodo,
}: PropsType) => {
  const [currentTodo, setCurrentTodo] = useState<TodoType>(updateTodoData);
  const todoUpdateDisabled = currentTodo?.title?.trim().length === 0;

  const handleCloseModalClick = useCallback(() => {
    setUpdateTodoId(null);
  }, [setUpdateTodoId]);

  const handeUpdateTodoClick = useCallback(() => {
    updateTodo(currentTodo);
    setUpdateTodoId(null);
  }, [currentTodo, updateTodo, setUpdateTodoId]);

  const handleChangeTodoTitle: SimpleInputPropsType['onChange'] = ({
    value,
  }) => {
    setCurrentTodo((form) => ({
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
    setCurrentTodo(updateTodoData);
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
        onChange={handleChangeTodoTitle}
        placeholder="new title"
        value={currentTodo?.title || ''}
      />
    </Modal>
  );
};

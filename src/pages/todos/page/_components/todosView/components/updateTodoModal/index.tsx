import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ButtonVariant, Modal, SimpleInput } from '@wildberries/ui-kit';
import { SimpleInputPropsType } from '@wildberries/ui-kit/lib/simple-input/types';
import {
  TodoType,
  selectTodosLoading,
  selectUpdateTodo,
  selectUpdateTodoModalOpen,
  setUpdateTodoIdAction,
  updateTodoActionSaga,
} from '@/pages/todos/_redux/todo-module';
import { TRANSLATIONS } from '@/pages/todos/_constants/translations';
import i18next from 'i18next';

type PropsType = {
  updateTodoData: ReturnType<typeof selectUpdateTodo>;
  isModalOpen: ReturnType<typeof selectUpdateTodoModalOpen>;
  loading: ReturnType<typeof selectTodosLoading>;
  updateTodo: typeof updateTodoActionSaga;
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

  const handleChangeTodoDescription: SimpleInputPropsType['onChange'] = ({
    value,
  }) => {
    setCurrentTodo((form) => ({
      ...form,
      description: value,
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
        placeholder={i18next.t(TRANSLATIONS.updateTodoForm.title)}
        value={currentTodo?.title || ''}
      />
       <SimpleInput
        id="update-todo-item"
        name="update-todo-item"
        onChange={handleChangeTodoDescription}
        placeholder={i18next.t(TRANSLATIONS.updateTodoForm.description)}
        value={currentTodo?.description || ''}
      />
    </Modal>
  );
};

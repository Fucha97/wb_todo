import { useCallback, useEffect, useMemo, useState } from 'react';
import { ActionsConfigType, SimpleInputPropsType } from '@wildberries/ui-kit';
import i18next from 'i18next';
import { connect } from 'react-redux';
import {
  deleteTodoActionSaga,
  selectTodosLoading,
  selectUpdateTodo,
  selectUpdateTodoModalOpen,
  setUpdateTodoIdAction,
  TodoStorageStateType,
  TodoType,
  updateTodoActionSaga,
} from '@/pages/todos/_redux/todo-module';
import { TRANSLATIONS } from '@/pages/todos/_constants/translations';
import { UpdateTodoModalView } from './updateTodoModal';

type PropsType = {
  updateTodoData: ReturnType<typeof selectUpdateTodo>;
  isModalOpen: ReturnType<typeof selectUpdateTodoModalOpen>;
  loading: ReturnType<typeof selectTodosLoading>;
  updateTodo: typeof updateTodoActionSaga;
  setUpdateTodoId: typeof setUpdateTodoIdAction;
};

export const UpdateTodoModalWrapper = ({
  updateTodoData,
  isModalOpen,
  loading,
  updateTodo,
  setUpdateTodoId,
}: PropsType) => {
  const [currentTodo, setCurrentTodo] = useState<TodoType>(updateTodoData);
  const todoUpdateDisabled = currentTodo?.title?.trim().length === 0;

  const handlerCloseModalClick = useCallback(() => {
    setUpdateTodoId(null);
  }, [setUpdateTodoId]);

  const handlerUpdateTodoClick = useCallback(() => {
    updateTodo(currentTodo);
    setUpdateTodoId(null);
  }, [currentTodo, updateTodo, setUpdateTodoId]);

  const handlerChangeTodo = (property: string, value: string) => {
    setCurrentTodo((prev) => ({
      ...prev,
      [property]: value,
    }));
  };

  const handlerhangeInputValue: SimpleInputPropsType['onChange'] = ({
    value,
    name,
  }) => {
    const splitedName = name.split('-');
    const currentProperty = splitedName[splitedName.length - 1];
    handlerChangeTodo(currentProperty, value);
  };

  const actionsConfig: ActionsConfigType = useMemo(
    () => ({
      actionButton: {
        variant: 'accent',
        onClick: handlerUpdateTodoClick,
        title: i18next.t(TRANSLATIONS.updateTodoForm.saveButtonTitle),
        isLoading: loading,
        disabled: loading || todoUpdateDisabled,
      },
      cancelButton: {
        onClick: handlerCloseModalClick,
        variant: 'adaptive',
        title: i18next.t(TRANSLATIONS.updateTodoForm.closeButtonTitle),
      },
    }),
    [
      loading,
      handlerUpdateTodoClick,
      handlerCloseModalClick,
      todoUpdateDisabled,
    ],
  );

  useEffect(() => {
    setCurrentTodo(updateTodoData);
  }, [updateTodoData]);

  return (
    <UpdateTodoModalView
      actionsConfig={actionsConfig}
      currentTodo={currentTodo}
      isModalOpen={isModalOpen}
      onChangeInputValue={handlerhangeInputValue}
      onCloseModalClick={handlerCloseModalClick}
    />
  );
};

const mapStateToProps = (state: TodoStorageStateType) => ({
  isModalOpen: selectUpdateTodoModalOpen(state),
  loading: selectTodosLoading(state),
  updateTodoData: selectUpdateTodo(state),
});

const mapDispatchToProps = {
  setUpdateTodoId: setUpdateTodoIdAction,
  deleteTodo: deleteTodoActionSaga,
  updateTodo: updateTodoActionSaga,
};

export const ConnectedUpdateTodoModal = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpdateTodoModalWrapper);

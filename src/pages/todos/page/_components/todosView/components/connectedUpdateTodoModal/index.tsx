import { useCallback, useEffect, useMemo, useState } from 'react';
import { ActionsConfigType, SimpleInputPropsType } from '@wildberries/ui-kit';
import i18next from 'i18next';
import { connect } from 'react-redux';
import {
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

type MapDispatchToPropsType = {
  updateTodo: typeof updateTodoActionSaga;
  setUpdateTodoId: typeof setUpdateTodoIdAction;
};

type MapStateToPropsType = {
  updateTodoData: ReturnType<typeof selectUpdateTodo>;
  isModalOpen: ReturnType<typeof selectUpdateTodoModalOpen>;
  loading: ReturnType<typeof selectTodosLoading>;
};

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

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

  const handlerChangeTodo = <Key extends keyof TodoType>(
    property: Key,
    value: TodoType[Key],
  ) => {
    setCurrentTodo((prev) => ({
      ...prev,
      [property]: value,
    }));
  };

  const handlerChangeInputTitle: SimpleInputPropsType['onChange'] = ({
    value,
  }) => {
    handlerChangeTodo('title', value);
  };

  const handlerChangeDescriptionTitle: SimpleInputPropsType['onChange'] = ({
    value,
  }) => {
    handlerChangeTodo('description', value);
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
    if (updateTodoData) {
      setCurrentTodo(updateTodoData);
    }
  }, [updateTodoData]);

  return (
    <UpdateTodoModalView
      actionsConfig={actionsConfig}
      currentTodo={currentTodo}
      isModalOpen={isModalOpen}
      onChangeInputDescription={handlerChangeDescriptionTitle}
      onChangeInputTitle={handlerChangeInputTitle}
      onCloseModalClick={handlerCloseModalClick}
    />
  );
};

const mapStateToProps = (state: TodoStorageStateType): MapStateToPropsType => ({
  isModalOpen: selectUpdateTodoModalOpen(state),
  loading: selectTodosLoading(state),
  updateTodoData: selectUpdateTodo(state),
});

const mapDispatchToProps: MapDispatchToPropsType = {
  setUpdateTodoId: setUpdateTodoIdAction,
  updateTodo: updateTodoActionSaga,
};

export const ConnectedUpdateTodoModal = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpdateTodoModalWrapper);

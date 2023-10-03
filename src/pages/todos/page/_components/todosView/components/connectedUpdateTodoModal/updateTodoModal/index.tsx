import React from 'react';
import {
  ActionsConfigType,
  Modal,
  SimpleInput,
  SimpleInputBlurEventType,
} from '@wildberries/ui-kit';
import i18next from 'i18next';
import {
  selectUpdateTodoModalOpen,
  TodoType,
} from '@/pages/todos/_redux/todo-module';
import { TRANSLATIONS } from '@/pages/todos/_constants/translations';

type PropsType = {
  isModalOpen: ReturnType<typeof selectUpdateTodoModalOpen>;
  actionsConfig: ActionsConfigType;
  onCloseModalClick: () => void;
  onChangeInputValue: (event: SimpleInputBlurEventType) => void;
  currentTodo: TodoType;
};

export const UpdateTodoModalView = ({
  isModalOpen,
  actionsConfig,
  onCloseModalClick,
  onChangeInputValue,
  currentTodo,
}: PropsType) => (
  <Modal
    actionsConfig={actionsConfig}
    isOpened={isModalOpen}
    isShowCloseIcon
    onClose={onCloseModalClick}
    title="Update todo"
  >
    <SimpleInput
      id="update-todo-title"
      name="update-todo-title"
      onChange={onChangeInputValue}
      placeholder={i18next.t(TRANSLATIONS.updateTodoForm.title)}
      value={currentTodo?.title || ''}
    />
    <SimpleInput
      id="update-todo-description"
      name="update-todo-description"
      onChange={onChangeInputValue}
      placeholder={i18next.t(TRANSLATIONS.updateTodoForm.description)}
      value={currentTodo?.description || ''}
    />
  </Modal>
);

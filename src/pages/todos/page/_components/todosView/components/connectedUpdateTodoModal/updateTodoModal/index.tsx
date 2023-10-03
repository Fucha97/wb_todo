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
  onChangeInputDescription: (event: SimpleInputBlurEventType) => void;
  onChangeInputTitle: (event: SimpleInputBlurEventType) => void;
  currentTodo: TodoType;
};

export const UpdateTodoModalView = ({
  isModalOpen,
  actionsConfig,
  onCloseModalClick,
  onChangeInputTitle,
  onChangeInputDescription,
  currentTodo,
}: PropsType) => (
  <Modal
    actionsConfig={actionsConfig}
    isOpened={isModalOpen}
    isShowCloseIcon
    onClose={onCloseModalClick}
    title={i18next.t(TRANSLATIONS.updateTodoForm.modalTitle)}
  >
    <SimpleInput
      id="update-todo-title"
      name="update-todo-title"
      onChange={onChangeInputTitle}
      placeholder={i18next.t(TRANSLATIONS.updateTodoForm.titleInputPlaceholder)}
      value={currentTodo?.title || ''}
    />
    <SimpleInput
      id="update-todo-description"
      name="update-todo-description"
      onChange={onChangeInputDescription}
      placeholder={i18next.t(
        TRANSLATIONS.updateTodoForm.descriptionInputPlaceholder,
      )}
      value={currentTodo?.description || ''}
    />
  </Modal>
);

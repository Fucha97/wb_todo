import { useState } from 'react';
import {
  SimpleInput,
  ButtonLink,
  ButtonClickEventType,
} from '@wildberries/ui-kit';
import { SimpleInputPropsType } from '@wildberries/ui-kit/lib/simple-input/types';
import i18next from 'i18next';
import classnames from 'classnames/bind';
import { TRANSLATIONS } from '@/pages/todos/_constants/translations';
import {
  selectTodosLoading,
  createTodoActionSaga,
} from '@/pages/todos/_redux/todo-module';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'NewTodoForm';

type PropsType = {
  loading: ReturnType<typeof selectTodosLoading>;
  createTodo: typeof createTodoActionSaga;
};

export const NewTodoForm = ({ loading, createTodo }: PropsType) => {
  const [newTodoTitle, setNewTodoTitle] = useState<string>('');
  const [newTodoDescription, setNewTodoDescription] = useState<string>('');
  const todoCreateDisabled = newTodoTitle.trim().length === 0;

  const handleChangeNewTodoTitle: SimpleInputPropsType['onChange'] = ({
    value,
  }) => {
    setNewTodoTitle(value);
  };

  const handleChangeNewTodoDescription: SimpleInputPropsType['onChange'] = ({
    value,
  }) => {
    setNewTodoDescription(value);
  };

  const handleTodoCreate: (event?: ButtonClickEventType) => void = () => {
    createTodo({ title: newTodoTitle, description: newTodoDescription });
    setNewTodoTitle('');
    setNewTodoDescription('');
  };

  return (
    <div className={cn(`${BLOCK_NAME}__newTodo`)}>
      <div className={cn(`${BLOCK_NAME}__inputs_wrapper`)}>
        <SimpleInput
          id="add-todo-item"
          name="add-todo-item"
          onChange={handleChangeNewTodoTitle}
          placeholder={i18next.t(TRANSLATIONS.newTodoForm.title)}
          value={newTodoTitle}
        />
        <SimpleInput
          id="add-todo-item"
          name="add-todo-item"
          onChange={handleChangeNewTodoDescription}
          placeholder={i18next.t(TRANSLATIONS.newTodoForm.description)}
          value={newTodoDescription}
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
  );
};

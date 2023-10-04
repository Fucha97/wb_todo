import classnames from 'classnames/bind';
import React from 'react';
import { ButtonLink, Checkbox, Text } from '@wildberries/ui-kit';
import i18next from 'i18next';
import { TodoType } from '@/pages/todos/_redux/todo-module';
import { TRANSLATIONS } from '@/pages/todos/_constants/translations';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'TodoCard';

export type PropsType = TodoType & {
  onUpdateTodoClick?: (id: TodoType['id']) => void;
  onUpdateTodo: (todo: TodoType) => void;
  onDeleteTodo: (id: TodoType['id']) => void;
  id: TodoType['id'];
  createdAt: TodoType['createdAt'];
  title: TodoType['title'];
  description: TodoType['description'];
  isComplete: TodoType['isComplete'];
};
export const TodoCard = ({
  onUpdateTodoClick,
  onDeleteTodo,
  onUpdateTodo,
  id,
  title,
  description,
  createdAt,
  isComplete,
}: PropsType) => {
  const handlerUpdateTodoClick = () => {
    onUpdateTodoClick(id);
  };
  const handlerCompletedChange = () => {
    onUpdateTodo({
      id,
      title,
      description,
      createdAt,
      isComplete: !isComplete,
    });
  };
  const handlerDeleteClick = () => {
    onDeleteTodo(id);
  };

  return (
    <div className={cn(BLOCK_NAME)}>
      <div className={cn(`${BLOCK_NAME}__toggle`)}>
        <Checkbox
          checked={isComplete}
          id={id}
          name="content"
          onChange={handlerCompletedChange}
          toggle
        />
      </div>
      <div className={cn(`${BLOCK_NAME}__content`)}>
        <div className={cn(`${BLOCK_NAME}__truncate`)}>
          <Text color="black" size="h2" text={title} />
        </div>
        <div className={cn(`${BLOCK_NAME}__truncate`)}>
          <Text
            color="black"
            size="h5-bold"
            text={i18next.t(TRANSLATIONS.todoItem.createdAtTitle, {
              createdAt,
            })}
          />
        </div>
        <div className={cn(`${BLOCK_NAME}__truncate`)}>
          <Text color="black" size="h3-bold" text={description} />
        </div>
      </div>
      <div className={cn(`${BLOCK_NAME}__controls`)}>
        <ButtonLink
          onClick={handlerUpdateTodoClick}
          text={i18next.t(TRANSLATIONS.todoItem.updateButtonTitle)}
          variant="accent"
        />
        <ButtonLink
          onClick={handlerDeleteClick}
          text={i18next.t(TRANSLATIONS.todoItem.deleteButtonTitle)}
          variant="accent"
        />
      </div>
    </div>
  );
};

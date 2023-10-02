import classnames from 'classnames/bind';
import React from 'react';
import {
  ButtonClickEventType,
  ButtonLink,
  Checkbox,
  Text,
} from '@wildberries/ui-kit';
import { CheckboxChangeEventType } from '@wildberries/ui-kit/lib/checkbox/types';
import { TodoType } from '@/pages/todos/_redux/todo-module';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'TodoCard';

export type PropsType = TodoType & {
  onUpdateTodoClick?: (id: TodoType['id']) => void;
  updateTodo: (todo: TodoType) => void;
  deleteTodo: (id: TodoType['id']) => void;
};
export const TodoCard = ({
  onUpdateTodoClick,
  updateTodo,
  deleteTodo,
  ...todoProps
}: PropsType) => {
  const handlerUpdateTodoClick: (event: ButtonClickEventType) => void = () => {
    onUpdateTodoClick(todoProps.id);
  };
  const handlerCompletedChange: (
    event: CheckboxChangeEventType,
  ) => void = () => {
    updateTodo({ ...todoProps, isComplete: !todoProps.isComplete });
  };
  const handlerDeleteClick = () => {
    deleteTodo(todoProps.id);
  };

  return (
    <div className={cn(BLOCK_NAME)}>
      <div className={cn(`${BLOCK_NAME}__toggle`)}>
        <Checkbox
          checked={todoProps.isComplete}
          id={todoProps.id}
          name="content"
          onChange={handlerCompletedChange}
          toggle
        />
      </div>
      <div className={cn(`${BLOCK_NAME}__content`)}>
        <div className={cn(`${BLOCK_NAME}__truncate`)}>
          <Text color="black" size="h2" text={todoProps.title} />
        </div>
        <div className={cn(`${BLOCK_NAME}__truncate`)}>
          <Text
            color="black"
            size="h5-bold"
            text={`Created date: ${todoProps.createdAt}`}
          />
        </div>
        <div className={cn(`${BLOCK_NAME}__truncate`)}>
          <Text color="black" size="h3-bold" text={todoProps.description} />
        </div>
      </div>
      <div className={cn(`${BLOCK_NAME}__controls`)}>
        <ButtonLink
          onClick={handlerUpdateTodoClick}
          text="Update"
          variant="accent"
        />
        <ButtonLink
          onClick={handlerDeleteClick}
          text="Delete"
          variant="accent"
        />
      </div>
    </div>
  );
};

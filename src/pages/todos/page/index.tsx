import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { Todos } from '@/pages/todos/page/_components/todoList';
import { ConnectedUpdateTodoModal } from './_components/updateTodoModal';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Todo-page';

export const Page = memo(() => (
  <div className={cn(BLOCK_NAME)} data-page="home-page">
    <div className={cn(`${BLOCK_NAME}__content-wrapper`)}>
      <Todos />
    </div>
    <ConnectedUpdateTodoModal />
  </div>
));

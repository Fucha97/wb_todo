import React, { memo } from 'react';
import classnames from 'classnames/bind';
import styles from './index.module.scss';
import { TodosView } from './_components/todos-view';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Todo-page';

export const Page = memo(() => (
  <div className={cn(BLOCK_NAME)} data-page="home-page">
    <TodosView />
  </div>
));

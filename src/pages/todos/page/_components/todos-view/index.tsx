import classnames from 'classnames/bind';
import styles from './index.module.scss';
import { ConnectedNewTodoForm } from './components/connected-new-todo-form';
import { ConnectedTodoList } from './components/connected-todo-list';
import { ConnectedUpdateTodoModal } from './components/connected-update-todo-modal';

const BLOCK_NAME = 'TodosView';
const cn = classnames.bind(styles);

export const TodosView = () => (
  <div className={cn(BLOCK_NAME)}>
    <div className={cn(`${BLOCK_NAME}__content-wrapper`)}>
      <ConnectedNewTodoForm />
      <ConnectedTodoList />
    </div>
    <ConnectedUpdateTodoModal />
  </div>
);

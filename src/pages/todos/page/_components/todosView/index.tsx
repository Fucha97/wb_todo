import classnames from 'classnames/bind';
import styles from './index.module.scss';
import { ConnectedNewTodoForm } from './components/connectedNewTodoForm';
import { ConnectedTodoList } from './components/connectedTodoList';
import { ConnectedUpdateTodoModal } from './components/connectedUpdateTodoModal';

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
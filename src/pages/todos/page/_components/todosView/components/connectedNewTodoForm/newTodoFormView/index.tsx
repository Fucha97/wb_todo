import { SimpleInput, ButtonLink } from '@wildberries/ui-kit';
import { SimpleInputChangeEventType } from '@wildberries/ui-kit/lib/simple-input/types';
import i18next from 'i18next';
import classnames from 'classnames/bind';
import { TRANSLATIONS } from '@/pages/todos/_constants/translations';
import { selectTodosLoading } from '@/pages/todos/_redux/todo-module';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'NewTodoForm';

type PropsType = {
  loading: ReturnType<typeof selectTodosLoading>;
  onChangeInput: (event: SimpleInputChangeEventType) => void;
  onClickCreate: () => void;
  newTodo: { title: string; description: string };
  todoCreateDisabled: boolean;
};

export const NewTodoFormView = ({
  loading,
  onChangeInput,
  onClickCreate,
  newTodo,
  todoCreateDisabled,
}: PropsType) => {
  return (
    <div className={cn(`${BLOCK_NAME}__newTodo`)}>
      <div className={cn(`${BLOCK_NAME}__inputs_wrapper`)}>
        <SimpleInput
          id="add-todo-title"
          name="add-todo-title"
          onChange={onChangeInput}
          placeholder={i18next.t(TRANSLATIONS.newTodoForm.title)}
          value={newTodo.title}
        />
        <SimpleInput
          id="add-todo-description"
          name="add-todo-description"
          onChange={onChangeInput}
          placeholder={i18next.t(TRANSLATIONS.newTodoForm.description)}
          value={newTodo.description}
        />
      </div>
      <ButtonLink
        disabled={todoCreateDisabled || loading}
        isLoading={loading}
        onClick={onClickCreate}
        text={i18next.t(TRANSLATIONS.newTodoForm.addButtonTitle)}
        variant="accent"
      />
    </div>
  );
};

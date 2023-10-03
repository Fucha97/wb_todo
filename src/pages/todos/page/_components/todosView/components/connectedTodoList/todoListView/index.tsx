import React from 'react';
import {
  // getTodosAction,
  selectTodos,
  deleteTodoActionSaga,
  updateTodoActionSaga,
  setUpdateTodoIdAction,
} from '@/pages/todos/_redux/todo-module';
import { TodoCard } from '@/pages/todos/page/_components/todosView/components/connectedTodoList/todoListView/todoCard';

type PropsType = {
  todos: ReturnType<typeof selectTodos>;
  setUpdateTodoId: typeof setUpdateTodoIdAction;
  updateTodo: typeof updateTodoActionSaga;
  deleteTodo: typeof deleteTodoActionSaga;
};

export const TodoListView = ({
  todos,
  setUpdateTodoId,
  updateTodo,
  deleteTodo,
}: PropsType) => (
  <div>
    {todos.map(({ id, isComplete, title, description, createdAt }) => (
      <TodoCard
        key={id}
        createdAt={createdAt}
        deleteTodo={deleteTodo}
        description={description}
        id={id}
        isComplete={isComplete}
        onUpdateTodoClick={setUpdateTodoId}
        title={title}
        updateTodo={updateTodo}
      />
    ))}
  </div>
);

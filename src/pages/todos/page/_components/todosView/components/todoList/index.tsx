import React, { useEffect } from 'react';
import {
  getTodosAction,
  selectTodos,
  deleteTodoAction,
  updateTodoAction,
  setUpdateTodoIdAction,
} from '@/pages/todos/_redux/todo-module';
import { TodoCard } from '@/pages/todos/page/_components/todosView/components/todoCard';

type PropsType = {
  todos: ReturnType<typeof selectTodos>;
  setUpdateTodoId: typeof setUpdateTodoIdAction;
  updateTodo: typeof updateTodoAction;
  deleteTodo: typeof deleteTodoAction;
  getTodos: typeof getTodosAction;
};

export const TodoList = ({
  todos,
  setUpdateTodoId,
  updateTodo,
  deleteTodo,
  getTodos,
}: PropsType) => {
  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <div>
      {todos.map(({ id, isComplete, title }) => (
        <TodoCard
          key={id}
          deleteTodo={deleteTodo}
          id={id}
          isComplete={isComplete}
          onUpdateTodoClick={setUpdateTodoId}
          title={title}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
};

import React from 'react';
import { TodoType } from '@/pages/todos/_redux/todo-module';
import { TodoCard } from '@/pages/todos/page/_components/todos-view/components/connected-todo-list/todo-list-view/todo-card';

type PropsType = {
  todoItems: Array<TodoType>;
  onUpdateTodoClick: (id: TodoType['id']) => void;
  onUpdateTodo: (newTodo: TodoType) => void;
  onDeleteTodo: (id: TodoType['id']) => void;
};

export const TodoListView = ({
  todoItems,
  onUpdateTodoClick,
  onUpdateTodo,
  onDeleteTodo,
}: PropsType) => (
  <div>
    {todoItems.map(({ id, isComplete, title, description, createdAt }) => (
      <TodoCard
        key={id}
        createdAt={createdAt}
        description={description}
        id={id}
        isComplete={isComplete}
        onDeleteTodo={onDeleteTodo}
        onUpdateTodo={onUpdateTodo}
        onUpdateTodoClick={onUpdateTodoClick}
        title={title}
      />
    ))}
  </div>
);

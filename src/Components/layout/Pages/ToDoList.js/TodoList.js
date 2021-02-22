import React, { useState, useEffect } from 'react';

import TodoForm from './TodoForm';
import TodoTasks from './TodoTasks';

const TodoList = () => {
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState(() => {
    const localtodoList = localStorage.getItem('todoList');
    return localtodoList ? JSON.parse(localtodoList) : [];
  });

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="list">
      <h1 className="list__header">To Do List</h1>
      <TodoForm
        input={input}
        setInput={setInput}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <TodoTasks todoList={todoList} setTodoList={setTodoList} input={input} />
    </div>
  );
};

export default TodoList;

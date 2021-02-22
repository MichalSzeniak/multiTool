import React from 'react'
import Task from './Task'
const TodoTasks = ({ todoList, setTodoList, }) => {


  return (
    <div>
        {todoList.map(item => (
            <Task key={item.key} task={item} setTodoList={setTodoList} todoList={todoList}/>
        ))}
    </div>
  );
};

export default TodoTasks;

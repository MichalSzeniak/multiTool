import React from 'react'
import Task from './Task'
const TodoTasks = ({ todoList, setTodoList, }) => {


  return (
    <ul className="list">
        {todoList.map(item => (
            <Task key={item.key} status={item.status} task={item} setTodoList={setTodoList} todoList={todoList}/>
        ))}
    </ul>
  );
};
export default TodoTasks;

import React from 'react'





const Task = ({task, todoList, setTodoList}) => {

    const handleDelete = () => {
        setTodoList(todoList.filter(item => item.key !== task.key))
         
      }

    return (
<li>
  {task.text}
  <div>
    <button>✔</button>
    <button onClick={handleDelete}>⨉</button>
  </div>
</li>
    )
}

export default Task

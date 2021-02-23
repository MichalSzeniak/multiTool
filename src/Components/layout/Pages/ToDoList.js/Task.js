import React, {useState} from 'react'





const Task = ({task, todoList, setTodoList, status}) => {


    const handleConfirm = () => {
      setTodoList(todoList.map(item => {
        if(item.key === task.key) {
          return {
            ...item, status: !item.status
          };
        }
        return item
      }
      ))
    }

    const handleDelete = () => {
        setTodoList(todoList.filter(item => item.key !== task.key));
      }

    return (
<li className={status? "list__item--active list__item" : "list__item"} >
  <span className="list__item--text">
  {task.text}
  </span>
  <div className="buttons__box">
    <button className="button__confirm" onClick={handleConfirm}>✔</button>
    <button className="button__delete" onClick={handleDelete}>⨉</button>
  </div>
</li>
    )
}

export default Task

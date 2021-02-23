import React from 'react'

const TodoForm = ({input, setInput, todoList, setTodoList}) => {

const handleInput = (e) => {
    setInput(e.target.value);
}

const handleAddTask = () => {
    setTodoList([...todoList, {text: input, key: Math.random() * 10000, status: false}]);
    setInput('')
}

    return (
        <div>
            <form action="javascript:void(0);" onSubmit={handleAddTask}>
                <input className="form__input" type="text" required placeholder="new task" value={input} onChange={handleInput} />
                <button className="form__button">Add a task</button>
            </form>
        </div>
    )
}

export default TodoForm

import React from 'react'

const TodoForm = ({input, setInput, todoList, setTodoList}) => {

const handleInput = (e) => {
    setInput(e.target.value);
}

const handleAddTask = () => {
    setTodoList([...todoList, {text: input, key: Math.random() * 10000}]);
    setInput('')
}

    return (
        <div>
            <form action="javascript:void(0);" onSubmit={handleAddTask}>
                <input type="text" required placeholder="new task" value={input} onChange={handleInput} />
                <button>Add task</button>
            </form>
        </div>
    )
}

export default TodoForm

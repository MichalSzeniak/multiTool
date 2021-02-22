import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Clock from './Pages/Clock'
import TodoList from './Pages/ToDoList.js/TodoList'

const Page = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact render={() => <Clock />}/>
                <Route path="/toDoList" exact render={() => <TodoList />}/>
            </Switch>
        </div>
    )
}

export default Page

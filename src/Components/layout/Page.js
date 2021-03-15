import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Clock from './Pages/Clock'
import TodoList from './Pages/ToDoList.js/TodoList'
import Stopwatch from './Pages/Stopwatch'
import Timer from './Pages/Timer'
import Weather from './Pages/Weather'

const Page = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact render={() => <Clock />}/>
                <Route path="/toDoList" render={() => <TodoList />}/>
                <Route path="/stopwatch" render={() => <Stopwatch />}/>
                <Route path="/timer" render={() => <Timer />}/>
                <Route path="/weather" render={() => <Weather />}/>
            </Switch>
        </div>
    )
}

export default Page

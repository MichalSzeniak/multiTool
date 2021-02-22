import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Clock from './Pages/Clock'

const Page = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact render={() => <Clock />}/>
            </Switch>
        </div>
    )
}

export default Page

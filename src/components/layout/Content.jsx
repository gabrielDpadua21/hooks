import './Content.css'
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../../views/examples/Home'
import NotFound from '../../views/examples/NotFound'
import UseState from '../../views/examples/UseState'
import UseEffect from '../../views/examples/UseEffect'
import UseRef from '../../views/examples/UseRef'
import UseCallback from '../../views/examples/UseCallback'
import UseMemo from '../../views/examples/UseMemo'
import UseContext from '../../views/examples/UseContext'
import UseReducer from '../../views/examples/UseReducer'
import UseCustom from '../../views/examples/UseCustom'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/useState" component={UseState} />
            <Route path="/useEffect" component={UseEffect} />
            <Route path="/useRef" component={UseRef} />
            <Route path="/useCallback" component={UseCallback} />
            <Route path="/useMemo" component={UseMemo} />
            <Route path="/useContext" component={UseContext} />
            <Route path="/useReducer" component={UseReducer} />
            <Route path="/useCustom" component={UseCustom} />
            <Route path="*" component={NotFound} />
        </Switch>
    </main>
)

export default Content
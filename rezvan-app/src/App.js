import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css'

import Login from './Component/Login'
import Messenger from './Component/Messenger'
import Signup from './Component/Signup'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import appReducer from './reducer/appReducer'

const store = createStore(appReducer)

function App () {
  return (
    <Provider store={store}>
      <Router>
        <Route path='/' exact component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/messenger' component={Messenger} />
      </Router>
    </Provider>
  )
}
export default App
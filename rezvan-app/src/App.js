import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Login from './Component/Login'
import Messenger from './Component/Messenger'
import Signup from './Component/Signup'

import logger from 'redux-logger'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import conversation from './reducer/appReducer'

const store = createStore(conversation, applyMiddleware(logger))

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
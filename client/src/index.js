import React from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Routing from './Components/Routing/Routing'
import ASide from '@components/aSide'
import Header from '@components/Header'

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Header />
          <ASide />
          <Routing />
        </Route>
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

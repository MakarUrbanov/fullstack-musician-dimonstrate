import React from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from 'react-router-dom'
import Routing from './Components/Routing/Routing'
import ASide from '@components/aSide'
import Header from '@components/Header'
import Main_page from '@components/Pages/Main_page'
import Admin from '@components/Pages/Admin'
import Band_Link from '@components/Pages/Band_Link'

function App() {
  return (
    <HashRouter>
      {/*<Switch>*/}
      <Header />
      <ASide />
      <Switch>
        <Route exact path="/" component={Main_page} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/link" component={Band_Link} />
        <Route exact path="/quiz" component={} />
      </Switch>
      {/*</Switch>*/}
    </HashRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

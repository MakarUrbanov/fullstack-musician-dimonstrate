import Admin from '@components/Pages/Admin'
import Main_page from '@components/Pages/Main_page'
import { Route, Switch } from 'react-router-dom'
import React from 'react'
import Band_Link from '@components/Pages/Band_Link'

export default function Routing() {
  return (
    <Switch>
      <Route exact path="/" component={Main_page} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/link" component={Band_Link} />
    </Switch>
  )
}

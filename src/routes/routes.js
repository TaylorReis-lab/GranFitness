import React from 'react'

import {
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom/cjs/react-router-dom.min'

import { Home, Terms } from '../containers'

function Routes() {
    return (
      <Router>
        <Switch>
          <Route component={Home} path="/" />
          <Route component={Terms} path="/Termos-de-Condicoes" />
        </Switch>
      </Router>
    )
}

export default Routes
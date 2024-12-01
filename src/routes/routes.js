import React from 'react'

import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom/cjs/react-router-dom.min'

import { Home, Terms, Politicas, Planos } from '../containers'

function Routes() {
  return (
    <Router>
      <Route exact component={Home} path="/" />
      <Route component={Planos} path="/planos" />
      <Route component={Terms} path="/termos-de-condicoes" />
      <Route component={Politicas} path="/politica-de-privacidade" />
    </Router>
  )
}

export default Routes

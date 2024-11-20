import React from 'react'
import ReactDOM from 'react-dom'

import { Home } from './containers/Home'
import Globalstyles from './styles/globalstyles'

ReactDOM.render(
  <>
    <React.StrictMode>
      <Home />
    </React.StrictMode>
    <Globalstyles />
  </>,

  document.getElementById('root')
)

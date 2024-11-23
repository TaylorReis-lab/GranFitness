import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './routes/routes'
import Globalstyles from './styles/globalstyles'

ReactDOM.render(
  <>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
    <Globalstyles />
  </>,

  document.getElementById('root')
)

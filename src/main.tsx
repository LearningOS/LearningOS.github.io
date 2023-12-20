import React from 'react'
import ReactDOM from 'react-dom/client'
import InitRoutes from './router/index.tsx'

import './styles/global.less'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <InitRoutes />
  </React.StrictMode>,
)

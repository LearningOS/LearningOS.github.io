import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'

import store from './store'
import InitRoutes from './router/index.tsx'
import './styles/global.less'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <InitRoutes />
      </Provider>
    </ConfigProvider>
  </React.StrictMode>,
)

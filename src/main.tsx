import React from 'react'
import ReactDOM from 'react-dom/client'
import Routers from './Routers.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from './providers/Provider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <Routers />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)

import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from 'antd'
import { QueryClientProvider } from '@tanstack/react-query'
import { QUERYCLIENT } from './services'
import Rotas from './routes/Rotas'
import AdminProvider from './contexts/AdminProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdminProvider>
      <QueryClientProvider client={QUERYCLIENT}>
        <App>
          <Rotas />
        </App>
      </QueryClientProvider>
    </AdminProvider>
  </StrictMode>,
)
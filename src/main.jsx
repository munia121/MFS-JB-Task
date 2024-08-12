import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Routes.jsx'
import { AuthPrivet } from './component/Auth/AuthPrivet.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthPrivet>
        <RouterProvider router={router} />
      </AuthPrivet>
    </QueryClientProvider>
  </React.StrictMode>,
)

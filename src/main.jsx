import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Routes.jsx'
import { AuthPrivet } from './component/Auth/AuthPrivet.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthPrivet>
      <RouterProvider router={router} />
    </AuthPrivet>
  </React.StrictMode>,
)

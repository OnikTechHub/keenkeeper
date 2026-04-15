import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Router/Router'
import { RouterProvider } from "react-router/dom";
import { ToastContainer } from 'react-toastify';
import Contexts from './Contexts/Contexts';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contexts>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={3000} />
    </Contexts>
  </StrictMode>,
)

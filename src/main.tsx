import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'

import { CartProvider } from './context/cartContext'

import { router } from './app'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router}/>
    </CartProvider>
  </StrictMode>,
)

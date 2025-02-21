import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import { CartProvider } from './context/cartContext'
import { router } from './app'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
    <Toaster 
        position='top-center'
        reverseOrder={false} />
      <RouterProvider router={router}/>
    </CartProvider>
  </StrictMode>,
)

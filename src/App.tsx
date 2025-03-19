import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RouterProvider from './routes'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider } from './context/auth-context'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
)

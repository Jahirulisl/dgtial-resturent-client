import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routers';

//for healmet from react-helmet-async start
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider';
//for healmet from react-helmet-async end

//for quary 
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
     <QueryClientProvider client={queryClient}>
         <HelmetProvider>
        <div className='max-w-screen-xl mx-auto'>
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)

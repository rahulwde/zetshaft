import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'leaflet/dist/leaflet.css';


import {
  
  RouterProvider,
} from "react-router";
import { router } from './Router/Router.jsx';
import AuthProvider from './componets/Context/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <AuthProvider>
   <RouterProvider router={router} />
 </AuthProvider>
  </StrictMode>,
)

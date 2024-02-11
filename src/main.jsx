import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Componets/Home/HomePage';
import Shop from './Componets/Shop/Shop';
const router = createBrowserRouter([
  {
    path: "/",
    element: <div><HomePage></HomePage></div>,  
  },
  {
    path: "/shop",
    element: <Shop></Shop>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)

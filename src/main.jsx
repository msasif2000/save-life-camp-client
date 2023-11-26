import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './layout/Main';
import AuthProvider from './Providers/AuthProvider';
import Login from './pages/Login/Login';
import Register from './pages/Register';
import Home from './pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      }
      ,

      {
        path: '/login',
        element: <Login></Login>
      }, 
      {
        path: '/register', 
      element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
          <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

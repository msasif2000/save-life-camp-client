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
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import AvailableCamps from './pages/AvailableCamps/AvailableCamps';
import CampRegistration from './pages/AvailableCamps/CampRegistration/CampRegistration';
import { axiosSecure } from './hooks/useAxiosSecure';
import DashBoard from './layout/DashBoard';
import PrivateRoute from './Providers/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/availableCamp',
        element: <AvailableCamps></AvailableCamps>
      },
      {
        path: '/joinCamp/:id',
        element: <CampRegistration></CampRegistration>,
        loader: ({ params }) => axiosSecure(`/joinCamp/${params.id}`)
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children: [

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

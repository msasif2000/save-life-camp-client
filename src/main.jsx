import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
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
import Booked from './pages/Dashboard/Booked/Booked';


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
        element: <PrivateRoute><CampRegistration></CampRegistration></PrivateRoute>,
        loader: ({ params }) => axiosSecure(`/joinCamp/${params.id}`)
      }
    ]
  },
  {
    path: 'dashboard',
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: 'joinedCamp',
        element: <Booked></Booked>
      },
      //admin routes
      
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={new QueryClient()}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)

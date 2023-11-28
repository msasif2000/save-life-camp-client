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
import AddCamp from './AdminPages/AddCamp/AddCamp';
import ManageCamps from './AdminPages/ManageCamps/ManageCamps';
import UpdateCamp from './AdminPages/UpdateCamp/UpdateCamp';
import ErrorPage from './components/ErrorPage/ErrorPage';
import AllUsers from './AdminPages/AllUsers/AllUsers';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children: [
      //user routes
      {
        path: 'joinedCamp',
        element: <Booked></Booked>
      },
      {
        path: 'users',
        element: <AllUsers></AllUsers>
      },
      //admin routes
      {
        path: 'addCamp',
        element: <AddCamp></AddCamp>
      },
      {
        path: 'manageCamp',
        element: <ManageCamps></ManageCamps>
      },
      {
        path: 'updateCamp/:id',
        element: <UpdateCamp></UpdateCamp>,
        loader: ({ params }) => axiosSecure(`/joinCamp/${params.id}`)
      }
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

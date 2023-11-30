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
import DashBoard from './layout/DashBoard';
import PrivateRoute from './Providers/PrivateRoute';
import Booked from './pages/Dashboard/Booked/Booked';
import AddCamp from './AdminPages/AddCamp/AddCamp';
import ManageCamps from './AdminPages/ManageCamps/ManageCamps';
import UpdateCamp from './AdminPages/UpdateCamp/UpdateCamp';
import ErrorPage from './components/ErrorPage/ErrorPage';
import AllUsers from './AdminPages/AllUsers/AllUsers';
import Profile from './pages/Profile/Profile';
import ManageBooking from './AdminPages/ManageBooking/ManageBooking';
import UpcomingCamp from './AdminPages/UpcomingCamp/UpcomingCamp';
import Contact from './pages/Contact/Contact';
import { axiosSecure } from './hooks/useAxiosSecure';
import UpdateProfile from './pages/UpdateProfile/UpdateProfile';
import Review from './pages/Dashboard/Review/Review';
import Payment from './pages/Dashboard/Payment/Payment';
import PaymentHistory from './pages/Dashboard/PaymentHistory/PaymentHistory';
import AddReview from './pages/Dashboard/Review/AddReview';
import CampDetails from './pages/AvailableCamps/CampDetails';


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
      },
      {
        path: 'detailsCamp/:id',
        element: <CampDetails></CampDetails>,
        loader: ({ params }) => axiosSecure(`/joinCamp/${params.id}`) 
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children: [
      {
        path: '/dashboard',
        element: <Profile></Profile>
      },
      //user routes
      {
        path: 'joinedCamp',
        element: <Booked></Booked>
      },

      {
        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: 'review/:id',
        element: <Review></Review>,
        loader: ({ params }) => axiosSecure(`/joinCamp/${params.id}`)
      },
      {
        path: 'addReview/:id',
        element: <AddReview></AddReview>
      },

      {
        path: 'payment/:id',
        element: <Payment></Payment>,
        loader: ({ params }) => axiosSecure(`/participants/${params.id}`)
      },


      //admin routes
      {
        path: 'addCamp',
        element: <AddCamp></AddCamp>
      },
      {
        path: 'users',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'upcomingCamp',
        element: <UpcomingCamp></UpcomingCamp>
      }
      ,
      {
        path: 'manageCamp',
        element: <ManageCamps></ManageCamps>
      },
      {
        path: 'updateCamp/:id',
        element: <UpdateCamp></UpdateCamp>,
        loader: ({ params }) => axiosSecure(`/joinCamp/${params.id}`)
      },
      {
        path: 'manageBookings',
        element: <ManageBooking></ManageBooking>
      },
      {
        path: 'updateProfile',
        element: <UpdateProfile></UpdateProfile>
      },


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

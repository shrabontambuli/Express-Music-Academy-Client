import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

import ErrorPage from './Pages/Shared/ErrorPage/ErrorPage.jsx';
import Login from './Pages/LogIn/Login.jsx';
import SignUp from './Pages/SignUp/SignUp.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import InstructorPage from './Pages/InstructorPage/InstructorPage.jsx';
import ClassesPage from './Pages/ClassesPage/ClassesPage.jsx';
import DashBoard from './Pages/DashBoard/DashBoard.jsx';
import MySelectedClass from './Pages/DashBoard/MySelectedClass/MySelectedClass.jsx';
import DashBoardHome from './Pages/DashBoard/DashBoardHome.jsx';
import ManageUsers from './Pages/DashBoard/AdminDashBoard/ManageUsers/ManageUsers.jsx';
import AdminRoute from './Pages/DashBoard/AdminDashBoard/ManageUsers/AdminRoute.jsx';
import AddClass from './Pages/DashBoard/InstructorDashboard/AddClass.jsx';
import MyClasses from './Pages/DashBoard/InstructorDashboard/MyClasses.jsx';
import InstructorRoute from './Pages/DashBoard/InstructorRoute/InstructorRoute.jsx';
import Payment from './Pages/DashBoard/Payment/Payment.jsx';
import EnrolledClasses from './Pages/DashBoard/EnrolledClasses.jsx';
import PaymentHistory from './Pages/DashBoard/Payment/PaymentHistory.jsx';
import ManageClasses from './Pages/DashBoard/AdminDashBoard/ManageClasses.jsx';
import Feedback from './Pages/DashBoard/AdminDashBoard/Feedback.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/instructors",
        element: <InstructorPage />
      },
      {
        path: "/classes",
        element: <ClassesPage />,
        loader: () => fetch('https://music-academy-eta.vercel.app/classes')
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element:<AdminRoute><DashBoard /></AdminRoute>,
    children: [
      {
        path: "/dashboard",
        element: <DashBoardHome/>
      },
      {
        path: "mySelected",
        element: <MySelectedClass />
      },
      {
        path: "enrolledClasses",
        element: <EnrolledClasses/>
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory/>
      },
      {
        path: "payment/:_id",
        element: <Payment/>,
        loader: ({params}) => fetch(`https://music-academy-eta.vercel.app/selected/${params._id}`)
      },

      // Admin
      {
        path: "manageUsers",
        element: <AdminRoute><ManageUsers/></AdminRoute> 
      },
      {
        path: "manageClasses",
        element: <AdminRoute><ManageClasses/></AdminRoute>,
        loader: () => fetch('https://music-academy-eta.vercel.app/classes')
      },
      {
        path: "feedback/:_id",
        element: <AdminRoute><Feedback/></AdminRoute>,
        loader: ({params}) => fetch(`https://music-academy-eta.vercel.app/classes/${params._id}`)
      },

      // Instructor
      {
        path: "addClass",
        element: <InstructorRoute><AddClass/></InstructorRoute> 
      },
      {
        path: "myClasses",
        element: <InstructorRoute><MyClasses/></InstructorRoute>
      }
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import Donation from './Component/Donation/Donation.jsx';
import Statistics from './Component/Statistics/Statistics.jsx';
import Home from './Component/Home/Home.jsx';
import CardDetails from './Component/CardDetails/CardDetails.jsx';
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Donation",
        element: <Donation></Donation>,
        loader: () => fetch('Data.json')
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
        loader : () => fetch('Data.json')
      },
      {
        path: "/card/:id",
        element: <CardDetails></CardDetails>,
        loader: () => fetch('../Data.json')
      },
      
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

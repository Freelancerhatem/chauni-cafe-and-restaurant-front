import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layouts from './components/Layouts/Layouts';
import Home from './Pages/Home/Home';
import Allitems from './Pages/Allitems/Allitems';
import Profile from './Pages/Profile/Profile';
import SinglePages from './Pages/SinglePages/SinglePages';
import Order from './Pages/Order/Order';
import LoginPage from './Pages/LoginPage/LoginPage';
import Registration from './Pages/Registration/Registration';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import MyOrders from './Pages/MyOrders/MyOrders';
import AddFood from './Pages/AddFood/AddFood';
import MyAddedFoods from './Pages/MyAddedFoods/MyAddedFoods';
import UpdateMyFood from './Pages/MyAddedFoods/UpdateMyFood/UpdateMyFood';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import TopFood from './Pages/TopFood/TopFood';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      
      {
        path:'allitems',
        element:<Allitems></Allitems>,
        loader:()=>fetch('https://chauni-cafe-server.vercel.app/api/v1/foods')
      },
      {
        path:'details/:id',
        element:<PrivateRoute><SinglePages></SinglePages></PrivateRoute>,
        loader:({params})=>fetch(`https://chauni-cafe-server.vercel.app/api/v1/details/${params.id}`)
      },
      {
        path:'order/:id',
        element:<PrivateRoute><Order></Order></PrivateRoute>,
        loader:({params})=>fetch(`https://chauni-cafe-server.vercel.app/api/v1/details/${params.id}`)
      },
      {
        path:'addFood',
        element:<PrivateRoute><AddFood></AddFood></PrivateRoute>,
        
      },
      {
        path:'topFood',
        element:<TopFood></TopFood>,
        loader:()=>fetch('https://chauni-cafe-server.vercel.app/api/v1/foods')
        
      },
      {
        path:'myAddFood',
        element:<PrivateRoute><MyAddedFoods></MyAddedFoods></PrivateRoute>,
        
      },
      {
        path:'updateFood/:id',
        element:<PrivateRoute><UpdateMyFood></UpdateMyFood></PrivateRoute>,
        
      },
      {
        path:'MyOrders',
        element:<PrivateRoute><MyOrders></MyOrders></PrivateRoute>,
        
      },
      {
        path:'login',
        element:<LoginPage></LoginPage>
      },
      {
        path:'signup',
        element:<Registration></Registration>
      },
      {
        path:'profile',
        element:<Profile></Profile>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </HelmetProvider>
        
  </React.StrictMode>,
)


import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Home/Home/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Deshboard from "../Layout/Deshboard";
import Cart from "../Pages/Deshboard/Cart/Cart";
import AllUsers from "../Pages/Deshboard/AllUsers/AllUsers";
import AddItems from "../Pages/Deshboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'menu',
        element:<Menu></Menu>
      },
        {
        path:'order/:category',
        element:<Order></Order>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
      path:'signup',
      element:<SignUp></SignUp>
      },
      {
      path:'secret',
      element:<PrivateRoute>
        <Secret></Secret>
      </PrivateRoute>
      },
    ]
  },
   // root level admin routes
  {
    path:'deshboard',
    element:<PrivateRoute><Deshboard></Deshboard></PrivateRoute>,
    children:[
      //normal users routes
      {
        path:'cart',
        element:<Cart></Cart>,
      },

      //admin only routes 
      {
        path: 'addItems',
       element:<AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path:'allusers',
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
      }
    ]
  }
]);
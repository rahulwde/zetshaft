import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../componets/Home/Home";
import AuthLayout from "../AuthLayout/AuthLayout";
import Login from "../componets/Pages/Login/Login";
import Register from "../componets/Pages/Login/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        index:true , Component:Home
      }
    ]
  },{
    path:"/",
    element:<AuthLayout></AuthLayout>,
    children:[
      {
        path:"login",
        element:<Login></Login>
      },
      {
      path:"register",
      element:<Register></Register>    
      }
    ]
  }
]);
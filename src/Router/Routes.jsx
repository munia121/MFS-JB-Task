import { createBrowserRouter } from "react-router-dom";
import MainlayOut from "../MainlayOut/MainlayOut";
import HomePage from "../pages/HomePage/HomePage";
import Register from "../component/Auth/Register";
import Login from "../component/Auth/Login";
import Dashboard from "../pages/Dashoard/DashBoard";
import Logout from "../component/Auth/LogOut";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainlayOut></MainlayOut>,
      children:[
        {
            path:'/',
            element:<HomePage></HomePage>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'logout',
          element:<Logout></Logout>
        },
        {
          path:'dashboard',
          element:<Dashboard></Dashboard>
        }
      ]
    },
  ]);
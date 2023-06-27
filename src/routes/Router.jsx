import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Pages/Error/Error";
import Checkout from "../Pages/Checkout/Checkout";
import Order from "../Pages/Order/Order";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/checkout/:id",
                element: <PrivateRoute><Checkout />,</PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: "/order",
                element: <PrivateRoute> <Order /></PrivateRoute>
            }
        ]
    },
    {
        path: "login",
        element: <Login/>
    },
    {
        path: "register",
        element: <Register/>
    },
    {
        path: "*",
        element: <Error/>
    }
])

export default router;
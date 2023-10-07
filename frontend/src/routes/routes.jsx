import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home";
import Error from "../components/pages/Error";
import Login from "../components/authentication/Login"
import Signup from "../components/authentication/Signup";
import Main from "../layout/Main";
import Products from "../components/pages/Products";
import GetStarted from "../components/pages/GetStarted";
import Cart from "../components/pages/Cart";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/products',
                element: <Products/>
            },
            {
                path: '/getstarted',
                element: <GetStarted/>,
                children: [
                    {
                        path: '/getstarted',
                        element: <Login/>
                    },
                    {
                        path: '/getstarted/signup',
                        element: <Signup/>
                    }
                ]
            },
            {
                path: '/cart',
                element: <Cart/>
            }
        ]
    },
    {
        path: '*',
        element: <Error/>,
    }
])

export default routes
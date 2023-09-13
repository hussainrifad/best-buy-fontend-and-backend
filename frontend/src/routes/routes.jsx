import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home";
import Error from "../components/pages/Error";
import Login from "../components/authentication/Login"
import Signup from "../components/authentication/Signup";
import Main from "../layout/Main";

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
                path: '/login',
                element: <Login/>
            },
            {
                path: 'signup',
                element: <Signup/>
            }
        ]
    },
    {
        path: '*',
        element: <Error/>,
    }
])

export default routes
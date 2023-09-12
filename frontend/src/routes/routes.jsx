import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Error from "../components/Error";
import Login from "../components/Login";
import Signup from "../components/Signup";
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
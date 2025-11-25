import {createBrowserRouter} from "react-router-dom"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import Index from "../pages/Index"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />
    },
    {
        path: "/signin",
        element: <SignIn/>
    },
    {
        path: "/signup",
        element: <SignUp />
    }
])
import { createBrowserRouter } from "react-router-dom";
import Mian from "../layouts/Main";
import Home from "../pages/Home/Home/home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Mian></Mian>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])
export default router;
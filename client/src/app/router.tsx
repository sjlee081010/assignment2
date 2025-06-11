import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Home from "../pages/home/ui";
import Login from "../pages/login/ui";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout>
                <Home />
            </Layout>
        )
    },
    {
        path: "/login",
        element: (
            <Login />
        )
    }
])

export default router
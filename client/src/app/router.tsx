import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Home from "../pages/home/ui";
import AddPage from "../pages/add/ui";

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
        path: "/add",
        element: (
            <Layout>
                <AddPage></AddPage>
            </Layout>
        )
    }
])

export default router
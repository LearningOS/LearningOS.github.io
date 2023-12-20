import { BrowserRouter, useRoutes } from "react-router-dom";
import HomePage from "../pages/homePage";
import Layout from "../layout";

const GetRoutes = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <HomePage />
                },
            ]
        },

    ])
    return routes
}

const InitRoutes = () => {
    return <BrowserRouter>
        <GetRoutes />
    </BrowserRouter>
}
export default InitRoutes;
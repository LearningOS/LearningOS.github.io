import { HashRouter, useRoutes } from "react-router-dom";
import HomePage from "../pages/homePage";
import Layout from "../layout";
import User from "../pages/user";
import Bbs from "@/pages/bbs";
import Blog from "@/pages/blog";
import Camps from "@/pages/camps";
import Partners from "@/pages/partners";
import Projects from "@/pages/projects";
import Students from "@/pages/students";
import Tasks from "@/pages/tasks";

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
                {
                    path: '/user',
                    element: <User />
                },
                {
                    path: '/bbs',
                    element: <Bbs />
                },
                {
                    path: '/blog',
                    element: <Blog />
                },
                {
                    path: '/camps',
                    element: <Camps />
                },
                {
                    path: '/partners',
                    element: <Partners />
                },
                {
                    path: '/projects',
                    element: <Projects />
                },
                {
                    path: '/students',
                    element: <Students />
                },
                {
                    path: '/tasks',
                    element: <Tasks />
                }
            ]
        },

    ])
    return routes
}

const InitRoutes = () => {
    return <HashRouter>
        <GetRoutes />
    </HashRouter>
}
export default InitRoutes;
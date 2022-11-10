import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddBlog from "../pages/AddBlog/AddBlog";
import AddService from "../pages/AddService/AddService";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyReviews from "../pages/MyReviews/MyReviews";
import Register from "../pages/Register/Register";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Services from "../pages/Services/Services";
import ConfirmModal from "../utils/Modals/ConfirmModal";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,

            },
            {
                path: '/services',
                element: <Services />,

            },
            {
                path: '/service/:id',
                element: <ServiceDetails />,
                loader: ({ params }) => fetch(`https://service-a11-server.vercel.app/service/${params.id}`),
            },
            {
                path: '/myreviews',
                element: <PrivateRoute> <MyReviews /> </PrivateRoute>
            },
            {
                path: '/addservice',
                element: <PrivateRoute> <AddService /> </PrivateRoute>
            },
            {
                path: '/addblog',
                element: <PrivateRoute> <AddBlog /> </PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '*',
                element: <ErrorPage />
            }
        ]
    }
])
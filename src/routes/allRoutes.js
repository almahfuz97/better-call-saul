import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyReviews from "../pages/MyReviews/MyReviews";
import Register from "../pages/Register/Register";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Services from "../pages/Services/Services";
import ConfirmModal from "../utils/ConfirmModal/ConfirmModal";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://service-a11-server.vercel.app/home')
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
                loader: () => fetch('https://service-a11-server.vercel.app/services'),
                errorElement: <ErrorPage />

            },
            {
                path: '/service/:id',
                element: <ServiceDetails />,
                loader: ({ params }) => fetch(`https://service-a11-server.vercel.app/service/${params.id}`),
                errorElement: <ErrorPage />
            },
            {
                path: '/myreviews',
                element: <MyReviews />,
                errorElement: <ErrorPage />
            },
            {
                path: '/modal',
                element: <ConfirmModal />,
                errorElement: <ErrorPage />
            },
            {
                path: '*',
                element: <ErrorPage />
            }
        ]
    }
])
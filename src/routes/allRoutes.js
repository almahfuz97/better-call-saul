import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        loader: () => fetch('https://service-a11-server.vercel.app')
    }
])
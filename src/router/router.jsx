import { Layout } from "./Layout";
import { Home } from "../pages/Home";
import { Library } from "../pages/Library";
import { createBrowserRouter } from "react-router";
import { Quiz } from "../pages/QuizPage";

export const routes = createBrowserRouter([
    {
        path: '/',  
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/library',
                element: <Library/>
            },
            {
                path: '/quiz',
                element: <Quiz/>
            }
        ]
    } 
])
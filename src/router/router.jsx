import { Layout } from "./Layout";
import { Home } from "../pages/Home";
import { Library } from "../pages/Library";
import { createBrowserRouter } from "react-router";
import { Quiz } from "../pages/QuizPage";
import { TestPage } from "../components/Test";
import { SchoolPage } from "../pages/SchoolPage";
import { SignupPage } from "../pages/SignUpPage";
import { OurMentors } from '../pages/OurMentorsPage'
import { Login } from "../pages/LoginPage";
import { SignUp } from "../pages/SignUp";

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
            },
            {
                path: 'quiz/:id',
                element: <TestPage />
            },
            {
                path: '/schools',
                element: <SchoolPage />
            },
            {
                path: "/signup",
                element: <SignupPage />
            },
            {
                path: "/ourMentors",
                element: < OurMentors />
            },
            {
                path: "/login",
                element: < Login />
            },{
                path: "/sign",
                element: < SignUp />
            }
        ]
    } 
])
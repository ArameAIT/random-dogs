import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainPage from './MainPage';
import Favorites from '../Favorites';
import MainLayout from './MainLayout';


const router = createBrowserRouter([
    {
        path: "",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <MainPage />
            },
            {
                path: "/Fav",
                element: <Favorites />
            }
        ]
    }

]);

function Pages() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Pages
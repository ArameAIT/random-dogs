import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainPage from './MainPage';
import Favorites from '../Favorites';
import MainLayout from './MainLayout';
import TodosPage from './TodosPage';


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
                path: "Fav",
                element: <Favorites />
            },
            {
                path: "todos",
                element: <TodosPage/>
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
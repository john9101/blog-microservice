import MainLayout from "./layouts/MainLayout.tsx";
import Posts from "./pages/Posts.tsx";

export const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: 'posts',
                element: <Posts />
            },
        ],
    },
];
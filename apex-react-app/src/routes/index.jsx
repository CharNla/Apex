import { createBrowserRouter, Outlet } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Navbar from '../components/layout/Navbar';

const Layout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            {/* We can add a Footer here later */}
        </>
    );
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            // Add other pages here
            // { path: '/services', element: <ServicesPage /> },
            // { path: '/portfolio', element: <PortfolioPage /> },
            // { path: '/blog', element: <BlogPage /> },
            // { path: '/contact', element: <ContactPage /> },
        ],
    },
]);

export default router; 
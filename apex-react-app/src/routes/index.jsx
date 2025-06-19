import { createHashRouter, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from '../pages/HomePage';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Login from '../components/layout/Login';

const Layout = () => {
    const { pathname, hash } = useLocation();
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (hash) {
            const id = hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    const handleLoginSuccess = () => {
        setIsLoginOpen(false);
        setIsAdmin(true);
        
        const journalSection = document.getElementById('blog');
        if (journalSection) {
          journalSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleLogout = () => {
        setIsAdmin(false);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <Navbar />
            <main>
                <Outlet context={{ isAdmin }} />
            </main>
            <Footer 
                onLoginClick={() => setIsLoginOpen(true)}
                isAdmin={isAdmin}
                onLogoutClick={handleLogout}
            />
            <Login 
                show={isLoginOpen} 
                onClose={() => setIsLoginOpen(false)} 
                onLoginSuccess={handleLoginSuccess}
            />
        </>
    );
};

const router = createHashRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
        ],
    },
]);

export default router; 
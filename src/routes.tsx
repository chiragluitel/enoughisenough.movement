import { createBrowserRouter, Outlet, type RouteObject } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
// import NavbarForLoggedIn from "./components/Navigation/NavbarForLoggedIn";
import NavbarForLoggedOut from "./components/Navigation/NavbarForLoggedOut";
import LoginPage from "./Pages/Authentication/LoginPage";
import SignupPage from "./Pages/Authentication/SignupPage";

const Placeholder = ({ title }: { title: string }) => (
    <div className="container mx-auto px-4 py-24">
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <p className="text-gray-600 mt-2">This page is coming soon.</p>
    </div>
);

const routes: RouteObject[] = [
    {
        path: '/',
        element:( 
            <div className="min-h-screen flex flex-col bg-white">
                <NavbarForLoggedOut />
                <div className="flex-1 pt-14">
                    <Outlet />
                </div>
            </div>
        ),
        children:[
            {index:true, element: <LandingPage />},
            {path: 'login', element: <LoginPage /> },
            {path: 'signup', element: <SignupPage />},
            { path: 'feed', element: <Placeholder title="Feed" /> },
            { path: 'events', element: <Placeholder title="Events" /> },
            { path: 'donate', element: <Placeholder title="Donate" /> },
            { path: 'about', element: <Placeholder title="About" /> },
        ]
    }
]
export const router = createBrowserRouter(routes);
import { createBrowserRouter, Outlet, type RouteObject } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/Authentication/LoginPage";
import SignupPage from "./Pages/Authentication/SignupPage";
import FeedPage from "./Pages/FeedPage";
import PostDetailPage from "./Pages/PostDetailPage";
import NewPostPage from "./Pages/NewPostPage";
import Navbar from "./components/Navigation/Navbar";
import DonatePage from "./Pages/DonatePage";
import EventsPage from "./Pages/EventsPage";
import ProfilePage from "./Pages/ProfilePage";

const routes: RouteObject[] = [
    {
        path: '/',
        element:( 
            <div className="min-h-screen flex flex-col bg-white">
                <Navbar />
                <div className="flex-1 pt-14">
                    <Outlet />
                </div>
            </div>
        ),
        children:[
            {index:true, element: <LandingPage />},
            {path: 'login', element: <LoginPage /> },
            {path: 'signup', element: <SignupPage />},
            { path: 'feed', element: <FeedPage /> },
            { path: 'newpost', element: <NewPostPage /> },
            { path: 'detail/:postID', element: <PostDetailPage /> },
            { path: 'events', element: <EventsPage /> },
            { path: 'donate', element: <DonatePage /> },
            { path: 'profile/:profileId', element: <ProfilePage /> },
        ]
    }
]
export const router = createBrowserRouter(routes);
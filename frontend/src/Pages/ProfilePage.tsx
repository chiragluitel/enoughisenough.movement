import { useState, useMemo } from 'react';
import UserCard from '../components/Profile/UserCard';
import ProfileTabs from '../components/Profile/ProfileTabs';
import Post from '../components/Feed/Post';
import EventCard from '../components/Events/EventCard';
import { currentUser } from '../mocked_DB/UserProfile';
import { samplePosts } from '../mocked_DB/Posts';
import { sampleEvents } from '../mocked_DB/Events';
import CustomButton from '../components/CustomButton';
import { useSignOut } from './Authentication/useSignOut';
import Spinner from '../helpers/Spinner';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState<'posts' | 'events'>('posts');
    const {signOut, isPending}=useSignOut();
    const navigate = useNavigate();
    const userPosts = useMemo(() => 
        samplePosts.filter(post => post.author.username === currentUser.username),
        []
    );

    const userEvents = useMemo(() => 
        sampleEvents.filter(event => event.organizer.name === currentUser.displayName),
        []
    );

    const handleJoinEvent = (eventId: string) => {
        alert(`Joining event ${eventId} (demo)`);
    };
    const handleSignout = async (e : React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        await signOut();
        navigate('/');
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                    <div className="lg:col-span-1">
                        <UserCard user={currentUser} isOwnProfile={true} />
                        <div className='pt-4'>
                        {isPending ? (<Spinner />):( <CustomButton label='Logout' onClick={handleSignout} />)}
                        </div>
                        
                    </div>

                    <div className="lg:col-span-3">
                        <ProfileTabs
                            activeTab={activeTab}
                            onTabChange={setActiveTab}
                            userId={currentUser.id}
                        />

                        <div className="mt-6">
                            {activeTab === 'posts' && (
                                <div className="space-y-4">
                                    {userPosts.length === 0 ? (
                                        <div className="text-center py-12 bg-white border border-gray-200 rounded-xl">
                                            <div className="text-gray-400 mb-4">
                                                <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-lg font-medium text-gray-900 mb-2">No posts yet</h3>
                                            <p className="text-gray-600 mb-4">Share your thoughts with the community</p>
                                        </div>
                                    ) : (
                                        userPosts.map((post) => (
                                            <Post key={post.id} data={post} />
                                        ))
                                    )}
                                </div>
                            )}

                            {activeTab === 'events' && (
                                <div className="space-y-4">
                                    {userEvents.length === 0 ? (
                                        <div className="text-center py-12 bg-white border border-gray-200 rounded-xl">
                                            <div className="text-gray-400 mb-4">
                                                <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-lg font-medium text-gray-900 mb-2">No events yet</h3>
                                            <p className="text-gray-600 mb-4">Create your first event to get started</p>
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {userEvents.map((event) => (
                                                <EventCard
                                                    key={event.id}
                                                    event={event}
                                                    onJoin={handleJoinEvent}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
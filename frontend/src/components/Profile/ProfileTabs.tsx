import { FaNewspaper, FaCalendarAlt, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import NewEventButton from '../Events/NewEventButton';

type ProfileTabsProps = {
    activeTab: 'posts' | 'events';
    onTabChange: (tab: 'posts' | 'events') => void;
    userId: string;
};

const ProfileTabs: React.FC<ProfileTabsProps> = ({ activeTab, onTabChange, userId }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                    <button
                        onClick={() => onTabChange('posts')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                            activeTab === 'posts'
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                        }`}
                    >
                        <FaNewspaper className="w-4 h-4" />
                        Your Posts
                    </button>
                    <button
                        onClick={() => onTabChange('events')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                            activeTab === 'events'
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                        }`}
                    >
                        <FaCalendarAlt className="w-4 h-4" />
                        Your Events
                    </button>
                </div>

                <div className="flex gap-2">
                    {activeTab === 'posts' && (
                        <Link
                            to="/newpost"
                            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors duration-200 text-sm font-medium"
                        >
                            <FaPlus className="w-4 h-4" />
                            New Post
                        </Link>
                    )}
                    {activeTab === 'events' && (
                        <NewEventButton />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfileTabs;

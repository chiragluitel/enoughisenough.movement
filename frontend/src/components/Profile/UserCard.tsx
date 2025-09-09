import { FaEdit, FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import type { UserProfile } from '../../types';

type UserCardProps = {
    user: UserProfile;
    isOwnProfile?: boolean;
};

const UserCard: React.FC<UserCardProps> = ({ user, isOwnProfile = false }) => {
    const {
        displayName,
        username,
        avatarUrl,
        bio,
        location,
        joinDate,
        postsCount,
        eventsCount,
        followersCount,
        followingCount
    } = user;

    return (
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <img
                        src={avatarUrl}
                        alt={displayName}
                        className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">{displayName}</h2>
                        <p className="text-sm text-gray-600">@{username}</p>
                    </div>
                </div>
                {isOwnProfile && (
                    <Link
                        to={`/editprofile/${user.id}`}
                        className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                        title="Edit Profile"
                    >
                        <FaEdit className="w-4 h-4" />
                    </Link>
                )}
            </div>

            {bio && (
                <p className="text-sm text-gray-700 mb-4">{bio}</p>
            )}

            <div className="space-y-2 mb-4">
                {location && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <FaMapMarkerAlt className="text-gray-400" />
                        <span>{location}</span>
                    </div>
                )}
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaCalendarAlt className="text-gray-400" />
                    <span>Joined {new Date(joinDate).toLocaleDateString()}</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900">{postsCount}</div>
                    <div className="text-xs text-gray-600">Posts</div>
                </div>
                <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900">{eventsCount}</div>
                    <div className="text-xs text-gray-600">Events</div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900">{followersCount}</div>
                    <div className="text-xs text-gray-600">Followers</div>
                </div>
                <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900">{followingCount}</div>
                    <div className="text-xs text-gray-600">Following</div>
                </div>
            </div>

            {!isOwnProfile && (
                <button className="w-full mt-4 bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-black transition-colors duration-200 text-sm font-medium flex items-center justify-center gap-2">
                    <FaUserPlus className="w-4 h-4" />
                    Follow
                </button>
            )}
        </div>
    );
};

export default UserCard;

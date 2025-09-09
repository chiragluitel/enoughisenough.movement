import { useParams, useNavigate } from 'react-router-dom';
import ProfileForm from '../components/Profile/ProfileForm';
import { currentUser } from '../mocked_DB/UserProfile';
import type { ProfileFormData } from '../types';


const EditProfilePage = () => {
    const { profileId } = useParams();
    const navigate = useNavigate();
    
    const user = currentUser;

    const initialFormData: ProfileFormData = {
        displayName: user.displayName,
        username: user.username,
        email: user.email,
        bio: user.bio || '',
        location: user.location || '',
        avatarUrl: user.avatarUrl,
    };

    const handleSubmit = (data: ProfileFormData) => {
        // In a real app, you'd update the user profile via API
        console.log('Updating profile:', data);
        alert('Profile updated successfully! (demo)');
        navigate('/profile');
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 py-6 max-w-4xl">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Edit Profile</h1>
                    <p className="text-gray-600">Update your profile information</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <ProfileForm
                        initialData={initialFormData}
                        onSubmit={handleSubmit}
                        isSignup={false}
                    />
                </div>
            </div>
        </div>
    );
};

export default EditProfilePage;

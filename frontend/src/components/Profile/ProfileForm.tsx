import { useState } from 'react';
import { FaCamera, FaUser, FaEnvelope, FaMapMarkerAlt, FaFile } from 'react-icons/fa';

type ProfileFormData = {
    displayName: string;
    username: string;
    email: string;
    bio: string;
    location: string;
    avatarUrl: string;
};

type ProfileFormProps = {
    initialData: ProfileFormData;
    onSubmit: (data: ProfileFormData) => void;
    isSignup?: boolean;
};

const ProfileForm: React.FC<ProfileFormProps> = ({ initialData, onSubmit, isSignup = false }) => {
    const [formData, setFormData] = useState<ProfileFormData>(initialData);
    const [avatarPreview, setAvatarPreview] = useState(initialData.avatarUrl);

    const handleInputChange = (field: keyof ProfileFormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e.target?.result as string;
                setAvatarPreview(result);
                handleInputChange('avatarUrl', result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Avatar Section */}
            <div className="flex items-center gap-6">
                <div className="relative">
                    <img
                        src={avatarPreview}
                        alt="Profile"
                        className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
                    />
                    <label className="absolute bottom-0 right-0 bg-gray-900 text-white p-2 rounded-full cursor-pointer hover:bg-black transition-colors duration-200">
                        <FaCamera className="w-3 h-3" />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleAvatarChange}
                            className="hidden"
                        />
                    </label>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Profile Picture</h3>
                    <p className="text-sm text-gray-600">Click the camera icon to change your photo</p>
                </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FaUser className="inline w-4 h-4 mr-2" />
                        Display Name
                    </label>
                    <input
                        type="text"
                        value={formData.displayName}
                        onChange={(e) => handleInputChange('displayName', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400"
                        placeholder="Enter your display name"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FaUser className="inline w-4 h-4 mr-2" />
                        Username
                    </label>
                    <input
                        type="text"
                        value={formData.username}
                        onChange={(e) => handleInputChange('username', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400"
                        placeholder="Enter your username"
                        required
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FaEnvelope className="inline w-4 h-4 mr-2" />
                        Email
                    </label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FaMapMarkerAlt className="inline w-4 h-4 mr-2" />
                        Location
                    </label>
                    <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400"
                        placeholder="Enter your location"
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FaFile className="inline w-4 h-4 mr-2" />
                        Bio
                    </label>
                    <textarea
                        value={formData.bio}
                        onChange={(e) => handleInputChange('bio', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 resize-none"
                        placeholder="Tell us about yourself..."
                        rows={4}
                    />
                </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
                <button
                    type="submit"
                    className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors duration-200 font-medium"
                >
                    {isSignup ? 'Create Account' : 'Save Changes'}
                </button>
            </div>
        </form>
    );
};

export default ProfileForm;

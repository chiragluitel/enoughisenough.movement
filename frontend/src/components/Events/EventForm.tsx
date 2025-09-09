import { useState } from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUsers, FaImage } from 'react-icons/fa';
import type { EventFormData } from '../../types';

type EventFormProps = {
    initialData?: Partial<EventFormData>;
    onSubmit: (data: EventFormData) => void;
};

const EventForm: React.FC<EventFormProps> = ({ initialData = {}, onSubmit }) => {
    const [formData, setFormData] = useState<EventFormData>({
        title: '',
        description: '',
        date: '',
        time: '',
        location: '',
        category: 'protest',
        maxAttendees: '',
        imageUrl: '',
        ...initialData,
    });

    const [imagePreview, setImagePreview] = useState(formData.imageUrl);

    const handleInputChange = (field: keyof EventFormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e.target?.result as string;
                setImagePreview(result);
                handleInputChange('imageUrl', result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const categories = [
        { value: 'protest', label: 'Protest' },
        { value: 'meeting', label: 'Meeting' },
        { value: 'workshop', label: 'Workshop' },
        { value: 'fundraiser', label: 'Fundraiser' },
        { value: 'other', label: 'Other' },
    ];

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Event Image */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaImage className="inline w-4 h-4 mr-2" />
                    Event Image
                </label>
                <div className="flex items-center gap-4">
                    {imagePreview && (
                        <img
                            src={imagePreview}
                            alt="Event preview"
                            className="w-32 h-32 rounded-lg object-cover border border-gray-200"
                        />
                    )}
                    <div>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                            id="event-image"
                        />
                        <label
                            htmlFor="event-image"
                            className="px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                        >
                            Choose Image
                        </label>
                    </div>
                </div>
            </div>

            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Event Title
                    </label>
                    <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => handleInputChange('title', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400"
                        placeholder="Enter event title"
                        required
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                    </label>
                    <textarea
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 resize-none"
                        placeholder="Describe your event..."
                        rows={4}
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FaCalendarAlt className="inline w-4 h-4 mr-2" />
                        Date
                    </label>
                    <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FaClock className="inline w-4 h-4 mr-2" />
                        Time
                    </label>
                    <input
                        type="time"
                        value={formData.time}
                        onChange={(e) => handleInputChange('time', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400"
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
                        placeholder="Enter event location"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category
                    </label>
                    <select
                        value={formData.category}
                        onChange={(e) => handleInputChange('category', e.target.value as EventFormData['category'])}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400"
                        required
                    >
                        {categories.map((category) => (
                            <option key={category.value} value={category.value}>
                                {category.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FaUsers className="inline w-4 h-4 mr-2" />
                        Max Attendees (optional)
                    </label>
                    <input
                        type="number"
                        value={formData.maxAttendees}
                        onChange={(e) => handleInputChange('maxAttendees', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400"
                        placeholder="Leave empty for unlimited"
                        min="1"
                    />
                </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
                <button
                    type="submit"
                    className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors duration-200 font-medium"
                >
                    Create Event
                </button>
            </div>
        </form>
    );
};

export default EventForm;

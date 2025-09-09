import { useNavigate } from 'react-router-dom';
import EventForm from '../components/Events/EventForm';
import type { EventFormData } from '../types';

const CreateEventPage = () => {
    const navigate = useNavigate();

    const handleSubmit = (data: EventFormData) => {
        console.log('Creating event:', data);
        alert('Event created successfully! (demo)');
        navigate('/events');
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 py-6 max-w-4xl">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Event</h1>
                    <p className="text-gray-600">Organize an event for the community</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <EventForm onSubmit={handleSubmit} />
                </div>
            </div>
        </div>
    );
};

export default CreateEventPage;

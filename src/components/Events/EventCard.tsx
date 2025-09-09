import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUsers, FaUser } from 'react-icons/fa';
import type { EventData } from '../../types';

type EventCardProps = {
    event: EventData;
    onJoin: (eventId: string) => void;
};

const EventCard: React.FC<EventCardProps> = ({ event, onJoin }) => {
    const { id, title, description, date, time, location, organizer, imageUrl = 'logoexample.jpg' , attendees, maxAttendees, category, status} = event;

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'upcoming': return 'bg-blue-100 text-blue-800';
            case 'ongoing': return 'bg-green-100 text-green-800';
            case 'completed': return 'bg-gray-100 text-gray-800';
            case 'cancelled': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'protest': return 'bg-red-100 text-red-800';
            case 'meeting': return 'bg-blue-100 text-blue-800';
            case 'workshop': return 'bg-green-100 text-green-800';
            case 'fundraiser': return 'bg-purple-100 text-purple-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const isFull = maxAttendees && attendees >= maxAttendees;
    const canJoin = status === 'upcoming' && !isFull;

    return (
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
            {imageUrl && (
                <div className="h-48 w-full">
                    <img 
                        src={imageUrl} 
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
            
            <div className="p-4 space-y-3">
                <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{title}</h3>
                    <div className="flex gap-2 ml-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
                            {status}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}>
                            {category}
                        </span>
                    </div>
                </div>

                <p className="text-sm text-gray-600 line-clamp-3">{description}</p>

                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <FaCalendarAlt className="text-gray-400" />
                        <span>{new Date(date).toLocaleDateString()}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <FaClock className="text-gray-400" />
                        <span>{time}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <FaMapMarkerAlt className="text-gray-400" />
                        <span className="line-clamp-1">{location}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <FaUser className="text-gray-400" />
                        <span>{organizer.name}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <FaUsers className="text-gray-400" />
                        <span>
                            {attendees}{maxAttendees ? `/${maxAttendees}` : ''} attendees
                            {isFull && <span className="text-red-600 ml-1">(Full)</span>}
                        </span>
                    </div>
                </div>

                {canJoin && (
                    <button onClick={() => onJoin?.(id)} className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-black transition-colors duration-200 text-sm font-medium">
                        Join Event
                    </button>
                )}

                {isFull && (
                    <div className="w-full bg-gray-100 text-gray-600 py-2 px-4 rounded-lg text-sm font-medium text-center">
                        Event is Full
                    </div>
                )}

                {status === 'completed' && (
                    <div className="w-full bg-gray-100 text-gray-600 py-2 px-4 rounded-lg text-sm font-medium text-center">
                        Event Completed
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventCard;

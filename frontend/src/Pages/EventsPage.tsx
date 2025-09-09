import { useState, useMemo } from 'react';
import EventCard from '../components/Events/EventCard';
import EventFilter from '../components/Events/EventFilter';
import useGetAllEvents from '../hooks/Database/useGetAllEvents';
import Spinner from '../helpers/Spinner';
import { FaCalendar } from 'react-icons/fa';

const EventsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedStatus, setSelectedStatus] = useState('all');
    const {events, loading} = useGetAllEvents();

    const filteredEvents = useMemo(() => {
        return events.filter((event) => {
            const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                event.location.toLowerCase().includes(searchTerm.toLowerCase());
            
            const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
            const matchesStatus = selectedStatus === 'all' || event.status === selectedStatus;
            
            return matchesSearch && matchesCategory && matchesStatus;
        });
    }, [searchTerm, selectedCategory, selectedStatus, events]);

    const handleJoinEvent = (eventId: string) => {
        // implement join event logic
        alert(`Joining event ${eventId} (demo)`);
    };

    return (
    <>
    {loading ? (
        <Spinner />
    ):(
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 py-6">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Events</h1>
                    <p className="text-gray-600">Join our movement and participate in events that matter</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-1">
                        <EventFilter
                            searchTerm={searchTerm}
                            onSearchChange={setSearchTerm}
                            selectedCategory={selectedCategory}
                            onCategoryChange={setSelectedCategory}
                            selectedStatus={selectedStatus}
                            onStatusChange={setSelectedStatus}
                        />
                    </div>

                    <div className="lg:col-span-3">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-gray-900">
                                {filteredEvents.length} Event{filteredEvents.length !== 1 ? 's' : ''} Found
                            </h2>
                        </div>

                        {filteredEvents.length === 0 ? (
                            <div className="text-center py-12">
                                <div className="text-gray-400 mb-4">
                                    <FaCalendar className='mx-auto h-12 w-12' />
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
                                <p className="text-gray-600">Try adjusting your filters or search terms</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredEvents.map((event) => (
                                    <EventCard key={event.id} event={event} onJoin={handleJoinEvent}/>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )}
       
    </>
    );
};

export default EventsPage;
export type MediaItem = 
    | { type: 'image'; url: string }
    | { type: 'video'; url: string; posterUrl?: string };

export type PostData = {
    id: string;
    author: {
        username: string;
        displayName?: string;
        avatarUrl: string;
    };
    timestamp: string;
    text?: string;
    images?: string[];
    media?: MediaItem[];
    likes?: number;
    comments?: number;
};

export type EventData = {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    organizer: {
        name: string;
        avatarUrl: string;
    };
    imageUrl?: string;
    attendees: number;
    maxAttendees?: number;
    category: 'protest' | 'meeting' | 'workshop' | 'fundraiser' | 'other';
    status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
};
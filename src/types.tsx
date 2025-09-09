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

export type UserProfile = {
    id: string;
    username: string;
    displayName: string;
    email: string;
    avatarUrl: string;
    bio?: string;
    location?: string;
    joinDate: string;
    postsCount: number;
    eventsCount: number;
    followersCount: number;
    followingCount: number;
};

export type ProfileFormData = {
    displayName: string,
    username: string,
    email: string,
    bio: string,
    location: string,
    avatarUrl: string,
};

export type EventFormData = {
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    category: 'protest' | 'meeting' | 'workshop' | 'fundraiser' | 'other';
    maxAttendees: string;
    imageUrl: string;
};

export type EventFormProps = {
    initialData?: Partial<EventFormData>;
    onSubmit: (data: EventFormData) => void;
};
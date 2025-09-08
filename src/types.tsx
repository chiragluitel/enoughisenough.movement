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
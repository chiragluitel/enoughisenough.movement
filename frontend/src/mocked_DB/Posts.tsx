import type { PostData } from "../types";

export const samplePosts: PostData[] = [
    {
        id: '1',
        author: {
            username: 'youthforchange',
            displayName: 'Youth For Change',
            avatarUrl: '/logoexample.jpg',
        },
        timestamp: '2h ago',
        text: 'We march for transparency and accountability. Join us this Saturday at Basantapur at 11AM. #EnoughIsEnough',
        media: [
            { type: 'image', url: '/logoexample.jpg' },
            { type: 'image', url: '/logoexample.jpg' },
            { type: 'video', url: '/videoexampleee.mp4', posterUrl: '/images/wai_wai.jpg' },
        ],
        likes: 128,
        comments: 24,
    },
    {
        id: '2',
        author: {
            username: 'citizensvoice',
            displayName: 'Citizens Voice',
            avatarUrl: '/logoexample.jpg',
        },
        timestamp: 'Yesterday',
        text: 'Share your story: how has corruption affected you or your community? Your voice matters.',
        likes: 54,
        comments: 12,
    },
    {
        id: '3',
        author: {
            username: 'grassroots',
            displayName: 'Grassroots Nepal',
            avatarUrl: '/logoexample.jpg',
        },
        timestamp: '2 days ago',
        text: 'See highlights from last week’s youth-led forum on anti-corruption reforms.',
        media: [
            { type: 'image', url: '/logoexample.jpg' },
            { type: 'image', url: '/logoexample.jpg' },
            { type: 'image', url: '/logoexample.jpg' },
            { type: 'video', url: '/videoexamplee.mp4', posterUrl: '/logoexample.jpg' },
            { type: 'image', url: '/logoexample.jpg' },
        ],
        likes: 210,
        comments: 37,
    },
];

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
            { type: 'image', url: '/images/current_20_pack_box.jpg' },
            { type: 'image', url: '/images/khaja_pack.jpg' },
            { type: 'video', url: '/videos/sample.mp4', posterUrl: '/images/wai_wai.jpg' },
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
            { type: 'image', url: '/images/wai_wai.jpg' },
            { type: 'image', url: '/images/khaja_pack.jpg' },
            { type: 'image', url: '/images/sel_roti_pack.jpg' },
            { type: 'video', url: '/videos/highlights.mp4', posterUrl: '/images/momo_wraps_10pcs.jpg' },
            { type: 'image', url: '/images/chia_seeds_500g.jpg' },
        ],
        likes: 210,
        comments: 37,
    },
];

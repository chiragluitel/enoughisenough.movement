import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { samplePosts } from "../mocked_DB/Posts";
import PostHeader from "../components/Feed/PostHeader";
import PostContent from "../components/Feed/PostContent";
import type { MediaItem, PostData } from "../types";

const PostDetailPage = () => {
    const { postID } = useParams();

    const post: PostData | undefined = useMemo(() =>
        samplePosts.find((p) => p.id === postID), [postID]
    );

    if (!post) {
        return (
            <div className="container mx-auto px-4 py-24">
                <h1 className="text-2xl font-semibold text-gray-800">Post not found</h1>
                <p className="text-gray-600">The post you are looking for does not exist.</p>
            </div>
        );
    }

    const media: MediaItem[] = post.media
        ? post.media
        : (post.images || []).map((url) => ({ type: 'image', url }));

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 py-6 max-w-3xl">
                <article className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                    <PostHeader
                        avatarUrl={post.author.avatarUrl}
                        username={post.author.username}
                        displayName={post.author.displayName}
                        timestamp={post.timestamp}
                    />
                    <div className="mt-3 space-y-4">
                        <PostContent text={post.text} />
                        <div className="space-y-4">
                            {media.map((item, idx) => (
                                item.type === 'image' ? (
                                    <div key={idx} className="w-full">
                                        <img src={item.url} alt={`Media ${idx + 1}`} className="w-full rounded-lg object-cover" />
                                    </div>
                                ) : (
                                    <div key={idx} className="w-full">
                                        <video className="w-full rounded-lg" controls preload="metadata">
                                            <source src={item.url} />
                                        </video>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default PostDetailPage;

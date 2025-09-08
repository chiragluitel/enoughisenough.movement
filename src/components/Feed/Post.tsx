import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostMedia from "./PostMedia";
import PostActions from "./PostActions";
import type { PostData } from "../../types";

const Post: React.FC<{ data: PostData }> = ({ data }) => {
    const { id, author, timestamp, text, images, media, likes, comments } = data;

    return (
        <article className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <PostHeader
                avatarUrl={author.avatarUrl}
                username={author.username}
                displayName={author.displayName}
                timestamp={timestamp}
            />
            <div className="mt-3 space-y-3">
                <PostContent text={text} />
                <PostMedia imageUrls={images} media={media} postId={id} />
                <PostActions initialLikes={likes} initialComments={comments} />
            </div>
        </article>
    );
};

export default Post;

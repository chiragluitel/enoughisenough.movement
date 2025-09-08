import { useState } from "react";
import { FaRegComment, FaRegHeart, FaHeart } from "react-icons/fa";

type PostActionsProps = {
    initialLikes?: number;
    initialComments?: number;
};

const PostActions: React.FC<PostActionsProps> = ({ initialLikes = 0, initialComments = 0 }) => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(initialLikes);

    const handleLike = () => {
        setLiked((prev) => !prev);
        setLikes((prev) => (liked ? prev - 1 : prev + 1));
    };

    return (
        <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
            <button onClick={handleLike} className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100">
                {liked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                <span>{likes} Like{likes !== 1 ? 's' : ''}</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100">
                <FaRegComment />
                <span>{initialComments} Comment{initialComments !== 1 ? 's' : ''}</span>
            </button>
        </div>
    );
};

export default PostActions;

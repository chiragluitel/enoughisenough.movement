import PostHeader from "../Feed/PostHeader";
import PostContent from "../Feed/PostContent";
import PostMedia from "../Feed/PostMedia";
import type { MediaItem } from "../../types";

type NewPostPreviewProps = {
    text: string;
    media: MediaItem[];
};

const NewPostPreview: React.FC<NewPostPreviewProps> = ({ text, media }) => {
    return (
        <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
            <PostHeader
                avatarUrl="/logoexample.jpg"
                username="you"
                displayName="You"
                timestamp="Just now"
            />
            <div className="mt-3 space-y-3">
                <PostContent text={text} />
                <PostMedia media={media} />
            </div>
        </div>
    );
};

export default NewPostPreview;

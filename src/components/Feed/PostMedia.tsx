import type { MediaItem } from "../../types";
import { Link } from "react-router-dom";

type PostMediaProps = {
    imageUrls?: string[]; 
    media?: MediaItem[];
    postId?: string;
};

const PostMedia: React.FC<PostMediaProps> = ({ imageUrls, media, postId }) => {
    const normalizedMedia: MediaItem[] = media
        ? media
        : (imageUrls || []).map((url) => ({ type: 'image', url }));

    if (!normalizedMedia || normalizedMedia.length === 0) return null;

    const itemsToShow = normalizedMedia.slice(0, 4);
    const extraCount = normalizedMedia.length - itemsToShow.length;

    const renderItem = (item: MediaItem, idx: number, isLastWithOverlay: boolean) => {
        if (item.type === 'image') {
            return (
                <div key={idx} className="relative">
                    <img src={item.url} alt={`Post media ${idx + 1}`} className="w-full h-48 object-cover rounded-lg" />
                    {isLastWithOverlay && extraCount > 0 && postId && (
                        <Link to={`/detail/${postId}`} className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                            <span className="text-white font-semibold text-xl">+{extraCount}</span>
                        </Link>
                    )}
                </div>
            );
        }
        return (
            <div key={idx} className="relative">
                <video className="w-full h-48 object-cover rounded-lg" controls preload="metadata">
                    <source src={item.url} />
                </video>
                {isLastWithOverlay && extraCount > 0 && postId && (
                    <Link to={`/detail/${postId}`} className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                        <span className="text-white font-semibold text-xl">+{extraCount}</span>
                    </Link>
                )}
            </div>
        );
    };

    if (normalizedMedia.length === 1) {
        const single = normalizedMedia[0];
        if (single.type === 'image') {
            return (
                <div className="mt-2">
                    <img src={single.url} alt="Post media" className="w-full rounded-lg object-cover" />
                </div>
            );
        }
        return (
            <div className="mt-2">
                <video className="w-full rounded-lg" controls preload="metadata">
                    <source src={single.url} />
                </video>
            </div>
        );
    }

    return (
        <div className="mt-2 grid grid-cols-2 gap-2">
            {itemsToShow.map((item, idx) => renderItem(item, idx, idx === itemsToShow.length - 1))}
        </div>
    );
};

export default PostMedia;

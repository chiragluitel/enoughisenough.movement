type PostHeaderProps = {
    avatarUrl: string;
    username: string;
    displayName?: string;
    timestamp: string;
};

const PostHeader: React.FC<PostHeaderProps> = ({ avatarUrl, username, displayName, timestamp }) => {
    return (
        <div className="flex items-start gap-3">
            <img
                src={avatarUrl}
                alt={`${displayName || username} avatar`}
                className="h-10 w-10 rounded-full object-cover"
            />
            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900">{displayName || username}</span>
                    <span className="text-gray-400">·</span>
                    <span className="text-xs text-gray-500">{timestamp}</span>
                </div>
                <span className="text-xs text-gray-500">@{username}</span>
            </div>
        </div>
    );
};

export default PostHeader;

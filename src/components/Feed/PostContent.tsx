type PostContentProps = {
    text?: string;
};

const PostContent: React.FC<PostContentProps> = ({ text }) => {
    if (!text) return null;
    return (
        <div className="text-sm text-gray-800 whitespace-pre-wrap leading-relaxed">
            {text}
        </div>
    );
};

export default PostContent;

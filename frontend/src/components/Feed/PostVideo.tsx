type PostVideoProps = {
    url: string;
    posterUrl?: string;
};

const PostVideo: React.FC<PostVideoProps> = ({ url, posterUrl }) => {
    return (
        <div className="mt-2">
            <video
                className="w-full rounded-lg"
                controls
                preload="metadata"
                poster={posterUrl}
            >
                <source src={url} />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default PostVideo;

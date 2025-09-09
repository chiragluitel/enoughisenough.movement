import Post from "../components/Feed/Post";
import AddNewPost from "../components/Post/AddNewPost";
import { samplePosts } from "../mocked_DB/Posts";

const FeedPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 py-6 max-w-2xl space-y-4">
                <AddNewPost />
                {samplePosts.map((post) => (
                    <Post key={post.id} data={post} />
                ))}
            </div>
        </div>
    );
};

export default FeedPage;

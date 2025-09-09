import Post from "../components/Feed/Post";
import AddNewPost from "../components/Post/AddNewPost";
import Spinner from "../helpers/Spinner";
import useGetAllPosts from "../hooks/Database/useGetAllPosts";

const FeedPage = () => {
    const {posts, loading} = useGetAllPosts();
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 py-6 max-w-2xl space-y-4">
                <AddNewPost />
                {loading ? (
                    <Spinner />
                ):(
                    posts.map((post) => (
                        <Post key={post.id} data={post} />
                    ))
                )}

            </div>
        </div>
    );
};

export default FeedPage;

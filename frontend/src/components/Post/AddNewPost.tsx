import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";

const AddNewPost = () => {
    return (
        <div className="flex">
            <Link 
                to="/newpost" 
                className="flex items-center bg-black text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300 hover:bg-gray-900 hover:shadow-xl"
            >
                <FaPen className="mr-2" /> <span>Add a Post</span>
            </Link>
        </div>
    );
}

export default AddNewPost;

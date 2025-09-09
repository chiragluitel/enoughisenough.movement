import { FaPlus } from "react-icons/fa"
import { Link } from "react-router-dom"

const NewEventButton = ( ) => {
    return (
        <Link
            to="/newevent"
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors duration-200 text-sm font-medium"
        >
            <FaPlus className="w-4 h-4" />
            New Event
        </Link>
    )
}

export default NewEventButton
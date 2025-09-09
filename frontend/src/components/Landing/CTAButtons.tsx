import { FaArrowRight, FaUser, FaHeart, FaNewspaper } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../hooks/Context/useAuthContext';

const CTAButtons = () => {
    const {user} = useAuthContext();
    return (
        <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">

                {user ? (
                    <Link to={'/feed'} className="group bg-black text-white px-8 py-4 cursor-pointer rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                        <FaNewspaper className="text-xl" />
                        Go to feed
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                ):(
                    <Link to={'/login'} className="group bg-black text-white px-8 py-4 cursor-pointer rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                        <FaUser className="text-xl" />
                        Sign Up / Login
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                ) }
                <Link to={'/donate'} className="group bg-white text-gray-700  cursor-pointer px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-green-300 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                    <FaHeart className="text-xl text-red-500" />
                    Donate
                </Link>
            </div>
            
            <div className="pt-4">
                <p className="text-sm text-gray-500 text-center">
                    Join the movement • Demand accountability • Build a corruption-free Nepal
                </p>
            </div>
        </div>
    )
}

export default CTAButtons;
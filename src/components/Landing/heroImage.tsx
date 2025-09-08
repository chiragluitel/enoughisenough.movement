import { FaFlag, FaLeaf } from 'react-icons/fa';

const HeroImage = () => {
    return (
        <div className="relative">
            <div className="relative bg-gradient-to-br from-red-100 to-red-600 rounded-3xl p-8 shadow-2xl">
                <img 
                    src="/logoexample.jpg" 
                    alt="Enough is Enough - Youth of Nepal Anti-Corruption Movement" 
                    className="w-full h-auto rounded-2xl shadow-lg object-cover"
                />
                <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-2 rounded-lg">
                            <FaLeaf className="text-green-600 text-xl" />
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900">Youth-Led</p>
                            <p className="text-sm text-gray-600">Nationwide Action</p>
                        </div>
                    </div>
                </div>
                
                <div className="absolute top-1/2 -right-6 bg-white rounded-xl p-4 shadow-lg" style={{animationDelay: '2s'}}>
                    <div className="flex items-center gap-3">
                        <div className="bg-red-100 p-2 rounded-lg">
                            <FaFlag className="text-red-600 text-xl" />
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900">Stand Against Corruption</p>
                            <p className="text-sm text-gray-600">Transparency & Justice</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="absolute -z-10 top-8 left-8 w-32 h-32 bg-green-200 rounded-full opacity-20"></div>
            <div className="absolute -z-10 bottom-8 right-8 w-24 h-24 bg-emerald-200 rounded-full opacity-20"></div>
        </div>
    )
}

export default HeroImage;
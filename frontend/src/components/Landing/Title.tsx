const Title = () => {
    return (
        <div className="space-y-6">
            <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Enough is <span className="text-red-700"> Enough </span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700">
                    Youth of Nepal Against Corruption
                </h2>
            </div>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Join a nationwide movement led by young Nepalis demanding transparency, accountability, and an end to systemic corruption. Be part of the change we need for a just and prosperous Nepal.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Transparency</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Accountability</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Youth Leadership</span>
                </div>
            </div>
        </div>
    )
}

export default Title;
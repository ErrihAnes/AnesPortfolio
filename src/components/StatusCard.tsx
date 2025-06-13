

const StatusCard = () => {
    return (
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6 text-white h-full min-h-[120px] hover:border-gray-50 transition-colors duration-100 delay-50">
            <div className="flex items-center space-x-2 mb-2">
                <h2 className="text-lg font-semibold">Maintenant </h2>
                <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                    </span>
            </div>
            <p className="text-gray-400 text-sm mb-3">Qu'est-ce que je fais ?</p>
            <p className="text-white text-sm">Actuellement à la recherche d'une alternance</p>
        </div>
    );
};

export default StatusCard;
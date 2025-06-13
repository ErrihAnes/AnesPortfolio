
import AnimatedName from './AnimatedName';
const MapCard = () => {
    return (
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6 text-white hover:border-gray-50 transition-colors duration-100 delay-50 backdrop-blur-md h-full min-h-[180px] flex items-center justify-center">
            <AnimatedName/>
        </div>
    );
};

export default MapCard;
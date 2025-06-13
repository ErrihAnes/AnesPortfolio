import Clock from './Clock';

const TimeCard = () => {
    return (
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6 text-white text-center h-full min-h-[120px] flex items-center justify-center hover:border-gray-50 transition-colors duration-100 delay-50">
            <h2 className="text-2xl sm:text-3xl font-bold">
                <Clock/>
            </h2>
        </div>
    );
};

export default TimeCard;


const ColorPaletteCard = () => {


    return (
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6 h-full min-h-[120px] flex items-center justify-center hover:border-gray-50 transition-colors duration-100 delay-50 backdrop-blur-md">
            <div className="flex space-x-2 sm:space-x-3 text-white">
                <p>@2025 Crafted with <span>♥️</span> using <span className="text-red-500">React</span> by Anes :)</p>
            </div>
        </div>
    );
};

export default ColorPaletteCard;
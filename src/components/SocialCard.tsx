
const SocialCard = () => {
    return (
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6 text-white h-full min-h-[300px] xl:min-h-[400px] max-h-[400px]  hover:border-gray-50 transition-colors duration-100 delay-50 flex flex-col space-y-2 ">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Prêt à collaborer ?!</h2>

            </div>


            <div>
                <h3 className="text-gray-400 text-sm mb-2">Coordonnées</h3>
                <p className="text-white text-sm break-all">aneserrih20@gmail.com</p>
                <p className="text-gray-300 text-sm">Lyon</p>
            </div>
            <div id="cv" className="flex flex-col space-y-6  space-x-3 mt-4">
                <h2>📄 Téléchargez mon CV : </h2>

                    <a className="hover:text-gray-700 text-red-300 transition-colors transition-colors duration-100" href="../../AnesERRIHweb.pdf" target="_blank" download>Télécharger le CV - Développement Web</a>
                    <a className="hover:text-gray-700 text-red-300 transition-colors transition-colors duration-100" href="../../AnesErrihdata.pdf" target="_blank" download>Télécharger le CV - Data Science</a>

            </div>



        </div>
    );
};

export default SocialCard;
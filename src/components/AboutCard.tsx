

const AboutCard = () => {
    return (
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6 text-white h-full min-h-[200px] max-h-[400px] hover:border-gray-50 transition-colors duration-100 delay-50">
            <h2 className="font-semibold mb-4">About me</h2>
            <p className="text-gray-300 text-sm mb-4">
                Étudiant en informatique passionné par le développement web et la data science.
            </p>
            <p className="text-gray-300 text-sm mb-3">
                Compétences en développement web :
            </p>
            <ul className="text-gray-300 text-sm space-y-1">
                <li>• JavaScript / Tailwind CSS et React </li>
                <li>• Express.js / Nodejs</li>
                <li>• Flask : Python   </li>
            </ul>
            <br/>
            <p className="text-gray-300 text-sm mb-3">
                Compétences en data science :
            </p>
            <ul className="text-gray-300 text-sm space-y-1">
                <li>• Nettoyage de données avec Excel, Python (Pandas, NumPy)</li>
                <li>• Visualisation de données avec Tableau, Power BI</li>
            </ul>
        </div>
    );
};

export default AboutCard;
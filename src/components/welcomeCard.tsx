import { Github, Linkedin } from 'lucide-react';
import avatar from '../assets/avatar.png';
import tableau from '../assets/tableau.png';
const WelcomeCard = () => {
    return (
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6 text-white  h-full min-h-[200px] max-h-[400px] flex flex-col hover:border-gray-50 transition-colors duration-100 delay-50 backdrop-blur-md">


            <div className="flex flex-col sm:flex-row justify-between items-start flex-1 gap-4">
                <div className="w-full">
                    <h2 className="text-sm text-gray-400 mb-2">welcome</h2>
                    <h3 className="text-sm sm:text-lg font-semibold mb-4">Bonjour, </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">Étudiant en informatique diplômé de l’Université Lyon 1, je cherche une alternance en master développement web, logiciel, data science ou IA. je souhaite allier pratique et apprentissage continu.</p>
                    <p className="text-gray-300 text-sm leading-relaxed mt-4 mb-2">N’hésitez pas à me contacter si vous avez une opportunité d’alternance ou un projet à me proposer.</p>
                </div>
                <div>
                    <img src={avatar} alt="avatar" className="w-24 h-24 sm:w-32 sm:h-32 object-contain rounded-full border" />
                </div>
            </div>


            <div className="flex space-x-3 items-center">
                <a href="https://github.com/ErrihAnes" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 bg-gray-800 border border-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/in/anes-errih-536a27256/" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 bg-gray-800 border border-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <Linkedin size={18} />
                </a>
                <a href="https://public.tableau.com/app/profile/anes7242/vizzes" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 bg-gray-800 border border-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <img src={tableau} alt="tableau" className="w-12 h-12" />
                </a>
                <a href="mailto:aneserrih20@gmail.com"
                   className="ml-auto px-4 py-2 bg-white/5 text-white border border-white/20 rounded-md font-semibold hover:bg-white/10 transition duration-300">
                    Me contacter
                </a>
            </div>
        </div>
    );
};

export default WelcomeCard;

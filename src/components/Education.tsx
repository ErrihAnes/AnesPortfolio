import {Link} from "react-router-dom";
import EducBG from '../assets/education.png';
const Education = () =>{
    return (
        <div
            className="bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6 text-white h-full min-h-[120px] bg-cover bg-center relative overflow-hidden hover:border-gray-50 transition-colors duration-100 delay-50"
            style={{ backgroundImage: `url(${EducBG})` }}
        >
            <div className="absolute inset-0 bg-black/60 z-0" />
            <Link
                to="/education"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block p-4 text-white transition-transform duration-300 rounded-xl hover:translate-x-1 hover:-translate-y-1 bg-black/50"
            >
                {/* Texte principal */}
                <div>
                    <h2 className="text-xl font-bold">Education</h2>
                    <div className="text-sm italic text-gray-300">Parcours universitaire</div>
                </div>

                {/* Flèche en haut à droite */}
                <div className="absolute top-4 right-4 text-xl">↗</div>
            </Link>

        </div>
    );
}
export default Education;
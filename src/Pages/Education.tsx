import { motion } from "framer-motion";
import {Link as RouterLink} from "react-router-dom";
import Lyon1BG from '../assets/Lyon1.jpg';
import UboBG from '../assets/Brest.jpg';

const Education =()=>{
    const getFadeInDrop = (delay = 0) => ({
        initial: { y: -100, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
                delay,
            },
        },
    });
    const formation = [
        {
            id:1,
            image:Lyon1BG,
            date: "2022/2023",
            title:"Troisième année Licence informatique",
            fac:"Université Claud Bernard Lyon 1",
            description:"Base de données avancés , programmation oriantée objet, Reseau, Programmation concurente, Développement Web"
        },
        {
            id:1,
            image:Lyon1BG,
            date: "2023/2024",
            title:"Deuxième année Licence informatique",
            fac:"Université Claud Bernard Lyon 1",
            description:"Base de données , programmation oriantée objet, Analyse Matricielle Et Algèbre Linéaire, Systèmes d’exploitation, Développement Web"
        },
        {
            id:1,
            image:UboBG,
            date: "2024/2025",
            title:"Première année Licence informatique",
            fac:"Université de Bretagne Occidentale",
            description:"Algorithme , Mécanique, Eléctronique, Électronique numérique"
        },
    ]
    return (
        <div className="min-h-screen bg-[radial-gradient(circle,_rgba(31,41,55,0.8)_1px,_transparent_1px)] bg-[length:20px_20px] bg-black p-6 sm:p-10 text-white">
            <div className="absolute top-6 left-6">
                <RouterLink
                    to="/"
                    className="text-gray-300 border border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-300"
                >
                    ← Retour
                </RouterLink>
            </div>
            <h1 className="text-4xl font-bold text-center mb-12">Education</h1>
            <div className=" space-y-8 max-w-4xl mx-auto">
                {formation.map((formation,idx) => (
                    <motion.div
                        key={formation.id}
                        {...getFadeInDrop(idx * 0.2)}
                        className="bg-gray-900  border border-gray-800 rounded-xl p-7 hover:border-gray-50 transition-colors duration-300 backdrop-blur-md"
                    >
                    <div key={formation.id} className=" p-6 hover:border-gray-50 transition-colors duration-100 delay-50 backdrop-blur-md">
                        <div className="flex items-start space-x-6">
                            <img
                                src={formation.image}
                                alt={formation.title}
                                className="w-16 h-16 object-contain rounded-full border border-gray-600"
                            />
                            <div>
                                <h1 className="text-2xl font-semibold">{formation.title}</h1>
                                <p className="text-purple-400 text-base mb-1">{formation.date} – {formation.fac}</p>
                                <p className="text-gray-300 text-base">{formation.description}</p>
                            </div>
                        </div>
                    </div>
                    </motion.div>
                ))}

            </div>
        </div>
    )
}
export default Education
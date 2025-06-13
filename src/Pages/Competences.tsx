import { motion } from "framer-motion";
import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaBootstrap,
    FaPython,
    FaGitAlt,
    FaNodeJs,
    FaPhp,
    FaGithub,
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiVite,
    SiFlask,
    SiMysql,
    SiMongodb,
    SiPandas,
    SiNumpy,
    SiTableau,
    SiCanva,
    SiOpenai,
} from "react-icons/si";
import {Link as RouterLink} from "react-router-dom";

const Competences = () => {
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
    const competences = [
        {
            id: 1,
            title: "Frontend",
            tags: [
                { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
                { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
                { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
                { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
                { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
                { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
                { name: "Vite", icon: <SiVite className="text-purple-400" /> },
            ],
        },
        {

            id: 2,
            title: "Backend",
            tags: [
                { name: "Python", icon: <FaPython className="text-yellow-400" /> },
                { name: "Flask", icon: <SiFlask className="text-gray-300" /> },
                { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
                { name: "NodeJS", icon: <FaNodeJs className="text-green-500" /> },
                { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },

            ],
        },
        {
            id: 3,
            title: "AI/ML",
            tags: [
                { name: "Python", icon: <FaPython className="text-yellow-400" /> },
                { name: "Pandas", icon: <SiPandas className="text-white" /> },
                { name: "Numpy", icon: <SiNumpy className="text-blue-400" /> },
                { name: "Power BI", icon: '' }, // Remplacé faute de meilleur logo
                { name: "Tableau", icon: <SiTableau className="text-blue-500" /> },
                { name: "Excel", icon: '' },

            ],
        },
        {
            id: 4,
            title: "Autres",
            tags: [
                { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
                { name: "VS Code", icon: '' },
                { name: "Canva", icon: <SiCanva className="text-cyan-400" /> },
                { name: "ChatGPT", icon: <SiOpenai className="text-green-400" /> },
                { name: "GitHub", icon: <FaGithub className="text-white" /> },

            ],
        },
    ];

    return (
        <div className="min-h-screen bg-[radial-gradient(circle,_rgba(31,41,55,0.8)_1px,_transparent_1px)] bg-[length:20px_20px] bg-black p-6 sm:p-10">
            <div className="absolute top-6 left-6">
                <RouterLink
                    to="/"
                    className="text-gray-300 border border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-300"
                >
                    ← Retour
                </RouterLink>
            </div>
            <h1 className="text-4xl font-bold text-center mb-25 text-white">Compétences</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {competences.map((competence,idx) => (
                    <motion.div
                        key={competence.id}
                        {...getFadeInDrop(idx * 0.2)}
                        className="bg-gray-900  border border-gray-800 rounded-xl p-7 hover:border-gray-50 transition-colors duration-300 backdrop-blur-md"
                    >

                    <div
                        key={competence.id}
                        className="p-3"
                    >
                        <h2 className="text-2xl font-semibold text-center mb-8 text-white">
                            {competence.title}
                        </h2>
                        <div className="flex flex-wrap justify-center gap-3">
                            {competence.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="flex items-center gap-2 bg-white/10 text-white px-4 py-1 rounded-md text-sm border border-white/20"
                                >
                  <span className="text-lg p-1">{tag.icon}</span>
                                    {tag.name}
                </span>
                            ))}
                        </div>
                    </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Competences;

import { Link as RouterLink } from "react-router-dom";
import { Github, ArrowUpRight, Code2 } from 'lucide-react';
import { motion } from "framer-motion";
const Devweb = () => {
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
    // La structure des données a été enrichie pour correspondre au nouveau design
    const projects = [
        {
            id: 1,
            image: "/mail.png",
            title: "Dashboard IA d’Automatisation des E-mails",
            date: "Janvier 2025",
            description: "Conception d’un dashboard React.js pour une application d’automatisation des e-mails par IA. Interface responsive permettant " +
                "de générer, modifier et suivre des e-mails intelligents. Stack utilisée : React, Tailwind CSS, Axios, React Router.",
            tags: ["React", "Typescript", "Tailwind"],
            links: {
                github: "https://github.com/ErrihAnes/my_dashboard",
                live: "#",
            },
        },
        {
            id: 2,
            image: "/flask.png",
            title: "Back-End de l’Application d’Automatisation des Mails par IA (Flask & API de ChatGPT)",
            date: "Janvier 2025",
            description: "Développement du back-end en Flask pour traiter automatiquement les e-mails reçus via l’API ChatGPT. Analyse du contenu, génération de réponses et communication avec le front React pour une gestion intelligente des mails.",
            tags: ["Flask", "Python", "sqlalchemy", "LLM"],
            links: {
                github: "https://github.com/ErrihAnes/Mail-Application",
                live: "#",
            },
        },
        {
            id: 3,
            image: "/qtcreator.png",
            title: "Logiciel de Gestion Aérienne – Employés, Matériel & Clients (C++ / Qt)",
            date: "Février 2024",
            description: "Développement d’un logiciel de gestion complet en C++ (POO) avec Qt, destiné à une compagnie aérienne. Interface graphique permettant de gérer efficacement les employés, " +
                "le matériel (avions, équipements) et les clients. Architecture modulaire et orientée objet pour une maintenance facilitée.",
            tags: ["QT", "C++", "OOP", "Sqlite"],
            links: {
                github: "https://github.com/ErrihAnes/Gestion-des-Vols",
                live: "#",
            },
        }
        ,
        {
            id: 4,
            image: "/scrable.png",
            title: "Scrabble Automatique (C++)",
            date: "Février 2024",
            description: "Développement d’un jeu de Scrabble automatique en C++, capable de générer, valider et jouer des mots selon les règles officielles. Implémentation d’une logique de jeu autonome avec gestion du plateau, du score, et d’un dictionnaire intégré. " +
                "le matériel (avions, équipements) et les clients. Architecture modulaire et orientée objet pour une maintenance facilitée.",
            tags: ["C++","OOP"],
            links: {
                github: "https://github.com/ErrihAnes/Scrabble-automatique",
                live: "#",
            },
        }
        ,


    ];

    return (
        <div className="min-h-screen bg-[radial-gradient(circle,_rgba(31,41,55,0.8)_1px,_transparent_1px)] bg-[length:20px_20px] bg-black p-6 sm:p-10">
            {/* Bouton Retour */}
            <div className="absolute top-6 left-6">
                <RouterLink
                    to="/"
                    className="text-gray-300 border border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-300"
                >
                    ← Retour
                </RouterLink>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <h1 className="text-4xl sm:text-5xl font-bold mt-16 sm:mt-8 text-gray-400">Mes Projets</h1>
                <p className="mt-4 text-lg text-gray-400 text-center max-w-2xl">
                    Voici une sélection de projets sur lesquels j'ai travaillé.
                </p>

                {/* Grille pour les cartes de projet */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {projects.map((project,idx) => (
                        <motion.div
                            key={project.id}
                            {...getFadeInDrop(idx * 0.2)}
                            className="bg-gray-900  border border-gray-800 rounded-xl p-7 hover:border-gray-50 transition-colors duration-300 backdrop-blur-md"
                        >
                        <div
                            key={project.id}
                            className="bg-gray-900  border border-gray-800 rounded-xl p-5 flex flex-col gap-4 group transition-all duration-300 hover:border-gray-50 hover:-translate-y-1 "
                        >
                            {/* Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover rounded-lg border border-gray-700"
                            />

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="bg-blue-900/50 text-blue-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Titre et Date */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-100">{project.title}</h3>
                                <p className="text-sm text-gray-500 mt-1">{project.date}</p>
                            </div>

                            {/* Description */}
                            <p className="text-gray-400 text-sm flex-grow">{project.description}</p>

                            {/* Liens en bas */}
                            <div className="mt-auto flex justify-end items-center pt-4 gap-4">
                                <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors">
                                    <Github size={22} />
                                </a>
                                <a href={project.links.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" className="text-gray-400 hover:text-white transition-colors">
                                    <ArrowUpRight size={22} />
                                </a>
                            </div>
                        </div>
                        </motion.div>
                    ))}

                    {/* Carte "Voir tous les projets" */}
                    <a
                        href="https://github.com/ErrihAnes" // Lien vers votre page GitHub
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#161b22] border border-dashed border-gray-700 rounded-xl p-5 flex flex-col gap-4 items-center justify-center group transition-all duration-300 hover:border-blue-600 hover:bg-[#1a2029]"
                    >
                        <Code2 size={40} className="text-gray-500 group-hover:text-white transition-colors"/>
                        <p className="text-lg font-semibold text-gray-400 group-hover:text-white transition-colors">Voir tous les projets</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Devweb;
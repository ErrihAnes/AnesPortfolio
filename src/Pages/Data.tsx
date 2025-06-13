import { Link as RouterLink } from "react-router-dom";
import { ArrowUpRight, Code2 } from 'lucide-react';
import { motion } from "framer-motion";
import t1 from '../assets/tab1.png';
import t2 from '../assets/tab2.png';
import  t3 from '../assets/tab3.png';
import  t4 from '../assets/tab4.png';
const Data = () => {
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
            image: t1,
            title: "Dashboard Interactive – Revenus d’une Entreprise de Papiers",
            date: "Janvier 2025",
            description: "Visualisation interactive des revenus d’une entreprise de papiers avec graphiques, filtres et indicateurs pour analyser les performances financières." +
                "de générer, modifier et suivre des e-mails intelligents. Stack utilisée : React, Tailwind CSS, Axios, React Router.",
            tags: ["Tableau","Data Analyse"," Python - Pandas"," Python - Numpy"],
            links: {
                github: "",
                live: "https://public.tableau.com/app/profile/anes7242/viz/Entreprisedepapiers/Tableaudebord1",
            },
        },
        {
            id: 2,
            image: t2,
            title: "Dashboard – Films & Séries (1980–2021)",
            date: "Janvier 2025",
            description: "Création d’une dashboard interactive pour explorer les films et séries sortis entre 1980 et 2021. Visualisation des données par genres, années, notes, et popularité. Interface responsive avec filtres dynamiques, graphiques et statistiques claires pour une analyse intuitive.",
            tags: ["Tableau","Data Analyse"," Python - Pandas"," Python - Numpy"],
            links: {
                github: "",
                live: "https://public.tableau.com/app/profile/anes7242/viz/FilmsSeries1980-2021/Tableaudebord1",
            },
        },
        {
            id: 3,
            image: t3,
            title: "Dashboard – Ventes & Clients d’un Supermarché",
            date: "Février 2024",
            description: "Développement d’une dashboard analytique pour visualiser les produits vendus, le comportement des clients et les tendances d’achat. Affichage interactif des ventes par catégorie, période, client et localisation pour optimiser la stratégie commerciale",
            tags: ["Tableau","Data Analyse"," Python - Pandas"," Python - Numpy"],
            links: {
                github: "",
                live: "https://public.tableau.com/app/profile/anes7242/viz/Supermarch_16714023508530/Tableaudebord1",
            },
        }
        ,
        {
            id: 4,
            image: t4,
            title: "Dashboard – Suivi de la COVID-19",
            date: "Février 2024",
            description: "Création d’une dashboard interactive pour suivre l’évolution de la COVID-19 : cas confirmés, guérisons, décès et taux de vaccination par pays et par période. Visualisation claire via graphiques dynamiques, cartes et filtres temporels pour une analyse rapide et précise." +
                "le matériel (avions, équipements) et les clients. Architecture modulaire et orientée objet pour une maintenance facilitée.",
            tags: ["Tableau","Data Analyse"," Python - Pandas"," Python - Numpy"],
            links: {
                github: "",
                live: "https://public.tableau.com/app/profile/anes7242/viz/Covide_DashBord/Tableaudebord1",
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

                                <a href={project.links.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" className="text-gray-400 hover:text-white transition-colors">
                                    <ArrowUpRight size={22} />
                                </a>
                            </div>
                        </div>
                        </motion.div>
                    ))}

                    {/* Carte "Voir tous les projets" */}
                    <a
                        href="https://public.tableau.com/app/profile/anes7242/vizzes" // Lien vers votre page GitHub
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
export default Data;
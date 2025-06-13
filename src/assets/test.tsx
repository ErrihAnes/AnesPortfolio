const Education = () => {
    const formation = [
        {
            id: 1,
            image: "../education.png",
            date: "2024/2025",
            title: "Troisième année Licence informatique",
            fac: "Université Claude Bernard Lyon 1",
            description: "Base de données avancées, programmation orientée objet, Réseau, Programmation concurrente, Développement Web"
        },
        {
            id: 2,
            image: "../education.png",
            date: "2023/2024",
            title: "Troisième année Licence informatique",
            fac: "Université Claude Bernard Lyon 1",
            description: "Base de données, programmation orientée objet, Analyse matricielle et algèbre linéaire, Systèmes d’exploitation, Développement Web"
        },
        {
            id: 3,
            image: "../education.png",
            date: "2022/2023",
            title: "Troisième année Licence informatique",
            fac: "Université de Bretagne Occidentale",
            description: "Algorithmes, Mécanique, Électronique, Électronique numérique"
        },
    ];

    return (
        <section className="min-h-screen bg-gradient-to-br from-[#1f1f2b] to-[#111118] text-white py-12 px-6 sm:px-10">
            <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
            <div className="space-y-8 max-w-4xl mx-auto">
                {formation.map((formation) => (
                    <div key={formation.id} className="bg-[#1c1c28] border border-purple-700/50 rounded-xl p-6 shadow-lg transition-all hover:shadow-purple-500/20">
                        <div className="flex items-start space-x-6">
                            <img
                                src={formation.image}
                                alt={formation.title}
                                className="w-16 h-16 object-contain rounded-full border border-gray-600"
                            />
                            <div>
                                <h3 className="text-xl font-semibold">{formation.title}</h3>
                                <p className="text-purple-400 text-sm mb-1">{formation.date} – {formation.fac}</p>
                                <p className="text-gray-300 text-sm">{formation.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;

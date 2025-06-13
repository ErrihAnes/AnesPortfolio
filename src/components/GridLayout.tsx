import WelcomeCard from './welcomeCard.tsx';
import AboutCard from './AboutCard';
import SocialCard from './SocialCard';
import TimeCard from './TimeCard';
import StatusCard from './StatusCard';
import MapCard from './MapCard';
import WebLien from './WebLien.tsx';
import ComData from "./DataLien.tsx";
import { motion } from "framer-motion";
import ColorPalettCard from "./ColorPalettCard.tsx";
import Education from "./Education.tsx";
import SkillsLien from "./SkillsLien.tsx";
// Fonction génératrice d'animation avec délai
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

const GridLayout = () => {
    return (
        <div className="min-h-screen p-4 sm:p-6 bg-[radial-gradient(circle,_rgba(31,41,55,0.8)_1px,_transparent_1px)] bg-[length:20px_20px] bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

                    <motion.div {...getFadeInDrop(0.1)} className="sm:col-span-2 lg:col-span-2">
                        <WelcomeCard />
                    </motion.div>

                    <motion.div {...getFadeInDrop(0.2)} className="lg:col-span-1">
                        <AboutCard />
                    </motion.div>

                    <motion.div {...getFadeInDrop(0.3)} className="xl:row-span-1">
                        <SocialCard />
                    </motion.div>

                    <motion.div {...getFadeInDrop(0.4)}>
                        <TimeCard />
                    </motion.div>

                    <motion.div {...getFadeInDrop(0.5)}>
                        <StatusCard />
                    </motion.div>

                    <motion.div {...getFadeInDrop(0.6)}>
                        <WebLien />
                    </motion.div>

                    <motion.div {...getFadeInDrop(0.7)}>
                        <ComData />
                    </motion.div>

                    <motion.div {...getFadeInDrop(0.8)}>
                        <SkillsLien/>
                    </motion.div>

                    <motion.div {...getFadeInDrop(0.9)}>
                        <Education/>
                    </motion.div>

                    <motion.div {...getFadeInDrop(1.0)}>
                        <MapCard />
                    </motion.div>
                    <motion.div {...getFadeInDrop(1.0)}>
                        <ColorPalettCard />
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default GridLayout;

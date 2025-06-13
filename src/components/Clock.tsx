import { useEffect, useState } from "react";
import { FaClock } from 'react-icons/fa';
const Clock = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
            };
            setTime(now.toLocaleTimeString('en-US', options));
        };

        updateClock(); // initial
        const interval = setInterval(updateClock, 1000); // every second

        return () => clearInterval(interval); // cleanup
    }, []);

    return (
        <div className="flex items-center gap-2">
            <FaClock className="text-cyan-150" />
            <span className="text-2xl font-mono text-cyan-150 drop-shadow-glow animate-pulse ">{time}</span>
        </div>
    );
};

export default Clock;

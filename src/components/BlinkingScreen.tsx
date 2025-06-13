// Animation 9: Écran qui clignote (comme du code qui s'écrit)
import {useEffect, useState} from "react";
import {Monitor } from "lucide-react"

export function BlinkingScreen() {
    const [isOn, setIsOn] = useState(true)

    useEffect(() => {
        const timer = setInterval(() => {
            setIsOn((prev) => !prev)
        }, 800)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="flex items-center justify-center p-8">
            <div className={`transition-all duration-300 ${isOn ? "opacity-100" : "opacity-50"}`}>
                <Monitor className="w-5 h-5 text-gray-700" />
                <div
                    className={`w-2 h-2 bg-green-400 rounded-full absolute ml-6 mt-2 ${isOn ? "opacity-100" : "opacity-0"}`}
                ></div>
            </div>
        </div>
    )
}
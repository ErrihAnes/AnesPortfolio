import React from 'react';
import {Link} from "react-router-dom";

interface ProjectCardProps {
    title: string;
    link: string;
    className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title,link, className = "" }) => {

    return (
        <div className={`bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6 text-white hover:border-gray-600 transition-colors cursor-pointer h-full min-h-[120px] ${className}`}>
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">{title}</h2>
                <Link className='nav-link' to={`/${link}`} target="_blank" rel="noopener noreferrer">here</Link>
                <div className="w-6 h-6 text-gray-400 flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
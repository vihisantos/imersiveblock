import React from 'react';
import { useTranslation } from 'react-i18next';

const ProjectsScreen = ({ onBack }) => {
    const { t } = useTranslation();

    const projects = [
        {
            title: t('project_1_title'),
            desc: t('project_1_desc'),
            tags: ["PotionAPI", "Alchemy.js", "NetherAuth"],
            color: "border-purple-500 text-purple-400",
            image: "/assets/projects/project_1.jpg"
        },
        {
            title: t('project_2_title'),
            desc: t('project_2_desc'),
            tags: ["BlockChain", "EmeraldScript", "VillagerUI"],
            color: "border-green-500 text-green-400",
            image: "/assets/projects/project_2.jpg"
        },
        {
            title: t('project_3_title'),
            desc: t('project_3_desc'),
            tags: ["React", "Chart.js", "Redstone"],
            color: "border-red-500 text-red-500",
            image: "/assets/projects/project_3.jpg"
        },
        {
            title: t('project_4_title'),
            desc: t('project_4_desc'),
            tags: ["SkyScanner", "MapBox", "ElytraKit"],
            color: "border-blue-300 text-blue-300",
            image: "/assets/projects/project_4.jpg"
        },
        {
            title: t('project_5_title'),
            desc: t('project_5_desc'),
            tags: ["Security", "ExplosionGuard", "Java"],
            color: "border-orange-500 text-orange-500",
            image: "/assets/projects/project_5.jpg"
        },
        {
            title: t('project_6_title'),
            desc: t('project_6_desc'),
            tags: ["WebAudio", "MIDI", "NoteBlock"],
            color: "border-yellow-500 text-yellow-500",
            image: "/assets/projects/project_6.jpg"
        }
    ];

    return (
        <div className="w-full h-full flex flex-col items-center justify-start pt-12 pb-12 pointer-events-auto bg-black/65 backdrop-blur-md overflow-y-auto">

            <div className="w-full max-w-6xl px-4 flex flex-col items-center">
                <div className="flex items-center justify-between w-full mb-8 border-b-2 border-white/20 pb-4">
                    <h2 className="text-white text-4xl font-minecraft drop-shadow-md">{t('projects_title')}</h2>
                    <button onClick={onBack} className="btn-minecraft text-sm px-4 py-2">
                        {t('return_menu')}
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`bg-[#1e1e1e] border-2 ${project.color} p-4 shadow-lg hover:scale-105 transition-transform duration-300 group flex flex-col`}
                        >
                            {/* Project Image */}
                            {/* Project Image */}
                            <div className="w-full h-32 bg-black/50 mb-4 border border-white/10 relative overflow-hidden group-hover:border-white/30 transition-colors">
                                <div className="absolute inset-0 bg-[url('/assets/textures/stone.png')] opacity-10 z-0"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover rendering-pixelated z-10 relative opacity-90 group-hover:opacity-100 transition-opacity"
                                />
                            </div>

                            <h3 className={`text-xl font-minecraft mb-2 ${project.color}`}>{project.title}</h3>
                            <p className="text-gray-400 font-pixel text-sm mb-4 flex-grow leading-relaxed">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-[10px] font-pixel bg-white/10 text-white px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-2 mt-auto">
                                <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-pixel text-xs py-2 px-1 border border-black shadow-[2px_2px_0_black]">
                                    {t('view_code')}
                                </button>
                                <button className="flex-1 bg-mc-green hover:bg-[#3d6e32] text-white font-pixel text-xs py-2 px-1 border border-black shadow-[2px_2px_0_black]">
                                    {t('deploy')}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full text-center mt-12 mb-8">
                    <button onClick={onBack} className="btn-minecraft text-lg px-12">
                        {t('return_menu')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectsScreen;

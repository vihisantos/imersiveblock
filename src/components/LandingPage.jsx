import React from 'react';
import { useTranslation } from 'react-i18next';

const LandingPage = ({ onBack, onProjects }) => {
    const { t } = useTranslation();

    return (
        <div className="w-full h-full flex flex-col items-center justify-start pt-20 pointer-events-auto bg-black/60 backdrop-blur-md overflow-y-auto">

            {/* Achievement Pop-up Style Header */}
            <div className="bg-[#202020] border-2 border-white text-yellow-300 px-6 py-4 mb-10 flex items-center gap-4 animate-slide-down shadow-lg">
                <div className="w-10 h-10 bg-mc-diamond animate-pulse"></div>
                <div>
                    <div className="text-white text-xs font-pixel uppercase tracking-widest">{t('achievement_title')}</div>
                    <div className="text-xl font-minecraft">{t('achievement_desc')}</div>
                </div>
            </div>

            {/* Main Content Container (Dark Obsidian Theme) */}
            <div className="w-full max-w-5xl bg-[#121212]/95 border-2 border-white/20 p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative mb-20 backdrop-blur-sm rounded-sm">

                {/* Decorative Corners */}
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 border-yellow-400"></div>
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t-4 border-r-4 border-yellow-400"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-4 border-l-4 border-yellow-400"></div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 border-yellow-400"></div>

                <button
                    onClick={onBack}
                    className="absolute top-6 right-6 text-gray-400 hover:text-red-500 font-pixel text-xl transition-colors"
                >
                    [CLOSE]
                </button>

                <div className="mt-4 mb-8 text-center relative group">
                    <h1 className="text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 font-minecraft drop-shadow-md group-hover:scale-105 transition-transform duration-300">
                        {t('welcome')}
                    </h1>
                    <div className="w-32 h-1 bg-yellow-500 mx-auto mt-4 rounded-full shadow-[0_0_10px_orange]"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left Column: Text & Objectives */}
                    <div className="space-y-6 text-gray-300 font-pixel leading-relaxed text-sm md:text-base">
                        <div className="p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                            <p className="mb-4 text-justify">{t('intro1')}</p>
                            <p className="text-justify">{t('intro2')}</p>
                        </div>

                        <div className="p-5 bg-black/40 border-l-4 border-green-500 shadow-inner">
                            <h3 className="text-green-400 font-minecraft text-xl mb-3 flex items-center gap-2">
                                <span className="animate-pulse">➤</span> {t('objective_title')}
                            </h3>
                            <ul className="space-y-2 text-xs md:text-sm text-gray-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500">[✓]</span> {t('objective1')}
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-yellow-500">[!]</span> {t('objective2')}
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500">[?]</span> {t('objective3')}
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Stats & Projects */}
                    <div className="flex flex-col gap-6">
                        {/* Stats Panel */}
                        <div className="bg-[#1a1a1a] p-1 border border-gray-700 shadow-lg relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                            <div className="p-4 bg-black/40">
                                <h3 className="text-white font-minecraft text-lg mb-4 flex justify-between items-center">
                                    {t('stats_title')}
                                    <span className="text-[10px] bg-blue-900 text-blue-200 px-2 py-1 rounded">PLAYER_DATA</span>
                                </h3>

                                <div className="space-y-4 font-pixel text-xs">
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-gray-400">Level</span>
                                            <span className="text-yellow-400 font-bold">99</span>
                                        </div>
                                        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                                            <div className="w-[99%] h-full bg-yellow-500 animate-pulse"></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-gray-400">XP</span>
                                            <span className="text-green-400 font-mono tracking-widest">9,999,999</span>
                                        </div>
                                        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                                            <div className="w-full h-full bg-gradient-to-r from-green-600 to-green-400"></div>
                                        </div>
                                    </div>

                                    <div className="pt-2 border-t border-gray-800 flex justify-between items-center">
                                        <span className="text-gray-500">{t('class_label')}</span>
                                        <span className="text-blue-400 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">{t('class_value')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Projects Portal Button */}
                        <div
                            onClick={onProjects}
                            className="flex-1 bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-white/20 p-6 flex flex-col justify-center items-center text-center hover:border-white/50 cursor-pointer transition-all hover:shadow-[0_0_30px_rgba(100,100,255,0.3)] group relative overflow-hidden"
                        >
                            <div
                                className="absolute inset-0 opacity-10 mix-blend-overlay"
                                style={{ backgroundImage: `url('${import.meta.env.BASE_URL}assets/textures/nether_portal.gif')` }}
                            ></div>
                            <div className="text-5xl mb-4 group-hover:-translate-y-2 transition-transform duration-300 drop-shadow-[0_0_15px_cyan]">💎</div>
                            <div className="font-minecraft text-2xl text-white group-hover:text-cyan-300 transition-colors">{t('view_projects')}</div>
                            <div className="text-[10px] text-cyan-500 font-pixel mt-2 tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">CLICK TO WARP</div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <button
                        onClick={onBack}
                        className="btn-minecraft text-base px-10 hover:brightness-110 active:scale-95 transition-all w-full md:w-auto"
                    >
                        {t('return_menu')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;

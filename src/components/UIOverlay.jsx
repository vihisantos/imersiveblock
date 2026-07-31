import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMinecraftSound } from '../hooks/useMinecraftSound';

const UIOverlay = ({ onMultiplayer, onShowGame, onOptions, onDevLog }) => {
    const { t } = useTranslation();
    const { playClick, playHover } = useMinecraftSound();

    const handleStart = () => {
        playClick();
        onShowGame();
    };

    const handleMultiplayer = () => {
        playClick();
        onMultiplayer();
    };

    const handleOptions = () => {
        playClick();
        onOptions();
    };

    const handleDevLog = () => {
        playClick();
        onDevLog();
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center pointer-events-auto px-4 text-center screen-enter">
            <div className="mb-6 sm:mb-8 w-full max-w-[100vw] overflow-hidden">
                <h1 className="text-[10vw] sm:text-6xl md:text-7xl text-white drop-shadow-[4px_4px_0_rgba(0,0,0,0.5)] mb-2 sm:whitespace-nowrap leading-none animate-float">
                    IMERSIVE<span className="text-mc-diamond block sm:inline">BLOCK</span>
                </h1>
                <p className="text-xs sm:text-xl text-gray-300 font-pixel mt-2">{t('title')}</p>
            </div>

            <div className="flex flex-col space-y-3 sm:space-y-4 w-52 sm:w-64">
                <button
                    onClick={handleStart}
                    onMouseEnter={() => playHover()}
                    className="btn-minecraft text-base sm:text-xl transition-all hover:scale-105"
                >
                    {t('start')}
                </button>
                <button
                    onClick={handleMultiplayer}
                    onMouseEnter={() => playHover()}
                    className="btn-minecraft text-base sm:text-xl transition-all hover:scale-105"
                >
                    {t('multiplayer')}
                </button>
                <button
                    onClick={handleOptions}
                    onMouseEnter={() => playHover()}
                    className="btn-minecraft text-base sm:text-xl transition-all hover:scale-105"
                >
                    {t('options')}
                </button>
                <button
                    onClick={handleDevLog}
                    onMouseEnter={() => playHover()}
                    className="btn-minecraft text-base sm:text-xl transition-all hover:scale-105 border-yellow-500/50 hover:border-yellow-400"
                >
                    📜 {t('devlog')}
                </button>
            </div>

            <div className="absolute bottom-3 sm:bottom-4 text-[8px] sm:text-xs text-gray-500 font-pixel w-[90%] text-center">
                Minecraft is a trademark of Mojang Synergies AB. Not affiliated.
            </div>
        </div>
    );
};

export default UIOverlay;

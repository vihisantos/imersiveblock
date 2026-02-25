import React from 'react';
import { useTranslation } from 'react-i18next';

const UIOverlay = ({ onMultiplayer, onShowGame, onOptions }) => {
    const { t } = useTranslation();

    return (
        <div className="w-full h-full flex flex-col items-center justify-center pointer-events-auto">
            <div className="text-center mb-8">
                <h1 className="text-6xl text-white drop-shadow-[4px_4px_0_rgba(0,0,0,0.5)] mb-2">
                    IMERSIVE<span className="text-mc-diamond">BLOCK</span>
                </h1>
                <p className="text-xl text-gray-300 font-pixel">{t('title')}</p>
            </div>

            <div className="flex flex-col space-y-4 w-64">
                <button
                    onClick={onShowGame}
                    className="btn-minecraft text-xl transition-transform hover:scale-105"
                >
                    {t('start')}
                </button>
                <button
                    onClick={onMultiplayer}
                    className="btn-minecraft text-xl transition-transform hover:scale-105"
                >
                    {t('multiplayer')}
                </button>
                <button
                    onClick={onOptions}
                    className="btn-minecraft text-xl transition-transform hover:scale-105"
                >
                    {t('options')}
                </button>
            </div>


            <div className="absolute bottom-4 text-xs text-gray-500 font-pixel">
                Minecraft is a trademark of Mojang Synergies AB. Not affiliated.
            </div>
        </div >
    );
};

export default UIOverlay;

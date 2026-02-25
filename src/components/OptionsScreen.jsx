import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMinecraftSound } from '../hooks/useMinecraftSound';

const OptionsScreen = ({ onBack, currentSettings, onSave }) => {
    const [settings, setSettings] = useState(currentSettings);
    const playClick = useMinecraftSound();
    const { t, i18n } = useTranslation();

    const handleChange = (key, value) => {
        const newSettings = { ...settings, [key]: value };
        setSettings(newSettings);
        onSave(newSettings); // Live update
        if (key === 'soundVol') playClick(value / 100);
    };

    const toggleLanguage = () => {
        const langs = ['en', 'pt', 'villager'];
        const currentIndex = langs.indexOf(i18n.language) !== -1 ? langs.indexOf(i18n.language) : 0;
        const nextIndex = (currentIndex + 1) % langs.length;
        i18n.changeLanguage(langs[nextIndex]);
        playClick(settings.soundVol / 100);
    };

    const getLangLabel = (code) => {
        switch (code) {
            case 'en': return 'English';
            case 'pt': return 'Português';
            case 'villager': return 'Villager';
            default: return 'English';
        }
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center pointer-events-auto bg-black/70 backdrop-blur-sm">
            <h2 className="text-white text-4xl font-minecraft mb-8 drop-shadow-md">{t('options')}</h2>

            <div className="flex flex-col gap-6 w-96">
                <Slider
                    label={`${t('fov')}: ${settings.fov}`}
                    value={settings.fov}
                    onChange={(v) => handleChange('fov', v)}
                />

                <Slider
                    label={`${t('music')}: ${settings.musicVol}%`}
                    value={settings.musicVol}
                    onChange={(v) => handleChange('musicVol', v)}
                />

                <Slider
                    label={`${t('sound')}: ${settings.soundVol}%`}
                    value={settings.soundVol}
                    onChange={(v) => handleChange('soundVol', v)}
                />

                <button
                    className="btn-minecraft w-full"
                    onClick={() => {
                        playClick(settings.soundVol / 100);
                        handleChange('difficulty', settings.difficulty === 'Peaceful' ? 'Hardcore' : 'Peaceful');
                    }}
                >
                    {t('difficulty')}: {settings.difficulty}
                </button>

                <button
                    className="btn-minecraft w-full"
                    onClick={toggleLanguage}
                >
                    {t('language')}: {getLangLabel(i18n.language)}
                </button>

                <button
                    onClick={() => {
                        playClick(settings.soundVol / 100);
                        onBack();
                    }}
                    className="btn-minecraft w-full mt-8"
                >
                    {t('done')}
                </button>
            </div>
        </div>
    );
};

const Slider = ({ label, value, onChange }) => (
    <div className="w-full">
        <div className="mb-1 text-white font-minecraft text-shadow-sm">{label}</div>
        <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={(e) => onChange(parseInt(e.target.value))}
            className="w-full h-6 bg-gray-700 appearance-none border-2 border-white/20 outline-none slider-thumb-minecraft"
            style={{
                background: `linear-gradient(to right, #567D46 ${value}%, #373737 ${value}%)`
            }}
        />
        <style jsx>{`
            .slider-thumb-minecraft::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 20px;
                height: 30px;
                background: #C6C6C6;
                border: 2px solid white;
                box-shadow: 4px 0px 0px 0px black;
                cursor: pointer;
            }
        `}</style>
    </div>
);

export default OptionsScreen;

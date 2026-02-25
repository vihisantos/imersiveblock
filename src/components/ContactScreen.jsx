import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactScreen = ({ onBack }) => {
    const { t } = useTranslation();

    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-8 pointer-events-auto bg-black/70 backdrop-blur-sm">
            <div className="w-full max-w-4xl flex flex-col items-center">
                {/* Header */}
                <h2 className="text-white text-4xl font-minecraft mb-8 drop-shadow-md">{t('play_multiplayer')}</h2>

                <div className="w-full bg-mc-ui-bg p-2 border-2 border-white/20">
                    {/* Server List (Contacts) */}
                    <div className="space-y-2 mb-6">
                        <ContactItem
                            name="GitHub Server"
                            motd={t('github_motd')}
                            ping="12ms"
                            players="5/20"
                            link="https://github.com/capybara-holding"
                        />
                        <ContactItem
                            name="LinkedIn Network"
                            motd={t('linkedin_motd')}
                            ping="24ms"
                            players="500+"
                            link="#"
                        />
                        <ContactItem
                            name="Discord Community"
                            motd={t('discord_motd')}
                            ping="5ms"
                            players="Online"
                            link="#"
                        />
                    </div>

                    {/* Direct Connect (Email Form) */}
                    <div className="bg-black/20 p-4 border-2 border-mc-ui-border">
                        <h3 className="text-gray-300 font-minecraft mb-4">{t('direct_connect')}</h3>
                        <form className="flex flex-col gap-4">
                            <input
                                type="email"
                                placeholder={t('email_placeholder')}
                                className="bg-black text-white font-pixel p-3 border-2 border-gray-600 focus:border-white outline-none"
                            />
                            <textarea
                                rows="3"
                                placeholder={t('msg_placeholder')}
                                className="bg-black text-white font-pixel p-3 border-2 border-gray-600 focus:border-white outline-none resize-none"
                            />
                            <div className="flex gap-4">
                                <button type="submit" className="btn-minecraft flex-1 text-center">
                                    {t('join_server')}
                                </button>
                                <button type="button" onClick={onBack} className="btn-minecraft flex-1 text-center">
                                    {t('cancel')}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContactItem = ({ name, motd, ping, players, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block group cursor-pointer">
        <div className="bg-black/40 hover:bg-black/60 border-2 border-transparent hover:border-gray-400 p-2 flex items-center gap-4 transition-colors">
            {/* Server Icon Placeholder */}
            <div className="w-16 h-16 bg-mc-dirt grayscale group-hover:grayscale-0 transition-all border-2 border-gray-600"></div>

            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <span className="text-white font-minecraft text-lg">{name}</span>
                    <span className="text-green-500 font-pixel text-sm">{ping}</span>
                </div>
                <div className="text-gray-400 font-pixel">{motd}</div>
                <div className="text-xs text-gray-500 font-pixel mt-1">{players} slots</div>
            </div>
        </div>
    </a>
);

export default ContactScreen;

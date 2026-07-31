import React from 'react';
import { useTranslation } from 'react-i18next';

const DevLog = ({ onBack }) => {
    const { t } = useTranslation();

    const posts = [
        {
            id: 1,
            title: t('devlog_1_title'),
            date: '2026-07-20',
            icon: '⛏️',
            desc: t('devlog_1_desc'),
            tags: ['React', 'Three.js', 'R3F']
        },
        {
            id: 2,
            title: t('devlog_2_title'),
            date: '2026-07-22',
            icon: '🔨',
            desc: t('devlog_2_desc'),
            tags: ['i18n', 'Tailwind', 'Vite']
        },
        {
            id: 3,
            title: t('devlog_3_title'),
            date: '2026-07-24',
            icon: '🛡️',
            desc: t('devlog_3_desc'),
            tags: ['SEO', 'Schema.org', 'Performance']
        }
    ];

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-start pt-12 pb-12 pointer-events-auto bg-black/65 backdrop-blur-md overflow-y-auto screen-enter">

            <div className="w-full max-w-4xl px-4 flex flex-col items-center">
                <div className="flex items-center justify-between w-full mb-8 border-b-2 border-white/20 pb-4">
                    <h2 className="text-white text-4xl font-minecraft drop-shadow-md flex items-center gap-3">
                        <span className="text-yellow-400">📜</span> {t('devlog_title')}
                    </h2>
                    <button onClick={onBack} className="btn-minecraft text-sm px-4 py-2">
                        {t('return_menu')}
                    </button>
                </div>

                <div className="w-full space-y-6">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-[#1e1e1e] border-2 border-yellow-500/30 p-6 shadow-lg hover:border-yellow-500/60 transition-all duration-300 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600"></div>

                            <div className="flex items-start gap-4">
                                <div className="text-4xl group-hover:animate-bounce transition-transform">
                                    {post.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-xl font-minecraft text-yellow-300 group-hover:text-yellow-200 transition-colors">
                                            {post.title}
                                        </h3>
                                        <span className="text-[10px] font-pixel text-gray-500 bg-black/40 px-2 py-1 rounded">
                                            {formatDate(post.date)}
                                        </span>
                                    </div>

                                    <p className="text-gray-400 font-pixel text-sm leading-relaxed mb-3">
                                        {post.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-pixel bg-yellow-500/10 text-yellow-400 px-2 py-1 rounded border border-yellow-500/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
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

export default DevLog;

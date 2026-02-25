export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                mc: {
                    dirt: '#8B4513',
                    grass: '#567D46',
                    stone: '#7D7D7D',
                    diamond: '#00E0E0',
                    obsidian: '#120B16',
                    wood: '#6B4C2C',
                    leaf: '#3A5F0B',
                    ui: {
                        bg: '#C6C6C6',
                        border: '#373737', // dark border
                        light: '#FFFFFF', // highlight
                        shadow: '#555555', // shadow
                    }
                },
            },
            fontFamily: {
                minecraft: ['"Press Start 2P"', 'cursive'],
                pixel: ['"VT323"', 'monospace'],
            },
            boxShadow: {
                'pixel': 'inset -4px -4px 0px 0px rgba(0,0,0,0.5), inset 4px 4px 0px 0px #FFFFFF',
                'pixel-hover': 'inset -4px -4px 0px 0px rgba(0,0,0,0.5), inset 4px 4px 0px 0px #BBBBBB',
                'pixel-active': 'inset 4px 4px 0px 0px rgba(0,0,0,0.5), inset -4px -4px 0px 0px #FFFFFF',
            },
            backgroundImage: {
                'dirt-pattern': "url('/assets/textures/dirt.png')",
                'stone-pattern': "url('/assets/textures/stone.png')",
            }
        },
    },
    plugins: [],
}

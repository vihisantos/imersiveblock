import { useCallback, useRef } from 'react';

let sharedCtx = null;

const getAudioContext = () => {
    if (!sharedCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return null;
        sharedCtx = new AudioContextClass();
    }
    if (sharedCtx.state === 'suspended') {
        sharedCtx.resume();
    }
    return sharedCtx;
};

const playTone = (frequency, endFreq, duration, volume, type = 'square') => {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(endFreq, ctx.currentTime + duration);

    gain.gain.setValueAtTime(0.12 * volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
};

export const useMinecraftSound = () => {
    const lastPlay = useRef(0);

    const playClick = useCallback((volume = 1) => {
        const now = Date.now();
        if (now - lastPlay.current < 30) return;
        lastPlay.current = now;
        playTone(150, 40, 0.1, volume);
    }, []);

    const playHover = useCallback((volume = 1) => {
        playTone(800, 600, 0.05, volume * 0.5, 'sine');
    }, []);

    const playSuccess = useCallback((volume = 1) => {
        playTone(523, 523, 0.08, volume);
        setTimeout(() => playTone(659, 659, 0.08, volume), 80);
        setTimeout(() => playTone(784, 784, 0.12, volume), 160);
    }, []);

    const playError = useCallback((volume = 1) => {
        playTone(200, 100, 0.2, volume, 'sawtooth');
    }, []);

    return { playClick, playHover, playSuccess, playError };
};

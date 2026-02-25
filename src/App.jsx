import React, { Suspense, useState, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Scene from './components/Scene';
import UIOverlay from './components/UIOverlay';
import ContactScreen from './components/ContactScreen';
import OptionsScreen from './components/OptionsScreen';

import LandingPage from './components/LandingPage';
import ProjectsScreen from './components/ProjectsScreen';

// Helper to update camera live
const CameraUpdater = ({ fov }) => {
  const { camera } = useThree();
  useEffect(() => {
    camera.fov = fov;
    camera.updateProjectionMatrix();
  }, [fov, camera]);
  return null;
};

function App() {
  const [view, setView] = useState('home'); // 'home' | 'multiplayer' | 'options' | 'game'
  const [settings, setSettings] = useState({
    fov: 70,
    musicVol: 50,
    soundVol: 100,
    difficulty: 'Peaceful'
  });

  return (
    <div className="relative w-full h-screen bg-mc-obsidian overflow-hidden">
      {/* 3D Layer */}
      {/* 3D Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 2, 5], fov: settings.fov }}>
          <Suspense fallback={null}>
            <CameraUpdater fov={settings.fov} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            {view !== 'game' && <Scene />}
            <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} />
          </Suspense>
        </Canvas>
      </div>

      {/* UI Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {view === 'home' && (
          <UIOverlay
            onShowGame={() => setView('game')}
            onMultiplayer={() => setView('multiplayer')}
            onOptions={() => setView('options')}
          />
        )}
        {view === 'multiplayer' && <ContactScreen onBack={() => setView('home')} />}
        {view === 'options' && (
          <OptionsScreen
            currentSettings={settings}
            onSave={setSettings}
            onBack={() => setView('home')}
          />
        )}
        {view === 'game' && <LandingPage onBack={() => setView('home')} onProjects={() => setView('projects')} />}
        {view === 'projects' && <ProjectsScreen onBack={() => setView('game')} />}
      </div>
    </div>
  );
}

export default App;

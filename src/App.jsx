import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Story from './components/Story';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import LoveNotes from './components/LoveNotes';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import HeartCursor from './components/HeartCursor';
import BackgroundParticles from './components/BackgroundParticles';
import PasswordProtection from './components/PasswordProtection';

import { Analytics } from "@vercel/analytics/react";

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    // Check if already unlocked
    const unlocked = localStorage.getItem('site_unlocked');
    if (unlocked === 'true') {
      setIsUnlocked(true);
    }
  }, []);

  if (!isUnlocked) {
    return (
      <>
        <PasswordProtection onUnlock={() => setIsUnlocked(true)} />
        <Analytics />
      </>
    );
  }

  return (
    <div className="App">
      <BackgroundParticles />
      <HeartCursor />
      <Hero />
      <Countdown />
      <Story />
      <Timeline />
      <Gallery />
      <LoveNotes />
      <Footer />
      <MusicPlayer />
      <Analytics />
    </div>
  );
}

export default App;

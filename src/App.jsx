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

function App() {
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
    </div>
  );
}

export default App;

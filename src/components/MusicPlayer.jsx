import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Music, Pause, Play } from 'lucide-react';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.log("Audio play failed:", e));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="music-player-container group">
            <button
                onClick={togglePlay}
                className="play-button"
            >
                <motion.div
                    animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ repeat: isPlaying ? Infinity : 0, duration: 3, ease: "linear" }}
                >
                    {isPlaying ? <Pause size={20} /> : <Music size={20} />}
                </motion.div>
            </button>

            <div className="music-label">
                Play Our Song
            </div>

            <audio ref={audioRef} loop>
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3" />
            </audio>
        </div>
    );
};

export default MusicPlayer;

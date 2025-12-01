import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Music, Pause, Play } from 'lucide-react';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [error, setError] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (error) {
            alert("Please add a song named 'song.mp3' to the 'public/music' folder!");
            return;
        }
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => {
                console.log("Audio play failed:", e);
                // If play fails immediately, it might be due to missing file or autoplay policy
                // We can't distinguish easily without more logic, but for now we just log.
            });
        }
        setIsPlaying(!isPlaying);
    };

    const handleError = () => {
        setError(true);
        setIsPlaying(false);
        console.log("Audio source error: File not found or not supported");
    };

    return (
        <div className="music-player-container group">
            <button
                onClick={togglePlay}
                className={`play-button ${error ? 'bg-gray-500' : ''}`}
                title={error ? "Song missing" : "Play/Pause"}
            >
                <motion.div
                    animate={isPlaying ? { rotate: 360, scale: [1, 1.1, 1] } : { rotate: 0, scale: 1 }}
                    transition={isPlaying ? {
                        rotate: { repeat: Infinity, duration: 3, ease: "linear" },
                        scale: { repeat: Infinity, duration: 1, ease: "easeInOut" }
                    } : { duration: 0.3 }}
                >
                    {error ? <div className="text-white font-bold">!</div> : (isPlaying ? <Pause size={20} /> : <Music size={20} />)}
                </motion.div>
            </button>

            <div className="music-label">
                {error ? "Add song.mp3 to public/music" : "Play Our Melody"}
            </div>

            <audio ref={audioRef} loop onError={handleError}>
                <source src="/music/song.mp3" type="audio/mp3" />
            </audio>
        </div>
    );
};

export default MusicPlayer;

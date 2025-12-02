import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PasswordProtection = ({ onUnlock }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [timeLeft, setTimeLeft] = useState('');
    const [isTimeUp, setIsTimeUp] = useState(false);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const targetDate = new Date('2026-01-29T02:53:00'); // Updated to Jan 29, 2:53 AM
            const now = new Date();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);
                setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
                setIsTimeUp(false);
            } else {
                setTimeLeft('It\'s Time! ❤️');
                setIsTimeUp(true);
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft();

        return () => clearInterval(timer);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple password check - you can change "forever" to any password you want
        if (password.toLowerCase() === 'forever' || password === '290126') {
            onUnlock();
            localStorage.setItem('site_unlocked', 'true');
        } else {
            setError(true);
            setTimeout(() => setError(false), 1000);
        }
    };

    return (
        <div className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center p-4">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-600/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-pink-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-panel p-8 md:p-12 rounded-3xl max-w-md w-full text-center relative z-10 border border-white/10"
            >
                <div className="text-6xl mb-6">🔒</div>
                <h2 className="font-playfair text-3xl md:text-4xl text-white mb-4">
                    {isTimeUp ? "One Last Step" : "Coming Soon"}
                </h2>

                <div className="font-outfit text-pink-400 text-xl md:text-2xl font-light tracking-widest mb-8 font-mono">
                    {timeLeft}
                </div>

                <p className="text-gray-400 mb-8 font-light">
                    {isTimeUp
                        ? "What is the word that keeps us together?"
                        : <>This page is currently locked. <br />Please enter the password to view.</>}
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type={isTimeUp ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={isTimeUp ? "Your Answer" : "Enter Password"}
                        className={`w-full bg-white/5 border ${error ? 'border-red-500' : 'border-white/10'} rounded-xl px-6 py-4 text-white text-center focus:outline-none focus:border-pink-500 transition-colors placeholder-gray-600`}
                        autoFocus
                    />
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity transform active:scale-95"
                    >
                        Unlock
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default PasswordProtection;

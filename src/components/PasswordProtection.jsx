import { useState } from 'react';
import { motion } from 'framer-motion';

const PasswordProtection = ({ onUnlock }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === '2.568') {
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
                    One Last Step
                </h2>

                <p className="text-gray-400 mb-8 font-light">
                    What was your GPA on Spring 2025?
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Your Answer"
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

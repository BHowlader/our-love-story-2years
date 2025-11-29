import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const LoveNotes = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [isModalOpen]);

    const handleOpenModal = () => {
        setIsModalOpen(true);
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10001 };
        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        // Fire a few bursts
        confetti({ ...defaults, particleCount: 50, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount: 50, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });

        // Fire another burst shortly after
        setTimeout(() => {
            confetti({ ...defaults, particleCount: 50, origin: { x: randomInRange(0.2, 0.4), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount: 50, origin: { x: randomInRange(0.6, 0.8), y: Math.random() - 0.2 } });
        }, 200);
    };

    const notes = [
        "The way you care for me. It's in the little things, the big things, everything.",
        "Hearing your voice never gets old. Each call feels like coming home.",
        "How much you love me - way more than I could ever imagine.",
        "Your silly photos! They make me laugh, they make me smile, they're perfectly YOU.",
        "When you talk shit with me. Those random, silly conversations are my favorite.",
        "Everything. Literally everything about you. I love all of you, always. ❤️"
    ];

    return (
        <section className="section-padding relative w-full overflow-hidden">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="font-playfair text-5xl md:text-7xl text-center mb-20 text-gradient"
                >
                    Things I Love
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {notes.map((note, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10, rotate: [-1, 1, 0], transition: { duration: 0.4 } }}
                            className="glass-panel p-10 rounded-2xl relative group cursor-default"
                        >
                            <div className="absolute -top-6 -left-4 text-6xl text-pink-500/20 font-serif">"</div>
                            <p className="text-lg text-gray-300 font-light leading-relaxed relative z-10 italic">
                                {note}
                            </p>
                            <div className="absolute inset-0 bg-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-24">
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255, 46, 99, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleOpenModal}
                        className="px-12 py-5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full text-xl font-bold text-white shadow-2xl border border-white/10 relative overflow-hidden group"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            💌 Read My Secret Letter
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.button>
                </div>

                {createPortal(
                    <AnimatePresence>
                        {isModalOpen && (
                            <motion.div
                                key="modal-overlay"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="modal-overlay"
                                onClick={() => setIsModalOpen(false)}
                                style={{ touchAction: 'none' }}
                            >
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                                    animate={{ scale: 1, opacity: 1, y: 0 }}
                                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                    className="modal-content bg-[#fffbf0] text-gray-900"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button
                                        className="close-modal-fixed"
                                        onClick={() => setIsModalOpen(false)}
                                    >
                                        &times;
                                    </button>

                                    <div className="letter-paper">
                                        <h3 className="text-3xl md:text-4xl text-pink-600 mb-4 font-bold font-dancing">My Dearest Love,</h3>
                                        <p className="mb-3">As I write this, I'm thinking about how lucky I am to have you in my life. Two years have passed, but it feels like just yesterday when I saw you in that blue saree.</p>
                                        <p className="mb-3">You are my best friend, my partner in crime, and my greatest adventure. Through all the ups and downs, your hand is the only one I want to hold.</p>
                                        <p className="mb-3">I promise to love you through the good times and the bad. I promise to always be there to listen, to support, and to make you laugh (even with my silly jokes).</p>
                                        <p className="mb-4">Thank you for choosing me. Thank you for loving me.</p>
                                        <p className="text-right text-2xl md:text-3xl text-pink-600 font-dancing">Forever Yours,<br />Me ❤️</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>,
                    document.body
                )}
            </div>
        </section>
    );
};

export default LoveNotes;

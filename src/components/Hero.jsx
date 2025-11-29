import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
    const [textIndex, setTextIndex] = useState(0);
    const phrases = ["Two Years of Magic", "Two Years of Laughter", "Two Years of Us", "Forever to Go"];
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const scrollOpacity = useTransform(scrollY, [0, 100], [1, 0]);

    useEffect(() => {
        const typeSpeed = isDeleting ? 50 : 150;
        const timeout = setTimeout(() => {
            const fullText = phrases[textIndex];

            if (!isDeleting) {
                setCurrentText(fullText.substring(0, currentText.length + 1));
                if (currentText === fullText) {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                setCurrentText(fullText.substring(0, currentText.length - 1));
                if (currentText === "") {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % phrases.length);
                }
            }
        }, typeSpeed);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, textIndex]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-600/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-pink-600/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container relative z-10 text-center flex flex-col items-center justify-center min-h-screen">
                <motion.div
                    style={{ y: y2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <h1 className="font-dancing text-gradient text-[5rem] md:text-[8rem] leading-tight mb-6 drop-shadow-2xl">
                        Our Love Story
                    </h1>
                </motion.div>

                <motion.div
                    style={{ y: y1 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <p className="text-2xl md:text-3xl font-light tracking-[0.2em] text-gray-300 mb-12 h-10">
                        {currentText}
                        <span className="animate-pulse text-pink-500">|</span>
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 46, 99, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block glass-panel px-8 py-4 rounded-full border border-white/10"
                    >
                        <span className="text-xl md:text-2xl font-light">
                            January 29, 2026 • <span className="text-pink-500 font-bold">2:53 AM</span> 💕
                        </span>
                    </motion.div>
                </motion.div>

                <motion.div
                    style={{ opacity: scrollOpacity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="text-white/50 text-sm tracking-widest uppercase"
                    >
                        Scroll to Explore
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="py-20 relative overflow-hidden border-t border-white/5 bg-black/20 backdrop-blur-lg w-full">
            <div className="container text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="font-dancing text-6xl md:text-8xl mb-8 text-gradient"
                >
                    Happy 2nd Anniversary
                </motion.h2>

                <div className="max-w-2xl mx-auto space-y-6 text-gray-400 font-light text-lg leading-relaxed">
                    <p>Thank you for two incredible years. Every moment with you has been a blessing. You've made me laugh, you've made me feel loved, you've made me the happiest I've ever been.</p>
                    <p>Here's to forever together, my love. To all the adventures still to come, all the silly photos yet to be taken, all the late-night conversations waiting to happen.</p>
                </div>

                <div className="mt-12 mb-8">
                    <p className="font-playfair text-3xl italic text-white">Forever Yours ❤️</p>
                </div>

                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-4xl space-x-4"
                >
                    <span>💕</span><span>❤️</span><span>💖</span><span>💗</span><span>💝</span>
                </motion.div>

                <div className="mt-16 text-sm text-gray-600 uppercase tracking-widest">
                    Made with all my love for you
                </div>
            </div>
        </footer>
    );
};

export default Footer;

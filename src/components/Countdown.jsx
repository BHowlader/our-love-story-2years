import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({ years: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const startDate = new Date('2024-01-29T02:53:00');

        const timer = setInterval(() => {
            const now = new Date();
            let diff = now - startDate;

            const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
            diff -= years * (1000 * 60 * 60 * 24 * 365);

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            diff -= days * (1000 * 60 * 60 * 24);

            const hours = Math.floor(diff / (1000 * 60 * 60));
            diff -= hours * (1000 * 60 * 60);

            const minutes = Math.floor(diff / (1000 * 60));
            diff -= minutes * (1000 * 60);

            const seconds = Math.floor(diff / 1000);

            setTimeLeft({ years, days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const items = [
        { label: 'Years', value: timeLeft.years },
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds }
    ];

    return (
        <section className="section-padding relative z-10 w-full overflow-hidden">
            <div className="container text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="font-playfair text-4xl md:text-6xl mb-4 text-white"
                >
                    Since You Said Yes...
                </motion.h2>
                <p className="text-gray-400 mb-16 text-lg tracking-widest uppercase">January 29, 2024 • 2:53 AM</p>

                <div className="flex flex-wrap justify-center gap-6">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring" }}
                            whileHover={{ y: -10 }}
                            className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center min-w-[140px] md:min-w-[160px] border-t border-white/10 flex-1 max-w-[200px]"
                        >
                            <div className="text-5xl md:text-6xl font-bold text-gradient mb-2 font-outfit">
                                {item.value.toLocaleString()}
                            </div>
                            <div className="text-sm uppercase tracking-[0.2em] text-gray-400 font-semibold">
                                {item.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Countdown;

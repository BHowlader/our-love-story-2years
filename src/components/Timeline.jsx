import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Timeline = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const events = [
        { date: "Dec 9, 2023", title: "The Day We Met 💙", desc: "Your university freshers' party. You in a blue-themed saree. My friend introduced us, and destiny smiled." },
        { date: "First Days", title: "Endless Chats", desc: "Facebook friend request, silly questions, and endless chats. All day, all night. We couldn't stop talking." },
        { date: "Jan 19, 2024", title: "First Meeting 💙", desc: "Domino's, Jamuna Future Park. Blue dress, nervous hearts, perfect moment. The shoulder nap, holding hands - everything felt right." },
        { date: "Jan 16, 2024", title: "The Question 💍", desc: "Lost in your eyes, heart pounding, but I finally asked. The scariest moment that led to the most beautiful journey." },
        { date: "Jan 29, 2024", title: "She Said YES! 🎉", desc: "The most beautiful word. The moment everything changed. When \"us\" officially began." },
        { date: "Today", title: "Still Falling 💕", desc: "Every call, every message, every silly photo. You love me more than I imagined, and I'm grateful every single day." }
    ];

    return (
        <section ref={containerRef} className="section-padding relative overflow-hidden">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="font-playfair text-5xl md:text-7xl text-center mb-24 text-gradient"
                >
                    Our Timeline
                </motion.h2>

                <div className="relative max-w-5xl mx-auto">
                    {/* Center Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 hidden md:block">
                        <motion.div
                            style={{ scaleY, transformOrigin: "top" }}
                            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500"
                        />
                    </div>

                    {events.map((event, index) => (
                        <div key={index} className={`flex items-center justify-between mb-20 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}>

                            {/* Content Card */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="w-full md:w-[45%] glass-panel p-8 rounded-2xl relative group hover:border-pink-500/30 transition-colors"
                            >
                                <div className="absolute top-4 right-4 text-sm font-bold text-pink-500/80 tracking-widest uppercase">{event.date}</div>
                                <h3 className="text-2xl font-playfair mb-4 text-white group-hover:text-pink-400 transition-colors">{event.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{event.desc}</p>
                            </motion.div>

                            {/* Center Dot */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                className="w-4 h-4 rounded-full bg-pink-500 shadow-[0_0_20px_rgba(255,46,99,0.8)] z-10 hidden md:block"
                            />

                            {/* Empty Space for alignment */}
                            <div className="w-full md:w-[45%] hidden md:block" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;

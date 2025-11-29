import { motion } from 'framer-motion';

const Story = () => {
    const stories = [
        {
            date: "December 9, 2023 💙",
            title: "The Beginning",
            text: "A freshers' party. You in a blue-themed saree. I went there just to pick up my friend, but destiny had something else planned. You were not that beautiful on that day tbh. My friend introduced us, and in that moment, I didn't know that my life was about to change forever. Sometimes the best things happen when we least expect them.",
            image: "/photo1.jpg",
            alt: "The Beginning"
        },
        {
            date: "Getting to Know",
            title: "\"Cholo, Aksathe Canada Jai\" 😂",
            text: "I sent you a friend request on Facebook. You didn't accept it right away (classic move!). Then my friend convinced you, and I asked the silliest question ever. But you know what? That silly question started something beautiful. Our conversations grew longer, day by day, night by night. We were chatting all the time, getting to know each other, and slowly falling for each other.",
            image: null,
            alt: "Getting to Know"
        },
        {
            date: "January 16, 2024 • 4:10 AM 💍",
            title: "The Question",
            text: "I was about to propose. I looked into your eyes... and got completely lost. I was so nervous, my heart was pounding like crazy. But I gathered all my courage and asked you to be mine. The scariest and most beautiful moment of my life.",
            image: null,
            alt: "The Question"
        },
        {
            date: "January 21, 2024 💙",
            title: "First Meeting",
            text: "Jamuna Future Park, Domino's. You wore blue again - it was becoming \"our color.\" Both of us were nervous, hearts racing, palms sweaty, but it felt so right. On the way back, I rested on your shoulder and took a quick nap. You let me hold your hand. That moment... I knew. I just knew you were the one.",
            image: "/photo3.jpg",
            alt: "First Meeting"
        },
        {
            date: "January 22, 2024 🛍️",
            title: "Bashundhara Shopping Mall",
            text: "Our second meeting. The nervousness was gone, replaced by pure joy and excitement. Just being around you felt like home.",
            image: "/story_new_2.png",
            alt: "Bashundhara Shopping Mall",
            imagePosition: "object-center"
        },
        {
            date: "January 29, 2024 • 2:53 AM ❤️",
            title: "She Said Yes",
            text: "You said YES! At 2:53 in the morning, you made me the happiest person alive. That single word changed everything. This is when \"us\" officially began. This is when our forever started. And I've been grateful for every single moment since then.",
            image: null,
            alt: "She Said Yes"
        },
        {
            date: "February 14, 2024 🚗",
            title: "First Drive Together",
            text: "Our first long drive together. The road, the music, and you beside me. It felt like a dream I never wanted to wake up from.",
            image: "/story_new_1.jpg",
            alt: "First Drive Together",
            imagePosition: "object-top"
        }
    ];

    return (
        <section className="section-padding relative w-full overflow-hidden">
            {/* Background decorative line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-pink-500/20 to-transparent -translate-x-1/2 hidden lg:block" />

            <div className="container relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="font-playfair text-5xl md:text-7xl text-center mb-32 text-gradient"
                >
                    Our Journey
                </motion.h2>

                <div className="space-y-32">
                    {stories.map((story, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${!story.image ? 'items-center' : index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center relative`}
                        >
                            {/* Center Node */}
                            {story.image && (
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 hidden lg:flex items-center justify-center z-20">
                                    <div className="w-4 h-4 bg-pink-500 rounded-full shadow-[0_0_20px_rgba(255,46,99,0.8)] animate-pulse" />
                                    <div className="absolute inset-0 border border-pink-500/30 rounded-full animate-ping opacity-20" />
                                </div>
                            )}

                            {/* Text Content */}
                            <div className={`${!story.image ? 'w-full max-w-4xl relative z-10' : 'w-full lg:w-1/2 px-4'}`}>
                                <div className={`glass-panel p-10 rounded-3xl relative overflow-hidden group hover:border-pink-500/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,46,99,0.15)] ${!story.image ? 'text-center py-16 bg-[#050505]' : ''}`}>
                                    <div className={`absolute text-9xl font-bold text-white/5 font-outfit select-none ${!story.image ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150' : '-right-10 -top-10'}`}>
                                        0{index + 1}
                                    </div>

                                    <span className="inline-block px-4 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 font-bold tracking-widest uppercase text-xs mb-6 backdrop-blur-sm">
                                        {story.date}
                                    </span>

                                    <h3 className="text-3xl md:text-4xl font-playfair mb-6 text-white group-hover:text-pink-200 transition-colors">
                                        {story.title}
                                    </h3>

                                    <p className="text-gray-300 leading-relaxed text-lg font-light">
                                        {story.text}
                                    </p>

                                    {!story.image && (
                                        <div className="mt-8 flex justify-center gap-4 text-4xl opacity-50">
                                            <span>💭</span><span>✨</span><span>📱</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Image Side (Only if image exists) */}
                            {story.image && (
                                <div className="w-full lg:w-1/2 px-4">
                                    <div className="relative group perspective-1000">
                                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl transform rotate-3 scale-105 opacity-20 group-hover:rotate-6 transition-transform duration-500 blur-xl" />

                                        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border border-white/10 transform transition-transform duration-700 group-hover:scale-[1.02] group-hover:-rotate-2">
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                            <img
                                                src={story.image}
                                                alt={story.alt}
                                                loading="lazy"
                                                onError={(e) => { e.target.src = `https://via.placeholder.com/800x600/ff0844/ffffff?text=${story.alt}` }}
                                                className={`w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 ${story.imagePosition || 'object-center'}`}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Story;

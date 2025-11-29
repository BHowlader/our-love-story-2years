import { motion } from 'framer-motion';

const Gallery = () => {
    const images = [
        { src: "/gallery1.jpg", title: "A very recent close up", desc: "", size: "large" },
        { src: "/gallery2.jpg", title: "Barisal tour together", desc: "", size: "small" },
        { src: "/gallery3.jpg", title: "Silly Moments", desc: "One of those silly photos that makes me laugh every time! 😂", size: "medium" },
        { src: "/gallery4.jpg", title: "Beautiful You", desc: "You being absolutely beautiful - my favorite view 🌟", size: "large" },
        { src: "/gallery5.jpg", title: "Us Together", desc: "Us being us - talking shit, making memories 😄❤️", size: "small" },
        { src: "/gallery6.jpg", title: "Our Love", desc: "Every moment with you is my favorite moment 💑", size: "medium" }
    ];

    return (
        <section className="section-padding relative w-full overflow-hidden">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="font-playfair text-5xl md:text-7xl text-center mb-20 text-gradient"
                >
                    Captured Moments
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className={`relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 w-full h-full will-change-transform
                                ${img.size === 'large' ? 'md:row-span-2' : 'md:row-span-1'}
                                ${img.size === 'small' && index === 1 ? 'md:col-span-2' : ''} 
                            `}
                        >
                            <img
                                src={img.src}
                                alt={img.title}
                                loading="lazy"
                                onError={(e) => { e.target.src = `https://via.placeholder.com/800x${img.size === 'large' ? '800' : '600'}/ff0844/ffffff?text=${img.title}` }}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 will-change-transform"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <h4 className="text-2xl font-playfair text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.title}</h4>
                                {img.desc && <p className="text-gray-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{img.desc}</p>}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;

import { useEffect, useState } from 'react';

const HeartCursor = () => {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        let lastTime = 0;
        const handleMouseMove = (e) => {
            const now = Date.now();
            if (now - lastTime > 50) { // Limit to one heart every 50ms
                lastTime = now;
                const id = now;
                const newHeart = {
                    id,
                    x: e.clientX,
                    y: e.clientY,
                    emoji: '❤️',
                    size: Math.random() * 10 + 10
                };

                setHearts(prev => [...prev, newHeart]);

                setTimeout(() => {
                    setHearts(prev => prev.filter(h => h.id !== id));
                }, 1000);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            {hearts.map(heart => (
                <div
                    key={heart.id}
                    className="cursor-heart"
                    style={{
                        left: heart.x,
                        top: heart.y,
                        fontSize: `${heart.size}px`,
                        filter: 'drop-shadow(0 0 5px rgba(255, 46, 99, 0.8))'
                    }}
                >
                    {heart.emoji}
                </div>
            ))}
        </>
    );
};

export default HeartCursor;

'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Particle {
  id: number;
  x: string;
  y: string;
  opacity: number;
  drift: string;
  duration: number;
}

export default function AirParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated = [...Array(20)].map((_, i) => ({
      id: i,
      x: Math.random() * 100 + '%',
      y: Math.random() * 100 + '%',
      opacity: Math.random() * 0.5 + 0.2,
      drift: (Math.random() - 0.5) * 20 + '%',
      duration: Math.random() * 10 + 10,
    }));
    requestAnimationFrame(() => {
      setParticles(generated);
    });
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-1 h-1 bg-air-blue/30 rounded-full"
          initial={{
            x: p.x,
            y: p.y,
            opacity: p.opacity,
          }}
          animate={{
            y: [null, '-100%'],
            x: [null, p.drift],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}

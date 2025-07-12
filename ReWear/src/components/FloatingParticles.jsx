import React from 'react';
import { Shirt, Sparkles, Leaf } from 'lucide-react';

const FloatingParticles = () => {
    const particles = [
        { icon: Shirt, delay: '0s', duration: '8s' },
        { icon: Sparkles, delay: '2s', duration: '6s' },
        { icon: Leaf, delay: '4s', duration: '10s' },
        { icon: Shirt, delay: '1s', duration: '7s' },
        { icon: Sparkles, delay: '3s', duration: '9s' },
        { icon: Leaf, delay: '5s', duration: '8s' },
    ];

    return (
        <div className="floating-particles">
            {particles.map((particle, index) => {
                const Icon = particle.icon;
                return (
                    <div
                        key={index}
                        className="particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: particle.delay,
                            animationDuration: particle.duration,
                        }}
                    >
                        <Icon size={49} color="#ff9900ff" />
                    </div>
                );
            })}
        </div>
    );
};

export default FloatingParticles;
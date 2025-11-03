'use client';
import { useEffect, useRef } from 'react';
import styles from './starfield.module.scss';

export default function Starfield() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext('2d', { alpha: true })!;
        let stars: { x: number; y: number; size: number; speed: number; trail: number }[] = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            stars = Array.from({ length: 150 }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 1.5,
                speed: 0.3 + Math.random() * 0.5,
                trail: Math.random() * 10, // 0–10 “pixels” de rastro virtual
            }));
        };
        resize();
        window.addEventListener('resize', resize);

        const animate = () => {
            // Quanto menor o alpha, mais longo o rastro (porque apaga menos)
            // Aqui, simulamos uma média baseada na trail das estrelas
            const avgTrail = stars.reduce((a, s) => a + s.trail, 0) / stars.length;
            const alpha = 0.5 + (10 - avgTrail / 10) * 0.05;

            ctx.globalCompositeOperation = 'destination-out';
            ctx.fillStyle = `rgba(0, 0, 0, ${alpha.toFixed(2)})`;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.globalCompositeOperation = 'lighter';
            ctx.fillStyle = '#fff';

            for (const s of stars) {
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
                ctx.fill();

                s.y += s.speed;
                if (s.y > canvas.height) s.y = 0;
            }

            ctx.globalCompositeOperation = 'source-over';
            requestAnimationFrame(animate);
        };
        animate();

        return () => window.removeEventListener('resize', resize);
    }, []);

    return <canvas ref={canvasRef} className={styles.Starfield} />;
}

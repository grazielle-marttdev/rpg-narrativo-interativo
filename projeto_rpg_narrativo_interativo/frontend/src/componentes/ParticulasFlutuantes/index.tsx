import { useState, type CSSProperties } from "react";
import styles from './ParticulasFlutuantes.module.css';

interface Particula {
    id: number;
    left: number;
    delay: number;
    duracao: number;
    size: number;
    opacity: number;
    drift: number;
}

export const ParticulasFlutuantes = () => {
    const [particulas] = useState<Particula[]>(() =>
        Array.from({ length: 26 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 18,
            duracao: 24 + Math.random() * 24,
            size: 1 + Math.random() * 3,
            opacity: 0.08 + Math.random() * 0.22,
            drift: (Math.random() - 0.5) * 120,
        }))
    );

    return (
        <div className={styles.root}>
            {particulas.map((particula) => (
                <div
                    key={particula.id}
                    className={styles.particula}
                    style={{
                        '--particula-drift': `${particula.drift}px`,
                        left: `${particula.left}%`,
                        top: '-20px',
                        animationDelay: `${particula.delay}s`,
                        animationDuration: `${particula.duracao}s`,
                    } as CSSProperties}
                >
                    <div
                        className={styles.dot}
                        style={{
                            width: particula.size,
                            height: particula.size,
                            opacity: particula.opacity,
                            background: 'hsl(var(--ambiente-particula))',
                            boxShadow: '0 0 calc(12px * var(--glow-intensidade)) hsl(var(--accent-color) / 0.18)'
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

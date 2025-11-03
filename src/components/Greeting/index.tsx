'use client';

import { useLayoutEffect, useMemo, useState } from 'react';
import styles from './greeting.module.scss';

const greetings = {
    earlyMorning: 'Boa madrugada',
    morning: 'Bom dia',
    afternoon: 'Boa tarde',
    night: 'Boa noite',
};

const greetingsStyles = {
    earlyMorning: styles.EarlyMorning,
    morning: styles.Morning,
    afternoon: styles.Afternoon,
    night: styles.Night,
};

const visitors = [
    'viajante cósmico',
    'explorador',
    'astronauta',
    'tripulante',
    'visitante intergaláctico(a)',
    'explorador(a)',
    'alma perdida no espaço da web',
    'ser cósmico cansado de bugs',
    'terráqueo',
];

export function Greeting() {
    const [mounted, setMounted] = useState(false);
    const hour = useMemo(() => new Date().getHours(), []);
    const visitor = useMemo(() => visitors[Math.floor(Math.random() * visitors.length)], []);

    const period = useMemo(() => {
        if (hour >= 0 && hour < 6) return 'earlyMorning';
        if (hour >= 6 && hour < 12) return 'morning';
        if (hour >= 12 && hour < 18) return 'afternoon';
        return 'night';
    }, [hour]);

    const periodGreeting = useMemo(() => greetings[period], [period]);
    const periodStyle = useMemo(() => [styles.Period, greetingsStyles[period]].join(' '), [period]);

    useLayoutEffect(() => setMounted(true), []);

    if (!mounted)
        return (
            <h1 className={styles.Greeting}>
                Hello, <span className={styles.Visitor}>127.0.0.1</span>!{' '}
                <span className={styles.Period}>It&apos;s not a bug, it&apos;s a feature</span>.
            </h1>
        );

    return (
        <h1 className={styles.Greeting}>
            Olá, <span className={styles.Visitor}>{visitor}</span>!{' '}
            <span className={periodStyle}>{periodGreeting}</span>.
        </h1>
    );
}

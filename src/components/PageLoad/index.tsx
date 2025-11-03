'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import ImageSrc from '../../../public/logo.png';
import styles from './page-load.module.scss';

export default function PageLoad() {
    const [loaded, setLoaded] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;
        ref.current.classList.add(styles.SlideOut);
        setTimeout(() => setLoaded(true), 1000);
    }, []);

    if (loaded) return null;

    return (
        <div className={styles.Container} ref={ref}>
            <Image
                className={styles.Logo}
                src={ImageSrc}
                alt='Logo'
                width={300}
                height={300}
                priority
                draggable={false}
            />
            <span className={styles.LogoText}>Vitu2002</span>
        </div>
    );
}

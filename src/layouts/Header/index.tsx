'use client';

import { MenuIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './header.module.scss';

export function Header() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const header = document.getElementById('header');
        if (!header) return;
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight / 2 - header.offsetHeight)
                header.classList.add(styles.Blur);
            else header.classList.remove(styles.Blur);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={styles.Header}>
            <div className={styles.Background} id='header' />
            <div className={styles.Container}>
                <div className={styles.Logo}>
                    <Image
                        src='/logo.png'
                        alt='Logo'
                        width={32}
                        height={32}
                        priority
                        draggable={false}
                    />
                    <span className={styles.LogoText}>Vitu2002</span>
                </div>
                <nav className={styles.Menu}>
                    <button className={styles.Toggle} onClick={() => setOpen(c => !c)}>
                        {open ? <XIcon /> : <MenuIcon />}
                    </button>
                    <ul className={styles.Nav} data-open={open}>
                        <li>
                            <a href='#about'>Sobre</a>
                        </li>
                        <li>
                            <a href='#experiences'>Experiências</a>
                        </li>
                        <li>
                            <a href='#projects'>Projetos</a>
                        </li>
                        <li>
                            <a href='#contact'>Contato</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

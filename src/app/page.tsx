import { Experiences } from '@/components/Experiences';
import { About } from '@components/About';
import Space from '@components/About/space';
import { Me } from '@components/Me';
import styles from './page.module.scss';

export default function Home() {
    return (
        <main className={styles.Main}>
            <About />
            <Space />
            <Me />
            <Experiences />
        </main>
    );
}

import styles from './section.module.scss';

export function Section({ id, title, children }: SectionProps) {
    return (
        <section className={styles.Section} id={id}>
            <h2 className={styles.Title}>{title}</h2>
            <div className={styles.Content}>{children}</div>
        </section>
    );
}

interface SectionProps {
    id: string;
    title: React.ReactNode;
    children: React.ReactNode;
}

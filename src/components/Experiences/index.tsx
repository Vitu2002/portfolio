import data from '@utils/experiences.json';
import {
    BriefcaseBusinessIcon,
    BriefcaseIcon,
    Building2Icon,
    CalendarRangeIcon,
    HeartCrackIcon,
} from 'lucide-react';
import Image from 'next/image';
import WallpaperSrc from '../../../public/wallpaper-solar-system.png';
import styles from './experiences.module.scss';

export function Experiences() {
    return (
        <section id='experiences' className={styles.Container}>
            <Image className={styles.Background} src={WallpaperSrc} alt='Wallpaper2' fill={true} />
            <div className={styles.Shadow} />
            <div className={styles.Experiences}>
                <h2 className={styles.Title}>
                    <span className={styles.Dot} />
                    <BriefcaseBusinessIcon />
                    Experiências Profissionais
                </h2>
                {!data.length ? (
                    <h3 className={styles.Empty}>
                        <HeartCrackIcon />
                        Nenhuma Experiência Profissional
                    </h3>
                ) : (
                    <ul className={styles.List}>
                        {data.map(experience => (
                            <li key={experience.id} className={styles.Item}>
                                <h3 className={styles.ItemTitle}>
                                    <span className={styles.Dot} />
                                    {experience.title || 'Development'}
                                </h3>
                                <div className={styles.Metadata}>
                                    {experience.company && (
                                        <span>
                                            <Building2Icon />
                                            {experience.company}
                                        </span>
                                    )}
                                    {experience.role && (
                                        <span>
                                            <BriefcaseIcon />
                                            {experience.role}
                                        </span>
                                    )}
                                    {experience.period.start && (
                                        <span>
                                            <CalendarRangeIcon />
                                            {experience.period.start} -{' '}
                                            {experience.period.end ?? 'Presente'}
                                        </span>
                                    )}
                                </div>
                                <ul className={styles.Description}>
                                    {experience.description.map(desc => (
                                        <li key={desc}>{desc}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
}

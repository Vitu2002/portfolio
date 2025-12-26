import Stacks from '@utils/stacks.json';
import Image from 'next/image';
import ImageSrc from '../../../public/icon.jpg';
import styles from './me.module.scss';

function Stack({ stack, title }: StackProps) {
    return (
        <li>
            <h5 className={styles.StackTitle}>{title}</h5>
            <ul className={styles.StackList}>
                {stack.map((stack, index) => (
                    <li key={index} className={styles.StackItem}>
                        <Image
                            src={stack.icon}
                            alt={stack.name + ' icon'}
                            width={18}
                            height={18}
                            draggable={false}
                        />
                        {stack.name}
                        <span className={styles.StackDescription}>{stack.description}</span>
                    </li>
                ))}
            </ul>
        </li>
    );
}

export function Me() {
    return (
        <div className={styles.Container} id='me'>
            <div className={styles.Content}>
                <div className={styles.Card}>
                    <div className={styles.Me}>
                        <Image
                            src={ImageSrc}
                            alt='Avatar'
                            width={126}
                            height={126}
                            draggable={false}
                            className={styles.Avatar}
                            placeholder='blur'
                        />
                        <div className={styles.Texts}>
                            <h3 className={styles.Name}>Vitor L.</h3>
                            <span className={styles.Job}>
                                Full-Stack Developer & DevOps Enthusiast
                            </span>
                        </div>
                    </div>

                    <p className={styles.Description}>
                        Sou um desenvolvedor full-stack autodidata, movido a cafeína ☕ e paixão por
                        criar coisas que realmente funcionam.
                        <br />
                        <br />
                        Construo aplicações completas do zero ao deploy: frontend moderno com
                        Next.js e Sass/SCSS, backends robustos com NestJS, tudo tipado com
                        TypeScript para código limpo e manutenível. Domino o fluxo inteiro —
                        PostgreSQL + Prisma, Docker, Bun, Redis, servidores VPS e CI/CD com GitHub
                        Actions — sempre buscando performance e escalabilidade.
                        <br />
                        <br />
                        Baseado em Curitiba, Brasil (UTC-3), aberto a oportunidades remotas,
                        freelances ou full-time internacionais. Falo português nativo e inglês
                        avançado (confortável com documentação técnica, reuniões e comunicação
                        diária em projetos).
                        <br />
                        <br />
                        Fora das telas, recarrego com animes, mangás, jogos e rock no volume máximo
                        🤘
                    </p>
                </div>
                <div className={styles.Stack}>
                    <h4 className={styles.Title}>Principais Stacks</h4>
                    <ul className={styles.Stacks}>
                        <Stack stack={Stacks.frontend} title='Front-End' />
                        <Stack stack={Stacks.backend} title='Back-End' />
                        <Stack stack={Stacks.devops} title='DevOps' />
                        <Stack stack={Stacks.databases} title='Databases' />
                    </ul>
                </div>
            </div>
        </div>
    );
}

interface StackProps {
    stack: {
        name: string;
        description: string;
        icon: string;
    }[];
    title: string;
}

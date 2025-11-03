import Image from 'next/image';
import ImageSrc from '../../../public/icon.jpg';
import styles from './me.module.scss';

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
                        Sou um desenvolvedor autodidata apaixonado por tecnologia e criação.
                        Trabalho tanto no front quanto no back-end, com foco em construir aplicações
                        rápidas, organizadas e com boa experiência de uso.
                        <br />
                        Gosto de entender todo o fluxo — do código ao deploy — e por isso mexo com
                        banco de dados, servidores vps, Docker e automações CI/CD com GitHub
                        Actions.
                        <br />
                        <br />
                        Fora do código, curto animes, mangás, jogos e um bom rock 🤘
                    </p>
                </div>
                <div className={styles.Card}>
                    <ul className={styles.Stacks}>
                        <li className={styles.Card}></li>
                        <li className={styles.Card}></li>
                        <li className={styles.Card}></li>
                        <li className={styles.Card}></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

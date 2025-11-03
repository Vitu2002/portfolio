import Image from 'next/image';
import ImageSrc from '../../public/not-found.avif';
import styles from './not-found.module.scss';

export default function notFound() {
    return (
        <div className={styles.Page}>
            <Image
                src={ImageSrc}
                alt='404'
                fill={true}
                className={styles.Background}
                draggable={false}
                placeholder='blur'
            />
            <div className={styles.Content}>
                <h1 className={styles.Code}>404 | Página não encontrada</h1>
                <p className={styles.Description}>
                    Parece que o <strong>M87*</strong> passou por aqui...
                    <br />E engoliu essa página junto com o espaço-tempo...
                </p>
            </div>
            <p></p>
        </div>
    );
}

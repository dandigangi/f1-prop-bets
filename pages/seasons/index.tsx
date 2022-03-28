import styles from './Seasons.module.css';
import Link from 'next/link';

const Seasons = () => {
    return (
        <div className={styles.container}>
            Seasons
            <ul>
                <li>
                    <Link href='/seasons/2022'>
                        <a>2022</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Seasons;

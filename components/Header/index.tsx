import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import imgLogo from './images/f1propbets-logo.png';
import NextRace from '../NextRace';

const Header = () => {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.brand}>
                    <Link href='/'>
                        <a>
                            <Image
                                src={imgLogo}
                                alt='F1 Prop Bets - f1propbets.com'
                                layout='intrinsic'
                            />
                        </a>
                    </Link>
                </div>
                <nav className={styles.nav}>
                    <div>
                        <Link href='/'>
                            <a>Home</a>
                        </Link>
                        <Link href='/bets'>
                            <a>Bet List</a>
                        </Link>
                        <Link href='/seasons'>
                            <a className={styles.seasonStandings}>Seasons</a>
                        </Link>
                        <Link href='/teams'>
                            <a>Teams</a>
                        </Link>
                        <Link href='/drivers'>
                            <a>Drivers</a>
                        </Link>
                        <Link href='/tracks'>
                            <a>Tracks</a>
                        </Link>
                    </div>
                    <div>
                        <Link href='/create'>
                            <a>Create Bet</a>
                        </Link>
                    </div>
                </nav>
            </header>
            <NextRace />
        </div>
    );
};

export default Header;

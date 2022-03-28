import styles from './Footer.module.css';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div>
                {new Date().getFullYear()} &copy; F1 Prop Bets&nbsp;|&nbsp;
                <Link href='/'>
                    <a>f1propbets.com</a>
                </Link>
            </div>
            <div>
                F1 Prop Bets is not officially associated with F1 (Formula 1),
                other entities, or official partners.
            </div>
            <div>This website is for entertainment purposes only.</div>
            <br />
            Made by{' '}
            <Link href='https://twitter.com/dandigangi'>
                <a>Dan DiGangi (@dandigangi)</a>
            </Link>
        </footer>
    );
};

export default Footer;

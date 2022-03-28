import styles from './Layout.module.css';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main className={styles.container}>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;

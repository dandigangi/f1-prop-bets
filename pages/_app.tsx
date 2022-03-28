import '../styles/global.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

function F1PropBets({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default F1PropBets;

import '../styles/globals.css';
import '../styles/tailwind.css';
import type { AppProps } from 'next/app';

import Layout from '../components/Layout';
import { CartContextProvider } from '../contexts/CartContext';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <CartContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </CartContextProvider>
    );
}
export default MyApp;

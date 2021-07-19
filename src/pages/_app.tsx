import '../styles/globals.css';
import '../styles/tailwind.css';
import type { AppProps } from 'next/app';

import Layout from '../components/Layout';
import { CartContextProvider } from '../contexts/CartContext';
import { SideBarContextProvider } from '../contexts/SideBarContext';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <CartContextProvider>
            <SideBarContextProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </SideBarContextProvider>
        </CartContextProvider>
    );
}
export default MyApp;

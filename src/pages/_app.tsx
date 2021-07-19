import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import '../styles/globals.css';
import '../styles/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';

import Layout from '../components/Layout';
import { CartContextProvider } from '../contexts/CartContext';
import { SideBarContextProvider } from '../contexts/SideBarContext';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <CartContextProvider>
                <SideBarContextProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </SideBarContextProvider>
            </CartContextProvider>
            <ToastContainer />
        </>
    );
}
export default MyApp;

import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";



const Layout = ({ children, pagina }) => {
    return (
        <div>
            <Head>
                <title>Guitarra- {pagina}</title>
                <meta name="description" content="sitio web de Venta de guitarras" />
            </Head>
            <Header />

            {children}

            <Footer />


        </div>
    );
};

export default Layout;
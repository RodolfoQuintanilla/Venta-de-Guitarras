
import Entrada from '../components/Entrada';
import Layout from '../components/Layout';

const blog = ({ entradas }) => {




    return (
        <div>

            <Layout
                pagina='Tienda'
            >
                <main className='contenedor'>
                    <h2 className='heading'>
                        Blog
                    </h2>

                    <div>
                        {entradas.map(entrada => {
                            return <Entrada
                                key={entrada.id}
                                entrada={entrada}
                            />
                        })}
                    </div>
                </main>
            </Layout>
        </div>
    );
};

export async function getServerSideProps() {
    const url = 'http://localhost:1337/blogs';
    const respuesta = await fetch(url);
    const entradas = await respuesta.json();
    return {
        props: { entradas },
    }
}

export default blog; 
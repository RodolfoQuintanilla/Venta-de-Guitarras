import Link from 'next/link';
import Image from 'next/image';
import { formatearFecha } from '../helpers/index';

const Entrada = ({ entrada }) => {


    const { titulo, resumen, contenido, published_at, updated_at, imagen, id } = entrada;

    console.log(imagen.url);
    return (
        <articule>
            <Image layout='responsive' width={800} height={600} src={imagen.url} alt={`imagen Blog ${titulo}`} />

            <div>
                <h1>{titulo}</h1>
                <p>{formatearFecha(published_at)}</p>
                <p>{resumen}</p>
                <Link href={`/blog/${id}`}>
                    Leer Entrada
                </Link>
            </div>

        </articule>
    );
};

export default Entrada;
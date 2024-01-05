import Image from 'next/image';
import Link from 'next/link';
import './references.css';

export default function References() {
    return(
        <main>
            <section>
                <h2>REFERENCIAS</h2>
                <article>
                    <h3 className='ref-h3'>Videos recopilatorios de juegos de Atari 2600:</h3>
                    <p>
                        <Link href="https://www.youtube.com/watch?v=l5Exbd1IWQk">Joseph J.Y.A.</Link>
                    </p>
                    <p>
                        <Link href="https://www.youtube.com/watch?v=K8grxDxnj6g">ERA PIXEL</Link>
                    </p>
                    <p>
                        <Link href="https://www.youtube.com/watch?v=Zc5G2shCKwk">Cabernet Sauvignon</Link>
                    </p>
                </article>
                <article>
                    <h3 className='ref-h3'>Gameplay de Buzzword!:</h3>
                    <p>
                        <Link href="https://www.youtube.com/watch?v=e8Jpbvb0uJ0">BUZZWORD!</Link>
                    </p>
                </article>
                <article>
                    <h3 className='ref-h3'>Videojuego pirata de Street Fighter II para NES:</h3>
                    <p>
                        <Link href="https://www.youtube.com/watch?v=3dGBMGI43GA">NintendoComplete</Link>
                    </p>
                </article>
                <article>
                    <h3 className='ref-h3'>Mods de Yu Gi Oh! Forbidden Memories:</h3>
                    <p>
                        <Link href="https://vcgi.foroes.org/f21-yu-gi-oh-forbidden-memories-mod">VCGI Juegos</Link>
                    </p>
                </article>
                <article>
                    <h3 className='ref-h3'>Tiendas de juegos digitales:</h3>
                    <p>
                        <Link href="https://ps3maracaibo.com/">ps3maracaibo</Link>
                    </p>
                    <p>
                        <Link href="https://venezuelajuegosdigitales.com/">VenezuelaJuegosDigitales</Link>
                    </p>
                    <p>
                        <Link href="https://www.portalgames.com.ar/">Portal Games</Link>
                    </p>
                    <p>
                        <Link href="https://lunaplaystore.com/">Luna Playstore</Link>
                    </p>
                    <p>
                        <Link href="https://www.gamelandiajuegos.com.ar/">Gamelandia</Link>
                    </p>
                </article>
                <article>
                    <h3 className='ref-h3'>Página web personal:</h3>
                    <p>
                        <Link href="https://www.manuelmad.vercel.app/">Manuel Araujo</Link>
                    </p>
                </article>
                <article>
                    <h3 className='ref-h3'>Videojuego desarrollado por mí con HTML, CSS y JavaScript:</h3>
                    <p>
                        <Link href="https://planetageek-videogame.netlify.app/">Planeta Geek Videogame, by Manuel Araujo</Link>
                    </p>
                </article>
                <article className='last-article'>
                    <div className="arrows-container">
                        <Link href="/finalThoughts">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                            </svg>
                            PENSAMIENTOS FINALES
                        </Link>
                        <Link href="/">
                            INICIO
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                            </svg>
                        </Link>
                    </div>
                </article>
            </section>
        </main>
    );
}
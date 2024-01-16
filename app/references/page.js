import Image from 'next/image';
import Link from 'next/link';
import './references.css';

import Router from '../components/Router/Router';
import Footer from '../components/Footer/Footer';

export default function References() {
    return(
        <>
        <main>
            <section className='references-section'>
                <h2 className='references-h2'>REFERENCIAS</h2>
                <article className='first-article'>
                    <h3 className='ref-h3'>Videos recopilatorios de juegos de Atari 2600:</h3>
                    <p>
                        <Link href="https://www.youtube.com/watch?v=l5Exbd1IWQk" target="_blank">Joseph J.Y.A.</Link>
                    </p>
                    <p>
                        <Link href="https://www.youtube.com/watch?v=K8grxDxnj6g" target="_blank">ERA PIXEL</Link>
                    </p>
                    <p>
                        <Link href="https://www.youtube.com/watch?v=Zc5G2shCKwk" target="_blank">Cabernet Sauvignon</Link>
                    </p>
                </article>
                <article>
                    <h3 className='ref-h3'>Gameplay de Buzzword!:</h3>
                    <p>
                        <Link href="https://www.youtube.com/watch?v=e8Jpbvb0uJ0" target="_blank">BUZZWORD!</Link>
                    </p>
                </article>
                <article>
                    <h3 className='ref-h3'>Videojuego pirata de Street Fighter II para NES:</h3>
                    <p>
                        <Link href="https://www.youtube.com/watch?v=3dGBMGI43GA" target="_blank">NintendoComplete</Link>
                    </p>
                </article>
                <article>
                    <h3 className='ref-h3'>Mods de Yu Gi Oh! Forbidden Memories:</h3>
                    <p>
                        <Link href="https://vcgi.foroes.org/f21-yu-gi-oh-forbidden-memories-mod" target="_blank">VCGI Juegos</Link>
                    </p>
                </article>
                <article>
                    <h3 className='ref-h3'>Tiendas de juegos digitales:</h3>
                    <p>
                        <Link href="https://ps3maracaibo.com/" target="_blank">ps3maracaibo</Link>
                    </p>
                    <p>
                        <Link href="https://venezuelajuegosdigitales.com/" target="_blank">VenezuelaJuegosDigitales</Link>
                    </p>
                    <p>
                        <Link href="https://www.portalgames.com.ar/" target="_blank">Portal Games</Link>
                    </p>
                    <p>
                        <Link href="https://lunaplaystore.com/" target="_blank">Luna Playstore</Link>
                    </p>
                    <p>
                        <Link href="https://www.gamelandiajuegos.com.ar/" target="_blank">Gamelandia</Link>
                    </p>
                </article>
                <article>
                    <h3 className='ref-h3'>Página web personal:</h3>
                    <p>
                        <Link href="https://www.manuelmad.vercel.app/" target="_blank">Manuel Araujo</Link>
                    </p>
                </article>
                <article>
                    <h3 className='ref-h3'>Videojuego desarrollado por mí con HTML, CSS y JavaScript:</h3>
                    <p>
                        <Link href="https://planetageek-videogame.netlify.app/" target="_blank">Planeta Geek Videogame, by Manuel Araujo</Link>
                    </p>
                </article>
                <Router 
                    text1="PENSAMIENTOS FINALES"
                    link1="/finalThoughts"
                    text2="INICIO"
                    link2="/"
                />
            </section>
        </main>
        <Footer/>
        </>
    );
}
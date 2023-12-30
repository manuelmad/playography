import Image from 'next/image';
import Link from 'next/link';
import './references.css';

export default function References() {
    return(
        <main>
            <section>
                <h2>REFERENCIAS</h2>
                <article>
                    <h3>Videos recopilatorios de juegos de Atari 2600:</h3>
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
                    <h3>Gameplay de Buzzword!:</h3>
                    <p>
                        <Link href="https://www.youtube.com/watch?v=e8Jpbvb0uJ0">BUZZWORD!</Link>
                    </p>
                </article>
                <article>
                    <h3>Página web personal:</h3>
                    <p>
                        <Link href="https://www.manuelmad.vercel.app/">Manuel Araujo</Link>
                    </p>
                </article>
                <article>
                    <h3>Videojuego desarrollado por mí con HTML, CSS y JavaScript:</h3>
                    <p>
                        <Link href="https://planetageek-videogame.netlify.app/">Planeta Geek Videogame by Manuel Araujo</Link>
                    </p>
                </article>
                <article>
                    <h3>Videojuego pirata de Street Fighter II para NES:</h3>
                    <p>
                        <Link href="https://www.youtube.com/watch?v=3dGBMGI43GA">NintendoComplete</Link>
                    </p>
                </article>
                <article>
                    <h3>Mods de Yu Gi Oh! Forbidden Memories:</h3>
                    <p>
                        <Link href="https://vcgi.foroes.org/f21-yu-gi-oh-forbidden-memories-mod">VCGI Juegos</Link>
                    </p>
                </article>
                <article>
                    <h3>Tiendas de juegos digitales:</h3>
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
            </section>
        </main>
    );
}
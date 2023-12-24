import Image from 'next/image';
import Link from 'next/link';
import './level8.css';

export default function Level8() {
    return(
        <main>
            <section>
                <h2>LEVEL 8: Comienza la redención.</h2>
                <article>
                    <p>Después de pasar varios meses como adicto jugando en emuladores a cuanto juego se me venía a la mente, decidí organizarme un poco. Hice un amplio trabajo de investigación, habían sido muchos años de atraso “videojueguil”.</p>
                    <p>Me determiné a jugar las sagas de videojuegos que me gustaron en el pasado, todas esas que comencé desde su primer producto y que no pude continuar, o que comencé con algún juego intermedio sin saber que hubo juegos antes y después de ese.</p>
                    <p>Luego agregué a mi lista aquellas sagas que, viendo sus gameplays o análisis en las redes, me parecieron buenas o importantes para la industria.</p>
                    <p>Obviamente, como ustedes comprenderán porque seguro son iguales a mí, dicha lista crecía cada vez más, jejeje. Cualquier excusa era válida para agregar nuevas sagas al “proyecto”.</p>
                    <p>Una vez que las listas estaban más o menos terminadas, era obvio que, como ya mencioné anteriormente, mi laptop y teléfono no serían suficientes para cumplirlas a cabalidad.</p>
                    <p>Es entonces cuando decido solucionar eso comprando consolas, específicamente, necesitaba de la sexta generación en adelante, tomando en cuenta que ya contaba con una de las de séptima: mi PS3.</p>
                    <p>Bueno, era más fácil pensarlo que hacerlo, no era tan fácil como tomar el dinero necesario para comprar todas las consolas y juegos que quería y gastarlo de tajo porque, directamente, no cuento con tales recursos. Este hobby no es barato.</p>
                    <p>Tuve que hacer una nueva investigación, esta vez acerca de las consolas en sí. En esta oportunidad aprendí que todas, absolutamente todas las consolas, pueden ser... “Modificadas” para que hagan cierta “magia”... ¡Vaya que esa información alivió mis planes! Era cuestión ahora de ver cuál o cuáles eran las más convenientes.</p>
                    <p>No quería ni quiero "modificar" mi PS3, así que después de mucho análisis, decidí comprar:</p>
                    <p>En 2021, una Nintendo 3DS XL (<span className="bold-italic">octava generación de consolas</span>): La compré “modificada”. Con ella puedo jugar todo su catálogo en digital, también la uso para los juegos de Nintendo DS y en ocasiones de Game Boy Advance. Todos los juegos están en una tarjeta microSD.</p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level8/nintendo-3ds-xl-gris-noire.jpg"
                            alt="nintendo 3d xl console img"
                            width={425}
                            height={425}    
                        />
                    </p>
                    <p>También en 2021, una Nintendo Wii U (<span className="bold-italic">octava generación de consolas</span>): La modifiqué yo mismo siguiendo tutoriales de varias fuentes. Ésta es a la que más utilidad le doy.</p>
                    <p>Gracias a RetroArch para Wii U, en ella emulo juegos de todas las consolas de cualquier compañía, tanto portátiles como de sobremesa hasta la cuarta generación, e incluso consolas portátiles de quinta generación. Además, juego de forma nativa los videojuegos de Nintendo 64, GameCube, Wii y, por supuesto, de Wii U. Esta compra incluyó 2 Wiimotes con sus Nunchuks, y posteriormente adquirí la Wii Zapper y el Wii Wheel. Algunos juegos están en la memoria interna de la consola y otros en una memoria USB (pendrive).</p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level8/wii-u.png"
                            alt="wii u console img"
                            width={400}
                            height={400}    
                        />
                    </p>
                    <p>En 2022, una PlayStation 2 (<span className="bold-italic">sexta generación de consolas</span>): También vino “modificada”. Además de jugar los juegos de PS2, aquí puedo emular los de PS1. Los juegos están guardados en 2 memorias USB (pendrives).</p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level8/ps2-slim.webp"
                            alt="ps2 slim console img"
                            width={512}
                            height={213}    
                        />
                    </p>
                    <p>Paralelamente, fui comprando en digital y físico juegos originales de PS3.</p>
                    <h3>Digital</h3>
                    <p className='ps3-digital-games__container'>
                        <Image
                            src="/imgs/level8/demons-souls.jpg"
                            alt="demon's souls cover img"
                            width={518}
                            height={600}
                        />
                        <Image
                            src="/imgs/level8/megaman-9-y-10.png"
                            alt="megaman 9 & 10 cover img"
                            width={694}
                            height={800}
                        />
                        <Image
                            src="/imgs/level8/megaman-legends-2.jpg"
                            alt="megaman legends 2 cover img"
                            width={945}
                            height={1214}
                        />
                        <Image
                            src="/imgs/level8/sonic-the-hedgehog-4-episode-i.jpg"
                            alt="sonic 4 - episode I cover img"
                            width={640}
                            height={736}
                        />
                        <Image
                            src="/imgs/level8/sonic-the-hedgehog-4-episode-ii.jpg"
                            alt="sonic 4 - episode II cover img"
                            width={521}
                            height={600}
                        />
                        <Image
                            src="/imgs/level8/sonic-adventure.jpg"
                            alt="sonic adventure cover img"
                            width={640}
                            height={841}
                        />
                    </p>
                    <p>¡Al fin mi laptop y teléfono podían descansar! Jejeje, ¡gracias por su enorme contribución!</p>
                    <p>Finalmente, tuve la oportunidad de hacerme con una Nintendo Switch (<span className="bold-italic">octava generación de consolas</span>), también en 2022, la cual no pienso "modificar". Con esta y la Wii U ya tengo cubierto todo lo que quiero jugar de esa compañía. Bueno, tengo la Switch, aún resta adquirir muchos de sus juegos... Ya saben, de nuevo, esto no es un pasatiempo barato.</p>
                    {/* <p>Colocar imágenes de juegos físicos y video del menu ps3
                        <img src="">
                    </p> */}
                    <p>Por supuesto que ansío incursionar en la <span className="bold-italic">novena generación de consolas</span> con una PlayStation 5 para rematar la faena, pero es algo que no tengo previsto a corto plazo.</p>
                </article>
                <article className='last-article'>
                    <div className="arrows-container">
                        <Link href="/levels/level7">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                            </svg>
                            LEVEL 7
                        </Link>
                        <Link href="/levels/level9">
                            LEVEL 9
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                        </Link>
                    </div>
                </article>
            </section>
        </main>
    );
}
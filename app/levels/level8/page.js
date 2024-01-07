import Image from 'next/image';
import Link from 'next/link';
import './level8.css';

import Router from '@/app/components/Router/Router';

export default function Level8() {
    return(
        <main>
            <section>
                <h2>LEVEL 8: Comienza la redención.</h2>
                <article>
                    <p>Después de pasar varios meses como adicto jugando en emuladores a cuanto juego se me venía a la mente, decidí organizarme un poco. Hice un amplio trabajo de investigación, habían sido muchos años de atraso “videojueguil”.</p>
                    <p>Me determiné a jugar las sagas de videojuegos que me gustaron en el pasado, todas esas que comencé desde su primer producto y que no pude continuar, o que comencé con algún juego intermedio sin saber que hubo juegos antes y después de ese.</p>
                    <p>
                        <Image
                            className="long-list"
                            src="/imgs/level8/list.png"
                            alt="long list img"
                            width={900}
                            height={980}    
                        />
                        Luego agregué a mi lista aquellas sagas que, viendo sus gameplays o análisis en las redes, me parecieron buenas o importantes para la industria.
                    </p>
                    <p>También incluí algunos juegos que no pertenecen a sagas, así como juegos indies que me llamaron la atención.</p>
                    <p>Hace poco decidí también jugar algunos juegos retro específicos, solo por el placer de sentir la nostalgia y transportarme al momento en que los jugue de niño.</p>
                    <p>Obviamente, como ustedes comprenderán porque seguro son iguales a mí, dicha lista crecía cada vez más, jejeje. Cualquier excusa era válida para agregar nuevas sagas al “proyecto”.</p>
                    <p>Una vez que las listas estaban más o menos terminadas, era obvio que, como ya mencioné anteriormente, mi laptop y teléfono no serían suficientes para cumplirlas a cabalidad.</p>
                    <p>
                        <Image
                            className="broken-laptop"
                            src="/imgs/level8/broken-laptop.jpg"
                            alt="broken laptop img"
                            width={564}
                            height={785}    
                        />
                        Lo cual me recuerda, que un componente de mi laptop se quemó sospechosamente días después de emular GameCube con ella... ¿Por qué habrá sido?...
                    </p>
                    <p>Es entonces cuando decido solucionar eso comprando consolas, específicamente, necesitaba de la sexta generación en adelante, tomando en cuenta que ya contaba con una de las de séptima: mi PS3.</p>
                    <p>
                        <Image
                            className="money-wings"
                            src="/imgs/level8/money-wings.jpg"
                            alt="money wings img"
                            width={563}
                            height={375}    
                        />
                        Bueno, era más fácil pensarlo que hacerlo, no era tan sencillo como tomar el dinero necesario para comprar todas las consolas y juegos que quería y gastarlo de tajo porque, directamente, no cuento con tales recursos. Este hobby no es barato.
                        </p>
                    <p>
                        <Image
                            className="magic"
                            src="/imgs/level8/magic.jpg"
                            alt="broken laptop img"
                            width={563}
                            height={765}    
                        />
                        Tuve que hacer una nueva investigación, esta vez acerca de las consolas en sí. En esta oportunidad aprendí que todas, absolutamente todas las consolas, pueden ser... “Modificadas” para que hagan cierta “magia”... ¡Vaya que esa información alivió mis planes! Era cuestión ahora de ver cuál o cuáles eran las más convenientes.
                    </p>
                    <p>No quería ni quiero "modificar" mi PS3, así que después de mucho análisis, decidí comprar:</p>
                    <p>En 2021, una Nintendo 3DS XL (<span className="bold-italic">octava generación de consolas</span>): La compré “modificada” a través del Marketplace de Facebook. Con ella puedo jugar todo su catálogo en digital, también la uso para emular los juegos de Nintendo DS y en ocasiones de Game Boy Advance. Todos los juegos están en una tarjeta microSD.</p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level8/nintendo-3ds-xl-gris-noire.jpg"
                            alt="nintendo 3d xl console img"
                            width={425}
                            height={425}    
                        />
                    </p>
                    <p>También en 2021, en Agosto, una Nintendo Wii U (<span className="bold-italic">octava generación de consolas</span>): La modifiqué yo mismo siguiendo tutoriales de varias fuentes. Ésta es a la que más utilidad le doy. La adquirí a través de MercadoLibre.</p>
                    <p>Gracias a RetroArch para Wii U, en ella emulo juegos de todas las consolas de cualquier compañía, tanto portátiles como de sobremesa hasta la cuarta generación, e incluso consolas portátiles de quinta generación. Además, juego de forma nativa los videojuegos de Nintendo 64, GameCube, Wii y, por supuesto, de Wii U. Esta compra incluyó 2 Wiimotes con sus Nunchuks, y posteriormente adquirí la Wii Zapper y el Wii Wheel. Algunos juegos están en la memoria interna de la consola y otros en una memoria USB (pendrive).</p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level8/wii-u.png"
                            alt="wii u console img"
                            width={400}
                            height={400}    
                        />
                    </p>
                    <p>En Julio de 2022, una PlayStation 2 (<span className="bold-italic">sexta generación de consolas</span>): También vino “modificada”. Además de jugar los juegos de PS2, aquí puedo emular los de PS1. Los juegos están guardados en 2 memorias USB (pendrives) que voy intercambiando dependiendo de donde tenga el juego que quiera jugar en el momento. Ésta también la compre usando MercadoLibre.</p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level8/ps2-slim.webp"
                            alt="ps2 slim console img"
                            width={512}
                            height={213}    
                        />
                    </p>
                    <p>Finalmente, tuve la oportunidad de hacerme con una Nintendo Switch (<span className="bold-italic">octava generación de consolas</span>), también en 2022, en Diciembre, la cual no pienso "modificar".</p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level8/black-switch.jpg"
                            alt="black switch console img"
                            width={680}
                            height={355}    
                        />
                    </p>
                    <p>Con esta y la Wii U ya tengo cubierto todo lo que quiero jugar de Nintendo. Bueno, tengo la Switch, aún resta adquirir muchos de sus juegos... Ya saben, de nuevo, esto no es un pasatiempo barato.</p>
                    <p>Antes y durante la adquisición de las consolas, fui comprando en digital y físico juegos originales de PS3. Mi plan original era comprarlos todos en digital, pero el disco duro de mi consola no dio abasto. Por cierto, encontré varias tiendas online que ofrecían estos juegos digitales a una fracción de su costo, así que aproveché esa oportunidad y aquí te muestro los que obtuve:</p>
                    <h3>Digitales</h3>
                    <p className='ps3-digital-games__container'>
                        <Image
                            src="/imgs/level8/demons-souls.jpg"
                            alt="demon's souls cover img"
                            width={518}
                            height={600}
                        />
                        <Image
                            src="/imgs/level8/gow-origins.webp"
                            alt="gow origins collection cover img"
                            width={435}
                            height={500}
                        />
                        <Image
                            src="/imgs/level8/injustice.jpg"
                            alt="injustice cover img"
                            width={781}
                            height={900}
                        />
                        <Image
                            src="/imgs/level8/journey.jpg"
                            alt="journey cover img"
                            width={493}
                            height={611}
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
                            src="/imgs/level8/Mortal-Kombat-Vs-DC-Universe.jpg"
                            alt="Mortal Kombat Vs DC Universe cover img"
                            width={665}
                            height={768}
                        />
                        <Image
                            src="/imgs/level8/shadow-of-the-colossus.jpg"
                            alt="shadow of the colossus cover img"
                            width={534}
                            height={711}
                        />
                        <Image
                            src="/imgs/level8/sonic-adventure.jpg"
                            alt="sonic adventure cover img"
                            width={640}
                            height={841}
                        />
                        <Image
                            src="/imgs/level8/sonic-adventure-2.jpg"
                            alt="sonic adventure 2 cover img"
                            width={640}
                            height={736}
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
                            src="/imgs/level8/sonic-unleashed.jpg"
                            alt="sonic unleashed cover img"
                            width={770}
                            height={885}
                        />
                    </p>
                    <p>Si deseas información acerca de estas tiendas, te dejaré los enlaces a sus páginas en la sección de referencias.</p>
                    <h3>Físicos</h3>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level8/dmc-lastofus.png"
                            alt="physical games img"
                            width={456}
                            height={548}    
                        />
                    </p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level8/resident-sonic-sf.png"
                            alt="physical games img"
                            width={447}
                            height={558}    
                        />
                    </p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level8/silenthill-darksouls.png"
                            alt="physical games img"
                            width={456}
                            height={547}    
                        />
                    </p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level8/uncharted.png"
                            alt="physical games img"
                            width={635}
                            height={393}    
                        />
                    </p>
                    <p>Los juegos en físico los adquirí a través de Marketplace, MercadoLibre y en tiendas físicas de mi ciudad.</p>
                    <p>¡Al fin mi laptop y teléfono podían descansar! Jejeje, ¡gracias por su enorme contribución!</p>
                    <p className='devices'>
                        <Image
                            src="/imgs/level8/happy-laptop.png"
                            alt="happy laptop img"
                            width={368}
                            height={342}    
                        />
                        <Image
                            src="/imgs/level8/happy-cellphone.png"
                            alt="happy cellphone img"
                            width={500}
                            height={500}    
                        />
                    </p>
                    <p>Por supuesto que ansío incursionar en la <span className="bold-italic">novena generación de consolas</span> con una PlayStation 5 para rematar la faena, pero es algo que no tengo previsto a corto plazo.</p>
                    <p>En el siguiente LEVEL, quiero explicarte cómo me organicé y mostrarte los retos que me he autoimpuesto como gamer para los años por venir.</p>
                </article>
                <Router 
                    text1="LEVEL 7"
                    link1="/levels/level7"
                    text2="LEVEL 9"
                    link2="/levels/level9"
                />
            </section>
        </main>
    );
}
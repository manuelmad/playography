import Image from 'next/image';
import Link from 'next/link';
import './level6.css';

export default function Level6() {
    return(
        <main>
            <section>
                <h2>LEVEL 6: Un tímido reinicio.</h2>
                <article className='past'>
                    <p>Bien, finalmente me gradúo de Ingeniero y empiezo a trabajar inicialmente como profesor de bachillerato, enseñando Física en un colegio (la de ecuaciones y fórmulas, no la de deportes), para lo cual tuve que empezar a estudiar de nuevo, esta vez la carrera de Licenciatura en Educación: Mención Matemática y Física. Luego de dos años como profesor, en 2010, consigo un empleo como Ingeniero de Petróleo (carita pensando) y paralelamente me graduó de la otra carrera... Ahora que lo pienso, eso fue extraño jajaja: estudiar “A” para trabajar de “B” y luego estudiar “B” para trabajar de “A”... En fin, lo importante es que con mi nuevo empleo las finanzas comienzan a mejorar.</p>
                    <p>Pero lo cierto es que, cualquiera sea el trabajo que tuviera, empiezo a contar con muy poco tiempo libre, prácticamente nulo, diría yo.</p>
                    <p>La <span className="bold-italic">séptima generación de consolas</span> ya estaba en marcha desde 2005-2006. Yo venía con la inercia de mi floja etapa anterior y, ahora en conjunto con mi ajetreada vida laboral, lo único que sabía al respecto eran lo que escuchaba en eventuales comentarios de algunas personas a mi alrededor: “existe una consola de Nintendo cuyos controles se basan en movimiento”, “ya hay una nueva PlayStation”, “salió al mercado una portátil de doble pantalla”, etc. Esporádicamente jugaba en mi Smartphone algún jueguito que no me quitara mucho tiempo pero que me hiciera sentir satisfecho al menos mínimamente: Candy Crush, <span className="yellow">Hill Climb Racing 2</span>, Sonic Dash, etc. El que más disfruté fue sin dudas Yu-Gi-Oh Duel Links. Hace poco quise rejugar este último pero la cantidad de nuevas reglas y efectos de cartas me hicieron sentir abrumado y desistí.</p>
                    <p>Luego de algunos años, mi esposa vio la oportunidad de encarrilarme de nuevo al mundo gamer, en mi cumpleaños número <span className="yellow">32 (año 2013)</span> me trajo a casa la sorpresa de una PlayStation 3 “Slim” nueva de caja, con el juego de Uncharted.</p>
                    {/* <p>Colocar imágenes
                        <img src="">
                    </p> */}
                    <p>Aunque seguía bastante ocupado, pude disfrutar de las aventuras de Nathan Drake. Empecé a animarme de nuevo y en ocasiones aprovechaba las salidas a centros comerciales para mirar posibles juegos, los que compré y jugué fueron pocos, entre ellos se encuentran: Heavy Rain, por supuesto Mortal Kombat (9) y mis favoritos: la saga de God of War.</p>
                    <p>Compré <span className="yellow">la compilación de los 2 juegos de PS2 más God of War 3</span> por recomendación del vendedor de la tienda, y vaya que tenía razón ese muchacho. Gracias, mi pana, quienquiera que seas y dondequiera que estés, jejeje.</p>
                    {/* <p>Colocar imágenes
                        <img src="">
                    </p> */}
                    <p>¡Mis ojos no podían creer lo que estaba viendo!, cada cinemática me dejaba con la boca más abierta que la anterior. La jugabilidad, la violencia, la historia, los gigantescos personajes... De inmediato se convirtió en una de mis sagas preferidas de por vida.</p>
                    {/* <p>Colocar imágenes y videos
                        <img src="">
                    </p> */}
                    <p>La <span className="bold-italic">octava generación de consolas</span> llegó entre 2012 y 2013, es decir que toda esa experiencia con mi PS3 transcurrió cuando en el mundo ya existían nuevas consolas y yo ni me enteraba. Poco a poco fui perdiendo ese pequeño impulso que había tenido gracias a mi esposa y volví a caer en la inercia del trabajo y responsabilidades, hasta que pasados varios años, ocurre un hecho que cambió la vida a muchos en el planeta.</p>
                </article>
                <article className='last-article'>
                    <div className="arrows-container">
                        <Link href="/levels/level5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                            </svg>
                            LEVEL 5
                        </Link>
                        <Link href="/levels/level7">
                            LEVEL 7
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
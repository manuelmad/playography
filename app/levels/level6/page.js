import Image from 'next/image';
import Link from 'next/link';
import './level6.css';

import Router from '@/app/components/Router/Router';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';

export default function Level6() {
    return(
        <>
        <Header
            link1="/"
            link2="/levels/level1"
            link3="/levels/level2"
            link4="/levels/level3"
            link5="/levels/level4"
            link6="/levels/level5"
            link7="/levels/level6"
            link8="/levels/level7"
            link9="/levels/level8"
            link10="/levels/level9"
            link11="/finalThoughts"
            link12="/references"
        />
        <main>
            <section className='level6-section'>
                <h2 className='level6-h2'>LEVEL 6: Un tímido reinicio.</h2>
                <div className='past'>
                    <article className='first-article'>
                        <p>
                            <Image
                                className="teacher"
                                src="/imgs/level6/teacher.png"
                                alt="teacher img"
                                width={360}
                                height={360}
                            />
                            Bien, finalmente me gradúo de Ingeniero y empiezo a trabajar inicialmente como profesor de bachillerato, enseñando Física en un colegio (la de ecuaciones y fórmulas, no la de deportes), para lo cual tuve que empezar a estudiar de nuevo, esta vez la carrera de Licenciatura en Educación: Mención Matemática y Física. </p>
                        <p>
                            <Image
                                className="derrick"
                                src="/imgs/level6/derrick.png"
                                alt="derrick img"
                                width={226}
                                height={330}
                            />
                            Luego de dos años como profesor, en 2010, consigo un empleo como Ingeniero de Petróleo y paralelamente me graduó de la otra carrera... Ahora que lo pienso, eso fue extraño 🤔, jajaja: estudiar "A" para trabajar de "B" y luego estudiar "B" para trabajar de "A"... En fin, lo importante es que con mi nuevo empleo las finanzas comienzan a mejorar.</p>
                        <p>Pero lo cierto es que, cualquiera sea el trabajo que tuviera, empiezo a contar con muy poco tiempo libre, prácticamente nulo, diría yo.</p>
                        <p>La <span className="bold-italic">séptima generación de consolas</span> ya estaba en marcha desde 2005-2006. Yo venía con la inercia de mi floja etapa anterior y, ahora en conjunto con mi ajetreada vida laboral, lo único que sabía al respecto era lo que escuchaba en eventuales comentarios de algunas personas a mi alrededor: “existe una consola de Nintendo cuyos controles se basan en movimiento”, “ya hay una nueva PlayStation”, “salió al mercado una portátil de doble pantalla”, etc. Esporádicamente jugaba en mi Smartphone algún jueguito que no me quitara mucho tiempo, pero que me hiciera sentir satisfecho al menos mínimamente: Candy Crush, Hill Climb Racing, Sonic Dash, etc.</p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level6/candy-crush.jpg"
                                alt="candy crush img"
                                width={539}
                                height={887}
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level6/hill-climb-racing.jpg"
                                alt="hill climb racing img"
                                width={996}
                                height={561}
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level6/sonic-dash.jpg"
                                alt="sonic dash img"
                                width={564}
                                height={846}
                            />
                        </p>
                        <p>Sí, lo sé, toqué fondo jugando Candy Crush. Pero, por favor, no me juzgues, solo estaba confundido y extraviado, jejeje... De cualquier manera, todos fueron agradables y mantuvieron mi espíritu gamer vivo.</p>
                        <p>El que más disfruté fue sin dudas Yu-Gi-Oh! Duel Links. ¡Qué buen juego! Jugar el modo historia e ir recolectando dinero y objetos para poder comprar cartas y paquetes en la tienda. Armar decks para llevar a cabo buenos combos, enfrentar a oponentes online a nivel mundial... Muy buen trabajo de Konami.</p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level6/Yu-Gi-Oh_Duel_Links.webp"
                                alt="yu gi oh duel links img"
                                width={640}
                                height={710}
                            />
                        </p>
                        <p>Por cierto, recientemente comencé a ver los animés de Yu-Gi-Oh!, terminé la llamada Yu-Gi-Oh! (conocida como la tenporada "0", no sabía que existía), la Duel Monsters (la que vi durante mi adolescencia en canales de televisión nacional) y actualmente estoy viendo la saga GX. Ahora me doy cuenta que muchas de las cartas que conocí en el videojuego Duel Links, provienen de la serie GX. Si no sabías que existía una temporada "0" de Yu-Gi-Oh! y quieres verla, te dejaré un enlace en la sección de referencias.</p>
                        <p>Hace poco quise rejugar el Duel Links, pero la cantidad de nuevas reglas y efectos de cartas me hicieron sentir abrumado y desistí.</p>
                        <p>Luego de algunos años, mi esposa vio la oportunidad de encarrilarme de nuevo al mundo gamer. En mi cumpleaños número 32 (año 2013) me trajo a casa la sorpresa de una PlayStation 3 “Slim” nueva de caja, con el juego de Uncharted en físico.</p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level6/PS3-slim-console.png"
                                alt="ps3 console img"
                                width={2560}
                                height={1239}
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level6/uncharted.png"
                                alt="uncharted cover img"
                                width={448}
                                height={557}
                            />
                        </p>
                        <p>Aunque seguía bastante ocupado, pude disfrutar de las aventuras de Nathan Drake. Empecé a animarme de nuevo y en ocasiones aprovechaba las salidas a centros comerciales para mirar posibles juegos en formato físico. Los que compré y jugué fueron pocos:</p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level6/ps3gamesx5.png"
                                alt="5 ps3 games cover img"
                                width={553}
                                height={451}
                            />
                        </p>
                        <p>Recuerdo que compré God of War Saga por recomendación del vendedor de la tienda, y vaya que tenía razón ese muchacho. Gracias, mi pana, quienquiera que seas y dondequiera que estés, jejeje.</p>
                        <p>¡Mis ojos no podían creer lo que estaba viendo!, cada cinemática me dejaba con la boca más abierta que la anterior. La jugabilidad, la violencia, la historia, los gigantescos personajes... De inmediato se convirtió en una de mis sagas preferidas de por vida.</p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level6/gow1.jpg"
                                alt="god of war gameplay img"
                                width={1280}
                                height={720}
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level6/gow2.jpg"
                                alt="god of war 2 gameplay img"
                                width={512}
                                height={400}
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level6/gow3.webp"
                                alt="god of war 3 gameplay img"
                                width={1200}
                                height={674}
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level6/gow-ascension.jpg"
                                alt="god of war ascension gameplay img"
                                width={1600}
                                height={900}
                            />
                        </p>
                        <p>Sin embargo, ahora recuerdo que los 2 juegos que habían salido originalmente para PlayStation Portable (Chains of Olympus y Ghost of Sparta) no estaban incluidos en el disco, sino que había un código de descarga escrito en el papel interno del juego físico. Cuando intenté canjearlo, estaba vencido, así que volví a la tienda y al explicarle la situación al vendedor, me permitió escoger un juego usado como reemplazo de esos 2, y así fue como obtuve el Heavy Rain. Esto resultó de alguna manera conveniente, ya que fue un juego que disfruté muchísimo.</p>
                        <p>A parte de los juegos físicos que compré, solía descargar y jugar algunos demos gratuitos de la PlayStation Store, nada importante que mencionar.</p>
                    </article>
                </div>
                <article className='article2'>
                    <Image
                        className="kratos"
                        src="/imgs/level6/kratos.png"
                        alt="kratos face"
                        width={511}
                        height={488}
                    />
                    <p>La <span className="bold-italic">octava generación de consolas</span> llegó entre 2012 y 2013, es decir que toda esa experiencia con mi PS3 transcurrió cuando en el mundo ya existían nuevas consolas y yo ni me enteraba. Poco a poco fui perdiendo ese pequeño impulso que había tenido gracias a mi esposa y volví a caer en la inercia del trabajo y responsabilidades, hasta que, pasados varios años, ocurre un hecho que cambió la vida a muchos en el planeta.</p>
                </article>
                <Router 
                    text1="LEVEL 5"
                    link1="/levels/level5"
                    text2="LEVEL 7"
                    link2="/levels/level7"
                />
            </section>
        </main>
        <Footer/>
        </>
    );
}
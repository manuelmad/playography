import Image from 'next/image';
import Link from 'next/link';
import './level3.css';

import Router from '@/app/components/Router/Router';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';

export default function Level3() {
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
            <section className='level3-section'>
                <h2 className='level3-h2'>LEVEL 3: Mi periodo en "las maquinitas".</h2>
                <article className='first-article'>
                    <p>A finales de los '80 e inicios de los '90, llega la <span className="bold-italic">cuarta generación de consolas</span> a Norte América, mientras yo aún jugaba con mi Famicom. Cuando empiezo el bachillerato en 1994 con 13 años de edad, tengo por primera vez acceso a una consola de Sega a través de un amigo de clases.</p>
                    <p>Por cierto, por muchos años había perdido el contacto con ese compañero, y hace poco lo retomé por mera casualidad. Hace unos días aproveché para preguntarle el modelo de Sega que tenía y que así esta nota fuera totalmente fiel a la realidad. Así me aseguré de que fue una Sega Genesis (conocida como Sega Mega Drive en otros continentes).</p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level3/Sega-Genesis-Mod1-Set.png"
                            alt="sega genesis img"
                            width={800}
                            height={345}    
                        />
                    </p>
                </article>
                <div className='past'>
                    <article className='article2'>
                        <Image
                            className="mk"
                            src="/imgs/level3/Mortal-Kombat-logo.png"
                            alt="mortal kombat logo"
                            width={1920}
                            height={1933}
                        />
                        <p>Cada visita a casa de este compañero para estudiar era una excusa para luego echar unas partidas mientras comíamos chucherías (golosinas en venezolano) y tomábamos refrescos (así llamamos en Venezuela a la Pepsi, Coca-Cola, etc.).</p>
                        <p>Justo ahora, solo recuerdo haber jugado algún título de Sonic y Altered Beast.</p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level3/sonic.jpg"
                                alt="sonic game img"
                                width={480}
                                height={301}    
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level3/altered-beast.webp"
                                alt="altered beast game img"
                                width={660}
                                height={330}    
                            />
                        </p>
                        <p>A esa edad ya empecé a tener permiso para salir solo a la calle y, pues además de salir a estudiar o hacer deportes, también iba a "las maquinitas".</p>
                        <p>Por los siguientes 3 años, hasta que cumplí los 16, fueron muchas las visitas que hice a estos establecimientos, ¡pero muchas en serio! Siempre para alquilar una Super NES.</p>
                        <p>Esa fue mi principal fuente de videojuegos en aquella época, ya que no tuve la oportunidad de tener una videoconsola propia.</p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level3/SNES-Mod1-Console-Set.png"
                                alt="sega genesis img"
                                width={800}
                                height={415}    
                            />
                        </p>
                        <p>Recuerdo que el 99% de las veces que iba (creo que el 100%, pero dejo allí un 1% de margen de error a mi mala memoria), jugaba alguna de las entregas de Mortal Kombat, saga que inicié con Mortal Kombat 2.</p>
                        <p>Jugué mucho a esta IP en SNES: Mortal Kombat 2, Mortal Kombat 3, Mortal Kombat Utlimate 3. Llegué a aprenderme todos los fatalities de memoria, jugaba contra mis compañeros de estudio o vecinos y rara vez perdía.</p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level3/mk2.png"
                                alt="MK II img"
                                width={740}
                                height={371}    
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level3/mk3.jpg"
                                alt="MK 3 img"
                                width={564}
                                height={423}    
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level3/mk3u.png"
                                alt="MK 3 U img"
                                width={1024}
                                height={656}    
                            />
                        </p>
                        <p>Recuerdo que comencé a comprar las ediciones de la revista Club Nintendo solo para leer artículos relacionados a esta saga y eso me enganchó a seguirla comprando cuando podía. Era encantador leer página por página, mirar dibujo por dibujo, sin importar que nunca jugaría algunos de los juegos allí mostrados.</p>
                        <p>¿Sabes qué? Los recuerdos de esas revistas me hicieron querer volver a verlas, volvamos al presente a ver cómo me va en esta nueva búsqueda.</p>
                    </article>
                </div>
                <article className='article3'>
                        <Image
                            className="club"
                            src="/imgs/level3/club-nintendo.png"
                            alt="club nintendo logo"
                            width={683}
                            height={365}
                        />
                    <p>Investigué en internet y... ¡Qué emocionante fue ver de nuevo esas portadas y páginas internas! Vinieron a mí demasiados recuerdos de cuando las leía, ahora sé que también las compré para conocer los movimientos de Killer Instinct, había desarrollado un gran gusto por los juegos de pelea. Aquel 1% que había guardado se lo adjudico a este juego, jejeje, aunque seguramene fue mucho más que eso.</p>
                    <p>Aquí te dejo algunas de las portadas de las revistas que recuerdo haber tenido:</p>
                    <p className='magazines-covers__container'>
                        <Image
                            src="/imgs/level3/club-nintendo-3-09-cover.png"
                            alt="club nintendo magazine 3-09 cover img"
                            width={556}
                            height={765}
                            title='Año 3, No. 9'
                        />
                        <Image
                            src="/imgs/level3/club-nintendo-3-10-cover.png"
                            alt="club nintendo magazine 3-10 cover img"
                            width={552}
                            height={769}
                            title='Año 3, No. 10'  
                        />
                        <Image
                            src="/imgs/level3/club-nintendo-3-11-cover.png"
                            alt="club nintendo magazine 3-11 cover img"
                            width={499}
                            height={697}
                            title='Año 3, No. 11'  
                        />
                        <Image
                            src="/imgs/level3/club-nintendo-4-02-cover.png"
                            alt="club nintendo magazine 4-02 cover img"
                            width={521}
                            height={710}
                            title='Año 4, No. 02'  
                        />
                        <Image
                            src="/imgs/level3/club-nintendo-4-08-cover.png"
                            alt="club nintendo magazine 4-08 cover img"
                            width={565}
                            height={769}
                            title='Año 4, No. 08'  
                        />
                        <Image
                            src="/imgs/level3/club-nintendo-4-09-cover.png"
                            alt="club nintendo magazine 4-09 cover img"
                            width={558}
                            height={766}
                            title='Año 4, No. 09'  
                        />
                        <Image
                            src="/imgs/level3/club-nintendo-4-11-cover.png"
                            alt="club nintendo magazine 4-11 cover img"
                            width={558}
                            height={771}
                            title='Año 4, No. 11'  
                        />
                        <Image
                            src="/imgs/level3/club-nintendo-4-12-cover.png"
                            alt="club nintendo magazine 4-12 cover img"
                            width={560}
                            height={769}
                            title='Año 4, No. 12'  
                        />
                        <Image
                            src="/imgs/level3/club-nintendo-5-04-cover.png"
                            alt="club nintendo magazine 5-04 cover img"
                            width={547}
                            height={761}
                            title='Año 5, No. 04'  
                        />
                        <Image
                            src="/imgs/level3/club-nintendo-5-05-cover.png"
                            alt="club nintendo magazine 5-05 cover img"
                            width={546}
                            height={762}
                            title='Año 5, No. 05'  
                        />
                        <Image
                            src="/imgs/level3/club-nintendo-5-06-cover.png"
                            alt="club nintendo magazine 5-06 cover img"
                            width={538}
                            height={761}
                            title='Año 5, No. 06'  
                        />
                        <Image
                            src="/imgs/level3/club-nintendo-5-10-cover.png"
                            alt="club nintendo magazine 5-10 cover img"
                            width={542}
                            height={754}
                            title='Año 5, No. 10'  
                        />
                        <Image
                            src="/imgs/level3/club-nintendo-5-11-cover.png"
                            alt="club nintendo magazine 5-11 cover img"
                            width={539}
                            height={757}
                            title='Año 5, No. 11'  
                        />
                    </p>
                    <p>En ellas estaban escritas todas las combinaciones de botones para los poderes, fatalities, babalities, frienships, animalities, pit fatalities y brutalities. Lo que aplicara en el videojuego del momento:</p>
                    <p className='magazines-pages__container'>
                        <Image
                            src="/imgs/level3/club-nintendo-3-10-mk2-subzero.png"
                            alt="mk 2 subzero page img"
                            width={497}
                            height={688}
                            title='Año 3, No. 10, Subzero'
                        />
                        <Image
                            src="/imgs/level3/club-nintendo-3-10-mk2-scorpion.png"
                            alt="mk 2 scorpion page img"
                            width={490}
                            height={688}
                            title='Año 3, No. 10, Scorpion'
                        />
                        <Image
                            src="/imgs/level3/club-nintendo-4-02-ki-finalmoves-1.png"
                            alt="ki final moves page 1 img"
                            width={520}
                            height={710}
                            title='Año 4, No. 02, final moves 1'
                        />
                        <Image
                            src="/imgs/level3/club-nintendo-4-02-ki-finalmoves-2.png"
                            alt="ki 3 final moves page 2 img"
                            width={521}
                            height={711}
                            title='Año 4, No. 02, final moves 2'
                        />
                        <Image
                            src="/imgs/level3/club-nintendo-4-11-mk3-finalmoves-1.png"
                            alt="mk 3 final moves page 1 img"
                            width={488}
                            height={685}
                            title='Año 4, No. 11, final moves 1'
                        />
                        <Image
                            src="/imgs/level3/club-nintendo-4-11-mk3-finalmoves-2.png"
                            alt="mk 3 final moves page 2 img"
                            width={491}
                            height={687}
                            title='Año 4, No. 11, final moves 2'
                        />
                    </p>
                </article>
                <div className='past'>
                    <article className='article4'>
                        <Image
                            className="snes"
                            src="/imgs/level3/snes-controller.png"
                            alt="super nes controller"
                            width={3840}
                            height={2160}
                        />
                        <p>
                            <Image
                                className="paper"
                                src="/imgs/level3/paper.png"
                                alt="paper img"
                                width={421}
                                height={592}    
                            />
                            Volviendo al pasado, recuerdo que tenía mis propias hojas donde transcribía toda esa información para llevarla a dondequiera que iba y no dañar las revistas. Creo que buscaré en casa de mis padres, en mi antiguo closet, a ver si alguna de esas ediciones se ha salvado del paso del tiempo...</p>
                        <p>En ocasiones, durante vacaciones escolares, me iba a pasar unos días en casa de un tío materno. Mis 2 primos y yo amanecíamos jugando con su SNES. Fue durante esas visitas cuando pude disfrutar mejor del catálogo de esta máquina.</p>
                        <p>
                            <Image
                                className="angry-uncle"
                                src="/imgs/level3/angry-uncle.png"
                                alt="angry uncle img"
                                width={479}
                                height={521}    
                            />
                            Recuerdo con cariño una ocasión en que ese tío nos dejó a uno de mis primos y a mí en un centro comercial para que, además de alquilar algunos videojuegos, comiéramos y bebiéramos algo para pasar la tarde. Pues decidimos gastarnos todo el dinero en juegos alquilados y no tomamos ni una gota de agua, jajaja. Mi tío se molestó bastante cuando vio esa torre de cartuchos en nuestras manos y supo que no comimos nada. Aún no entiendo el porqué de la molestia, supongo que es la reacción normal en un adulto que no gusta de este hobby. Yo, a día de hoy, sigo sin ver el problema en lo que hicimos 🤷‍♂️, jejeje.</p>
                        <p>Algunos de los juegos que recuerdo haber jugado en aquellas interminables jornadas fueron:</p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level3/hit-the-ice.webp"
                                alt="hit the ice cover img"
                                width={475}
                                height={347}    
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level3/international-superstar-soccer.png"
                                alt="international superstar soccer cover img"
                                width={475}
                                height={347}    
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level3/nbajamcover.webp"
                                alt="nba jam cover img"
                                width={1214}
                                height={886}    
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level3/primal-rage.jpg"
                                alt="primal rage cover img"
                                width={640}
                                height={452}    
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level3/rock-and-roll-racing.jpg"
                                alt="rock and roll racing cover img"
                                width={500}
                                height={365}    
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level3/teenage-mutant-ninja-turtles-tournament-fighters.jpg"
                                alt="TMNT tournament fighters cover img"
                                width={1146}
                                height={800}    
                            />
                        </p>
                        <p>El juego de hockey sobre hielo me pareció especialmente divertido porque, si lograbas molestar lo suficiente a un jugador rival, la cámara hacía un primer plano a los jugadores involucrados en la riña y tocaba controlar a tu personaje para ganar una pelea a puñetazo limpio, jejeje. Mucho me reí durante esos momentos.</p>
                        <p>La gran mayoría de los juegos que probé (por no decir todos), fueron aquellos que se prestaban a la modalidad de multijugador. Esto, claro, debido al hecho de depender siempre de consolas compartidas o alquiladas.</p>
                        <p>Esos mismos primos también llevaban la consola a casa de nuestra abuela materna en navidad, y nos amontonábamos todos alrededor de la máquina gris y púrpura para jugar por turnos, casi siempre al Mortal Kombat del momento.</p>
                        <p>Los adultos nos obligaban a salir de la casa para compartir con el resto de la familia, y nosotros a regañadientes accedíamos. ¡Qué buenos tiempos!</p>
                    </article>
                </div>
                <Router 
                    text1="LEVEL 2"
                    link1="/levels/level2"
                    text2="LEVEL 4"
                    link2="/levels/level4"
                />
            </section>
        </main>
        <Footer/>
        </>
    );
}
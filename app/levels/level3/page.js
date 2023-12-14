import Image from 'next/image';
import Link from 'next/link';
import './level3.css';

export default function Level3() {
    return(
        <main>
            <article>
                <h2>LEVEL 3: Mi periodo en “las maquinitas”.</h2>
                <p>A finales de los '80 e inicios de los '90, llega la <span className="bold-italic">cuarta generación de consolas</span> a Norte América, mientras yo aún jugaba con mi Famicom. Cuando empiezo el bachillerato en 1994 con 13 años de edad, tengo por primera vez acceso a una consola de Sega a través de un amigo de clases.</p>
                <p>Por cierto, por muchos años había perdido el contacto con ese compañero, y hace poco lo retomé por mera casualidad. Hace unos días aproveché para preguntarle el modelo de Sega que tenía y que así esta nota fuera totalmente fiel a la realidad. Así me aseguré de que fue una Sega Genesis (nombre de la Mega Drive en América).</p>
                <p className='centered-text'>
                    <Image
                        src="/imgs/level3/Sega-Genesis-Mod1-Set.png"
                        alt="sega genesis img"
                        width={800}
                        height={345}    
                    />
                </p>
            </article>
            <article className='past'>
                <p>Cada visita a casa de este compañero para estudiar, era una excusa para luego echar unas partidas mientras comíamos chucherías (golosinas en venezolano) y tomábamos refrescos (así llamamos en Venezuela a la Pepsi, Coca-Cola, etc.).</p>
                <p>Justo ahora solo recuerdo haber jugado algún título de Sonic y Altered Beast</p>
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
                <p>A esa edad, ya empecé a tener permiso para salir solo a la calle y, pues además de salir a estudiar o hacer deportes, también iba a “las maquinitas”.</p>
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
                <p>Jugué mucho a esta IP en SNES: Mortal Kombat 2, Mortal Kombat 3, Mortal Kombat Utlimate 3. Me sabía todos los fatalities de memoria, jugaba contra mis compañeros de estudio o vecinos y rara vez perdía.</p>
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
                <p>Recuerdo que comencé a comprar las ediciones de la revista Club Nintendo solo para leer artículos relacionados a esta IP y eso me enganchó a seguirla comprando cuando podía. Era encantador leer página por página, mirar dibujo por dibujo, sin importar que nunca jugaría algunos de los juegos allí mostrados.</p>
            </article>
            <article>
                <p>Los recuerdos de esas revistas me hicieron querer volver a verlas, así que realicé una búsqueda en internet y me fui muy bien. ¡Qué emocionante fue ver de nuevo esas portadas y páginas internas! Vinieron a mí demasiados recuerdos de cuando las leía, ahora sé que también las compré para conocer los movimientos de Killer Instintc, había desarrollado un gran gusto por los juegos de pelea.</p>
                <p>Aquí les dejo algunas de las portadas de las revistas que recuerdo haber tenido:</p>
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
                </p>
                <p>En ellas estaban escritas todas las combinaciones de botones para los poderes, fatalities, babalities, frienships, animalities, pit fatalities y brutalities.</p>
                <p className='centered-text'>
                    <Image
                        src="/imgs/level3/SNES-Mod1-Console-Set.png"
                        alt="sega genesis img"
                        width={800}
                        height={415}    
                    />
                </p>
            </article>
            <article>
                <p>Volviendo al pasado, recuerdo que tenía mis propias hojas donde transcribía toda esa información para llevarla a dondequiera que iba y no dañar las revistas. Creo que buscaré en casa de mis padres, en mi antiguo closet, a ver si alguna de esas ediciones se ha salvado del paso del tiempo...</p>
                <p>En ocasiones, durante vacaciones escolares, me iba a pasar unos días en casa de un tío materno. Mis 2 primos y yo amanecíamos jugando con su SNES. Fue durante esas visitas cuando pude disfrutar mejor del catálogo de esta máquina.</p>
                <p>Recuerdo con cariño una ocasión en que ese tío nos dejó a uno de mis primos y a mí en un centro comercial para que, además de alquilar algunos videojuegos, comiéramos y bebiéramos algo para pasar la tarde. Pues decidimos gastarnos todo el dinero en juegos alquilados y no tomamos ni una gota de agua jajaja. Mi tío se molestó bastante cuando vio esa torre de cartuchos en nuestras manos y supo que no comimos nada. Aún no entiendo el porqué de la molestia, supongo que es la reacción normal en un adulto que no gusta de este hobby. Yo, a día de hoy, sigo sin ver el problema en lo que hicimos 🤷‍♂️ jejeje.</p>
                <p>Algunos de los juegos que recuerdo haber jugado en aquellas interminables jornadas fueron ...............</p>
                <p className="supernes-games__container">
                    <Image
                        src="/imgs/level2/tennis.jpg"
                        alt="tennis cover game"
                        width={563}
                        height={818}    
                    />
                    <Image
                        src="/imgs/level2/track-&-field.jpg"
                        alt="track & field cover game"
                        width={564}
                        height={801}    
                    />
                    <Image
                        src="/imgs/level2/Urban-Champion-NES.jpg"
                        alt="urban champion cover game"
                        width={340}
                        height={480}    
                    />
                    <Image
                        src="/imgs/level2/Yie-Ar-Kung-Fu-NES.webp"
                        alt="yie ar kung-fu cover game"
                        width={360}
                        height={500}    
                    />
                </p>
                <p>Esos mismos primos también llevaban la consola a casa de nuestra abuela materna en navidad, y nos amontonábamos todos a su alrededor para jugar por turnos, siempre al Mortal Kombat del momento y después también Killer Instinct.</p>
                <p className='centered-text'>
                    <Image
                        src="/imgs/level3/SNES-Mod1-Console-Set.png"
                        alt="sega genesis img"
                        width={800}
                        height={415}    
                    />
                </p>
                <p>Los adultos nos obligaban a salir de la casa para compartir con el resto de la familia, y nosotros a regañadientes accedíamos. ¡Qué buenos tiempos!</p>
            </article>
            <article className='last-article'>
                    <div className="arrows-container">
                        <Link href="/levels/level2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                            </svg>
                            LEVEL 2
                        </Link>
                        <Link href="/levels/level4">
                            LEVEL 4
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                        </Link>
                    </div>
                </article>
        </main>
    );
}
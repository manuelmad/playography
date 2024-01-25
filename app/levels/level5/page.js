import Image from 'next/image';
import Link from 'next/link';
import './level5.css';

import Router from '@/app/components/Router/Router';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';

export default function Level5() {
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
            <section className='level5-section'>
                <h2 className='level5-h2'>LEVEL 5: Juego pausado.</h2>
                <div className='past'>
                    <article className='first-article'>
                        <p>La <span className="bold-italic">sexta generación de consolas</span>, ya mencionada en mi etapa anterior, arribó a finales de los '90 e inicio de los 2000. Como comenté, ésta pasó casi por debajo de la mesa para mí. Fueron muy pocas las experiencias que tuve con esas videoconsolas.</p>
                        <p>En muy contadas ocasiones visitaba a un primo que vivía a una cuadra de mi casa, él tenía una PlayStation 2 Slim y jugábamos con su hermano y el mío algunas partidas de Pro Evolution Soccer o FIFA.</p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level5/PS2-Slim-Console-Set.png"
                                alt="ps2 console img"
                                width={443}
                                height={563}    
                            />
                        </p>
                        <p>Como no teníamos acceso a esa consola muy a menudo, mi hermano instaló en nuestra computadora (creo que se le decía juego crackeado) la versión para PC de Need for Speed Underground 2... ¡Éste es otro de los videojuegos que me han volado la cabeza! ¡Qué videojuego tan espectacular! Tantas misiones, su perfecta jugabilidad y controles, el desbloqueo de mapas y autos, el nivel de personalización de los vehículos... Para mí es una obra de arte, el mejor juego de conducción que he jugado jamás.</p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level5/need_for_speed_underground_2.jpg"
                                alt="need for speed underground 2 cover"
                                width={353}
                                height={500}    
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level5/need-for-speed-underground-2-intro.jpg"
                                alt="need for speed underground 2 intro img"
                                width={640}
                                height={480}    
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level5/need-for-speed-underground-2-menu.jpg"
                                alt="need for speed underground 2 menu img"
                                width={640}
                                height={480}    
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level5/need-for-speed-underground-2-drive.jpg"
                                alt="need for speed underground 2 driving img"
                                width={640}
                                height={480}    
                            />
                        </p>
                        <p>Recuerdo también que un compañero de estudios de mi hermano, quien ya cursaba el bachillerato, le prestó una Nintendo GameCube con algunos juegos.</p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level5/Nintendo_GameCube_Consola.png"
                                alt="gamecube console img"
                                width={562}
                                height={444}    
                            />
                        </p>
                        <p>Fue entonces cuando tuve la oportunidad de jugar uno de los Mario Party's de esa generación y supuestamente (según me cuenta recién mi hermano) Super Smash Bros. Melee y algún Resident Evil. Yo de verdad no recuerdo haber jugado esos 2 últimos, pero, ¡confiaré en mi querido brother!</p>
                    </article>
                </div>
                <article className='article2'>
                    <Image
                        className="nfsu2"
                        src="/imgs/level5/nfs-underground-2-nissan-350z.png"
                        alt="nissan 350z"
                        width={600}
                        height={379}
                    />
                    <p>Por otra casualidad más, hace poco obtuve el contacto de ese amigo de mi hermano. Ya no sé si todas estas cosas son casualidades 🤔, o si estaba destinado a escribir este artículo, jejeje. De cualquier manera, aproveché de preguntarle acerca de aquella anécdota y efectivamente me corroboró que tenía el Super Smash, 2 juegos de Resident (0 y 1 Remake), pero no recuerda cuál de los Mario Party's tuvo. Así que ésta ha sido mi investigación menos fructífera: no sé cuál de los 2 Resident Evil jugué ni cuál entrega de Mario Party de GameCube 😩... Pero, no importa, todos esos juegos los estoy jugando ahora y los jugaré en un futuro cercano, como ya te explicaré más adelante.</p>
                    <p>En resumen, fue un periodo bastante flojo para mi experiencia gamer, y así continuaría por varios años, hasta que empezaron a mejorar algunas circunstancias...</p>
                </article>
                <Router 
                    text1="LEVEL 4"
                    link1="/levels/level4"
                    text2="LEVEL 6"
                    link2="/levels/level6"
                />
            </section>
        </main>
        <Footer/>
        </>
    );
}
import Image from 'next/image';
import Link from 'next/link';
import './level2.css';

import Router from '@/app/components/Router/Router';
import Footer from '@/app/components/Footer/Footer';

export default function Level2() {
    return(
        <>
        <main>
            <section className='level2-section'>
                <h2 className='level2-h2'>LEVEL 2: Crece el afecto.</h2>
                <div className='past'>
                    <article className='first-article'>
                        <p>Por increíble que parezca, de esta nueva consola no recuerdo la experiencia de cuando me la dieron. Puedo calcular que ocurrió cuando tenía entre 8 y 9 años de edad (1989 - 1990) y para no andar con muchos rodeos, directamente diré que fue una... ¡Famicom!, o como todos los niños de la época la llamábamos: “la family”.</p>
                        <p>Con ella viví la <span className="bold-italic">tercera generación de consolas</span>. La Family Computer salió al mercado en 1983 en Japón, así que ya tenía al menos 6 años en las estanterías de las tiendas cuando la pude tener en mi casa, incluso ya existía cuando yo aún jugaba con mi Atari.</p>
                        <p>Hoy en día, con tanta información en redes y la web en general, ya sabemos de sobra cómo luce una Famicom, ¿cierto?</p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level2/famicom.bmp"
                                alt="famicom img"
                                width={620}
                                height={384}    
                            />
                        </p>
                        <p>Pero lo extraño es que la mía no lucía exactamente así... Jajaja. Los detalles que la original japonesa tiene en rojo, la mía los tenía en gris. Pero entonces, ¡¿qué consola me dieron?!</p>
                        <p>Así que, otra vez con la cachucha de investigador puesta, me dedico a realizar una búsqueda exhaustiva para resolver el misterio.</p>
                    </article>
                </div>
                <article className='article2'>
                    <Image
                        className="mario"
                        src="/imgs/level2/super-mario.png"
                        alt="super mario"
                        width={4096}
                        height={4096}
                    />
                    <p>Como era de esperarse, descubrí que poseí una versión “bucanera” de la consola original y, por lo visto, salieron varias al mercado con ese color:</p>
                    <p>Las Dendy Junior y Dendy Junior II, ensambladas por la empresa Steepler en Taiwan con componentes chinos y distribuidas principalmente en Rusia y el resto de países de la ex Unión Soviética:</p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level2/dendy-junior.jpg"
                            alt="dendy junior img"
                            width={1539}
                            height={1080}    
                        />
                    </p>
                    <p className='centered-text'>
                        <Image
                            className='box-shadow'
                            src="/imgs/level2/Dendy_Junior_II.png"
                            alt="dendy junior II img"
                            width={1062}
                            height={899}    
                        />
                    </p>
                    <p>La Family Game, también fabricada en Taiwan:</p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level2/family-game.jpg"
                            alt="familiy game img"
                            width={1214}
                            height={1121}    
                        />
                    </p>
                    <p>La Family Video Game Son Son, igualmente procedente de Taiwan:</p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level2/son-son-box.jpg"
                            alt="family video game son son img"
                            width={1200}
                            height={900}    
                        />
                    </p>
                    <p>Y bueno, un largo, pero muy largo etcétera de productos muy parecidos entre sí, provenientes de muchos países. Se me hace entonces imposible ditinguir cuál fue exactamente la que tuve. Este caso quedará abierto por ahora 😥.</p>
                </article>
                <div className='past'>
                    <article className='article3'>
                    <Image
                        className="megaman"
                        src="/imgs/level2/megaman.png"
                        alt="super mario"
                        width={1184}
                        height={1184}
                    />
                        <p>Si bien no logré recordar la consola específica que tuve, ¡vaya que sí tengo recuerdos de los maravillosos juegos que en ella jugué!</p>
                        <p>Recuerdo haber jugado con compañeros de colegio, vecinos y mi hermano menor (¡ya existe!). No me dedicaré a nombrar los juegos más famosos que todo el mundo jugó, porque obviamente yo también lo hice.</p>
                        <p>Así que aquí te dejo una selección de videojuegos a los cuales les dediqué muchas horas de mi niñez, quizás no conocías algunos de ellos hasta ahora:</p>
                        <p className="famicom-games__container">
                            <Image
                                src="/imgs/level2/balloon-fight.jpg"
                                alt="balloon fight cover game"
                                width={564}
                                height={793}    
                            />
                            <Image
                                src="/imgs/level2/captain-america-avengers.jpg"
                                alt="captain america and the avengers cover game"
                                width={514}
                                height={716}    
                            />
                            <Image
                                src="/imgs/level2/circus-charlie.jpg"
                                alt="circus charlie cover game"
                                width={487}
                                height={690}    
                            />
                            <Image
                                src="/imgs/level2/conquest.png"
                                alt="conquest of the crystal palace cover game"
                                width={500}
                                height={646}    
                            />
                            <Image
                                src="/imgs/level2/contra.jpg"
                                alt="contra cover game"
                                width={400}
                                height={550}    
                            />
                            <Image
                                src="/imgs/level2/double-dragon-ii.jpg"
                                alt="double dragon II cover game"
                                width={400}
                                height={656}    
                            />
                            <Image
                                src="/imgs/level2/double-dribble.jpg"
                                alt="double dribble cover game"
                                width={537}
                                height={717}    
                            />
                            <Image
                                src="/imgs/level2/elevator-action.jpg"
                                alt="elevator action cover game"
                                width={564}
                                height={772}    
                            />
                            <Image
                                src="/imgs/level2/excite-bike.jpg"
                                alt="excite bike cover game"
                                width={564}
                                height={795}    
                            />
                            <Image
                                src="/imgs/level2/goal-two.jpg"
                                alt="goal two cover game"
                                width={250}
                                height={354}    
                            />
                            <Image
                                src="/imgs/level2/gremlins-2.jpg"
                                alt="gremlins 2 cover game"
                                width={400}
                                height={550}    
                            />
                            <Image
                                src="/imgs/level2/ice-climber.jpg"
                                alt="ice climber cover game"
                                width={497}
                                height={680}    
                            />
                            <Image
                                src="/imgs/level2/jackal.webp"
                                alt="jackal cover game"
                                width={600}
                                height={849}    
                            />
                            <Image
                                src="/imgs/level2/legend-of-kage.jpg"
                                alt="the legend of kage cover game"
                                width={564}
                                height={770}    
                            />
                            <Image
                                src="/imgs/level2/ninja-gaiden-3.jpg"
                                alt="ninja gaiden 3 cover game"
                                width={564}
                                height={802}    
                            />
                            <Image
                                src="/imgs/level2/ninja-turtles-3.jpg"
                                alt="ninja turtles 3 cover game"
                                width={564}
                                height={771}    
                            />
                            <Image
                                src="/imgs/level2/rbi.jpg"
                                alt="r.b.i. baseball cover game"
                                width={564}
                                height={761}    
                            />
                            <Image
                                src="/imgs/level2/simpsons-space-mutants.jpg"
                                alt="simpsons space mutants cover game"
                                width={564}
                                height={807}    
                            />
                            <Image
                                src="/imgs/level2/tinytoon-adventures.jpg"
                                alt="tinytoon adventures cover game"
                                width={250}
                                height={351}    
                            />
                            <Image
                                src="/imgs/level2/tinytoon-adventures-2.jpg"
                                alt="tinytoon adventures 2 cover game"
                                width={698}
                                height={960}    
                            />
                            <Image
                                src="/imgs/level2/RogerClemens_MVPBaseball.jpg"
                                alt="roger clemens mvp baseball 2 cover game"
                                width={366}
                                height={500}    
                            />
                            <Image
                                src="/imgs/level2/tag-team-match.jpg"
                                alt="tag team match m.u.s.c.l.e. cover game"
                                width={310}
                                height={444}    
                            />
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
                        <p>Seguramente se me escapa uno que otro juego, vi varios videos y listas de juegos en internet para refrescar mi memoria y recordar aquellos que no tenía presentes hoy en día.</p>
                        <p>Como nota curiosa, recuerdo perfectamente haber jugado Street Fighter en mi Famicom,  pero durante esta investigación aprendí que no fue lanzado ningún juego 1 vs. 1 de dicha saga para esta consola 🤔... Entonces, ¡¿qué fue lo que jugué?!</p>
                        <p>Pues, ahondando un poco más, descubrí que sí que existió una entrega de Street Fighter II: The World Warrior para la NES... Pero fue una versión NO oficial... ¡Pirata!, para ser más claros. Les dejaré el enlace al gameplay de este juego en la sección de referencias.</p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level2/street-fighter-ii-nes.png"
                                alt="street fighter II nes img"
                                width={645}
                                height={359}    
                            />
                        </p>
                        <p>Y ahora recuerdo que bastante lo disfruté hasta que uno de mis compañeros de colegio me lo robó 🤬. Espero lo hayas disfrutado bastante, ¡malandrín!</p>
                        <p>Como ya dije antes, no entraré en detalle con juegos archiconocidos por todos ustedes, solo permítanme hacer la excepción de mencionar el juego que pienso que más marcó mi experiencia en ésta la tercera generación de consolas. Se trata de...</p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level2/punch-out.gif"
                                alt="punch-out gif"
                                width={500}
                                height={500}    
                            />
                        </p>
                        <h3 className='punchout-name'>Punch-Out!!</h3>
                        <p>Recuerdo que, antes de tener mi propia Famicom (o como se llamara la que yo tenía), acompañaba a mis padres a hacer las compras en un supermercado, ubicado en un centro comercial cercano a casa. En este mall había, por supuesto, otros locales, entre los cuales se encontraba un centro de alquiler de consolas por hora, o como los niños llamábamos a ese tipo de sitios: "maquinitas".</p>
                        <p>Mientras mis padres pasaban el tiempo en el supermercado comprando lo necesario para el hogar, yo me distraía en las "maquinitas", y les juro que el único juego que recuerdo haber jugado en ese establecimiento fue Punch-Out!!</p>
                        <p>Me hipnotizaban esos contrincantes con sprites mucho más grandes que el del héroe, cada personaje tenía un encanto único y una forma distinta de vencerlo. Siempre había algún cliente usando este juego, y el resto de niños que esperábamos nuestro turno, rodeábamos al afortunado del momento y lo alentábamos a seguir avanzando en los circuitos.</p>
                        <p>Mi tiempo de juego dependía de las visitas al centro comercial y a la disponibilidad del juego en ese momento que yo estaba allí, así que recuerdo que solo pude avanzar hasta King Hippo, el cual tenía una forma, digamos, "rebuscada" de ser vencido.</p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level2/king-hippo.jpg"
                                alt="king-hippo img"
                                width={512}
                                height={448}    
                            />
                        </p>
                        <p>Pero las cosas cambiaron, ¡y mucho!, cuando tuve mi consola. Obviamente pedí ese juego como regalo y poco a poco pude aprender cómo derrotar a todos los boxeadores hasta llegar a esa taaaan difícil pelea final.</p>
                        <p className='tyson-win__paragraph'>
                            <Image
                                className="tyson-win"
                                src="/imgs/level2/Myke.webp"
                                alt="mike tyson wins"
                                width={256}
                                height={256}    
                            />
                            Realmente no sé por cuantos años jugué hasta ser capaz de derrotar a Mike Tyson. Al resto de contrincantes los vencía con relativa facilidad después de tanta práctica, pero ese bendito Tyson se me atragantó por mucho tiempo.</p>
                        <p className='tyson-tko__paragraph'>
                            <Image
                                className="tyson-tko"
                                src="/imgs/level2/mike-tyson-tko.jpg"
                                alt="mike tyson tko"
                                width={500}
                                height={437}    
                            />
                            Cuando finalmente lo logré... ¡De verdad no podía creer que aquello fuera posible!, siempre había creído que era invencible. Ver a Mario (el referee) decretando mi victoria fue la alegría más grande que recuerde con videojuego alguno.
                        </p>
                        <p>¡Qué bonito es tener una consola en tu propia casa y usarla cada vez que te apetezca! Así fueron mis 2 primeras experiencias gaming, muy añorables y llenas de satisfacciones. Sin embargo, no sabía que vendrían tiempos menos favorables durante las cuarta, quinta y sexta generaciones de consolas...</p>
                    </article>
                </div>
                <Router 
                    text1="LEVEL 1"
                    link1="/levels/level1"
                    text2="LEVEL 3"
                    link2="/levels/level3"
                />
            </section>
        </main>
        <Footer/>
        </>
    );
}
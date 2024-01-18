import Image from 'next/image';
import Link from 'next/link';
import './level1.css';

import Router from '@/app/components/Router/Router';
import Footer from '@/app/components/Footer/Footer';


export default function Level1() {
  return (
    <>
    <main>
        <section className='level1-section'>
            <h2 className='level1-h2'>LEVEL 1: El despertar de una afición.</h2>
			<article className='first-article'>
				<p>Cuando antes escribí "desde que tengo uso de razón", ¡lo decía de forma literal!</p>
				<p>Estaba muy joven cuando tuve mi primera consola y los recuerdos del uso que le di son pocos y no muy claros...</p>
				<div className="intro-container">
                    <Image
                        className="remember-img"
                        src="/imgs/level1/remember.png"
                        alt="remember img"
                        width={512}
                        height={512}
                    />
					<p>Quizás solo debería esforzarme más para extraerlos de mi subconsciente o dondequiera que estén... Bueno, a lo mejor muchos de esos recuerdos irán saliendo a flote mientras escribo todo esto. Ya veremos.</p>
					<p>Sí que recuerdo perfectamente la experiencia de cuando me regalaron esa primera consola, aunque no mi edad exacta.</p>
					<p>Nací en 1981, y sacando cuentas (no muy confiables), estimo que pudo haber sido a mis 5 años de edad.</p>
				</div>
				<div>
                    <Image
                        className="old-man-img"
                        src="/imgs/level1/old-man-doubts.jpg"
                        alt="old man doubts"
                        width={563}
                        height={648}
                    />
					<p className='old-man__paragraph'>Hace poco le pregunté a mi papá si recordaba aquel evento y me miró con cara de "¿qué es una consola?", así que descubrí por descarte que aquel regalo fue idea exclusivamente de mi madre. Lástima que ya no nos acompaña para poder preguntarle los detalles... De cualquier manera, ¡vamos al evento!</p>
				</div>
			</article>
            <div className='past'>
                <article className="article1">
                    <Image
                        className="plane"
                        src="/imgs/level1/river-raid-plane.png"
                        alt="river raid plane"
                        width={1024}
                        height={1024}
                    />
                    <div>
                        <Image
                            className="flags"
                            src="/imgs/level1/flags.jpg"
                            alt="Venezuela and Colombia flags"
                            width={564}
                            height={329}
                        />
                        <p>Soy de Venezuela, de un Estado fronterizo que colinda con Colombia. Recuerdo que mis padres viajaron a un municipio colombiano, Maicao, para comprar varias cosas; era lo que se estilaba hacer por aquellos tiempos entre los venezolanos.</p>
                    </div>
                    <p>No estoy seguro, pero creo que era época navideña porque, como de costumbre en esas fechas, yo estaba en casa de mis abuelos maternos.</p>
                    <div>
                        <Image
                            className="woman-shopping"
                            src="/imgs/level1/woman-shopping-removebg-preview.png"
                            alt="Woman shopping"
                            width={500}
                            height={500}
                        />
                        <p>Aún tengo en mi mente el momento en que mis padres llegaron del viaje y entraron por la puerta principal de aquella casa, con sus manos llevando muchas bolsas, una de las cuales contenía la sorpresa para Manuelito, como me decían (y aún me dicen) todos en la familia.</p>
                    </div>
                    <p>Luego sacaron aquel aparato, era negro y de forma rectangular, un poco achatado en el frente, con una franja gris y ancha en el centro. Los mandos eran cuadrados, con una palanca en el centro y un solo botón rojo en una de sus esquinas.</p>
                    <p>Si eres más o menos de mi generación, o si te gusta leer o investigar acerca de videojuegos, entonces ya en este punto sabrás que la máquina a la cual me refiero era una Atari.</p>
                    <p>Pero, las consolas de Atari que a menudo veo en los videos y publicaciones no son iguales a la que llevo en mi memoria...</p>
                    <div>
                        <p>Las 2600 tienen los mismos mandos que la que tuve, pero su cuerpo es muy distinto.</p>
                        <p className="centered-text">
                            <Image
                                className="atari-2600"
                                src="/imgs/level1/atari-2600.jpg"
                                alt="Atari 2600 img"
                                width={563}
                                height={492}
                            />
                        </p>
                    </div>
                    <div>
                        <p>En cambio, las 5200 y 7800 tienen un cuerpo bastante similar a lo que recuerdo, pero sus controles son completamente diferentes...</p>
                        <p className="centered-text">
                            <Image
                                className="atari-5200"
                                src="/imgs/level1/atari-5200.png"
                                alt="Atari 5200 img"
                                width={600}
                                height={513}
                            />
                        </p>
                        <p className="centered-text">
                            <Image
                                className="atari-7800"
                                src="/imgs/level1/atari-7800.jpg"
                                alt="Atari 7800 img"
                                width={564}
                                height={456}
                            />
                        </p>
                    </div>
                    <p>Volvamos por un instante al presente, debo resolver ese misterio.</p>
                </article>
            </div>
			<article className="article2">
                <Image
                    className="police"
                    src="/imgs/level1/KeystoneKapersPolice.png"
                    alt="pixel police img"
                    width={228}
                    height={247}
                />
				<p>
                    <Image
                        className="detective-pic"
                        src="/imgs/level1/detective.jpg"
                        alt="Detective img"
                        width={450}
                        height={450}
                    />
					Las antiguas consolas de Atari fueron producidas en variedad de modelos y versiones. Para saber exactamente cuál fue la que tuve, me disfracé de investigador, no podía quedarme con esa duda.
				</p>
				<p>Leyendo características, viendo imágenes y asociando fechas de lanzamiento, estoy casi completamente seguro de que fue la versión de tamaño y costo reducidos del Atari 2600, apodada como Atari 2600 Jr.</p>
                <p className='atarijr-paragraph'>Sí, con esa inicié mi aventura gamer, durante la <span className="bold-italic">segunda generación de consolas</span>.</p>
				<p className="centered-text">
                    <Image
                        className='box-shadow'
                        src="/imgs/level1/atari-2600-short-rainbow.jpg"
                        alt="Atari 2600 Short Rainbow image"
                        width={564}
                        height={564}
                    />
				</p>
				<p>Ésta salió al mercado en 1986 y creo que sería, en términos modernos, como la versión "Slim" de la 2600. Como puede verse en la imagen de arriba, hubo 3 modelos disponibles de ella: "Short rainbow", "Long rainbow" y "Black" (irlandesa). Exprimiendo mi memoria hasta su límite, me decanto por la que está al frente de todas, la Short rainbow:</p>
				<p className="centered-text">
                    <Image
                        className='box-shadow'
                        src="/imgs/level1/atari-2600-short-rainbow-and-joysticks.png"
                        alt="Atari 2600 Short Rainbow and Joysticks image"
                        width={1020}
                        height={767}
                    />
				</p>
				<p className="centered-text">
                    <Image
                        className='box-shadow'
                        src="/imgs/level1/atari-2600-jr.-(short-rainbow).jpg"
                        alt="Atari 2600 Short Rainbow Jr. image"
                        width={960}
                        height={540}
                    />
				</p>
				<p>Ésta tiene todos los detalles que busco: negra y achatada en el frente, una franja gris en el centro, los mandos exactamente iguales a los míos, y cuando vi esos botones a cada lado de la ranura para los cartuchos... Mi mente viajó al pasado y sentí que veía desde los ojos de mi yo niño, prendiendo y apagando la consola, reseteándola o seleccionando juegos... Es increíble lo que una imagen puede hacer.</p>
				<p>Ahora, para poder recordar muchos de los juegos que para esos años me cautivaron y que hicieron tan feliz al niño Manuel, tuve que buscar varios videos recopilatorios en YouTube. Te dejaré los links en la sección de referencias.</p>
				<p>Para resumirte mi experiencia, voy a compartirte los que más bonitas memorias traen a mi mente:</p>
				<p className="atari-games__container">
                    <Image
                        src="/imgs/level1/adventure.jpg"
                        alt="adventure game cover"
                        width={192}
                        height={262}
                    />
                    <Image
                        src="/imgs/level1/bank-heist.webp"
                        alt="bank heist game cover"
                        width={743}
                        height={1023}
                    />
                    <Image
                        src="/imgs/level1/barnstorming.jpg"
                        alt="barnstorming game cover"
                        width={250}
                        height={344}
                    />
                    <Image
                        src="/imgs/level1/berzerk.jpg"
                        alt="berzerk game cover"
                        width={564}
                        height={774}
                    />
                    <Image
                        src="/imgs/level1/Bobby_is_Going_Home.png"
                        alt="bobby is going home game cover"
                        width={269}
                        height={371}
                    />
                    <Image
                        src="/imgs/level1/bowling.jpg"
                        alt="bowling game cover"
                        width={564}
                        height={786}
                    />
                    <Image
                        src="/imgs/level1/boxing.jpg"
                        alt="boxing game cover"
                        width={236}
                        height={322}
                    />
                    <Image
                        src="/imgs/level1/chopper-command.png"
                        alt="chopper command game cover"
                        width={600}
                        height={817}
                    />
                    <Image
                        src="/imgs/level1/crackpots.jpg"
                        alt="crackpots game cover"
                        width={236}
                        height={322}
                    />
                    <Image
                        src="/imgs/level1/enduro-green.jpg"
                        alt="enduro game cover"
                        width={197}
                        height={256}
                    />
                    <Image
                        src="/imgs/level1/fire-fighter.jpg"
                        alt="fire fighter game cover"
                        width={564}
                        height={766}
                    />
                    <Image
                        src="/imgs/level1/fishing-derby.jpg"
                        alt="fishing derby game cover"
                        width={466}
                        height={658}
                    />
                    <Image
                        src="/imgs/level1/frogger.jpg"
                        alt="frogger game cover"
                        width={192}
                        height={263}
                    />
                    <Image
                        src="/imgs/level1/frogs-and-flies.jpg"
                        alt="frogs and flies game cover"
                        width={500}
                        height={682}
                    />
                    <Image
                        src="/imgs/level1/frostbite-celeste.jpg"
                        alt="frostbite game cover"
                        width={564}
                        height={779}
                    />
                    <Image
                        src="/imgs/level1/Gopher.jpg"
                        alt="gopher game cover"
                        width={271}
                        height={369}
                    />
                    <Image
                        src="/imgs/level1/ice-hockey.jpg"
                        alt="ice hockey game cover"
                        width={365}
                        height={500}
                    />
                    <Image
                        src="/imgs/level1/Karate.png"
                        alt="karate game cover"
                        width={256}
                        height={354}
                    />
                    <Image
                        src="/imgs/level1/keystone-kapers.jpg"
                        alt="keystone kapers game cover"
                        width={192}
                        height={263}
                    />
                    <Image
                        src="/imgs/level1/mazeCraze2600.jpg"
                        alt="maze craze game cover"
                        width={597}
                        height={825}
                    />
                    <Image
                        src="/imgs/level1/mouse-trap.jpg"
                        alt="mouse trap game cover"
                        width={564}
                        height={792}
                    />
                    <Image
                        src="/imgs/level1/outlaw.jpg"
                        alt="outlaw game cover"
                        width={933}
                        height={1280}
                    />
                    <Image
                        src="/imgs/level1/pitfall!.jpg"
                        alt="pitfall! game cover"
                        width={192}
                        height={262}
                    />
                    <Image
                        src="/imgs/level1/river-raid.jpg"
                        alt="river raid game cover"
                        width={564}
                        height={810}
                    />

                    <Image
                        src="/imgs/level1/Seaquest.jpg"
                        alt="Seaquest game cover"
                        width={268}
                        height={373}
                    />
                    <Image
                        src="/imgs/level1/sneak-and-peek.jpg"
                        alt="sneak n'peek game cover"
                        width={564}
                        height={767}
                    />
                    <Image
                        src="/imgs/level1/spiderman-atari2600.jpg"
                        alt="spiderman game cover"
                        width={191}
                        height={265}
                    />
                    <Image
                        src="/imgs/level1/superman.jpg"
                        alt="superman game cover"
                        width={540}
                        height={741}
                    />
                    <Image
                        src="/imgs/level1/tacscan-atari-2600-1.jpg"
                        alt="tac-scan game cover"
                        width={557}
                        height={800}
                    />
                    <Image
                        src="/imgs/level1/Worm_War_I_cover.jpg"
                        alt="worm war I game cover"
                        width={271}
                        height={368}
                    />
				</p>
				<p>Fueron muchas las horas de juego junto a este tan amado aparato... ¡Ey! ¡Sabía que escribiendo este artículo aflorarían más recuerdos! ¡Volvamos al pasado!</p>
			</article>
            <div className='past'>
                <article className="article3">
                    <Image
                        className="boxer"
                        src="/imgs/level1/pixel-boxer.png"
                        alt="pixel boxer img"
                        width={59}
                        height={107}
                    />
                    <p>Me veo jugando por años hasta que incluso los joysticks se rompieron, las palancas se salieron de su lugar, también los botones. Podía ver los componentes metálicos internos del mando. Con tal de continuar "matando fiebre" (así decimos en Venezuela cuando jugamos algo por mucho tiempo), llegué a jugar apretando fuerte esos contactos internos con mis dedos y así seguirle dando vida a los personajes en pantalla...</p>
                    <p>Recuerdo mayormente haber jugado en solitario, mi hermana tendría 3 años en ese momento y mi hermano aún no existía.</p>
                    <p>
                        <Image
                            className="boxing-atari"
                            src="/imgs/level1/boxing-atari.gif"
                            alt="boxing atari gif"
                            width={372}
                            height={224}
                        />
                        La anécdota más divertida que tengo es estar jugando al boxeo con otro niño en mi habitación.
                    </p>
                    <p>Yo escogí al peleador negro y mi amigo al blanco, y en un momento en que comencé a oprimir el botón rápidamente para golpear, tuve la suerte de que mi personaje atrapó al otro en una seguidilla de rectos de izquierda y derecha a la nariz que terminaron con la pelea.</p>
                    <div>
                        <Image
                            className="boxer-woman"
                            src="/imgs/level1/boxer-woman-removebg-preview.png"
                            alt="Woman Boxing"
                            width={500}
                            height={500}
                        />
                        <p>Todo era risas en la habitación mientras mi madre me aupaba como si se tratara de una pelea por el campeonato mundial de peso completo.</p>
                    </div>
                    <p>Pero nada dura para siempre, así que ya era hora de darle descanso al fiel y destartalado compañero de juegos y hacer lugar para mi siguiente experiencia gaming.</p>
                    <p className='centered-text bonus-container'>
                        <Image
                            className="bonus"
                            src="/imgs/level1/bonus.png"
                            alt="bonus img"
                            width={541}
                            height={250}
                        />
                    </p>
                    <p>Como nota adicional, un par de años más tarde, a la edad de 8 aproximadamente, mi mejor amigo era un niño que vivía diagonal a casa de mis papás, él tendría 6 años.</p>
                    <p>Recuerdo que en una oportunidad, de las taaantas que visité su casa, sus 2 hermanas y hermano mayores estaban en una de las habitaciones jugando con un aparto conectado al televisor y me invitaron a participar.</p>
                    <p>Solo me pidieron que tratara de adivinar la palabra secreta que estaba en la pantalla, representada con sus letras inicial y final y, entre éstas, tantas líneas como letras faltantes tenía la palabra. Ellos me daban una sola pista relacionada con la palabra.</p>
                    <p>Esta anécdota es también bastante divertida para mí, porque aquellos adolescentes no podían creer que un niño les adivinara cada una de las palabras secretas que se inventaban.</p>
                    <p>Cada nueva vez me decían que saliera de la habitación, a la cocina o cualquier lugar lejano, y luego de escribir la palabra secreta me invitaban de regreso y me daban la pista. Todas y cada una de las veces adiviné bien. Recuerdo las risas y la incredulidad de todos, jajaja. ¡Qué bonitos recuerdos!</p>
                    <p>Al igual que con mi consola propia, sentí la necesidad de averiguar cuál fue esta otra que usé en mi infancia, así que inicié un nuevo trabajo detectivesco.</p>
                </article>
            </div>
			
			<article className="article4">
                <Image
                    className="frogs"
                    src="/imgs/level1/frogs.png"
                    alt="pixel frogs img"
                    width={87}
                    height={69}    
                />
				<p>Por casualidad, hace pocos años recuperé el contacto con aquel vecino, él se mudo de vuelta a la misma casa diagonal a la de mi papá y obtuve su número telefónico. Entonces, ahora pude aprovechar la oportunidad para preguntarle a qué jugamos aquella vez.</p>
				<p>Él sí que lo recuerda perfectamente, claro, era su consola, la consola familiar. Así que ahora puedo decir que durante la segunda generación de consolas también usé la Magnavox Odissey<sup>2</sup>, fabricada por Magnavox (filial de Philips) en 1978, y 1 de sus juegos.</p>
				<p className="centered-text">
                    <Image
                        className="magnavoxodyssey2 box-shadow"
                        src="/imgs/level1/magnavoxodyssey2.jpg"
                        alt="Magnavox Odyssey2 picture"
                        width={300}
                        height={305}    
                    />
				</p>
				<p>Sin embargo, no recuerda los nombres de todos los juegos que tenían, solo mencionó que poseían "como 4 cartuchos", entre los cuales estaban "el de letras, uno de carritos y Pac-Man".</p>
				<p>Así que, para dar con el nombre del videojuego que me interesa, tuve que investigar, y créeme que no fue fácil encontrar un buen video recopilatorio que mostrara todo el catálogo de la consola para reconocer ese juego en específico al mirarlo. Anoté varios sospechosos, pero ninguno era el buscado.</p>
				<p>Luego, entrando en distintas páginas, conseguí un video review de un cartucho 3 en 1, donde el presentador se concentraba en uno solo de ellos, llamado Matchmaker! Jugó un poco e incluso mostró las intrucciones del juego, explicadas en el manual que traía el cartucho.</p>
				<p className="centered-text">
                    <Image
                        src="/imgs/level1/matchmaker.png"
                        alt="3 in 1 videogame"
                        width={933}
                        height={524}    
                    />
				</p>
				<p className="centered-text">
                    <Image
                        src="/imgs/level1/matchmaker-manual.png"
                        alt="Matchmaker! manual"
                        width={937}
                        height={526}    
                    />
				</p>
				<p>Por mera coincidencia, cuando mostraba dicho manual pasando sus páginas, vi vagamente una imagen que me pareció familiar, retrocedí y adelanté varias veces el video hasta que conseguí detenerlo en un cuadro donde estuviera legible el nombre de ese segundo videojuego.</p>
				<p className="centered-text">
                    <Image
                        src="/imgs/level1/buzzword-manual.png"
                        alt="Buzzword! manual"
                        width={934}
                        height={525}    
                    />
				</p>
				<p>Busqué un gameplay con ese nombre y... ¡Sí! ¡Ese es el juego que buscaba! Su nombre es: Buzzword!</p>
				<p className="buzzword-gameplay__container centered-text">
                    <Image
                        src="/imgs/level1/buzzword-gameplay-2.png"
                        alt="Buzzword! gameplay picture"
                        width={999}
                        height={485}    
                    />
                    <Image
                        src="/imgs/level1/buzzword-gameplay-3.png"
                        alt="Buzzword! gameplay picture"
                        width={976}
                        height={478}    
                    />
				</p>
				<p>Te dejo el enlace a su gameplay en la sección de referencias.</p>
				<p>Por lo visto, cada letra correcta que se elija aparecerá en la parte de arriba y cada incorrecta en la de abajo, teniendo 8 oportunidades para fallar. Los "admins" del juego eran los familiares de mi amigo, yo solo me dedicaba a decir letras y palabras, así que no sé exactamente cómo funcionaba la interacción entre el teclado y el videojuego.</p>
				<p>Esta consola, por cierto, es la sucesora de la legendaria Magnavox Odissey, considerada como la primera videoconsola de sobremesa de la historia en la industria, lanzada en 1972.</p>
				<p className="centered-text">
                    <Image
                        src="/imgs/level1/Magnavox-Odyssey-Console.png"
                        alt="Magnavox Odyssey"
                        width={1920}
                        height={973}    
                    />
				</p>
			</article>
		</section>
        <Router 
                text1="INICIO"
                link1="/"
                text2="LEVEL 2"
                link2="/levels/level2"
            />
    </main>
    <Footer/>
    </>
  )
}
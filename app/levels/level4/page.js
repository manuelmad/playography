import Image from 'next/image';
import Link from 'next/link';
import './level4.css';

import Router from '@/app/components/Router/Router';
import Footer from '@/app/components/Footer/Footer';

export default function Level4() {
    return(
        <>
        <main>
            <section>
                <h2>LEVEL 4: Un poco más de maquinitas y un gran golpe de suerte.</h2>
                <article className='past'>
                    <p>Ya a mediados de los '90, comienza lo que en mi opinión fue uno de los puntos de inflexión más fuertes en la industria. Inicia la <span className="bold-italic">quinta generación de consolas</span> trayendo consigo los gráficos en 3D que tanto nos asombraron y emocionaron. A mis 16 y 17 años, cursando los últimos 2 años del bachillerato, seguía sin poder tener una videoconsola propia, así que continué visitando los gaming centers, principalmente, para seguir jugando mi saga favorita del momento: Mortal Kombat Trilogy y Mortal Kombat 4 en la PlayStation original.</p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level4/mk-trilogy.jpg"
                            alt="mk trilogy img"
                            width={1250}
                            height={735}    
                        />
                    </p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level4/mk4.jpg"
                            alt="mk 4 img"
                            width={581}
                            height={253}    
                        />
                    </p>
                    <p>En menor medida, también aprovechaba los encuentros para estudiar con los mismos compañeros de estudio de siempre. Dos de ellos tenían la Nintendo 64 y vivían en casas contiguas, recuerdo jugar un poco al Super Mario 64, y mucho al Wave Race 64.</p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level4/mario64.jpg"
                            alt="mario 64 img"
                            width={1024}
                            height={717}    
                        />
                    </p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level4/wave-race-64.webp"
                            alt="wave race 64 img"
                            width={1280}
                            height={720}    
                        />
                    </p>
                    <p>Pero, sin duda alguna, el juego que más disfrutábamos en esas jornadas de "estudio" era el GoldenEye 007, en su modo multijugador. Por lo general éramos 4 compañeros y pasábamos horas acribillándonos entre nosotros. Los dos que poseían consolas tenían una clara ventaja sobre nosotros, los 2 que no, pero poco a poco fuimos equilibrando las batallas hasta que se volvió bastante reñido y divertido.</p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level4/GoldenEye_007.jpg"
                            alt="goldeneye 007 cover img"
                            width={1200}
                            height={877}    
                        />
                    </p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level4/goldeneye-007-multiplayer.jpeg"
                            alt="goldeneye 007 multiplayer img"
                            width={665}
                            height={416}    
                        />
                    </p>
                    <p>En una oportunidad, otro nuevo compañero de estudios me prestó su N64 con varios juegos, y pude probar algunos con mi hermano (quien tendría 10 años para el momento), como por ejemplo Mario Party, Mario Kart 64 y Pokémon Stadium.</p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level4/mario-party-1.webp"
                            alt="mario party img"
                            width={638}
                            height={394}    
                        />
                    </p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level4/mario-kart-64.jpg"
                            alt="mario kart 64 img"
                            width={640}
                            height={480}    
                        />
                    </p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level4/pokemon-stadium.jpg"
                            alt="pokemon stadium img"
                            width={564}
                            height={389}    
                        />
                    </p>
                    <p>Recuerdo que este último nos causó bastantes dolores de cabeza cuando llegábamos a un punto donde había que enfrentarse a un entrenador que tenía un Raichu con el poder surf 😵 😰 😣 😡.</p>
                    <p>Si conoces más o menos acerca de las debilidades y fortalezas de los Pokémon por su tipo, entonces sabes lo problemático que eso puede llegar a ser.</p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level4/raichu-surf.gif"
                            alt="raichu surf gif"
                            width={640}
                            height={360}    
                        />
                    </p>
                    <p>También pude, ahora sí, terminar completamente el Super Mario 64.</p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level4/super-mario-64-bowser-fight.jpg"
                            alt="super mario 64 final boss"
                            width={900}
                            height={506}    
                        />
                    </p>
                    <p>Creo que el juego que más disfrutamos mi hermano y yo fue el Ken Griffey Jr.'s Slugfest, ¡muchas lágrimas derramadas!, tanto de risa como de rabia jajaja. Yo solía ganar las partidas por mi condición de ser más experimentado a los mandos, hasta que mi hermano descubrió que los Seattle Mariners, con Ken Griffey Jr. en su roster, estaban muuuy rotos 😣.</p>
                    <p>Se acabó mi felicidad y empezó la suya, un partido tras otros me derrotó fácilmente sin importar qué equipo yo eligiera. ¡En serio! Él podía tener sus ojos cerrados y hacer swing en el momento que quisiera, Ken Griffey se encargaría de sacarla del parque todas las veces 😤. Los demás bateadores de los Mariners no estaban tan rotos, pero seguían siendo mejores que cualquiera de otro equipo.</p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level4/Ken_Griffey_Jr.'s_Slugfest_cover.png"
                            alt="ken griffey jr's slugfest cover"
                            width={381}
                            height={261}    
                        />
                    </p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level4/ken-griffey-atbat.jpg"
                            alt="ken griffey jr at bat img"
                            width={480}
                            height={360}    
                        />
                    </p>
                    <p>Luego de graduarme del bachillerato en 1998, empecé a estudiar Ingeniería de Petróleo y; entre los hechos de que mis antiguos compañeros estudiaron carreras distintas, que invertía mucho tiempo yendo a clases en la universidad y estudiando, y que no contaba con un buen poder adquisitivo; dejé de jugar tan frecuentemente. Y así pasaron varios años, bastante desconectado de mi hobby.</p>
                    <p>No es sino hasta principios de los 2000, cuando me hice novio de mi actual esposa, que pude retomar mi afición sin haberlo planeado (el golpe de suerte). Luego de más o menos 2 años de relación, sería entonces en el 2003, sus padres compraron una PSone (una versión “Slim” de la original). Yo tendría 22 años en ese momento y ella 19.</p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level4/psone.png"
                            alt="PSone img"
                            width={800}
                            height={311}    
                        />
                    </p>
                    <p>Al principio no usaba la consola, pero a medida que crecía la confianza familiar, su hermanita de 11 años me iba involucrando más en sus cosas y, en los años posteriores, fui su principal proveedor de juegos de PSone, por lo que empezamos todos a jugar mucho. Recuerdo que frente a la casa de mis padres había un vendedor de CD's de todo tipo: películas, series, música y videojuegos de PS1. El señor siempre tenía una gran variedad de títulos. Si no tenía el que yo buscaba, anotaba el nombre en su libreta y en pocos días podía pasarlo buscando. ¡Gracias por tanto apoyo!, señor Gary.</p>
                    <p>Se me hace incontable la cantidad de títulos que jugamos, buenos y malos, sin piedad ni contemplación para con la pobre consolita, jajaja. Aquí algunos de los que más recuerdo y disfrutamos:</p>
                    <p className='psone-games__container'>
                        <Image
                            src="/imgs/level4/alone.jpg"
                            alt="alone in the dark cover img"
                            width={564}
                            height={576}
                        />
                        <Image
                            src="/imgs/level4/bugs-lost-in-time.jpg"
                            alt="bugs bunny: lost in time cover img"
                            width={480}
                            height={470}
                        />
                        <Image
                            src="/imgs/level4/crash-bandicoot.jpg"
                            alt="crash bandicoot cover img"
                            width={563}
                            height={557}
                        />
                        <Image
                            src="/imgs/level4/crash-bash.jpg"
                            alt="crash bash cover img"
                            width={500}
                            height={500}
                        />
                        <Image
                            src="/imgs/level4/crash-team-racing.jpg"
                            alt="crash team racing cover img"
                            width={564}
                            height={571}
                        />
                        <Image
                            src="/imgs/level4/dexters-lab.jpg"
                            alt="dexter's laboratory cover img"
                            width={564}
                            height={528}
                        />
                        <Image
                            src="/imgs/level4/disneys-102-dalmatians.jpg"
                            alt="disney's 102 dalmatians cover img"
                            width={480}
                            height={470}
                        />
                        <Image
                            src="/imgs/level4/disneys-monsters-inc.jpg"
                            alt="disney's monsters inc. cover img"
                            width={385}
                            height={387}
                        />
                        <Image
                            src="/imgs/level4/disneys-emperor.jpg"
                            alt="disney's the emperor's new groove cover img"
                            width={500}
                            height={496}
                        />
                        <Image
                            src="/imgs/level4/disneys-tarzan.jpg"
                            alt="disney's tarzan cover img"
                            width={564}
                            height={567}
                        />
                        <Image
                            src="/imgs/level4/driver.jpg"
                            alt="driver cover img"
                            width={472}
                            height={474}
                        />
                        <Image
                            src="/imgs/level4/driver-2.jpg"
                            alt="driver 2 cover img"
                            width={425}
                            height={421}
                        />
                        <Image
                            src="/imgs/level4/harry-potter-chamber.jpg"
                            alt="harry potter and the chamber of secrets cover img"
                            width={564}
                            height={558}
                        />
                        <Image
                            src="/imgs/level4/harry-potter-stone.jpg"
                            alt="harry potter and the sorcerer's stone cover img"
                            width={500}
                            height={500}
                        />
                        <Image
                            src="/imgs/level4/sheep-raider.jpg"
                            alt="looney toons sheep raider cover img"
                            width={500}
                            height={500}
                        />
                        <Image
                            src="/imgs/level4/medal-of-honor.webp"
                            alt="medal of honor cover img"
                            width={264}
                            height={266}
                        />
                        <Image
                            src="/imgs/level4/metal-gear-solid.jpg"
                            alt="metal gear solid cover img"
                            width={484}
                            height={484}
                        />
                        <Image
                            src="/imgs/level4/parasite-eve-ii.jpg"
                            alt="parasite eve II cover img"
                            width={564}
                            height={545}
                        />
                        <Image
                            src="/imgs/level4/resident-evil.jpg"
                            alt="resident evil cover img"
                            width={564}
                            height={552}
                        />
                        <Image
                            src="/imgs/level4/re2.jpg"
                            alt="resident evil 2 cover img"
                            width={564}
                            height={538}
                        />
                        <Image
                            src="/imgs/level4/re3.jpg"
                            alt="resident evil 3 cover img"
                            width={564}
                            height={561}
                        />
                        <Image
                            src="/imgs/level4/silent-hill.jpg"
                            alt="silent hill cover img"
                            width={564}
                            height={564}
                        />
                        <Image
                            src="/imgs/level4/spyro.jpg"
                            alt="spyro cover img"
                            width={563}
                            height={507}
                        />
                        <Image
                            src="/imgs/level4/tomba2.jpg"
                            alt="tomba 2 cover img"
                            width={256}
                            height={255}
                        />
                        <Image
                            src="/imgs/level4/millionare.jpg"
                            alt="who wants to be a millionare? cover img"
                            width={564}
                            height={569}
                        />
                    </p>
                    <p>Como pueden ver en ese listado, fui muy influenciado por la niña, jajaja. Pero gracias a ella pude disfrutar de muchos buenos juegos que de otro modo no hubiese probado.</p>
                    <p>Resulta curioso que jugué alguna segunda entrega de una saga sin tener conocimiento de la primera 🤔, como por ejemplo con Parasite Eve y Tomba... Pero bueno, así se dio y fue igualmente disfrutable.</p>
                    <p>También jugué muchas de las entregas de FIFA que eran lanzadas al mercado anualmente.</p>
                    <p>De verdad fueron momentos mágicos jugando tanta variedad y por tantos años.</p>
                    <p>Creo que los juegos que más disfruté, personalmente, fueron Yu-Gi-Oh! Forbidden Memories y Tony Hawk's Pro Skater 2.</p>
                    <p>¡Qué emocionante era intentar obtener todas las cartas existentes! Para ese entonces no tenía ni idea de que era imposible, jajaja. Hoy en día sé que algunas de las cartas solo estaban disponibles a través de la PocketStation, dispositivo que nunca se comercializó fuera de Japón. Y terminar el juego también supuso un gran reto para todos, nos pasábamos el control de una mano a otra para ver quién lo lograría.</p>
                    <p>Lo duro es esa última seguidilla de enemigos que hay que derrotar sin poder guardar partida entre duelos, que te salgan mejores cartas que a todos tus rivales de manera consecutiva parecía imposible. Pero bueno, farmeando un poco a rivales específicos, comprando algunas cartas con starchips y, por supuesto, con mucha suerte, lo pudimos conseguir.</p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level4/yugioh.jpg"
                            alt="yu gi oh cover"
                            width={564}
                            height={564}    
                        />
                    </p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level4/free-duel.jpg"
                            alt="yu gi oh free duel img"
                            width={644}
                            height={481}    
                        />
                    </p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level4/YuGiOh-Forbidden-Memories-gameplay.jpg"
                            alt="yu gi oh gameplay img"
                            width={1920}
                            height={1080}    
                        />
                    </p>
                    <p>Este juego me gustó tanto que, incluso años depués de jugarlo en la consola, lo jugué en una laptop (sin saber siquiera que existían los emuladores, solo instalé un ejecutable que conseguí en internet) para intentar infructuosamante obtener todas las cartas.</p>
                    <p>Y... Ahora... Qué puedo decir de Tony Hawk... ¡Por Dios santo! ¡Qué maravilla de juego! Jajaja. Encadenar combos, realizar tareas, cumplir misiones, la música, sus controles, mecánicas, escenarios, desbloqueables, gameplay... En fin, ¡fue perfecto!</p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level4/tony-hawks-pros2.jpg"
                            alt="tony hawk's pro skater cover"
                            width={564}
                            height={561}    
                        />
                    </p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level4/tony-hawks-gameplay.jpg"
                            alt="tony hawk's pro skater gameplay img"
                            width={550}
                            height={309}    
                        />
                    </p>
                    <p>
                        <Image
                            className="ps1fat"
                            src="/imgs/level4/ps1fat.png"
                            alt="ps1 fat img"
                            width={1280}
                            height={587}    
                        />
                        Este juego lo disfruté con mi hermano, cuando un muy buen amigo que conocí en un gimnasio nos prestó su PlayStation original por varias semanas. ¡Qué buenos momentos!</p>
                </article>
                <article>
                    <p>Lamentablemente, durante esta generación no pude disfrutar mucho del catálogo de la consola de Nintendo, mi compañía favorita, ni de ninguna otra máquina (creo que ni sabía que existían otras en ese momento, como la Atari Jaguar o la Sega Saturn), pero en la actualidad me he dedicado a enmendar de la manera que he podido esos “pendientes” del pasado. Más adelante les contaré al respecto.</p>
                    <p>Para este momento ya había iniciado la <span className="bold-italic">sexta generación de consolas</span>, pero por las mismas razones que antes expuse, pasó casi desapercibida para mí. Prácticamente jugué con las de quinta durante la sexta generación.</p>
                </article>
                <Router 
                    text1="LEVEL 3"
                    link1="/levels/level3"
                    text2="LEVEL 5"
                    link2="/levels/level5"
                />
            </section>
        </main>
        <Footer/>
        </>
    );
}
import Image from 'next/image';
import Link from 'next/link';
import './level9.css';

export default function Level9() {
    return(
        <main>
            <section>
                <h2>LEVEL 9: Poniéndome al día.</h2>
                <article>
                    <p>¡Llegamos al presente!</p>
                    <p>
                        <Image
                            className="revenge"
                            src="/imgs/level9/revenge.jpg"
                            alt="revenge img"
                            width={563}
                            height={469}    
                        />
                        Después de tantos años desconectado de este hermoso mundo de los videojuegos, llegaba la hora de despertar y al fin desquitarme, jajaja. No sé si tendré el tiempo suficiente para lograr el cometido que me propuse, lo que sí sé es que me voy a divertir intentándolo.</p>
                    <p>He aquí, en orden alfabético, la lista de cada saga que quiero completar. Claro, hay sagas demasiado extensas y en esos casos traté de evitar algunos de sus spin-off's, o aquellos títulos que no me parecían disfrutables según mis gustos.</p>
                    <p>Puedes ver el detalle de cualquiera haciendo clic sobre ella.</p>
                    <p className='list-container'>
                        <ul>
                            <li>Crash.</li>
                            <li>Dark Souls.</li>
                            <li>Devil May Cry.</li>
                            <li>Donkey Kong.</li>
                            <li>Ghost 'n Goblins.</li>
                            <li>God of War.</li>
                            <li>Kirby.</li>
                            <li>Mega Man.</li>
                            <li>Metal Slug.</li>
                            <li>Monkey Island.</li>
                            <li>Monster Hunter.</li>
                            <li>Mortal Kombat.</li>
                            <li>Ninja Gaiden.</li>
                            <li>Pokémon.</li>
                            <li>Punch Out.</li>
                            <li>Resident Evil.</li>
                            <li>Silent Hill.</li>
                            <li>Simpsons.</li>
                            <li>Sonic.</li>
                            <li>Street Fighter.</li>
                            <li>Super Mario Bros.</li>
                            <li>The Legend of Zelda.</li>
                            <li>Uncharted.</li>
                            <li>Wario.</li>
                            <li>Yoshi.</li>
                            <li>Yu-Gi-Oh!</li>
                        </ul>
                    </p>
                    <p>Te sorprendería saber que nunca en mi vida había jugado ni un solo título de algunas de estas sagas 😰.</p>
                    <p>De aquellas sagas que sí jugué, voy decidiendo según me apetezca si rejugaré o no el(los) juego(s) que ya había probado hace años.</p>
                    <p>Investigando acerca de todos estos juegos, he aprendido muchas cosas que me sorprendieron. Si ves algún título que no conocías y que te genera curiosidad, puedes escribirme a cualquiera de mis redes y con gusto debatiremos al respecto.</p>
                    <p>Hay juegos que dejé dentro de las listas pero, al jugarlos por un buen rato, me di cuenta de que no son de mi gusto y los abandoné.</p>
                    <p>Trato siempre de jugar cada saga en orden cronológico, según el lanzamiento de sus juegos. Diría que es una forma de atestiguar cómo ha evolucionado cada una de ellas y la industria en general. Intento dedicarle 1 ó 2 horas al día al videojuego de turno, aunque no todos los días me es posible usar las consolas. Sin embargo, no pasa un día sin que al menos juegue algunos minutos en mi smartphone, actualmente disfruto jugando Mario Kart Tour o en ocasiones Super Mario Run.</p>
                    <p>No suelo jugar 2 videojuegos seguidos dentro de la misma saga, para mantener la variedad. Por lo general, solo termino la historia principal y no me concentro mucho en desbloqueables muy difíciles o tareas secundarias. Tampoco reinicio la entrega cuando existe la opción de hacerlo con un nuevo personaje desbloqueado o con una nueva dificultad. Solo si el juego me gustó demasiado, puedo hacer la excepción en alguno de esos apartados.</p>
                    <p>¡Ah! Y con los juegos retro que emulo con RetroArch, muchas veces recurro a los “save states” para pasar tramos muy difíciles, no quiero estancarme por varios días o semanas en un solo título. Por cierto, eso me hizo recordar que los juegos retro son muuuucho más difíciles que los actuales, ¡ya terminen de aceptar esa realidad!</p>
                    <p>Y, hablando de retro, estos son los juegos que rejugué solo por el mero placer de la nostalgia, todos de la NES:</p>
                    <p className='list-container'>
                        <ul>
                            <li>Conquest of the Crystal Palace.</li>
                            <li>Gremlins 2: The New Batch.</li>
                            <li>Jackal.</li>
                            <li>Tiny Toons Adventures.</li>
                            <li>Urban Champion.</li>
                        </ul>
                    </p>
                    <p>Por supuesto, aún tengo varios juegos retro en mente para rejugar, tanto de NES como de Atari 2600.</p>
                    <p>Como aún me falta terminar algunos juegos más antes de llegar a aquellos que salieron para Switch, en esta consola me he dedicado a jugar los videojuegos que, según los analistas y críticos que suelo mirar, son los mejores y que no pertenecen a las sagas de mi proyecto. Por supuesto, dichos juegos tienen que ser de mi agrado al verlos y también deben adaptarse a mi economía.</p>
                    <p>Entre los juegos que he probado en la híbrida de Nintendo están:</p>
                    {/* <p>Colocar imágenes
                        <img src="">
                    </p> */}
                    <p>Y hago una mención especial a un juego que me hizo sentir como hacía rato no me había sentido. Sus gráficos, jugabilidad, controles, historia, escenarios, exploración y desbloqueo de ítems y mundos... ¡Qué pedazo de juego es Hollow Knight! No estoy descubriendo el agua tibia diciendo esto acerca del que es considerado como el mejor juego indie y mejor Metroidvania de la historia, pero no puedo dejar de expresar que al jugarlo me demostró que no es exagerado el estatus que se le ha impuesto, ¡merecidísimo!</p>
                    <p>Éste es uno de los juegos que me ha hecho salir de las reglas que antes expuse. Le invertí más de 60 horas para lograr el <span className="yellow">xxx%</span>, eso es altísimo para mis estándares y más teniendo en cuenta que mi prioridad es terminar la gran cantidad de juegos que forman parte de mis listas. ¡Muy recomendado!</p>
                    <p>Todos los juegos que he adquirido en la Switch los tengo en formato digital, a excepción de uno que compré en físico mientras escribía esta juegografía. Este juego es el Luigi's Mansion 3, aprovechando que ya jugué las dos primeras entregas y que tuve un dinerillo extra disponible para el momento.</p>
                    {/* <p>Colocar imágenes
                        <img src="">
                    </p> */}
                </article>
            </section>
        </main>
    );
}
'use client';

import Image from 'next/image';
import Link from 'next/link';
import './level9.css';

import Router from '@/app/components/Router/Router';

import { useState } from 'react';
import Footer from '@/app/components/Footer/Footer';
export let currentSagaId;

export default function Level9() {

    const [game, setGame] = useState(0);

    const changeGame = (name)=> {
        currentSagaId = name;
        setGame(name);
        console.log(currentSagaId);
    }
    return(
        <>
        <main>
            <section className='level9-section'>
                <h2 className='level9-h2'>LEVEL 9: Poniéndome al día.</h2>
                <article className='first-article'>
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
                    <p>Puedes ver el detalle de cualquiera de ellas haciendo clic sobre la que te interese.</p>
                    <div className='list-container first-list'>
                        <Image
                            className="bg"
                            src="/imgs/level9/bg.jpg"
                            alt="background img"
                            width={564}
                            height={1002}    
                        />
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
                            <li><Link onClick={()=>changeGame("PO")} href="/levels/level9/table">Punch Out.</Link></li>
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
                    </div>
                    <p>Te sorprendería saber que, aunque son todas famosas, nunca en mi vida había jugado ni un solo título de algunas de estas sagas 😰, como es el caso de Pokémon. Por cierto, en este caso particular de los Pocket Monsters, sus primeros juegos de Game Boy no me agradaron mucho y preferí jugar los remakes que lanzaron en posteriores consolas.</p>
                    <p>De aquellas sagas que sí jugué, voy decidiendo según me apetezca si rejugaré o no el(los) juego(s) que ya había probado hace años.</p>
                    <p className='write-paragraph'>
                        <Image
                            className="write"
                            src="/imgs/level9/Writing.png"
                            alt="writing img"
                            width={2000}
                            height={2000}    
                        />
                        Investigando acerca de todos estos juegos, he aprendido muchas cosas que me sorprendieron. Si ves algún título que no conocías y que te genera curiosidad, puedes escribirme a cualquiera de mis redes y con gusto debatiremos al respecto.</p>
                    <p className='x-paragraph'>
                        <Image
                            className="x"
                            src="/imgs/level9/x.jpg"
                            alt="mad x img"
                            width={340}
                            height={360}    
                        />
                        Hay juegos que dejé dentro de las listas pero, al jugarlos por un buen rato, me di cuenta de que no son de mi gusto y los abandoné. De estos han sido pocos, según recuerdo.</p>
                    <p className='evolution-paragraph'>
                        <Image
                            className="evolution"
                            src="/imgs/level9/evolution.jpg"
                            alt="evolution img"
                            width={549}
                            height={413}    
                        />
                        Trato siempre de jugar cada saga en orden cronológico, según el lanzamiento de sus juegos. Diría que es una forma de atestiguar cómo ha evolucionado cada una de ellas y la industria en general. Intento dedicarle 1 ó 2 horas al día al videojuego de turno, aunque no todos los días me es posible usar las consolas. Sin embargo, no pasa un día sin que al menos juegue algunos minutos en mi smartphone, actualmente disfruto jugando Mario Kart Tour o en ocasiones Super Mario Run.</p>
                    <p>No suelo jugar 2 videojuegos seguidos dentro de la misma saga, para mantener la variedad. Por lo general, solo termino la historia principal y no me concentro mucho en desbloqueables muy difíciles o tareas secundarias. Tampoco reinicio la entrega cuando existe la opción de hacerlo con un nuevo personaje desbloqueado o con una nueva dificultad. Solo si el juego me gustó demasiado, puedo hacer la excepción en alguno de esos apartados.</p>
                    <p>¡Ah! Y con los juegos retro que emulo con RetroArch, muchas veces recurro a los "save states" para pasar tramos muy difíciles, no quiero estancarme por varios días o semanas en un solo título. Por cierto, eso me hizo recordar que los juegos retro son muuuucho más difíciles que los actuales, ¡ya terminen de aceptar esa realidad!</p>
                    <p>Hablando de retro, estos son los juegos que rejugué solo por el mero placer de la nostalgia, todos de la NES:</p>
                    <div className='list-container second-list'>
                        <Image
                            className="nes"
                            src="/imgs/level9/nes-bg.png"
                            alt="nes img"
                            width={616}
                            height={385}    
                        />
                        <ul>
                            <li>Conquest of the Crystal Palace.</li>
                            <li>Gremlins 2: The New Batch.</li>
                            <li>Jackal.</li>
                            <li>Tiny Toons Adventures.</li>
                            <li>Urban Champion.</li>
                        </ul>
                    </div>
                    <p>Por supuesto, aún tengo varios otros en mente para rejugar, tanto de NES como de Atari 2600.</p>
                    <p>Como aún me falta terminar algunos juegos más antes de llegar a aquellos que salieron para Switch, en esta consola me he dedicado a jugar los videojuegos que, según los analistas y críticos que suelo mirar, son los mejores y que no pertenecen a las sagas de mi proyecto. Por supuesto, dichos juegos tienen que ser de mi agrado al verlos y también deben adaptarse a mi economía.</p>
                    <p>Entre los juegos que he probado en la híbrida de Nintendo están:</p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level9/celeste.jpg"
                            alt="celeste img"
                            width={544}
                            height={304}    
                        />
                    </p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level9/cup-head.jpg"
                            alt="cuphead img"
                            width={564}
                            height={358}    
                        />
                    </p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level9/gris.png"
                            alt="gris img"
                            width={1137}
                            height={632}    
                        />
                    </p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level9/hades.png"
                            alt="hades img"
                            width={1600}
                            height={800}    
                        />
                    </p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level9/hollow-knight.jpg"
                            alt="hollow knight img"
                            width={564}
                            height={317}    
                        />
                    </p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level9/limbo.jpg"
                            alt="limbo img"
                            width={430}
                            height={242}    
                        />
                    </p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level9/pokemon-quest.png"
                            alt="pokemon quest img"
                            width={1128}
                            height={619}    
                        />
                    </p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level9/sky.jpg"
                            alt="sky img"
                            width={2000}
                            height={1000}    
                        />
                    </p>
                    <p>Hice una excepción con Pokémon Quest, adelantando ese juego en la lista, porque es gratuito y me sirvió para probar todo en la consola, fue mi primer juego en la Switch 🤩.</p>
                    <p>El juego de Sky también es gratuito y solo lo descargué y probé por un rato. Me llamó la atención porque leí que está desarrollado por los mismos creadores de Journey (PS3). En algún momento lo terminaré, pero no está en mis prioridades justo ahora.</p>
                    <p>El otro en esta lista que aún no he terminado es Cuphead. Lo llevo al 82% en la historia principal, pero es bastante difícil y necesito cierto nivel de paciencia que justo ahora no tengo 🥴. Éste sí lo tengo entre mis pendientes y más pronto que tarde le daré la estocada final.</p>
                    <p>Haré una mención especial a uno de estos juegos, que me hizo sentir como hacía rato no me había sentido. Sus gráficos, jugabilidad, controles, historia, escenarios, exploración y desbloqueo de ítems y mundos... ¡Qué pedazo de juego es Hollow Knight! No estoy descubriendo el agua tibia diciendo esto acerca del que es considerado como el mejor juego indie y mejor Metroidvania de la historia, pero no puedo dejar de expresar que al jugarlo me demostró que no es exagerado el estatus que se le ha impuesto, ¡merecidísimo!</p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level9/hollow-knight.png"
                            alt="hollow knight img"
                            width={960}
                            height={541}    
                        />
                    </p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level9/hollow-knight-2.jpg"
                            alt="hollow knight img"
                            width={564}
                            height={317}    
                        />
                    </p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level9/hollow-knight-3.jpg"
                            alt="hollow knight img"
                            width={564}
                            height={282}    
                        />
                    </p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level9/hollow-knight-4.jpg"
                            alt="hollow knight img"
                            width={563}
                            height={317}    
                        />
                    </p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level9/hollow-knight-5.jpg"
                            alt="hollow knight img"
                            width={563}
                            height={314}    
                        />
                    </p>
                    <p>Éste es uno de los juegos que me ha hecho salir de las reglas que antes expuse. Le invertí más de 62 horas para lograr el 100% (según leí, se puede llevar hasta 112%). Eso es toda una hazaña para mis estándares y más teniendo en cuenta que mi prioridad es terminar la gran cantidad de juegos que forman parte de mis listas. ¡Muy recomendado! Luego decidiré si quiero aumentar ese porcentaje.</p>
                    <p>Todos los juegos que he adquirido en la Switch los tengo en formato digital, a excepción de uno que compré en físico mientras escribía esta juegografía. Este juego es el Luigi's Mansion 3, aprovechando que ya jugué las dos primeras entregas de GameCube y 3DS, y que tuve un dinerillo extra disponible para el momento.</p>
                    <p className='centered-text'>
                        <Image
                            src="/imgs/level9/luigis-mansion-3.jpg"
                            alt="luigi's mansion 3 img"
                            width={1231}
                            height={1970}    
                        />
                    </p>
                    <p>Lo que he jugado hasta ahora de esta última entrega de las aventuras terroríficas de Luigi ha sido bastante entretenido. Siento que hay muchas más cosas ocultas que en las anteriores entregas. Se puede interactuar con casi cualquier cosa del escenario y eso aumenta mucho el tiempo de exploración. Este juego es el causante de que esté pasando los días con sueño 😴, debido a las veladas nocturnas que le estoy dedicando.</p>
                    <p>Ahora, hazme el honor de acompañarme a la siguiente sección para la despedida.</p>
                    <p className='centered-text'>
                        <Image
                            className='bye-img'
                            src="/imgs/level9/mario-bye.png"
                            alt="mario img"
                            width={249}
                            height={388}    
                        />
                    </p>
                </article>
                <Router 
                    text1="LEVEL 8"
                    link1="/levels/level8"
                    text2=" PENSAMIENTOS FINALES"
                    link2="/finalThoughts"
                />
            </section>
        </main>
        <Footer/>
        </>
    );
}
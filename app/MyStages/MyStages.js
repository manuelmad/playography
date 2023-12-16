import Image from 'next/image';
import Link from 'next/link';
import './mystages.css';

export default function MyStages(props) {
    return(
        <>
            <section className="my-stages">
                <article>
                    <div>
                        <h2 className='h2-mystages'>MIS ETAPAS GAMER</h2>
                    </div>
                </article>
                <article>
                    <div>
                        <h3>LEVEL 1: El despertar de una afición.</h3>
                        <p className="img-container press-start_container">
                        <Image
                            src="/imgs/press-start.jpg"
                            alt="press start"
                            width={563}
                            height={462}    
                        />
                        </p>
                        <p>Cuando antes escribí “desde que tengo uso de razón”, ¡lo decía de forma literal!</p>
                        <p>Estaba muy joven cuando tuve mi primera consola y los recuerdos del uso que le di son pocos y no muy claros...</p>
                        <p>O quizás solo debería esforzarme más para extraerlos de mi subconsciente o dondequiera que estén... Bueno, a lo mejor muchos de esos recuerdos irán saliendo a flote mientras escribo todo esto...</p>
                        <p>
                            <Link href="/levels/level1">Leer más...</Link>
                        </p>				
                    </div>
                </article>
                <article>
                    <div>
                        <h3>LEVEL 2: Crece el afecto.</h3>
                        <p className="img-container">
                            <Image
                                src="/imgs/health-bar.png"
                                alt="Health bar"
                                width={627}
                                height={587}    
                            />
                        </p>
                        <p>Por increíble que parezca, de esta nueva consola no recuerdo la experiencia de cuando me la dieron. Puedo calcular que ocurrió cuando tenía entre 8 y 9 años de edad (1989 - 1990) y para no andar con muchos rodeos, directamente diré que fue una...</p>
                        <p>
                            <Link href="/levels/level2">Leer más...</Link>
                        </p>
                    </div>
                </article>
                <article>
                    <div>
                        <h3>LEVEL 3: Mi periodo en "las maquinitas".</h3>
                        <p className="img-container">
                            <Image
                                src="/imgs/game-room.jpg"
                                alt="Game Room"
                                width={564}
                                height={564}    
                            />
                        </p>
                        <p>A finales de los '80 e inicios de los '90, llega la <span className="bold-italic">cuarta generación de consolas</span> a Norte América. Cuando empiezo el bachillerato en 1994 con 13 años de edad, tengo por primera vez acceso a una consola de...</p>
                        <p>
                            <Link href="/levels/level3">Leer más...</Link>
                        </p>
                    </div>
                </article>
                <article>
                    <div>
                        <h3>LEVEL 4: Un poco más de maquinitas y un gran golpe de suerte.</h3>
                        <p className="img-container">
                            <Image
                                src="/imgs/lucky-gamer.jpg"
                                alt="Lucky Gamer"
                                width={549}
                                height={393}    
                            />
                        </p>
                        <p>Ya a mediados de los '90, comienza lo que en mi opinión fue uno de los puntos de inflexión más fuertes en la industria. Inicia la <span className="bold-italic">quinta generación de consolas</span> trayendo consigo los gráficos en 3D que tanto nos asombraron y emocionaron...</p>
                        <p>
                            <Link href="/levels/level4">Leer más...</Link>
                        </p>
                    </div>
                </article>
                <article>
                    <div>
                        <h3>LEVEL 5: Juego pausado.</h3>
                        <p className="img-container">
                            <Image
                                src="/imgs/pause.png"
                                alt="paused game"
                                width={300}
                                height={168}    
                            />
                        </p>
                        <p>La <span className="bold-italic">sexta generación de consolas</span>, ya mencionada en mi etapa anterior, arribó a finales de los '90 e inicio de los 2000. Como comenté, ésta pasó casi por debajo de la mesa para mí...</p>
                        <p>
                            <Link href="#">Leer más...</Link>
                        </p>
                    </div>
                </article>
                <article>
                    <div>
                        <h3>LEVEL 6: Un tímido reinicio.</h3>
                        <p className="img-container">
                            <Image
                                src="/imgs/never-quit.jpg"
                                alt="Gamers never quit"
                                width={564}
                                height={564}    
                            />
                        </p>
                        <p>La <span className="bold-italic">séptima generación de consolas</span> ya estaba en marcha desde 2005-2006. Yo venía con la inercia de mi floja etapa anterior y, luego de algunos años, mi esposa vio la oportunidad de encarrilarme de nuevo al mundo gamer...</p>
                        <p>
                            <Link href="#">Leer más...</Link>
                        </p>
                    </div>
                </article>
                <article>
                    <div>
                        <h3>LEVEL 7: Algo bueno dentro de lo malo.</h3>
                        <p className="img-container">
                            <Image
                                src="/imgs/controllers.jpg"
                                alt="Emulators"
                                width={313}
                                height={161}    
                            />
                        </p>
                        <p>Entre 2019 y 2020 comienza la pandemia debida al COVID-19. Durante esos momentos de aislamiento, había que recurrir a muchas formas de entretenimiento para poder mantener la cordura a niveles más o menos decentes. Fue en este periodo que descubrí la existencia de algo en mi opinión maravilloso...</p>
                        <p>
                            <Link href="#">Leer más...</Link>
                        </p>
                    </div>
                </article>
                <article>
                    <div>
                        <h3>LEVEL 8: Comienza la redención.</h3>
                        <p className="img-container">
                            <Image
                                src="/imgs/gamer-on.jpg"
                                alt="Gamer mode on"
                                width={564}
                                height={564}    
                            />
                        </p>
                        <p>Después de pasar varios meses como adicto jugando en emuladores a cuanto juego se me venía a la mente, decidí organizarme un poco. Me determiné a jugar las sagas de videojuegos que me gustaron en el pasado, todas esas que comencé desde su primer producto y que no pude continuar, o que comencé con algún juego intermedio sin saber que hubo juegos antes y después de ese.</p>
                        <p>
                            <Link href="#">Leer más...</Link>
                        </p>
                    </div>
                </article>
                <article>
                    <div>
                        <h3>LEVEL 9: Poniéndome al día.</h3>
                        <p className="img-container">
                            <Image
                                src="/imgs/gamer-forever.jpg"
                                alt="Gamer forever"
                                width={564}
                                height={564}    
                            />
                        </p>
                        <p>¡Llegamos al presente!</p>
                        <p>Después de tantos años desconectado de este hermoso mundo de los videojuegos, llegaba la hora de despertar y al fin desquitarme, jajaja. No sé si tendré el tiempo suficiente para lograr el cometido que me propuse, lo que sí sé es que me voy a divertir intentándolo.</p>
                        <p>
                            <Link href="#">Leer más...</Link>
                        </p>
                    </div>
                </article>
		    </section>
        </>
    );
}
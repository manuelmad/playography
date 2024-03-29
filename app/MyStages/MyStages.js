import Image from 'next/image';
import Link from 'next/link';
import './mystages.css';

export default function MyStages() {
    return(
        <>
            <section className="my-stages">
                <Image
                    src="/imgs/gamer-history.png"
                    alt="gamer book img"
                    width={666}
                    height={376}
                    className='book'
                />
                <article className='gamer-stages-h2__container'>
                    <div>
                        <h2 className='h2-mystages'>MIS ETAPAS GAMER</h2>
                    </div>
                </article>
                <article id='level1' className='level1-container'>
                    <div>
                        <h3>LEVEL 1: El despertar de una afición.</h3>
                        <p className="img-container press-start_container">
                            <Image
                                src="/imgs/press-start.png"
                                alt="press start"
                                width={551}
                                height={462}
                            />
                        </p>
                        <p>Cuando antes escribí "desde que tengo uso de razón", ¡lo decía de forma literal!</p>
                        <p>Estaba muy joven cuando tuve mi primera consola y los recuerdos del uso que le di son pocos y no muy claros...</p>
                        <p>
                            <Link className='stages-link' href="/levels/level1">Leer más...</Link>
                        </p>				
                    </div>
                </article>
                <article id='level2' className='level2-container'>
                    <div>
                        <h3>LEVEL 2: Crece el afecto.</h3>
                        <p className="img-container health-bar__container">
                            <Image
                                src="/imgs/health-bar.png"
                                alt="Health bar"
                                width={516}
                                height={483}
                            />
                        </p>
                        <p>Por increíble que parezca, de esta nueva consola no recuerdo la experiencia de cuando me la dieron. Puedo calcular que ocurrió cuando tenía entre 8 y 9 años de edad...</p>
                        <p>
                            <Link href="/levels/level2">Leer más...</Link>
                        </p>
                    </div>
                </article>
                <article id='level3' className='level3-container'>
                    <div>
                        <h3>LEVEL 3: Mi periodo en "las maquinitas".</h3>
                        <p className="img-container game-room__container">
                            <Image
                                src="/imgs/game-room.jpg"
                                alt="Game Room"
                                width={564}
                                height={564}
                            />
                        </p>
                        <p>A finales de los '80 e inicios de los '90, llega la <span className="bold-italic">cuarta generación de consolas</span> a Norte América. Cuando empiezo el bachillerato con 13 años de edad, tengo por primera vez acceso a...</p>
                        <p>
                            <Link href="/levels/level3">Leer más...</Link>
                        </p>
                    </div>
                </article>
                <article id='level4' className='level4-container'>
                    <div>
                        <h3>LEVEL 4: Un poco más de maquinitas y un gran golpe de suerte.</h3>
                        <p className="img-container lucky-gamer__container">
                            <Image
                                src="/imgs/lucky-luigi.jpg"
                                alt="Lucky Gamer"
                                width={800}
                                height={830}
                            />
                        </p>
                        <p>Ya a mediados de los '90, comienza lo que en mi opinión fue uno de los puntos de inflexión más fuertes en la industria. Inicia la <span className="bold-italic">quinta generación de consolas</span>...</p>
                        <p>
                            <Link href="/levels/level4">Leer más...</Link>
                        </p>
                    </div>
                </article>
                <article id='level5' className='level5-container'>
                    <div>
                        <h3>LEVEL 5: Juego pausado.</h3>
                        <p className="img-container pause-container">
                            <Image
                                src="/imgs/pause.png"
                                alt="paused game"
                                width={300}
                                height={168}
                            />
                        </p>
                        <p>La <span className="bold-italic">sexta generación de consolas</span>, ya mencionada en mi etapa anterior, arribó a finales de los '90 e inicio de los 2000. Como comenté, ésta pasó casi por debajo de la mesa para mí...</p>
                        <p>
                            <Link href="/levels/level5">Leer más...</Link>
                        </p>
                    </div>
                </article>
                <article id='level6' className='level6-container'>
                    <div>
                        <h3>LEVEL 6: Un tímido reinicio.</h3>
                        <p className="img-container never-quit">
                            <Image
                                src="/imgs/never-quit.png"
                                alt="Gamers never quit"
                                width={500}
                                height={500}
                            />
                        </p>
                        <p>La <span className="bold-italic">séptima generación de consolas</span> ya estaba en marcha. Yo venía con la inercia de mi floja etapa anterior y, luego de algunos años, mi esposa vio la oportunidad de encarrilarme de nuevo al mundo gamer...</p>
                        <p>
                            <Link href="/levels/level6">Leer más...</Link>
                        </p>
                    </div>
                </article>
                <article id='level7' className='level7-container'>
                    <div>
                        <h3>LEVEL 7: Algo bueno dentro de lo malo.</h3>
                        <p className="img-container controllers">
                            <Image
                                src="/imgs/manycharacters.jpg"
                                alt="Emulators"
                                width={564}
                                height={670}
                            />
                        </p>
                        <p>Entre 2019 y 2020 comienza la pandemia debida al COVID-19. Fue en este periodo que descubrí la existencia de algo en mi opinión maravilloso...</p>
                        <p>
                            <Link href="/levels/level7">Leer más...</Link>
                        </p>
                    </div>
                </article>
                <article id='level8' className='level8-container'>
                    <div>
                        <h3>LEVEL 8: Comienza la redención.</h3>
                        <p className="img-container gamer-on__container">
                            <Image
                                src="/imgs/gamer-on.png"
                                alt="Gamer mode on"
                                width={500}
                                height={500}
                            />
                        </p>
                        <p>Después de pasar varios meses como adicto jugando a cuanto juego se me venía a la mente, decidí organizarme un poco. Me determiné a jugar las sagas de videojuegos que me gustaron en el pasado...</p>
                        <p>
                            <Link href="/levels/level8">Leer más...</Link>
                        </p>
                    </div>
                </article>
                <article id='level9' className='level9-container'>
                    <div>
                        <h3>LEVEL 9: Poniéndome al día.</h3>
                        <p className="img-container gamer-forever">
                            <Image
                                src="/imgs/gamer-forever.jpg"
                                alt="Gamer forever"
                                width={564}
                                height={564}
                            />
                        </p>
                        <p>¡Llegamos al presente!</p>
                        <p>Después de tantos años desconectado de este hermoso mundo de los videojuegos, llegaba la hora de despertar y al fin desquitarme...</p>
                        <p>
                            <Link href="/levels/level9">Leer más...</Link>
                        </p>
                    </div>
                </article>
                <article id='finalThoughts' className='finalthoughts-container'>
                    <div>
                        <h3>FINAL LEVEL: Pensamientos Finales.</h3>
                        <p className="img-container thinking-dk">
                            <Image
                                src="/imgs/thinking-dk.png"
                                alt="thinking dk"
                                width={2495}
                                height={2702}
                            />
                        </p>
                        <p>¡Gracias por acompañarme...!</p>
                        <p>Fue un largo camino desde mi infancia, cuando me regalaron aquella Atari a mis 5 años, hasta el día de hoy...</p>
                        <p>
                            <Link href="/finalThoughts">Leer más...</Link>
                        </p>
                    </div>
                </article>
		    </section>
        </>
    );
}
import Image from 'next/image';
import Link from 'next/link';
import './finalThoughts.css';
import { press_start_2P } from '../layout';

export default function finalThoughts() {
    return(
        <main>
            <section>
                <h2>PENSAMIENTOS FINALES</h2>
                <article>
                    <p>
                        <Image
                            className="time"
                            src="/imgs/finalThoughts/valuable-time.jpg"
                            alt="valuable time img"
                            width={626}
                            height={417}    
                        />
                        Si has llegado hasta aquí, quiero agradecerte por invertir esos valiosos minutos de tu tiempo en leer esta historia que escribí. Mi intención inicial era recordar con mejor detalle los mejores momentos de mi vida gamer, pero luego fui abrazando la idea de que sería bonito compartirla con personas que disfrutan del mismo hobby que yo, y quizás incluso animarlas a que hagan algo parecido con éste u otro pasatiempo que guarden con cariño en su día a día.</p>
                    <p>Fue un largo camino desde mi infancia, cuando me regalaron aquella Atari a mis 5 años, hasta el día de hoy.</p>
                    <p>
                        <Image
                            className="memories"
                            src="/imgs/finalThoughts/memories.png"
                            alt="good memories img"
                            width={225}
                            height={225}    
                        />
                        Hacer esta “Autojuegografía” (¿¡WTF!?) me trajo muchos esplendidos recuerdos, ignoraba que muchas de esas escenas tan hermosas estaban aún allí, en algún rincón de mi ocupada mente, ¡qué bueno que pudieron asomarse de nuevo!</p>
                    <p>En ocasiones vivimos el día a día sin detenernos a pensar de dónde venimos, sin recordar a esas personas que, aunque ya no las frecuentamos o que sencillamente ya no habitan este mundo, formaron parte importante de nuestro crecimiento y contribuyeron a nuestra felicidad en algunos periodos de nuestras vidas.</p>
                    <p>Por cierto, toda esta historia la escribí porque los videojuegos son mi pasatiempo preferido, como ya lo he dicho, pero la compartí con ustedes en forma de página web porque actualmente estoy formándome como Programador Web (sí, una tercera profesión...), así que utilicé algunas de las habilidades que he adquirido para elaborar cada detalle de ella.</p>
                    <p>Espero haya sido de su agrado y estoy abierto a sugerencias, consejos o incluso a colaborar en proyectos de cualquier tipo en los que pueda aportar algo. En la sección de referencias les dejo el enlace hacia mi página web, donde podrás ver algunos de los proyectos que he desarrollado y obtener mi información de contacto.</p>
                    <p>Uno de los proyectos que allí encontrarás es, ¡por supuesto!, un pequeño videojuego, jejeje. Solo necesitarás el teclado para jugarlo. Puedes encontrarlo en la sección “PROJECTS” de mi página, pero de todas maneras te dejaré el link directo en la sección de referencias.</p>
                    <p>Gracias de nuevo por acompañarme en este viaje, ojalá este relato te anime a hacer cosas entretenidas para ti o para alguien más, o al menos que hayas podido transportarte a tu propio pasado y tener recuerdos placenteros de cualquier evento con tus seres queridos.</p>
                    <p>¡Hasta luego!</p>
                    <p className='the-end__container'>
                        <h2 className={press_start_2P.className}>THE</h2>
                        <h2 className={press_start_2P.className}>END</h2>
                    </p>
                </article>
                <article className='last-article'>
                    <div className="arrows-container">
                        <Link href="/levels/level9">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                            </svg>
                            LEVEL 9
                        </Link>
                        <Link href="/references">
                            REFERENCIAS
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                        </Link>
                    </div>
                </article>
            </section>
        </main>
    );
}
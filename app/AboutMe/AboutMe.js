import Image from 'next/image';
import './aboutme.css';


export default function AboutMe() {
    return(
        <>
            <section id='aboutMe' className="about-me">
                <article className="intro-container">
                    <div className="intro">
                        <Image
                            src="/imgs/past-present-mario-removebg-preview.png"
                            alt="past and present Mario"
                            width={337}
                            height={509}    
                        />
                        <h2 className='h2-aboutme'>¿QUIÉN SOY?</h2>
                        <p className='p1'>¡Hola! Me llamo Manuel y soy fanático de los videojuegos desde que tengo uso de razón.</p>
                        <p className='p2'>He creado este espacio como una forma de expresar ese gusto y compartir mis pensamientos con personas afines.</p>
                        <p className='p3'>La idea principal es contar mis experiencias desde que me inicié como gamer y hablar acerca de los retos que me he propuesto en los tiempos por venir.</p>
                        <p className='p4'>Confieso que no he sido un jugador tan dedicado como las personas famosas que sigo en las redes, cuyos canales y cuentas están llenos de análisis y opiniones acerca de infinidad de consolas y videojuegos.</p>
                        <p className='p5'>Pero toda esa información que comparten la disfruto un montón y me anima a seguir explorando, aprendiendo, compartiendo y pues... ¡¡Jugando!!</p>
                    </div>
                </article>
            </section>
        </>
    );
}
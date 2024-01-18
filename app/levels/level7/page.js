import Image from 'next/image';
import Link from 'next/link';
import './level7.css';

import Router from '@/app/components/Router/Router';
import Footer from '@/app/components/Footer/Footer';

export default function Level7() {
    return(
        <>
        <main>
            <section className='level7-section'>
                <h2 className='level7-h2'>LEVEL 7: Algo bueno dentro de lo malo.</h2>
                <div className='past'>
                    <article className='first-article'>
                        <p>Entre 2019 y 2020 comienza la pandemia debida al COVID-19, ya saben de sobra todo lo que esto causó, incluidos meses y luego años de confinamiento en nuestros hogares. Durante esos momentos de aislamiento, había que recurrir a muchas formas de entretenimiento para poder mantener la cordura a niveles más o menos decentes. Fue en este periodo que descubrí la existencia de algo en mi opinión maravilloso: ¡los emuladores de consolas!</p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level7/fbalpha.jpg"
                                alt="final burn alpha logo img"
                                width={1280}
                                height={720}
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level7/MAME.webp"
                                alt="MAME logo img"
                                width={450}
                                height={150}
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level7/nebula-emulator.jpg"
                                alt="nebula logo img"
                                width={515}
                                height={181}
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level7/winkawaks.jpg"
                                alt="winkawaks logo img"
                                width={292}
                                height={88}
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level7/nestopia.png"
                                alt="nestopia logo img"
                                width={608}
                                height={113}
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level7/virtuanes.jpg"
                                alt="virtuanes logo img"
                                width={872}
                                height={236}
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level7/kega.png"
                                alt="kega fusion logo img"
                                width={920}
                                height={430}
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level7/zsnes.png"
                                alt="zsnes logo img"
                                width={362}
                                height={99}
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level7/snes9x.webp"
                                alt="snes9x logo img"
                                width={450}
                                height={157}
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level7/visual-boy-advance-logo.png"
                                alt="visualboy advance logo img"
                                width={512}
                                height={310}
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level7/vbjin.jpg"
                                alt="vbjin logo img"
                                width={640}
                                height={480}
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level7/project64.webp"
                                alt="project64 logo img"
                                width={335}
                                height={118}
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level7/desmume-emulator.png"
                                alt="desmume logo img"
                                width={768}
                                height={432}
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level7/dolphin.jpg"
                                alt="dolphin logo img"
                                width={1280}
                                height={545}
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level7/epsxe.png"
                                alt="epsxe logo img"
                                width={256}
                                height={256}
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level7/xebra.jpg"
                                alt="xebra logo img"
                                width={348}
                                height={120}
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level7/ppsspp.webp"
                                alt="ppsspp logo img"
                                width={335}
                                height={118}
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level7/retroarch.png"
                                alt="retroarch logo img"
                                width={1980}
                                height={400}
                            />
                        </p>
                        <p>Usé los arriba mostrados y muchos otros más, tanto en mi laptop como en mi tablet y smartphone. También usé un programa para poder utilizar los controles de mi PS3 en la laptop. Mi espíritu gamer había estado dormido, amarrado por muchos años y por varias razones, pero en mayor medida y más recientemente por las ocupaciones diarias del trabajo y el hogar.</p>
                        <p>Para el momento en que me topé con toda la información acerca de los emuladores, mi mente ya estaba libre de muchas de esas responsabilidades.</p>
                        <p>
                            <Image
                                className="happy-gamer"
                                src="/imgs/level7/happy-gamer.png"
                                alt="hapy gamer img"
                                width={612}
                                height={408}
                            />
                            Eso me permitió sentir la alegría, asombro y fascinación de tener ante mí la posibilidad de disfrutar de nuevo del mundo de los videojuegos de una forma tan sencilla. Comencé a instalar los programas en mi laptop y descargar las roms de todos los juegos retro que recordaba y los que no había jugado. Pronto me di cuenta que tenía a mi disposición un sinfín de juegos, mientras más jugaba más me emocionaba.</p>
                        <p>Emulé desde juegos de Arcade hasta juegos de quinta generación de consolas. Calculo que jugué alrededor de 200 videojuegos 😳. De la sexta y séptima generaciones, solo logré emular eficientemente las portátiles. Vale la pena mencionar que pude jugar con dificultad algunos de GameCube, como Wario World, Luigi's Mansion, Mario Kart Double Dash, Donkey Kong Jungle Beat y Super Mario Sunshine (los 2 últimos último en mi teléfono).</p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level7/dk-jungle-beat.webp"
                                alt="dk jungle beat cover img"
                                width={300}
                                height={420}
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level7/LMansion.webp"
                                alt="luigi's mansion cover img"
                                width={640}
                                height={914}
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level7/double-dash.jpg"
                                alt="mario kart double dash cover img"
                                width={715}
                                height={1000}
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level7/sunshine.jpg"
                                alt="sunshine cover img"
                                width={564}
                                height={800}
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level7/wario-world.jpg"
                                alt="wario world cover img"
                                width={564}
                                height={788}
                            />
                        </p>
                        <p>Aunque logré terminarlos todos, la experiencia no fue muy satisfactoria en términos de jugabilidad, gráficos y sonido, así que no seguí maltratando mis pobres cachivaches con esos emuladores de mayor exigencia.</p>
                        <p>¿Recuerdas que mencioné a Yu-Gi-Oh! Forbidden Memories como uno de mis juegos favoritos? Pues en este momento no perdí oportunidad de intentar obtener todas las cartas 🤩, hasta que aprendí acerca de las imposibles 😐. En ese momento solo decidí aplicar un "cheat" sobre el juego en un emulador para tenerlas todas y saber lo que se siente jugar con ellas, jejeje. Algo que aprendí es que existe una comunidad de "moders", principalmente brasileros, dedicados a desarrollar versiones de este juego pero con la posibilidad de obtener todas las cartas batallando de manera normal a los duelistas. Algunas versiones cuentan con mejores probabilidades de éxito que otras. Incluso han desarrollado secuelas numeradas (por supuesto no oficiales) del juego.</p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level7/fm2.png"
                                alt="forbidden memories 2 img"
                                width={640}
                                height={480}
                            />
                        </p>
                        <p className='centered-text'>
                            <Image
                                src="/imgs/level7/fm3.jpg"
                                alt="forbidden memories 3 img"
                                width={640}
                                height={639}
                            />
                        </p>
                        <p>Te dejaré un enlace relacionado con este tema en la sección de referencias, por si te apetece profundizar más.</p>
                    </article>
                </div>
                <article className='article2'>
                    <Image
                        className="emulators"
                        src="/imgs/level7/emulators.jpg"
                        alt="multi controllers"
                        width={348}
                        height={348}
                    />
                    <p>¡Todas estas experiencias encendieron la llama de nuevo! ¡El gamer en mí había despertado para más nunca volverse a dormir! Comencé a seguir cuentas y canales relacionados con videojuegos en todas las redes sociales, llegó un momento en que ya los emuladores no eran suficiente para mí, aún habían muchas consolas y juegos fuera de mi alcance, y esto me llevó a mi siguiente feliz etapa.</p>
                </article>
                <Router 
                    text1="LEVEL 6"
                    link1="/levels/level6"
                    text2="LEVEL 8"
                    link2="/levels/level8"
                />
            </section>
        </main>
        <Footer/>
        </>
    );
}
import AboutMe from './AboutMe/AboutMe';
import MyStages from './MyStages/MyStages';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <>
      <main>
        <AboutMe/>
        <MyStages/>
      </main>
      <Footer/>
    </>
  )
}

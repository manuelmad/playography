import AboutMe from './AboutMe/AboutMe';
import MyStages from './MyStages/MyStages';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header
        link1="#aboutMe"
        link2="#level1"
        link3="#level2"
        link4="#level3"
        link5="#level4"
        link6="#level5"
        link7="#level6"
        link8="#level7"
        link9="#level8"
        link10="#level9"
        link11="#finalThoughts"
        link12="/references"
      />
      <main>
        <AboutMe/>
        <MyStages/>
      </main>
      <Footer/>
    </>
  )
}

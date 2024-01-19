import AboutMe from './AboutMe/AboutMe';
import MyStages from './MyStages/MyStages';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <AboutMe/>
        <MyStages/>
      </main>
      <Footer/>
    </>
  )
}

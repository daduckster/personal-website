import Head from 'next/head';
import About from './components/About';
import HeroScreen from './components/HeroScreen';
import ProjectsScreen from './components/ProjectsScreen';
import SkillsScreen from './components/SkillsScreen';
import WhyMe from './components/WhyMe';
import styles from '../styles/Home.module.scss';
import Contact from './components/Contact';
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <HeroScreen />
          <SkillsScreen />
        <ProjectsScreen />
        <About />
        <WhyMe />
        <Contact />
      </main>
    </div>
  );
}
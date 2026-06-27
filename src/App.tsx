import { LanguageProvider } from './context/LanguageContext'
import MainLayout from './layouts/MainLayout'
import LoadingScreen from './components/LoadingScreen'
import CursorGlow from './components/CursorGlow'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <LoadingScreen />
      <CursorGlow />
      <MainLayout>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </MainLayout>
    </LanguageProvider>
  )
}

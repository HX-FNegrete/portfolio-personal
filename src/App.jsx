import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <LanguageProvider>
            <div className="antialiased bg-white selection:bg-naranja selection:text-white">
                <Navbar />
                <main>
                    <Hero />
                    <About />
                    <Experience />
                    <Education />
                    <Projects />
                    <Contact />
                </main>
                <Footer />
            </div>
        </LanguageProvider>
    )
}

export default App

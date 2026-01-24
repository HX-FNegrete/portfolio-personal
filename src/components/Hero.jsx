import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ReactGA from 'react-ga4'; // 1. Importar la librería

const Hero = () => {
    const { t } = useLanguage();

    // 2. Función para registrar el evento de descarga
    const handleDownloadClick = () => {
        ReactGA.event({
            category: 'Acciones_Portfolio',
            action: 'Descarga_CV',
            label: 'Francisco_Negrete_CV',
        });
    };

    return (
        <section id="hero" className="min-h-screen flex items-start justify-center bg-gradient-to-br from-white to-gray-50 pt-24 md:pt-32">
            <div className="section-container flex flex-col items-center text-center">
                <div className="animate-fade-in space-y-8 md:space-y-10 max-w-4xl">
                    <h2 className="text-naranja font-medium tracking-wide text-lg uppercase">
                        {t.hero.tagline}
                    </h2>

                    <h1 className="text-5xl md:text-7xl font-bold text-gris-oscuro tracking-tight">
                        {t.hero.greeting} Francisco Negrete
                        <span className="block text-3xl md:text-5xl text-gris-medio mt-4 font-normal">
                            {t.hero.role}
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl text-gris-medio leading-relaxed">
                        {t.hero.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                        <a href="#projects" className="btn-primary">
                            {t.hero.btn_projects}
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>

                        {/* 3. Agregamos el onClick aquí */}
                        <a 
                            href="./cv.pdf" 
                            target="_blank"
                            rel="noopener noreferrer"
                            download="cv.pdf"
                            className="btn-secondary"
                            onClick={handleDownloadClick}
                        >
                            {t.hero.btn_cv}
                            <Download className="ml-2 w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
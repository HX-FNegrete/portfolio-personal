import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { t, language, toggleLanguage } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t.nav.about, href: '#about' },
        { name: t.nav.experience, href: '#experience' },
        { name: t.nav.education, href: '#education' },
        { name: t.nav.projects, href: '#projects' },
        { name: t.nav.contact, href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#" className="font-bold text-2xl text-gris-oscuro">
                            FN<span className="text-naranja">.</span>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gris-oscuro hover:text-naranja px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Language Switcher */}
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center space-x-1 text-gris-oscuro hover:text-naranja transition-colors font-medium text-sm"
                            aria-label="Toggle language"
                        >
                            <Globe className="w-4 h-4" />
                            <span>{language.toUpperCase()}</span>
                        </button>
                    </div>

                    {/* Mobile menu button and Language Switcher */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center space-x-1 text-gris-oscuro hover:text-naranja transition-colors font-medium text-sm"
                        >
                            <span className="uppercase">{language}</span>
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gris-oscuro hover:text-naranja focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-sm absolute w-full shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-gris-oscuro hover:text-naranja px-3 py-4 rounded-md text-base font-medium text-center border-b border-gray-100 last:border-0"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

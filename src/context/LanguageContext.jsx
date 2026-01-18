import React, { createContext, useContext, useState, useEffect } from 'react';
import translations from '../data/translations.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Try to get language from localStorage, default to 'es'
    const [language, setLanguage] = useState(() => {
        const savedLanguage = localStorage.getItem('language');
        return savedLanguage || 'es';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const t = translations[language];

    // Helper to toggle language
    const toggleLanguage = () => {
        setLanguage(prev => prev === 'es' ? 'en' : 'es');
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

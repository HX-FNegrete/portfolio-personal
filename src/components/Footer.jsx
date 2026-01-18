import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-gray-50 py-12 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-gris-oscuro">
                        Francisco Negrete<span className="text-naranja">.</span>
                    </h3>
                    <p className="text-sm text-gris-medio mt-1">{t.footer.role}</p>
                </div>

                <div className="text-sm text-gris-claro">
                    © {new Date().getFullYear()} {t.footer.rights}
                </div>
            </div>
        </footer>
    );
};

export default Footer;

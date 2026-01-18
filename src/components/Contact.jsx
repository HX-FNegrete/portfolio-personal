import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();

    // Constant links
    const linkedinUrl = "https://linkedin.com/in/fnegrete";
    const githubUrl = "https://github.com/FranciscoNegrete3";

    return (
        <section id="contact" className="bg-white py-20">
            <div className="section-container">
                <div className="bg-gris-oscuro rounded-2xl p-8 md:p-16 text-white overflow-hidden relative">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-naranja/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <div className="grid md:grid-cols-2 gap-12 relative z-10">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                {t.contact.title}
                            </h2>
                            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-sm">
                                {t.contact.description}
                            </p>

                            <div className="space-y-6">
                                <a href={`mailto:${t.contact.email}`} className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group">
                                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-naranja transition-colors">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <span className="text-lg">{t.contact.email}</span>
                                </a>

                                <a href={`tel:${t.contact.phone}`} className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group">
                                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-naranja transition-colors">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <span className="text-lg">{t.contact.phone}</span>
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center space-y-8">
                            <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-naranja/50 transition-colors">
                                <h3 className="text-xl font-bold mb-4">{t.contact.social_title}</h3>
                                <div className="flex gap-4">
                                    <a
                                        href={linkedinUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-naranja transition-colors"
                                    >
                                        <Linkedin className="w-6 h-6" />
                                    </a>
                                    <a
                                        href={githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-naranja transition-colors"
                                    >
                                        <Github className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

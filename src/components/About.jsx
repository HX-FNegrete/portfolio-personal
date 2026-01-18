import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="bg-white py-20">
            <div className="section-container">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2">
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-naranja/10 rounded-full z-0"></div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gris-oscuro relative z-10 mb-6">
                                {t.about.title}
                            </h2>
                        </div>
                        <p className="text-lg text-gris-medio leading-relaxed mb-6">
                            {t.about.p1}
                        </p>
                        <p className="text-lg text-gris-medio leading-relaxed">
                            {t.about.p2}
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 bg-gray-50 p-8 rounded-2xl">
                        <h3 className="text-xl font-bold text-gris-oscuro mb-6">{t.about.skills_title}</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {t.about.skills.map((skill, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <CheckCircle2 className="w-5 h-5 text-naranja" />
                                    <span className="text-gris-medio font-medium">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

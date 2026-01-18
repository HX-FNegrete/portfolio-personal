import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Education = () => {
    const { t } = useLanguage();

    return (
        <section id="education" className="bg-white py-20">
            <div className="section-container">
                <h2 className="text-3xl md:text-4xl font-bold text-gris-oscuro mb-12 text-center">
                    {t.education.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.education.items.map((edu, index) => (
                        <div key={index} className="bg-white border border-gray-100 p-8 rounded-xl hover:border-naranja/50 transition-colors group">
                            <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-naranja/10 transition-colors">
                                <GraduationCap className="w-6 h-6 text-gris-oscuro group-hover:text-naranja" />
                            </div>

                            <h3 className="text-xl font-bold text-gris-oscuro mb-2 min-h-[56px]">
                                {edu.degree}
                            </h3>

                            <div className="text-gris-medio font-medium mb-4">
                                {edu.institution}
                            </div>

                            <div className="flex items-center text-sm text-gris-claro">
                                <Calendar className="w-4 h-4 mr-2" />
                                {edu.year}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;

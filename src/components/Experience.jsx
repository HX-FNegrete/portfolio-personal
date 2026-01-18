import React from 'react';
import { Briefcase } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
    const { t } = useLanguage();

    return (
        <section id="experience" className="bg-gray-50 py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gris-oscuro mb-12 text-center">
                    {t.experience.title}
                </h2>

                <div className="max-w-3xl mx-auto">
                    {t.experience.items.map((job, index) => (
                        <div key={index} className="relative pl-8 md:pl-0">
                            {/* Timeline Line */}
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>

                            <div className={`md:flex items-center justify-between mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Content */}
                                <div className="md:w-[45%] mb-4 md:mb-0 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-lg text-gris-oscuro">{job.title}</h3>
                                    </div>
                                    <div className="text-naranja font-medium mb-2">{job.company}</div>
                                    <p className="text-sm text-gris-claro mb-3">{job.period}</p>
                                    <p className="text-gris-medio text-sm leading-relaxed">
                                        {job.description}
                                    </p>
                                </div>

                                {/* Dot */}
                                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-naranja rounded-full md:-translate-x-1/2 mt-1.5 md:mt-0 border-4 border-white shadow-sm z-10"></div>

                                {/* Spacer for the other side */}
                                <div className="hidden md:block md:w-[45%]"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

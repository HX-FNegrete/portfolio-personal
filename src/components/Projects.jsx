import React from 'react';
import { Github, ExternalLink, BarChart3 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
    const { t } = useLanguage();

    // Placeholder links for now as they are not in translations content yet
    // Assuming the structure matches what we put in translations.json
    // We can add "link" to translations.json if we want them configurable per language, 
    // but usually links are same. For now, I'll assume items in translations don't have links and hardcode them or just use #

    return (
        <section id="projects" className="bg-gray-50 py-20">
            <div className="section-container">
                <h2 className="text-3xl md:text-4xl font-bold text-gris-oscuro mb-4 text-center">
                    {t.projects.title}
                </h2>
                <p className="text-gris-medio text-center mb-12 max-w-2xl mx-auto">
                    {t.projects.subtitle}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.projects.items.map((project, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                            <div className="h-48 bg-gray-200 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                                <BarChart3 className="w-16 h-16 text-gray-400" />
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-gris-oscuro mb-2 group-hover:text-naranja transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gris-medio mb-4 flex-1 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="bg-gray-100 text-gris-oscuro text-xs px-3 py-1 rounded-full font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 mt-auto">
                                    <a href="#" className="flex items-center text-sm font-medium text-gris-oscuro hover:text-naranja transition-colors">
                                        <Github className="w-4 h-4 mr-2" />
                                        {t.projects.btn_code}
                                    </a>
                                    <a href="#" className="flex items-center text-sm font-medium text-gris-oscuro hover:text-naranja transition-colors">
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        {t.projects.btn_demo}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

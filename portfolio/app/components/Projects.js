"use client";
import { useState } from 'react';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: "Site Para Criação de Receitas Saudáveis",
      category: "Web",
      image: "/caradapia.png", 
      description: "Um projeto desenvolvido para a criação de receitas inteligentes com ingredientes que você tem disponivél no momento.",
      tags: ["Web","CSS","React"],
      link: "https://github.com/LettyciaDev/PROJETO-WEB-MOBILE"
    },
    {
      title: "Sistema Para Rastreamento de Animais de Rua",
      category: "Web",
      image: "/logo_patas.jpeg",
      description: "Aplicação Web de Rastreamento de Animais de Rua.",
      tags: ["Figma", "Design", "WEB"],
      link: "https://github.com/Anninhaxs/projeto-aps-rastreamento"
    },
    {
      title: "Aplicativo de Mapeamento Arqueológico",
      category: "Mobile",
      image: "/logo_liceu.jpeg",
      description: "Um aplicativo mobile desenvolvido em Kotlin e Java que permite mapear sítios arqueológicos diretamente a partir de imagens.",
      tags: ["FIGMA", "ANDROID STUDIO", "MOBILE","KOTLIN"],
      link: "https://github.com/joao0cb/Projeto-Coliceu"
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="max-w-6xl mx-auto py-20 px-4">
      {/* Cabeçalho */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-1">My Projects</h2>
        <p className="text-purple-500 text-sm font-medium uppercase tracking-widest opacity-80 mb-8">
          Meus Projetos
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          {['All', 'Mobile', 'Web',].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat 
                ? 'bg-purple-600 text-white border-purple-600' 
                : 'bg-transparent text-gray-400 border border-gray-800 hover:border-purple-500/50'
              } border`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
        {filteredProjects.map((project, index) => (
          <div key={index} className="group bg-[#0f0f0f] border border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all shadow-2xl">
            <div className="h-48 overflow-hidden bg-gray-900">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] uppercase font-bold tracking-tighter text-purple-400 px-2 py-1 bg-purple-500/10 rounded border border-purple-500/20">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a href={project.link} target="_blank" className="text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-semibold transition-all">
                  View Details 🔗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
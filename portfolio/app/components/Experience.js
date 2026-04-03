export default function Experience() {
  const experiences = [
    {
      year: "2024 - Atualmente",
      title: "Estagiária em TI",
      company: "NETMAKE Soluções em Informática",
      description: "Atuação com suporte técnico em hospedagem de sites (cPanel e WHM), auxiliando na administração de contas e na resolução de problemas relacionados a domínios e aplicações web, com experiência prática em servidores Linux.",
    },
    {
      year: "2023 - Atualmente",
      title: "Ciência da Computação",
      company: "Universidade Catolica de Pernambuco",
      description: "Estudante de Ciência da Computação (5º período), com base teórica e prática em programação, algoritmos e fundamentos matemáticos, desenvolvendo habilidades técnicas e consolidando conhecimentos da área.",
    },
    {
      year: "2019-2021",
      title: "Tec. em Desenvolvimento de Sistemas",
      company: "ETE Cyl Gallindo ",
      description: "Formação técnica em Desenvolvimento de Sistemas, com foco em lógica de programação e fundamentos do desenvolvimento de softwares.",
    },
  ];

  return (
    <section id="experience" className="max-w-6xl mx-auto py-20 px-4">
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-white mb-1">Experience & Career </h2>
        <p className="text-purple-500 text-sm font-medium uppercase tracking-widest opacity-80">
          Experiência Profissional e Carreira
        </p>
      </div>

      <div className="relative border-l-2 border-purple-500/20 ml-4 md:ml-10 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-10">
            
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-purple-600 border-4 border-[#050505] shadow-[0_0_10px_rgba(147,51,234,0.5)]"></div>
            
            <span className="inline-block px-3 py-1 rounded-full bg-purple-600/10 border border-purple-500/30 text-purple-400 text-xs font-bold mb-3">
              {exp.year}
            </span>

            <div className="bg-[#0f0f0f] border border-white/5 p-6 rounded-2xl hover:border-purple-500/30 transition-all group">
              <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                {exp.title}
              </h3>
              <p className="text-purple-500/80 text-sm font-medium mb-4 italic">
                at {exp.company}
              </p>
              <p className="text-gray-400 leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default function Skills() {
  const skills = [
    { title: "Programação", items: ["C", "Python", "Lógica de Programação", "PHP","Kotlin","Java"] },
    { title: "Infraestrutura & Sistemas", items: ["cPanel","WHM","Linux","Hospedagem de Sites", "Suporte Técnico"] },
    { title: "Web Intermediário", items: [,"HTML", "CSS", "JavaScript", "React", "Next.js"] },
    
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto py-20 px-4">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-white mb-1">
          Skills & Technologies
        </h2>
        <p className="text-purple-500 text-sm font-medium uppercase tracking-widest opacity-80">
          Habilidades e Tecnologias
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="group bg-[#0f0f0f] border border-white/5 p-8 rounded-2xl hover:border-purple-500/50 transition-all duration-300 shadow-xl"
          >
            <h3 className="text-xl font-semibold text-white mb-6 group-hover:text-purple-400 transition-colors">
              {skill.title}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {skill.items.map((item, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-2 text-xs font-medium text-gray-400 border border-gray-800 rounded-full hover:bg-purple-500/10 hover:border-purple-500/40 hover:text-purple-300 transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
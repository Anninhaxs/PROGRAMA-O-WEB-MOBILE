export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto py-20 px-4">
      <div className="flex flex-col md:flex-row items-center gap-16">
        
        <div className="flex-1 text-left">
          <h2 className="text-4xl font-bold text-white mb-1">About Me</h2>
          <p className="text-purple-500 text-sm font-medium uppercase tracking-widest opacity-80 mb-10">
            Sobre mim
        </p>
        
        

          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Ao longo da minha formação, venho desenvolvendo uma base em programação, algoritmos e fundamentos matemáticos.
            </p>
            <p>
              Além da formação acadêmica, adquiro experiência prática atuando como estagiária em TI, 
              com contato com ambientes reais de hospedagem, suporte técnico e servidores, ampliando minha visão da área.
            </p>
            <p>
             Tenho interesse em aprender, evoluir e compreender melhor as diversas possibilidades dentro da tecnologia,
             buscando constantemente aprimorar minhas habilidades e enfrentar novos desafios.
            </p>
          </div>
        </div>

        <div className="flex-1 flex justify-center relative">
          <div className="absolute top-0 right-10 text-purple-500 text-2xl font-bold opacity-40 animate-pulse">×</div>
          <div className="absolute bottom-10 left-10 text-purple-500 text-4xl font-bold opacity-20 italic">○</div>
          <div className="absolute top-20 -left-5 text-purple-400 text-xl opacity-30">×</div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            
            <img 
              src="/foto.jpg"
              alt="Anna Beatriz"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
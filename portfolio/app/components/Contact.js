export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto py-24 px-4">

      <div className="flex flex-col items-center text-center space-y-12">

        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Let's Work <span className="text-purple-500">Together</span>
          </h2>
          <p className="text-purple-500 text-sm font-medium uppercase tracking-[0.3em] opacity-80">
            Vamos trabalhar juntos
          </p>
        </div>

        <div className="max-w-2xl space-y-8">
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Se você tem algum projeto em mente, quer explorar novas ideias ou até pensar em uma parceria, pode entrar em contato comigo.
            </p>
            <p className="text-purple-500 text-lg md:text-xl leading-relaxed mt-4">
              Vamos conversar!
              </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-white text-sm font-medium">
            <span className="px-4 py-2 bg-purple-500/5 border border-purple-500/20 rounded-full">
              • Web & Mobile
            </span>
            <span className="px-4 py-2 bg-purple-500/5 border border-purple-500/20 rounded-full">
              • System Development
            </span>
            <span className="px-4 py-2 bg-purple-500/5 border border-purple-500/20 rounded-full">
              • Backend
            </span>
          </div>
        </div>

        <div className="pt-8">
          <h4 className="text-purple-400 font-bold mb-8 uppercase text-xs tracking-widest opacity-50">
            Minhas Redes
          </h4>
          <div className="flex flex-wrap justify-center gap-6">

            <a 
              href="https://www.instagram.com/annaxs_h/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-5 bg-[#0f0f0f] border border-white/5 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 group shadow-xl"
            >
              <img 
                src="/icons/instagram.svg" 
                alt="Instagram" 
                className="w-7 h-7 filter invert opacity-60 group-hover:opacity-100 transition-opacity" 
              />
            </a>

            <a 
              href="https://www.linkedin.com/in/annaxs/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-5 bg-[#0f0f0f] border border-white/5 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 group shadow-xl"
            >
              <img 
                src="/icons/linkedin.svg" 
                alt="LinkedIn" 
                className="w-7 h-7 filter invert opacity-60 group-hover:opacity-100 transition-opacity" 
              />
            </a>

            <a 
              href="https://github.com/Anninhaxs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-5 bg-[#0f0f0f] border border-white/5 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 group shadow-xl"
            >
              <img 
                src="/icons/git.svg" 
                alt="GitHub" 
                className="w-7 h-7 filter invert opacity-60 group-hover:opacity-100 transition-opacity" 
              />
            </a>

          </div>
        </div>

        <div className="pt-10">
          <a href="mailto:seuemail@exemplo.com" className="text-gray-500 hover:text-purple-400 text-sm transition-colors border-b border-gray-800 pb-1">
            annabeatriz325067@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
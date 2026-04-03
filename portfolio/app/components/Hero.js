// app/components/Hero.js
export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center pt-24 pb-32 max-w-4xl mx-auto">
      <span className="px-4 py-1.5 rounded-full border border-purple-500/30 text-purple-400 text-xs mb-8 bg-purple-500/10 font-medium">
        Available for new Projects
      </span>

      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
        Hey! , I am <span className="text-purple-500">Anna Beatriz</span>
      </h1>
      
      <h2 className="text-2xl md:text-4xl text-gray-300 font-semibold mb-8">
        Estudante de Ciência da Computação no 5º período.
      </h2>
      
      <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
        Em constante aprendizado, explorando diferentes áreas da tecnologia e aprimorando minhas habilidades na prática.        
      </p>

      <div className="flex flex-col sm:flex-row gap-6">
        <a href="#projects" className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(147,51,234,0.3)] text-center">
          View My Work
          </a>
       </div>
    </section>
  );
}
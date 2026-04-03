// app/components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Logo */}
        <Link href="/" className="text-white font-bold text-xl tracking-tighter">
          Anna <span className="text-purple-500 font-light">Beatriz</span>
        </Link>

        {/* Links de Navegação - Agora visíveis no Mobile também */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 items-center text-[10px] md:text-sm font-medium uppercase tracking-widest text-gray-400">
          <Link href="/#about" className="hover:text-purple-500 transition-colors">About</Link>
          <Link href="/#projects" className="hover:text-purple-500 transition-colors">Projects</Link>
          <Link href="/#contact" className="hover:text-purple-500 transition-colors">Contact</Link>

          {/* Botão do Jogo menor no celular */}
          <Link 
            href="/forca" 
            className="px-3 py-1.5 md:px-5 md:py-2.5 bg-purple-600 text-white md:bg-purple-600/10 md:text-purple-400 border border-purple-500/50 rounded-lg hover:bg-purple-600 hover:text-white transition-all text-[10px] md:text-xs font-bold"
          >
            JOGAR 🎮
          </Link>
        </div>
      </div>
    </nav>
  );
}
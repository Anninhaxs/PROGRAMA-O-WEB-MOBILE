import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link href="/" className="text-white font-bold text-xl tracking-tighter cursor-pointer">
          Anna <span className="text-purple-500 font-light">Beatriz</span>
        </Link>

        <div className="hidden md:flex gap-8 items-center text-sm font-medium uppercase tracking-widest text-gray-400">
          <Link href="/#about" className="hover:text-purple-500 transition-colors duration-300">
            About
          </Link>
          <Link href="/#projects" className="hover:text-purple-500 transition-colors duration-300">
            Projects
          </Link>
          <Link href="/#contact" className="hover:text-purple-500 transition-colors duration-300">
            Contact
          </Link>

          <Link 
            href="/forca" 
            className="px-5 py-2.5 bg-purple-600/10 border border-purple-500/50 text-purple-400 rounded-xl 
                       hover:bg-purple-600 hover:text-white transition-all duration-500 
                       hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-105
                       flex items-center gap-2 font-bold group"
          >
            Jogar Forca 
            <span className="group-hover:animate-bounce">🎮</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
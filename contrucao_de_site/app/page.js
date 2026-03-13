import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-[#0f111a]">
      <div className="bg-[#1a1c2e] p-8 rounded-3xl shadow-2xl border border-purple-900/30 w-full max-w-xs text-center">
        
        <h1 className="text-xl font-semibold text-lavender-100 text-purple-200 mb-8">
          Exercícios
        </h1>
        
        <nav className="flex flex-col gap-3">
          <Link href="/exer1" 
            className="bg-purple-700 hover:bg-purple-600 text-white py-2 px-4 rounded-xl text-sm font-medium transition-all hover:scale-105">
            Exercício 1
          </Link>
          
          <Link href="/exer2" 
            className="bg-purple-500 hover:bg-purple-400 text-white py-2 px-4 rounded-xl text-sm font-medium transition-all hover:scale-105">
            Exercício 2
          </Link>
          
          <Link href="/exer3" 
            className="bg-lavender-600 bg-[#967bb6] hover:bg-[#b19cd9] text-white py-2 px-4 rounded-xl text-sm font-medium transition-all hover:scale-105">
            Exercício 3
          </Link>
          
          <Link href="/exer4" 
            className="bg-[#c3b1e1] hover:bg-[#dcd0ff] text-purple-900 py-2 px-4 rounded-xl text-sm font-medium transition-all hover:scale-105">
            Exercício 4
          </Link>
        </nav>

        <div className="mt-8 pt-4 border-t border-purple-900/20">
            <span className="text-[10px] uppercase tracking-widest text-purple-400/60 font-bold">
                Anninhaxs • 2026
            </span>
        </div>
      </div>
    </main>
  );
}
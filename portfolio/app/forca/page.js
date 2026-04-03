"use client";
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function Forca() {
  const palavras = [
    "REACT", "NEXTJS", "JAVASCRIPT", "TAILWIND", "FIGMA", "CSS", "HTML", 
    "NODEJS", "PYTHON", "GITHUB", "FRONTEND", "BACKEND", "COMPUTACAO",
    "ALGORITMO", "VARIAVEL", "COMPONENTE", "DATABASE", "TYPESCRIPT",
    "ESTAGIO", "PROJETO", "SOFTWARE", "HARDWARE", "INTERNET", "BROWSER",
    "DESENVOLVEDOR", "ESTRUTURA", "LOGICA", "REQUISICAO", "API", "MOBILE"
  ];

  const [palavra, setPalavra] = useState("");
  const [letrasUsadas, setLetrasUsadas] = useState([]);
  const [erros, setErros] = useState(0);
  const limiteErros = 6;

  const iniciarJogo = () => {
    const sorteada = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavra(sorteada.toUpperCase());
    setLetrasUsadas([]);
    setErros(0);
  };

  useEffect(() => { iniciarJogo(); }, []);

  const chutarLetra = (letra) => {
    if (letrasUsadas.includes(letra) || erros >= limiteErros || venceu) return;
    setLetrasUsadas([...letrasUsadas, letra]);
    if (!palavra.includes(letra)) setErros(erros + 1);
  };

  const exibicaoPalavra = palavra.split("").map(l => (letrasUsadas.includes(l) ? l : "_"));
  const venceu = !exibicaoPalavra.includes("_") && palavra !== "";
  const perdeu = erros >= limiteErros;

  const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 px-6 pb-20">
      <Navbar />
      
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-2">Jogo da <span className="text-purple-500 italic">Forca</span></h1>
        <p className="text-gray-400 mb-12 uppercase tracking-widest text-xs">Desafio de Programação</p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="bg-[#0f0f0f] p-10 rounded-3xl border border-white/5 flex justify-center shadow-2xl">
            <svg width="200" height="250" className="stroke-purple-500 stroke-[4] fill-none">
              <path d="M20 230 L100 230 M60 230 L60 20 L140 20 L140 50" stroke="#333" />
              
              {erros > 0 && <circle cx="140" cy="70" r="20" />} {/* Cabeça */}
              {erros > 1 && <line x1="140" y1="90" x2="140" y2="150" />} {/* Corpo */}
              {erros > 2 && <line x1="140" y1="100" x2="110" y2="130" />} {/* Braço E */}
              {erros > 3 && <line x1="140" y1="100" x2="170" y2="130" />} {/* Braço D */}
              {erros > 4 && <line x1="140" y1="150" x2="110" y2="190" />} {/* Perna E */}
              {erros > 5 && <line x1="140" y1="150" x2="170" y2="190" />} {/* Perna D */}
            </svg>
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="flex gap-3 text-4xl md:text-5xl font-mono font-bold tracking-tighter">
              {exibicaoPalavra.map((letra, i) => (
                <span key={i} className={letra === "_" ? "text-gray-700" : "text-purple-500"}>
                  {letra}
                </span>
              ))}
            </div>

            {venceu && <p className="text-green-400 font-bold animate-bounce">✨ Você venceu! Parabéns! ✨</p>}
            {perdeu && (
              <div className="text-red-400 font-bold">
                <p>Que pena! Você perdeu.</p>
                <p className="text-xs text-gray-500 uppercase mt-1">A palavra era: {palavra}</p>
              </div>
            )}

            <div className="flex flex-wrap justify-center gap-2 max-w-sm">
              {alfabeto.map(letra => {
                const usada = letrasUsadas.includes(letra);
                const correta = usada && palavra.includes(letra);
                return (
                  <button
                    key={letra}
                    onClick={() => chutarLetra(letra)}
                    disabled={usada || venceu || perdeu}
                    className={`w-10 h-10 rounded-lg font-bold transition-all ${
                      usada 
                        ? (correta ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-600 opacity-50')
                        : 'bg-[#1a1a1a] hover:bg-purple-500/20 border border-white/10 text-white'
                    }`}
                  >
                    {letra}
                  </button>
                );
              })}
            </div>

            <button 
              onClick={iniciarJogo}
              className="mt-4 bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-purple-500 hover:text-white transition-all shadow-xl"
            >
              Reiniciar Jogo
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
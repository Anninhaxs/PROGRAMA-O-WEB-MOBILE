"use client";
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function Forca() {
  const bancoDePalavras = [
    // TI
    { palavra: "REACT", tema: "TI" }, { palavra: "NEXTJS", tema: "TI" }, { palavra: "JAVASCRIPT", tema: "TI" }, 
    { palavra: "TAILWIND", tema: "TI" }, { palavra: "PYTHON", tema: "TI" }, { palavra: "GITHUB", tema: "TI" }, 
    { palavra: "BACKEND", tema: "TI" }, { palavra: "ALGORITMO", tema: "TI" }, { palavra: "DATABASE", tema: "TI" }, { palavra: "NODEJS", tema: "TI" },

    // ANIMAIS
    { palavra: "ELEFANTE", tema: "Animais" }, { palavra: "GIRAFA", tema: "Animais" }, { palavra: "TUBARAO", tema: "Animais" }, 
    { palavra: "CANGURU", tema: "Animais" }, { palavra: "PINGUIM", tema: "Animais" }, { palavra: "PANDA", tema: "Animais" }, 
    { palavra: "LEAO", tema: "Animais" }, { palavra: "TARTARUGA", tema: "Animais" }, { palavra: "CAVALO", tema: "Animais" }, { palavra: "GOLFINHO", tema: "Animais" },

    // HARRY POTTER
    { palavra: "HOGWARTS", tema: "Harry Potter" }, { palavra: "GRYFFINDOR", tema: "Harry Potter" }, { palavra: "QUIDDITCH", tema: "Harry Potter" }, 
    { palavra: "DOBBY", tema: "Harry Potter" }, { palavra: "VOLDEMORT", tema: "Harry Potter" }, { palavra: "HERMIONE", tema: "Harry Potter" }, 
    { palavra: "DUMBLEDORE", tema: "Harry Potter" }, { palavra: "SNAPE", tema: "Harry Potter" }, { palavra: "EXPECTO", tema: "Harry Potter" }, { palavra: "SLYTHERIN", tema: "Harry Potter" },

    // CORES
    { palavra: "TURQUESA", tema: "Cores" }, { palavra: "AMARELO", tema: "Cores" }, { palavra: "MAGENTA", tema: "Cores" }, 
    { palavra: "CIANO", tema: "Cores" }, { palavra: "ESMERALDA", tema: "Cores" }, { palavra: "ROXO", tema: "Cores" }, 
    { palavra: "BRANCO", tema: "Cores" }, { palavra: "DOURADO", tema: "Cores" }, { palavra: "LARANJA", tema: "Cores" }, { palavra: "PRATEADO", tema: "Cores" },

    // PRINCESAS DISNEY
    { palavra: "CINDERELLA", tema: "Disney" }, { palavra: "MOANA", tema: "Disney" }, { palavra: "RAPUNZEL", tema: "Disney" }, 
    { palavra: "ARIEL", tema: "Disney" }, { palavra: "MULAN", tema: "Disney" }, { palavra: "POCAHONTAS", tema: "Disney" }, 
    { palavra: "TIANA", tema: "Disney" }, { palavra: "MERIDA", tema: "Disney" }, { palavra: "AURORA", tema: "Disney" }, { palavra: "JASMINE", tema: "Disney" },
  ];

  const [jogo, setJogo] = useState({ palavra: "", tema: "" });
  const [letrasUsadas, setLetrasUsadas] = useState([]);
  const [erros, setErros] = useState(0);
  const limiteErros = 6;

  const iniciarJogo = () => {
    const sorteio = bancoDePalavras[Math.floor(Math.random() * bancoDePalavras.length)];
    setJogo({
      palavra: sorteio.palavra.toUpperCase(),
      tema: sorteio.tema
    });
    setLetrasUsadas([]);
    setErros(0);
  };

  useEffect(() => { iniciarJogo(); }, []);

  const chutarLetra = (letra) => {
    if (letrasUsadas.includes(letra) || erros >= limiteErros || venceu) return;
    setLetrasUsadas([...letrasUsadas, letra]);
    if (!jogo.palavra.includes(letra)) setErros(erros + 1);
  };

  const exibicaoPalavra = jogo.palavra.split("").map(l => (letrasUsadas.includes(l) ? l : "_"));
  const venceu = jogo.palavra !== "" && !exibicaoPalavra.includes("_");
  const perdeu = erros >= limiteErros;

  const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 px-6 pb-20">
      <Navbar />
      
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-2">Jogo da <span className="text-purple-500 italic">Forca</span></h1>
        
        <div className="mb-12">
            <span className="px-4 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-xs font-bold uppercase tracking-widest">
                Tema: {jogo.tema}
            </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="bg-[#0f0f0f] p-10 rounded-3xl border border-white/5 flex justify-center shadow-2xl">
            <svg width="200" height="250" className="stroke-purple-500 stroke-[4] fill-none">
              <path d="M20 230 L100 230 M60 230 L60 20 L140 20 L140 50" stroke="#333" />
              {erros > 0 && <circle cx="140" cy="70" r="20" />}
              {erros > 1 && <line x1="140" y1="90" x2="140" y2="150" />}
              {erros > 2 && <line x1="140" y1="100" x2="110" y2="130" />}
              {erros > 3 && <line x1="140" y1="100" x2="170" y2="130" />}
              {erros > 4 && <line x1="140" y1="150" x2="110" y2="190" />}
              {erros > 5 && <line x1="140" y1="150" x2="170" y2="190" />}
            </svg>
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-wrap justify-center gap-3 text-4xl md:text-5xl font-mono font-bold tracking-tighter">
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
                <p className="text-xs text-gray-500 uppercase mt-1">A palavra era: {jogo.palavra}</p>
              </div>
            )}

            <div className="flex flex-wrap justify-center gap-2 max-w-sm">
              {alfabeto.map(letra => {
                const usada = letrasUsadas.includes(letra);
                const correta = usada && jogo.palavra.includes(letra);
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
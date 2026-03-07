export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#E2D5F1]">
      <main className="bg-[#f3ecfa] p-10 rounded-xl shadow-md text-center max-w-md">

        <h1 className="text-purple-800 text-3xl font-bold mb-4">
          Anna Beatriz
        </h1>

        <p className="text-gray-600 mb-4">
          Como visto acima, me chamo Anna Beatriz! Atualmente curso Ciência da Computação, tenho 21 anos e venho gostando bastante do curso,
          apesar de às vezes me perguntar se estou na área certa (o que acontece bastante em semanas de prova).
        </p>

        <p className="text-gray-600 mb-6">
          Brincadeiras à parte, venho me interessando cada vez mais pela área e tentando descobrir com qual ramo da computação me identifico 
          mais, para que eu possa direcionar melhor meus estudos no futuro.
        </p>

        <p className="text-gray-600 mb-8">
          Além da computação, também gosto de assistir filmes e séries, ler livros e praticar esportes. No tempo livre, atividades artesanais, 
          como crochê, desenho e pintura. Valorizo tempo de qualidade com minha família e com as pessoas que são importantes para mim.
        </p>


        <div className="flex gap-4 justify-center">
          <a
            className="text-purple-700 hover:underline"
            href="https://github.com/Anninhaxs"
            target="_blank"
          >
            GitHub
          </a>

          <a
            className="text-purple-700 hover:underline"
            href="https://www.linkedin.com/in/annaxs"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>

      </main>
    </div>
  );
}
import styles from "./exer3.module.css";

export default function Exercicio3() {
  return (
    <main style={{ padding: "50px" }}>
      <p className={styles.paragrafo}>
        A evolução constante dos meios digitais redefiniu a nossa percepção de tempo e produtividade no ambiente contemporâneo. 
        Atualmente, a integração entre inteligência artificial e conectividade global permite que processos complexos sejam simplificados, 
        aproximando pessoas e culturas em uma rede de colaboração sem precedentes. 
        Contudo, essa facilidade de acesso à informação exige um olhar atento para a ética e o bem-estar digital, 
        garantindo que a tecnologia sirva como um suporte ao desenvolvimento humano.
      </p>

      
      <a href="https://www.google.com" className={styles.link}>
        Google
      </a>
      
      <a href="https://www.youtube.com" className={styles.link}>
        You Tube
      </a>
    </main>
  );
}
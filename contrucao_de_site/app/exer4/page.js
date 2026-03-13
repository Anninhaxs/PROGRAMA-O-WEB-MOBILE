import styles from "./exer4.module.css";

export default function Home() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <main className={styles.produto}>
                <div className={styles.card}>
                    <img src="/sapato1.png" alt="Sapato 1" />
                    <p>Primeira opção de sapato</p>
                    <p>R$ 60,00</p>
                </div>

                <div className={styles.card}>
                    <img src="/sapato2.png" alt="Sapato 2" />
                    <p>Segunda opção de sapato</p>
                    <p>R$ 50,00</p>
                </div>

                <div className={styles.card}>
                    <img src="/sapato3.png" alt="Sapato 3" />
                    <p>Terceira opção de sapato</p>
                    <p>R$ 55,00</p>
                </div>

                <div className={styles.card}>
                    <img src="/sapato4.png" alt="Sapato 4" />
                    <p>Quarta opção de sapato</p>
                    <p>R$ 70,00</p>
                </div>

                <div className={styles.card}>
                    <img src="/sapato5.png" alt="Sapato 5" />
                    <p>Quinta opção de sapato</p>
                    <p>R$ 10,00</p>
                </div>    
            </main>

            <footer className={styles.footer}>
                SAPATINHO DE CRISTAL
            </footer>
        </div>
    );
}
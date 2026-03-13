import styles from "./exer2.module.css";

export default function Home() {
    return (
        <main>
            
            <div className={styles.container1}></div>

            <div className={styles.container2}></div>

            <div className={styles.respostas}>
                <p>
                    <strong>RESPOSTA</strong> <br />
                    Elas nao ficaram alinhadas, mas usei a propriedade <code>margin: 0 auto;</code> em um elemento que tenha uma largura (width) definida.
                    Porque o navegador usa o <em>Box Model</em> padrão (<code>content-box</code>), onde o preenchimento (padding) é somado à largura total. 
                    A segunda div acaba ficando com 750px de largura real (700px + 25px de cada lado).
                </p>
                <br />
            </div>
        </main>
    );
}
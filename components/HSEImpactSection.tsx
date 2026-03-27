import styles from './HSEImpactSection.module.css';

export default function HSEImpactSection() {
  return (
    <section className={styles.section} id="seguranca">
      <div className={styles.container}>
        <h2 className={styles.title}>Segurança Reativa vs. Preventiva</h2>
        <p className={styles.subtitle}>
          Sirenes não evitam acidentes, apenas avisam que eles ocorreram. O SafeGuard Vision atua antes do contato físico.
        </p>

        <div className={styles.comparison}>
          <div className={`${styles.card} ${styles.reactive}`}>
            <div className={styles.icon}>🚨</div>
            <h3>Sistemas Tradicionais (Reativos)</h3>
            <ul>
              <li>Dependem da ação humana após o alerta.</li>
              <li>Tempo de resposta médio: 2 a 5 segundos.</li>
              <li>Risco elevado de falha de atenção do operador.</li>
            </ul>
          </div>

          <div className={`${styles.card} ${styles.preventive}`}>
            <div className={styles.icon}>🛡️</div>
            <h3>SafeGuard Vision (Preventivo)</h3>
            <ul>
              <li>Desligamento automático via hardware (CLP).</li>
              <li>Tempo instantâneo de resposta: &lt; 50 milissegundos.</li>
              <li>Elimina totalmente o risco de esmagamento/amputação.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

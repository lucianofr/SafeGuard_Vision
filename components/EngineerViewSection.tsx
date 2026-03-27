import styles from './EngineerViewSection.module.css';

export default function EngineerViewSection() {
  return (
    <section className={styles.section} id="tecnologia">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Arquitetura Edge para Decisões Críticas</h2>
          <p className={styles.subtitle}>
            Processamento local em tempo real. Sem dependência de nuvem para segurança primária.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.diagramCard}>
            <div className={styles.node}>
              <span className={styles.icon}>📷</span>
              Câmeras IP
            </div>
            <div className={styles.arrow}>→</div>
            <div className={`${styles.node} ${styles.aiNode}`}>
              <span className={styles.icon}>🧠</span>
              SafeGuard Edge
              <div className={styles.pulseNode}></div>
            </div>
            <div className={styles.arrow}>→</div>
            <div className={`${styles.node} ${styles.plcNode}`}>
              <span className={styles.icon}>⚙️</span>
              CLP Industrial
            </div>
          </div>

          <div className={styles.metrics}>
            <div className={styles.metricCard}>
              <div className={styles.metricValue}>&lt; 50ms</div>
              <div className={styles.metricLabel}>Latência Total de Resposta</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricValue}>100%</div>
              <div className={styles.metricLabel}>Processamento Local (Offline)</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricValue}>Plug&Play</div>
              <div className={styles.metricLabel}>Integração via Modbus/RTSP</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

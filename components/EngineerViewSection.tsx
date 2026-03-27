import styles from './EngineerViewSection.module.css';

const AnimatedArrow = () => (
  <svg className={styles.animatedArrow} width="80" height="30" viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="15" x2="65" y2="15" stroke="var(--color-ai-vision)" strokeWidth="2" strokeDasharray="6 4" strokeDashoffset="0" className={styles.dashLine} />
    <path d="M60 7L72 15L60 23" fill="none" stroke="var(--color-ai-vision)" strokeWidth="2" />
  </svg>
);

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
          <div className={`${styles.diagramCard} glass-panel`}>
             <div className={styles.flowContainer}>
              <div className={styles.node}>
                <span className={styles.icon}>📷</span>
                <span className={styles.nodeText}>Câmeras IP Existentes</span>
              </div>
              
              <div className={styles.arrowContainer}>
                <AnimatedArrow />
                <span className={styles.dataLabel}>RTSP Data</span>
              </div>

              <div className={`${styles.node} ${styles.aiNode}`}>
                <span className={styles.icon}>🧠</span>
                <span className={styles.nodeText}>SafeGuard Edge (GPU)</span>
                <div className={styles.pulseNode}></div>
              </div>

              <div className={styles.arrowContainer}>
                <AnimatedArrow />
                <span className={styles.dataLabel}>Modbus / PROFINET</span>
              </div>

              <div className={`${styles.node} ${styles.plcNode}`}>
                <span className={styles.icon}>⚙️</span>
                <span className={styles.nodeText}>CLP Industrial</span>
                <div className={styles.statusIndicator}>ACTIVE</div>
              </div>
            </div>
          </div>

          <div className={styles.metrics}>
            <div className={`${styles.metricCard} glass-panel`}>
              <div className={styles.metricValue}>&lt; 50ms</div>
              <div className={styles.metricLabel}>Latência Total de Resposta</div>
              <div className={styles.glowEffect}></div>
            </div>
            <div className={`${styles.metricCard} glass-panel`}>
              <div className={styles.metricValue}>100%</div>
              <div className={styles.metricLabel}>Processamento Local Offline</div>
              <div className={styles.glowEffect}></div>
            </div>
            <div className={`${styles.metricCard} glass-panel`}>
              <div className={styles.metricValue}>Plug & Play</div>
              <div className={styles.metricLabel}>Compatibilidade de Protocolos</div>
              <div className={styles.glowEffect}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import styles from './HSEImpactSection.module.css';

export default function HSEImpactSection() {
  return (
    <section className={styles.section} id="seguranca">
      <div className={styles.pulseBackground}></div>
      
      <div className={styles.container}>
        <div className={styles.contentLeft}>
          <div className={styles.label}>IMPACTO NA VIDA HUMANA</div>
          <h2 className={styles.title}>
            O supervisor de segurança que <span className={styles.highlight}>nunca pisca e não sente fadiga.</span>
          </h2>
          
          <div className={styles.quoteBlock}>
            <p className={styles.quote}>
              "A sirene tradicional soa depois que o limite é cruzado, muitas vezes tarde demais. O SafeGuard corta a energia antes que o trauma físico aconteça."
            </p>
          </div>
          
          <ul className={styles.benefitsList}>
            <li>
              <strong>Instantâneo:</strong> Resposta em &lt; 50ms impede a ação antes do acidente.
            </li>
            <li>
              <strong>Infalível:</strong> Ignora distrações, cansaço ou burla de regras.
            </li>
            <li>
              <strong>Proativo:</strong> Avalia a intenção da trajetória, não apenas o limite estático.
            </li>
            <li>
              <strong>EPIs & Conformidade:</strong> Detecta instantaneamente a ausência de equipamentos de proteção utilizando YOLO26, a biblioteca mais moderna de detecção de objetos.
            </li>
          </ul>
        </div>

        <div className={styles.contentRight}>
          <div className={styles.shieldContainer}>
            <div className={styles.shieldPulse1}></div>
            <div className={styles.shieldPulse2}></div>
            <div className={styles.shieldPulse3}></div>
            <div className={`${styles.shieldCore} glass-panel`}>
              <span className={styles.shieldIcon}>🛡️</span>
              <div className={styles.shieldScanline}></div>
            </div>
            
            <div className={styles.biometricData}>
              <span>STATUS: PROTEGIDO</span>
              <span>MONITORANDO 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

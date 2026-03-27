import styles from './ManagerROISection.module.css';

export default function ManagerROISection() {
  return (
    <section className={styles.section} id="roi">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Retorno Operacional e Conformidade</h2>
          <p className={styles.subtitle}>
            Proteja sua equipe e garanta a continuidade da produção com adequação completa às normativas.
          </p>
        </div>

        <div className={styles.cards}>
          <div className={`${styles.card} glass-panel`}>
            <div className={styles.iconWrapper}>📜</div>
            <h3>Adequação NR-12 e OSHA</h3>
            <p>Atende aos padrões de segurança internacionais rigorosos, minimizando passivos trabalhistas e garantindo certificações de qualidade com registros em vídeo imutáveis.</p>
            <div className={styles.cardHighlight}></div>
          </div>
          
          <div className={`${styles.card} glass-panel ${styles.featuredCard}`}>
            <div className={styles.iconWrapper}>📉</div>
            <h3>Risco Zero de Amputações</h3>
            <p>Adoção de segurança preditiva com baixa latência corta a energia antes que o limite físico seja cruzado. Proteção ativa implacável contra falha humana e fadiga.</p>
            <div className={styles.cardHighlight}></div>
          </div>
          
          <div className={`${styles.card} glass-panel`}>
            <div className={styles.iconWrapper}>⚡</div>
            <h3>OEE e Produtividade Maximizado</h3>
            <p>A precisão da rede neural convolucional evita "falsos positivos" frequentes encontrados em Lidar e sensores infravermelhos antigos, aumentando o OEE da fábrica.</p>
            <div className={styles.cardHighlight}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

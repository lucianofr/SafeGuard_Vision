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
          <div className={styles.card}>
            <div className={styles.iconWrapper}>📜</div>
            <h3>Adequação NR-12 e OSHA</h3>
            <p>Atende aos mais rigorosos padrões de segurança internacional, minimizando passivos trabalhistas e garantindo certificações de qualidade.</p>
          </div>
          
          <div className={styles.card}>
            <div className={styles.iconWrapper}>📉</div>
            <h3>Redução de Acidentes</h3>
            <p>Adoção de segurança preventiva corta a energia antes que o limite físico seja cruzado. Proteção ativa contra falha humana.</p>
          </div>
          
          <div className={styles.card}>
            <div className={styles.iconWrapper}>⚡</div>
            <h3>Sem Paradas Desnecessárias</h3>
            <p>A precisão da inteligência artificial evita "falsos positivos" frequentes em sensores infravermelhos antigos, aumentando o OEE da fábrica.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

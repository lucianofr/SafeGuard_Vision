import { HardHat, Shirt, Glasses } from 'lucide-react';
import styles from './PPEDetectionSection.module.css';

export default function PPEDetectionSection() {
  return (
    <section className={styles.section} id="epi-detection">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Monitoramento Ativo de <span className={styles.highlight}>Conformidade</span>
          </h2>
          <p className={styles.subtitle}>
            A tecnologia mais avançada do mercado garantindo que as regras de segurança sejam seguidas à risca. 
            Detecção instantânea de ausência de Equipamentos de Proteção Individual (EPI).
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.contentLeft}>
            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}><HardHat size={28} color="var(--color-ai-vision)" /></div>
              <div className={styles.featureInfo}>
                <h3>Capacetes de Segurança</h3>
                <p>Identifica instantaneamente se o colaborador está utilizando o capacete de forma correta na zona operacional, alertando sobre qualquer violação.</p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}><Shirt size={28} color="var(--color-ai-vision)" /></div>
              <div className={styles.featureInfo}>
                <h3>Coletes Refletivos</h3>
                <p>Verificação contínua de coletes e uniformes de alta visibilidade em áreas de movimentação de carga e empilhadeiras.</p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}><Glasses size={28} color="var(--color-ai-vision)" /></div>
              <div className={styles.featureInfo}>
                <h3>Óculos de Proteção</h3>
                <p>Em áreas de usinagem e solda, a IA mapeia a face do operador para garantir o uso de proteção ocular antes da máquina ser habilitada.</p>
              </div>
            </div>
          </div>

          <div className={styles.visualSide}>
            <div className={styles.radarContainer}>
              <div className={styles.radarRings}></div>
              <div className={styles.radarSweep}></div>
              
              <div className={`${styles.floatingTag} ${styles.tag1}`}>
                <div className={styles.statusDot}></div>
                Capacete OK
              </div>
              <div className={`${styles.floatingTag} ${styles.tag2}`}>
                <div className={styles.statusDot} style={{background: '#ef4444', boxShadow: '0 0 10px #ef4444'}}></div>
                Óculos Ausente!
              </div>
              <div className={`${styles.floatingTag} ${styles.tag3}`}>
                <div className={styles.statusDot}></div>
                Colete OK
              </div>

              <div className={styles.modelBadge}>
                <span className={styles.modelName}>YOLO26</span>
                <span className={styles.modelDesc}>OBJECT_DETECTION_CORE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

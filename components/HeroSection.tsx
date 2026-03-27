"use client";

import { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';

type AIState = 'safe' | 'warning' | 'danger';

export default function HeroSection() {
  const [aiState, setAiState] = useState<AIState>('safe');

  useEffect(() => {
    let safeTimeout: NodeJS.Timeout;
    let warningTimeout: NodeJS.Timeout;
    let dangerTimeout: NodeJS.Timeout;

    const cycle = () => {
      setAiState('safe');
      warningTimeout = setTimeout(() => setAiState('warning'), 3000);
      dangerTimeout = setTimeout(() => setAiState('danger'), 5000);
      safeTimeout = setTimeout(cycle, 8000); // Loop
    };
    
    cycle();

    return () => {
      clearTimeout(safeTimeout);
      clearTimeout(warningTimeout);
      clearTimeout(dangerTimeout);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.bgGrid} />
      
      <div className={styles.content}>
        <div className={styles.badge}>
          <div className={styles.liveDot} />
          MONITORAMENTO ATIVO NR-12
        </div>
        
        <h1 className={styles.title}>
          Prevenção de Acidentes com <span style={{color: "var(--color-ai-vision)"}}>Inteligência Artificial</span>
        </h1>
        
        <p className={styles.description}>
          O SafeGuard Vision detecta intrusões em áreas de risco em tempo real. Integrado diretamente ao seu PLC, paralisa máquinas perigosas em milissegundos, antes que o acidente ocorra.
        </p>
        
        <div className={styles.ctaGroup}>
          <button className={styles.primaryBtn}>Agendar Demonstração</button>
          <button className={styles.secondaryBtn}>Ver Arquitetura</button>
        </div>
      </div>

      <div className={styles.cameraMockup}>
        <div className={styles.dangerZone} />
        <div className={styles.cameraOverlay}>
          <div className={`${styles.crosshair} ${styles.tl}`} />
          <div className={`${styles.crosshair} ${styles.tr}`} />
          <div className={`${styles.crosshair} ${styles.bl}`} />
          <div className={`${styles.crosshair} ${styles.br}`} />
          
          <div className={styles.camStats}>
            CAM_04: PRENSA_HIDRAULICA | 60 FPS | LATENCIA: 14ms
            <br/>
            STATUS: {aiState.toUpperCase()}
          </div>
          
          <div className={`${styles.boundingBox} ${styles[aiState]}`}>
            <div className={styles.bbLabel}>
              {aiState === 'safe' ? 'OPERADOR_SEGURO 99%' : 
               aiState === 'warning' ? 'AVISO_PROXIMIDADE 95%' : 
               'INTRUSAO_CRITICA 99%'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

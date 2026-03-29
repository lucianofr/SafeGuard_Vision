"use client";

import { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';

type AIState = 'safe' | 'warning' | 'danger';

const WorkerSilhouette = () => (
  <svg 
    viewBox="0 0 100 220" 
    style={{ 
      position: 'absolute', 
      bottom: '0', 
      left: '0', 
      width: '100%', 
      height: '92%', 
      zIndex: -1,
      opacity: 0.85
    }}
    preserveAspectRatio="xMidYMax meet"
  >
    <g transform="translate(0, 15)">
      {/* Botas */}
      <path d="M 33 205 L 43 205 L 43 190 L 35 190 Z" fill="rgba(255,255,255,0.3)"/>
      <path d="M 57 205 L 67 205 L 65 190 L 57 190 Z" fill="rgba(255,255,255,0.3)"/>
      
      {/* Pernas */}
      <path d="M 35 190 Q 40 130 46 110 L 54 110 Q 60 130 65 190 L 55 190 L 50 140 L 45 190 Z" fill="rgba(255,255,255,0.7)"/>
      
      {/* Tronco, Coletes e Refletivos */}
      <path d="M 30 50 Q 50 45 70 50 L 76 110 Q 50 120 24 110 Z" fill="rgba(255,255,255,0.9)"/>
      {/* Listras Refletivas */}
      <path d="M 30 70 L 73 70" stroke="#00BCD4" strokeWidth="4" opacity="0.8"/>
      <path d="M 27 90 L 75 90" stroke="#00BCD4" strokeWidth="4" opacity="0.8"/>
      
      {/* Braços */}
      <path d="M 28 50 C 15 70 15 100 20 115 L 26 110 C 22 90 30 70 30 70 Z" fill="rgba(255,255,255,0.6)"/>
      <path d="M 72 50 C 85 70 85 100 80 115 L 74 110 C 78 90 70 70 70 70 Z" fill="rgba(255,255,255,0.6)"/>
      
      {/* Cabeça e Capacete Amarelo (NR-12) */}
      <circle cx="50" cy="30" r="14" fill="rgba(255,255,255,0.8)" />
      
      <g transform="translate(0, -6)">
        {/* Casco do Capacete */}
        <path d="M 34 32 C 34 12, 66 12, 66 32 Z" fill="#FACC15" />
        {/* Aba do Capacete */}
        <rect x="30" y="30" width="40" height="4" rx="2" fill="#EAB308" />
        {/* Detalhe do Topo */}
        <rect x="47" y="15" width="6" height="3" rx="1" fill="#CA8A04" />
      </g>
    </g>
  </svg>
);

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
          O SafeGuard Vision detecta intrusões em áreas de risco e ausência de EPIs em tempo real. Integrado diretamente ao seu PLC, paralisa máquinas perigosas em milissegundos, antes que o acidente ocorra.
        </p>
        
        <div className={styles.ctaGroup}>
          <a href="#demo" className={styles.primaryBtn}>Agendar Demonstração</a>
          <a href="#tecnologia" className={styles.secondaryBtn}>Ver Arquitetura</a>
        </div>
      </div>

      <div className={styles.cameraMockup}>
        <div className={styles.scanline} />
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
            <WorkerSilhouette />
          </div>
        </div>
      </div>
    </section>
  );
}

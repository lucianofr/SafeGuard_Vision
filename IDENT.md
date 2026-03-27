# Identidade Visual: SafeGuard Vision

## 1. Visão Geral
O **SafeGuard Vision** é um sistema crítico de segurança industrial baseado em Inteligência Artificial. Sua interface e identidade visual devem transmitir **confiabilidade, urgência, precisão tecnológica e clareza absoluta**. Como o sistema lida com a segurança e a vida de trabalhadores, não há espaço para ambiguidades visuais.

## 2. Paleta de Cores
A paleta de cores é inspirada em normas internacionais de segurança industrial (como a ANSI Z535) mesclada com tons tecnológicos.

### Cores Primárias (Ação e Alerta)
*   **Vermelho Emergência** (`#E53935`): Usado exclusivamente para paradas de máquina, intrusões críticas e acionamento de sirenes. Significa PERIGO IMEDIATO.
*   **Amarelo Atenção** (`#FFC107`): Usado para demarcar zonas de risco no vídeo, alertas preventivos e sinalizações luminosas em amarelo.
*   **Verde Operacional** (`#43A047`): Indica que o sistema está ativo, as áreas estão limpas e as máquinas operam com segurança.

### Cores Secundárias (Tecnologia e Estrutura)
*   **Azul Visão/IA** (`#00BCD4`): Usado para as bounding boxes de detecção ativa (quando a pessoa está em área segura) e elementos de interface da Inteligência Artificial.
*   **Chumbo Industrial** (`#263238`): Cor de fundo principal para dashboards e painéis (Dark Mode por padrão, para reduzir fadiga visual em salas de controle).
*   **Cinza Metálico** (`#90A4AE`): Elementos de interface secundários, bordas e textos inativos.
*   **Branco Puro** (`#FFFFFF`): Textos principais e alta legibilidade.

## 3. Tipografia
A tipografia deve ser perfeitamente legível em monitores a diferentes distâncias em uma sala de controle ou em tablets no chão de fábrica.

*   **Fonte Principal:** `Inter` ou `Roboto` (sem serifa, limpa, proporções modernas).
*   **Fonte Monosada (Logs e Dados do PLC):** `JetBrains Mono` ou `Fira Code` (usada para exibir logs de rede, status do PLC e coordenadas).
*   **Pesos:**
    *   *Regular (400)* para textos normais.
    *   *Medium (500)* para subtítulos e dados em tempo real.
    *   *Bold (700)* para alertas críticos e contadores de segurança.

## 4. Logo e Simbologia
*   **Conceito do Logo:** A união de um **olho biométrico/câmera** (representando a IA e o monitoramento) dentro de um **escudo** (representando proteção e o bloqueio de acidentes). Linhas geométricas, estilo flat.
*   **Ícones:** Utilizar ícones preenchidos em situações de alerta e vazados em situações normais. Ícones essenciais:
    *   Indivíduo (detectado).
    *   Sirene/Alarme (estado).
    *   Engrenagem/PLC (status de integração).
    *   Sinal de Parada/Mão (bloqueio de equipamento).

## 5. Interface de Usuário (Dashboard)
A interface adotará o estilo **Mission Control** (Painel de Missão Crítica):
*   **Vídeo em Destaque:** O feed de vídeo ao vivo (ou mosaico de câmeras) ocupa a maior parte da tela.
*   **Zonas Delimitadas (Overlays):** 
    *   Zonas Perigosas devem ter um *hachurado* leve e borda da cor de risco.
*   **Bounding Boxes:** 
    *   Pessoa em local seguro: Bounding box Azul (`#00BCD4`).
    *   Pessoa na borda da zona: Bounding box Amarela (`#FFC107`).
    *   Pessoa na zona de perigo: Bounding box Vermelha (`#E53935`) e espessa.
*   **Animações:** 
    *   Apenas ativadas para chamar atenção a um evento crítico (ex: piscar a tela com bordas vermelhas ao detectar intrusão e enviar sinal ao PLC). Evitar animações desnecessárias que distraiam o operador.

## 6. Sinais e Feedback do Sistema
*   **Feedback Visual:** Modais gigantes, tipografia enorme e cores sólidas ao acionar a Parada do Equipamento. O operador precisa saber instantaneamente que a máquina foi travada.
*   **Microinterações:** Botões de reconhecimento de alarme devem exigir uma interação intencional (como um "deslizar" ou um "pressionar por 2 segundos") para evitar cancelamentos acidentais.

# PRD: Landing Page do SafeGuard Vision

## 1. Visão Geral
Este Product Requirements Document (PRD) define os requisitos técnicos e visuais para a concepção da landing page do **SafeGuard Vision**. O objetivo é atrair, educar e converter dois perfis principais de B2B: **Engenheiros de Automação/Segurança** (focados em integração, precisão e confiabilidade) e **Gestores de Planta/Operações** (focados em ROI, conformidade e redução de acidentes).

## 2. Tecnologias Recomendadas
Com base nas pesquisas de tendências e melhores práticas para páginas B2B de alta performance e SEO, as tecnologias recomendadas são:

*   **Front-end Framework:** **Next.js** ou **Astro**. O Next.js é excelente propostas corporativas robustas com geração de sites estáticos (SSG) e Server-Side Rendering (SSR). O Astro é ideal focado em velocidade extrema com a abordagem "zero-JS by default", melhorando drasticamente a pontuação do Google Core Web Vitals.
*   **Estilização:** **CSS Modular / Vanilla CSS**. Para garantir máxima flexibilidade, performance e aderência estrita à identidade visual "Dark Mode / Industrial" já definida.
*   **Análises e Tracking B2B:** **PostHog** ou **Google Analytics 4**. Essencial para rastrear a jornada do lead e integrar com os CRMs da gestão de vendas.
*   **Gestão de Conteúdo (Headless CMS):** **Sanity** ou **Strapi**. Permite que o time de marketing adicione rapidamente novos "Casos de Estudo" (ex: prevenção de acidentes salvos pelo sistema) sem depender de desenvolvedores.
*   **Hospedagem (Edge Computing):** **Vercel** ou **Cloudflare Pages**. Para garantir latência mínima e resiliência, entregando o site do servidor mais próximo ao usuário industrial.

## 3. Estratégia Visual e de Comunicação
A página precisa gerar impacto imediato, misturando a precisão da engenharia com o apelo emocional da proteção à vida humana.

### 3.1. Seção Hero (A Primeira Impressão)
*   **Visual:** Um vídeo em loop (background) de alta qualidade no chão de fábrica. Na tela, uma sobreposição reflexiva do sistema SafeGuard: uma pessoa caminha na direção de uma prensa ou braço robótico, o sistema a rotula em um "Bounding Box" instantaneamente vermelho, e a máquina para abruptamente.
*   **Mensagem Principal:** "Proteção Invisível. Reação Instantânea. Nenhuma Vida em Risco."
*   **Call to Action (CTA):** "Agende uma Demonstração Técnica".

### 3.2. Apelo para Engenheiros (A Prova Técnica)
*   **"Mostre, Não Fale":** Seção com as views do Dashboard e telemetrias reais do sistema para que o engenheiro valide visualmente.
*   **Diagrama de Arquitetura:** Uma área dedicada mostrando graficamente o fluxo técnico simplificado: Câmera -> Processamento Local IA (Edge) -> Switch Industrial -> CLP. Isso prova que a solução não depende da velocidade da internet para parar a máquina, transmitindo pura confiabilidade.
*   **Métricas de Latência:** Destacar a baixa latência e a imunidade a interferências, destacando painéis que mostram Integrações com as principais redes como PROFINET e modbus (Siemens, Rockwell, etc).

### 3.3. Apelo para Gestores de Planta (O Valor de Negócio)
*   **Métricas de Valor:** Blocos de destaque imponentes focando em ROI de prevenção: "Downtime evitado", "Risco de Acidentes Severos mitigado para Zero" e "Reduções ativas em Seguros de Responsabilidade Civil".
*   **Conformidade (Compliance):** Mostrar crachás de conformidade e logotipos provando como o sistema auxilia em adequações a normas como NR-12 (Brasil), OSHA (EUA) e o certificado de gestão da segurança e saúde no trabalho (ISO 45001).
*   **Dashboard Executivo:** Layout mostrando como eles conseguem extrair relatórios facilmente unificando múltiplas unidades operacionais.

## 4. Ênfase em Saúde e Segurança Ocupacional (HSE)
A narrativa da landing page deve destacar severamente o problema focado no humano:
*   **Solução Preventiva, Não Reativa:** "A sirene tradicional soa depois que o limite é cruzado e muitas vezes tarde demais. O SafeGuard avalia a intenção da trajetória e corta a energia *antes* que o dano físico aconteça."
*   **Fadiga Humana vs. IA Infalível:** Supervisores físicos esbarram na barreira da fadiga ou distração. A IA é descrita em grandes parágrafos emocionais como o "supervisor de segurança vigilante 24 horas por dia, 7 dias por semana".
*   **Garantia à Vida:** Abordar diretamente o trauma humano e corporativo associado a amputações, esmagamentos e danos sérios. A página diz claramente que uma cerca física às vezes é anulada por um operador tentar economizar tempo, mas o SafeGuard é o vigilante virtual que não pode ser engano.

## 5. Alinhamento com a Identidade Visual Definda
O design deve absorver as configurações estipuladas no arquivo `IDENT.md`:
*   *Fundo base Dark Mode/Mission Control* (Chumbo `#263238`).
*   *Fontes industriais precisas*.
*   Utilização seletiva e vibrante da cor vermelha (`#E53935`) apelas nos botões de CTA e demonstrações de paragem de emergência para ancorar um visual imperativo.

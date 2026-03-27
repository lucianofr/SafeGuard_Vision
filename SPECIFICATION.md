# Especificação Técnica de Implementação: Landing Page SafeGuard Vision

## 1. Visão Geral do Projeto
Este documento detalha os requisitos técnicos de implementação (Tech Spec) para a Landing Page B2B do sistema SafeGuard Vision. Ele alinha as tecnologias definidas no `PRD.md` com a identidade visual do `IDENT.md`.

## 2. Stack Tecnológica Base
*   **Framework:** Next.js (App Router preferencial, `app/page.tsx`). Permite alta performance de Geração de Site Estático (SSG) com fácil integração de APIs.
*   **Linguagem:** TypeScript (para garantir tipagem estrita nos formulários de leads e componentes).
*   **Estilização:** CSS Modular (`*.module.css`) complementado por Variáveis CSS Globais (CSS Custom Properties).
*   **Tracking:** Script do PostHog (ou GA4) injetado no `<head>`.
*   **Deploy:** Vercel (CI/CD automático via GitHub/GitLab).

## 3. Design Tokens (CSS Global Variables)
Estes valores devem ser configurados no arquivo raiz global (`globals.css` ou `theme.css`).

```css
:root {
  /* Cores de Fundo e Texto (Dark Mode Nativo) */
  --bg-primary: #263238; /* Chumbo Industrial */
  --text-primary: #FFFFFF;
  --text-secondary: #90A4AE; /* Cinza Metálico */

  /* Cores Semânticas de Risco e Status */
  --color-danger: #E53935; /* Vermelho Emergência (Botões e Alertas) */
  --color-warning: #FFC107; /* Amarelo Atenção */
  --color-safe: #43A047; /* Verde Operacional */
  --color-ai-vision: #00BCD4; /* Azul (Bounding Boxes Ativas) */

  /* Tipografia */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
}
```

## 4. Estrutura de Componentes (React/Next.js)

O layout será construído de forma modular para fácil manutenção.

### 4.1. `Navbar` (Navegação Fixa)
*   **Comportamento:** Fixo no topo (`position: sticky` ou `fixed`), efeito "glassmorphism" (fundo translúcido com `backdrop-filter: blur`).
*   **Elementos:** Logo do SafeGuard Vision à esquerda. Links âncora no centro. Botão primário (`--color-danger`) "Agendar Demo" à direita.

### 4.2. `HeroSection` (Impacto Imediato)
*   **Background:** Componente `<video autoPlay loop muted playsInline>` com um clipe de fábrica industrial otimizado para a Web. Overlay escuro (`rgba(38, 50, 56, 0.7)`).
*   **Microinteração (Visão Computacional):** Uma div overlay que simula uma "Bounding Box" que fica Azul (`--color-ai-vision`) e passa para Vermelha (`--color-danger`) em loop dinâmico provando o conceito da IA.
*   **Títulos:** `<h1>` em peso *Bold (700)*.

### 4.3. `EngineerViewSection` (Prova Técnica)
*   **Tipografia:** Uso agressivo da `--font-mono` para exibir métricas (ex: `<span class="mono">Latência < 50ms</span>`).
*   **Diagrama de Arquitetura:** Construído preferencialmente usando SVG In-line para compor a timeline rápida de processamento da câmera até o PLC Industrial. Seções com ícones mecânicos (engrenagens/terminais).

### 4.4. `ManagerROISection` (Valor e Conformidade)
*   **Layout:** Grid CSS (3 colunas em Desktop, 1 coluna em Mobile).
*   **Cards de Valor:** Bordas sutis Cinza Metálico. 
*   **Selos de Qualidade:** Faixa contendo logotipos de certificações técnicas de segurança (ISO 45001, NR-12).

### 4.5. `HSEImpactSection` (Saúde e Segurança)
*   **Comunicação:** Focada em texto empático e contrastante.
*   **Design:** Metade da tela com um depoimento forte ou dado de mercado ("X acidentes por ano podem ser prevenidos"), a outra metade com o escudo biométrico do Logo.

### 4.6. `DemoLeadForm` (Rodapé/Contato)
*   **Inputs:** `Nome`, `E-mail Corporativo`, `Cargo` (Engenharia vs Gerência), `Tamanho da Planta`.
*   **Funcionalidade:** Prevenção de envio sem validação e botão de "Submit" vermelho forte e robusto. Pode conectar-se por Server Actions do Next.js diretamente a uma API de CRM.
*   **Estilo de Input:** Campos escuros e preenchidos (`background: rgba(255,255,255, 0.05)`), focando na estética industrial limpa.

## 5. Requisitos Otimização e SEO
*   **Metadados:** Configurar a Metadata API do Next.js no `layout.tsx` (Title: "SafeGuard Vision | IA para Segurança Industrial Zero Falhas").
*   **Performance:** Imagens e vetores fora do Hero devem usar `next/image`. O LCP (Largest Contentful Paint) não pode ser bloqueado por fontes externas (usar `next/font`).
*   **Acessibilidade (a11y):** Contraste garantido entre fontes Brancas e fundo Chumbo. Adequação da página para leitores de tela em conformidade a padrões da WCAG.

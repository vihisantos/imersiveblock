# Ideias de Melhoria — Imersive Block

> Lista de melhorias organizadas por prioridade.
> Ultima atualização: Julho 2026

---

## 🔴 Alta Prioridade

### 1. Tela de Loading
O modelo GLB carrega invisível (`fallback={null}`). Criar uma tela de loading estilo Minecraft com barra de progresso pixelada e texto "Carregando mundo..." enquanto o modelo carrega.

### 2. Texturas Ausentes
4 assets referenciados no código não existem em `public/assets/textures/`:
- `nether_portal.gif` — usada no botão portal (LandingPage)
- `stone.png` — usada como overlay nos cards de projeto
- `dirt.png` — referenciada no tailwind.config.js
- Criar ou substituir por assets reais.

### 3. Persistência de Settings
As configurações (FOV, volume, idioma, dificuldade) resetam a cada reload da página. Salvar em `localStorage` e restaurar ao iniciar.

### 4. Favicon e Título
Usa o `vite.svg` padrão. Criar:
- Favicon pixelado (block de diamante ou similar)
- Título: `Imersive Block | Capybara Holding`
- Meta description para SEO básico

### 5. Botões "View Code" e "Live Demo"
Estão mortos nos cards de projeto. Adicionar `href` ou `onClick` com links reais para GitHub e demos, ou desabilitar com tooltip "Em breve".

---

## 🟡 Média Prioridade

### 6. Partículas de Bloco 3D
Adicionar partículas flutuantes no fundo 3D — mini cubes verdes/vermelhos estilo Minecraft usando drei `<Sparkles>` ou meshes customizados com `useFrame`.

### 7. Efeito Parallax no Fundo
O starfield + modelo 3D poderia reagir ao movimento do mouse com suave parallax em vez de apenas auto-rotate. Adicionar camadas de profundidade que se movem em velocidades diferentes.

### 8. Música de Fundo
O slider `musicVol` existe mas não há sistema de áudio. Adicionar:
- Ambient music loop (chiptune/8-bit)
- Controle de volume via slider existente
- Play/pause no OptionsScreen

### 9. Formulário Funcional
O contact form não faz nada (`<form>` sem `onSubmit`). Integrar com:
- EmailJS (gratuito, sem backend)
- Formspree
- Ou pelo menos `mailto:` como fallback

### 10. Transições entre Telas
Usar `framer-motion` ou CSS animations para transições com efeito wipe/slide estilo menu de Minecraft ao navegar entre Home → Game → Options → Projects.

---

## 🟢 Baixa Prioridade (Polimento)

### 11. Easter Eggs
- Click duplo no título toca som de "level up"
- Segurar Shift no 3D view mostra coordenadas da câmera
- Digitar "seed" em algum input abre conteúdo secreto
- Konami code para modo "Herobrine" (muda cor da luz para vermelho)

### 12. Dark/Light Toggle
Um "Night Mode" no OptionsScreen que troca o tema:
- Atual: obsidian escuro (#120B16)
- Alternativo: mais claro com texturas de areia/lua

### 13. Cursor por Contexto
6 arquivos `.cur` não mapeados no CSS:
- `handwriting.cur` → inputs de texto
- `precision_select.cur` → elementos pequenos
- `person_select.cur` → seção "sobre"
- `location_select.cur` → links externos
- `alternate.cur` → context menu
- `working_in_background.ani` → estados de loading

### 14. SEO e Meta Tags
Adicionar no `<head>` do `index.html`:
- Open Graph tags (og:title, og:description, og:image)
- Twitter Card tags
- Canonical URL
- Structured data (JSON-LD)

### 15. Keyboard Navigation
Navegação estilo real do Minecraft:
- Setas para navegar entre botões
- Enter para selecionar
- Escape para voltar
- Tab para alternar entre seções

### 16. Usar Modelo de Maior Detalhe
O arquivo `public/models/terra.glb` (maior qualidade) não é usado — apenas `terra1k.glb`. Testar performance e trocar se viável.

### 17. Anti-Devtools
A proteção atual (bloqueio de F12, Ctrl+Shift+I, context menu) é trivialmente bypassável. Considerar remover (portfolio não deveria bloquear inspeção) ou pelo menos simplificar.

---

### 18. Code Splitting por Tela
Cada screen (`LandingPage`, `ProjectsScreen`, etc.) em lazy chunks via `React.lazy()` + `Suspense`. Reduz bundle inicial e melhora tempo de carregamento.

### 19. PWA (Progressive Web App)
Adicionar `manifest.json` + service worker para instalação como app, modo offline com cache de assets, e ícone de instalação no mobile.

### 20. Error Boundary Global
Wrap no `<Canvas>` e nos componentes de tela com React Error Boundary. Mostrar tela estilo "Minecraft crash screen" com seed do erro e botão de retry.

### 21. Fallback para WebGL
Detectar se o browser suporta WebGL e mostrar uma versão estática (imagem + CSS) caso não suporte. Evita tela preta em browsers antigos.

---

## 🎮 Interação & Diversão

### 22. Mini-game de Quebra de Bloco
Hover sobre um card de projeto mostra um bloco 3D; clicar faz animação de "quebrar" com partículas e som antes de abrir o link. Efeito satisfying estilo Minecraft.

### 23. Sistema de Clima
Partículas de chuva ou neve no fundo 3D, ativável pelo OptionsScreen. Chuva = partículas caindo, neve = partículas flutuando suave.

### 24. Ciclo Dia/Noite
Gradiente no background que alterna entre céu noturno (atual) e pôr do sol/amanhecer. Pode ser automático (baseado no horário real) ou toggle no Options.

### 25. Inventário de Projetos
Trocar a grid de cards por uma UI estilo inventário Minecraft — slots com ícones, hover com tooltip estilo do jogo, drag & drop para organizar.

### 26. Som de Interação
Adicionar micro-sounds: click em botão = som de "pop" de bloco, hover = som suave, transição de tela = som de "portal". Tudo controlado pelo slider `soundVol` que já existe.

---

## 📱 Mobile & Responsividade

### 27. Touch Gestures
Swipe para navegar entre telas (Landing ↔ Projects ↔ Options), pinch-to-zoom no modelo 3D, double-tap para ação rápida.

### 28. Bottom Navigation Mobile
Barra de navegação fixa no estilo hotbar do Minecraft — 4-5 slots com ícones (Home, Projetos, Opções, Contato).

---

## ♿ Acessibilidade

### 29. Respeitar `prefers-reduced-motion`
Detectar a preferência do sistema e desabilitar auto-rotate, partículas e animações CSS pesadas para usuários com sensibilidade a movimento.

### 30. Skip Links & ARIA
Adicionar skip-to-content, labels nos botões 3D, e roles corretos nos componentes. O Canvas precisa de `aria-label` ou `role="img"`.

---

## 🎨 Visual & Design

### 31. Customização de Tema pelo Usuário
No OptionsScreen, permitir trocar cores do tema — presets como "Nether" (vermelho), "End" (roxo), "Ocean" (azul), "Overworld" (verde). Salvar em localStorage.

### 32. Shader de Bloco no Fundo
Em vez de só Stars, adicionar um fundo com grid de blocos sutis (via custom shader ou mesh instanciado) que reage ao mouse — efeito "matrix" mas com cubes.

### 33. Trail do Mouse em 3D
Rastro de partículas que segue o cursor no espaço 3D, desvanecendo suavemente. Efeito premium que combina com o tema.

---

## 📊 Conteúdo & SEO

### 34. Blog / Dev Log
Seção "Dev Log" no estilo Minecraft achievements — posts sobre o desenvolvimento do projeto, cada um com um ícone de conquista e data.

### 35. Schema.org / JSON-LD
Dados estruturados para Portfolio, SoftwareApplication, e Organization (Capybara Holding). Melhora rich snippets no Google.

### 36. Sitemap XML
Gerar sitemap automaticamente no build para indexação.

---

## 🛡️ Robustez

### 37. Análise Privacy-Friendly
Integrar Plausible ou Umami (self-hosted) — sem cookies, sem GDPR banner, métricas de page views e tempo na tela.

### 38. Testes E2E
Cypress ou Playwright para testar fluxo principal: home → navegação → projects → contact → options. Pelo menos smoke tests.

---

## 📊 Resumo

| Prioridade | Qtd | Esforço |
|---|---|---|
| 🔴 Alta | 9 | Médio |
| 🟡 Média | 11 | Médio-Alto |
| 🟢 Baixa | 18 | Baixo-Médio |

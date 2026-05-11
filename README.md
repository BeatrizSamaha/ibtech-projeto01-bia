
# ibtech-projeto01-bia

**Beatriz Samaha** · IbTech · Trilha Frontend · Projeto 01 · 2026.1

> Cartão de visita pessoal feito em HTML, CSS e JavaScript puros.  
> Sem framework. Sem dependência. Vanilla.

---

## Sobre

O site é um cartão de visita pessoal com estética editorial bold — rosa, preto e creme — inspirado no layout Blair Ornelas e nos efeitos interativos do site do Lando Norris.

A ideia era ir além de um site estático: cada detalhe tem intenção, de como o cursor se comporta até como o texto entra na tela.

---

## Stack

![HTML5](https://img.shields.io/badge/HTML5-0D0D0D?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-FF1B8D?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-0D0D0D?style=flat-square&logo=javascript&logoColor=white)
![Python](https://img.shields.io/badge/Python-FF1B8D?style=flat-square&logo=python&logoColor=white)
![C](https://img.shields.io/badge/C%2FC%2B%2B-0D0D0D?style=flat-square&logo=c&logoColor=white)
![Java](https://img.shields.io/badge/Java-FF1B8D?style=flat-square&logo=openjdk&logoColor=white)
![Git](https://img.shields.io/badge/Git-0D0D0D?style=flat-square&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-FF1B8D?style=flat-square&logo=github&logoColor=white)
![VS Code](https://img.shields.io/badge/VS%20Code-0D0D0D?style=flat-square&logo=visualstudiocode&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-FF1B8D?style=flat-square&logo=figma&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-0D0D0D?style=flat-square&logo=linux&logoColor=white)

| Camada | Tecnologia |
|--------|-----------|
| Estrutura | HTML5 semântico · Open Graph · Meta tags |
| Estilo | CSS3 — variáveis, Grid, Flexbox, animações |
| Lógica | JavaScript ES2022 — vanilla, zero libs |
| Tipografia | Archivo Black · Syne · DM Sans — Google Fonts |

---

## Interações JavaScript

**Obrigatórias**
- Animação de entrada com `IntersectionObserver` — cada seção entra uma única vez ao aparecer no viewport
- Copiar e-mail via `Clipboard API` com fallback `execCommand` e feedback visual

**Extras**
- Cursor rosa customizado com blob que segue o mouse com delay suave
- Efeito magnético nos links de contato e navegação
- Text scramble no subtítulo do hero ao hover — as letras embaralham e revelam
- Faixa de texto correndo (`marquee`) entre seções com nome e conquistas
- Efeito glitch no nome ao hover
- Flip cards na seção de hobbies com animação de rotação 3D
- Nav com link ativo destacado conforme scroll
- WhatsApp direto via `wa.me` no contato

---

## Decisões de projeto

**Layout editorial**
Inspirado no template Blair Ornelas do Canva — hero split com mosaico de células geométricas, starburst girando com `repeating-conic-gradient`, blobs orgânicos em CSS puro.

**Tipografia**
Tres fontes com papéis bem definidos: Archivo Black para impacto, Syne para os cards, DM Sans para leitura. Nenhum peso desnecessário carregado.

**Interatividade sem biblioteca**
Todos os efeitos — magnético, scramble, blob cursor, glitch — foram implementados em JavaScript vanilla. Nenhuma linha de GSAP ou jQuery.

**Zero dependências**
O site funciona offline. Abre o `index.html` e pronto.

---

## Estrutura

```
ibtech-projeto01-bia/
├── index.html      — marcação semântica, Open Graph, nav, hero, seções
├── style.css       — toda a estilização, animações e responsividade
├── script.js       — todas as interações e efeitos
└── README.md
```

---

## Como rodar

```bash
# opção 1 — abre direto no navegador
open index.html

# opção 2 — servidor local
python3 -m http.server 8000
# acesse http://localhost:8000

# opção 3
npx serve .
```

---

## Acessibilidade

- `lang="pt-BR"` e hierarquia de títulos respeitada
- `aria-live` para anúncios de cópia
- `prefers-reduced-motion` respeitado — animações desativadas quando necessário
- Skip link no topo
- Links externos com `rel="noopener noreferrer"`
- Foco visível em todos os elementos interativos

---

## Contato

**Beatriz Samaha de Faria Garcia**

- biagarcia2806@gmail.com
- [linkedin.com/in/beatriz-samaha-29a861358](https://www.linkedin.com/in/beatriz-samaha-29a861358)
- [github.com/beatrizsamaha](https://github.com/beatrizsamaha)

---

*MIT License · © 2026 Beatriz Samaha de Faria Garcia*
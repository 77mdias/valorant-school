# 🎮 Valorant Academy - Plataforma de Aprendizado

Uma plataforma moderna e responsiva para aprendizado de Valorant, com design inspirado no Crunchyroll, paleta de cores do Twitch e elementos do Spotify. Desenvolvida com arquitetura modular e sistema de temas avançado.

## 🚀 Tecnologias

- **HTML5** - Estrutura semântica e acessível
- **Sass/SCSS** - Estilização modular com sintaxe moderna (@use)
- **JavaScript ES6+** - Módulos especializados e programação orientada a objetos
- **Bootstrap 5** - Framework CSS integrado
- **Vite** - Build tool moderna e rápida
- **Font Awesome** - Biblioteca de ícones
- **CSS Grid & Flexbox** - Layout responsivo avançado

## 🎨 Design & UX

### Inspirações de Design

- **Layout**: Crunchyroll (hero sections e grid de cards)
- **Cores**: Twitch (paleta roxa e modo escuro)
- **Componentes**: Spotify (sidebar, navegação, cards)

### Características Visuais

- ✨ **Sistema de Temas**: Modo claro e escuro com transições suaves
- 🌈 **Glassmorphism**: Efeitos de vidro e blur no tema claro
- 🎭 **Animações**: Hover effects, shimmer, transformações 3D
- 🎨 **Gradientes**: Backgrounds dinâmicos e efeitos visuais
- 📱 **Responsivo**: Mobile-first design (em desenvolvimento)
- ♿ **Acessível**: Estados de foco, navegação por teclado

## 📁 Estrutura do Projeto

```
valorant-academy/
├── src/                           # Código fonte
│   ├── index.html                # Página principal
│   ├── assets/                   # Recursos estáticos
│   │   ├── logoPage/            # Logos e ícones
│   │   └── cards/               # Imagens dos cards
│   ├── scss/                    # Estilos Sass organizados
│   │   ├── main.scss           # Arquivo principal
│   │   ├── _bootstrap.scss     # Configuração Bootstrap
│   │   ├── components/         # Componentes reutilizáveis
│   │   │   ├── _custom.scss   # Estilos customizados
│   │   │   ├── _hero.scss     # Seção hero
│   │   │   └── _cards.scss    # Cards de lições
│   │   ├── layout/             # Layout da aplicação
│   │   │   ├── _sidebar.scss  # Sidebar de navegação
│   │   │   └── _topbar.scss   # Barra superior
│   │   └── utils/              # Utilitários
│   │       └── _variables.scss # Variáveis globais
│   └── js/                     # JavaScript modular
│       ├── main.js            # Arquivo principal
│       └── modules/           # Módulos especializados
│           ├── SwitchTheme.js # Sistema de temas
│           └── DropdownFocus.js # Gerenciamento de foco
├── public/                     # Arquivos públicos
│   └── img/                   # Imagens placeholder
├── dist/                      # Build de produção
├── package.json              # Dependências e scripts
├── vite.config.js            # Configuração do Vite
└── README.md                 # Este arquivo
```

## 🛠️ Instalação e Uso

### Pré-requisitos

- **Node.js** (v16 ou superior)
- **npm** ou **yarn**

### Instalação

```bash
# Clone o repositório
git clone https://github.com/77mdias/valorant-academy.git

# Entre no diretório
cd valorant-academy

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Acesse: http://localhost:3000
```

### Build para Produção

```bash
# Gerar build otimizado
npm run build

# Preview do build
npm run preview

# Lint e formatação
npm run lint
npm run format
```

## 🎯 Funcionalidades

### ✅ Implementadas

#### **Interface & Navegação**

- [x] Sidebar de navegação estilo Spotify
- [x] Topbar com busca e dropdown de perfil
- [x] Menu dropdown com opções completas
- [x] Navegação por teclado e acessibilidade

#### **Sistema de Temas**

- [x] Modo claro e escuro
- [x] Transições suaves entre temas
- [x] Persistência no localStorage
- [x] Detecção de preferência do sistema
- [x] Efeitos glassmorphism no tema claro

#### **Componentes Interativos**

- [x] Hero section com call-to-action
- [x] Grid de cards responsivo
- [x] Indicadores de dificuldade
- [x] Botões com animações avançadas
- [x] Estados de hover e foco

#### **Arquitetura**

- [x] Módulos JavaScript especializados
- [x] SCSS organizado em componentes
- [x] Sistema de build otimizado
- [x] Gerenciamento de estado

### 🚧 Próximas Features

#### **Páginas & Conteúdo**

- [ ] Página de Agentes (perfis, habilidades, dicas)
- [ ] Página de Funções (Duelista, Controlador, etc.)
- [ ] Página de Mapas (layouts, callouts, estratégias)
- [ ] Página de Configurações (perfil, preferências)

#### **Funcionalidades Avançadas**

- [ ] Sistema de autenticação
- [ ] Player de vídeo integrado
- [ ] Filtros por agente/função/dificuldade
- [ ] Sistema de progresso e conquistas
- [ ] Favoritos e playlists personalizadas
- [ ] Certificados de conclusão

#### **Mobile & Responsividade**

- [ ] Refatoração mobile-first
- [ ] Menu hambúrguer para mobile
- [ ] Gestos touch e swipe
- [ ] PWA (Progressive Web App)

## 🎨 Sistema de Cores

### Tema Escuro (Padrão)

```scss
// Cores principais (Twitch)
$twitch-purple: #9146ff;
$twitch-dark: #0e0e10;
$twitch-darker: #18181b;
$twitch-card: #1f1f23;

// Cores de destaque
$accent-blue: #00a8ff;
$accent-red: #ff4655;
$text-light: #efeff1;
$text-gray: #adadb8;
```

### Tema Claro

```scss
// Cores base
$light-bg: #f8fafc;
$light-card: rgba(255, 255, 255, 0.8);
$light-text: #1e293b;
$light-muted: #64748b;

// Glassmorphism
backdrop-filter: blur(16px);
background: rgba(255, 255, 255, 0.1);
```

## 📱 Responsividade

- **Desktop (1200px+)**: Layout completo com sidebar fixa
- **Tablet (768px-1199px)**: Sidebar colapsável
- **Mobile (320px-767px)**: Navigation drawer (em desenvolvimento)

### Breakpoints

```scss
$mobile: 320px;
$tablet: 768px;
$desktop: 1024px;
$large: 1200px;
```

## 🏗️ Arquitetura Modular

### JavaScript Modules

#### **SwitchTheme.js**

- Gerenciamento de temas
- Persistência de preferências
- Animações de transição
- Eventos customizados

#### **DropdownFocus.js**

- Controle de foco do dropdown
- Gerenciamento de estados
- Integração com Bootstrap
- Acessibilidade

### SCSS Organization

#### **Components**

- Componentes reutilizáveis
- Estilos específicos de elementos
- Animações e efeitos

#### **Layout**

- Estrutura da página
- Posicionamento de elementos
- Responsive design

#### **Utils**

- Variáveis globais
- Mixins e funções
- Configurações

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'feat: Adicionar nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

### Padrões de Commit

```
feat: nova funcionalidade
fix: correção de bug
docs: documentação
style: formatação
refactor: refatoração
test: testes
chore: manutenção
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🎮 Sobre o Valorant

Valorant é um jogo de tiro tático em primeira pessoa desenvolvido pela Riot Games. Esta plataforma foi criada para ajudar jogadores a melhorar suas habilidades através de conteúdo educativo estruturado e interativo.

## 🏆 Créditos

- **Desenvolvedor**: [@77mdias](https://github.com/77mdias)
- **Design**: Inspirado em Crunchyroll, Twitch e Spotify
- **Tecnologias**: Vite, Sass, Bootstrap, JavaScript ES6+

---

**Desenvolvido com 💜 para a comunidade Valorant**

_"Precision is the difference between a butcher and a surgeon"_ - Sova

# 🎮 Valorant Learning Platform

Uma plataforma moderna e responsiva para aprendizado de Valorant, com design inspirado no Crunchyroll, paleta de cores do Twitch e elementos do Spotify.

## 🚀 Tecnologias

- **HTML5** - Estrutura semântica
- **Sass/SCSS** - Estilização avançada com módulos
- **Vite** - Build tool moderna e rápida
- **Font Awesome** - Ícones
- **CSS Grid & Flexbox** - Layout responsivo

## 🎨 Design

### Inspirações

- **Layout**: Crunchyroll (hero sections e cards)
- **Cores**: Twitch (roxos e modo escuro)
- **Componentes**: Spotify (sidebar, botões arredondados, cards limpos)

### Características

- ✨ Gradientes e efeitos blur
- 🌙 Modo escuro com paleta roxa
- 📱 Totalmente responsivo
- 🎯 Focado em gamers
- 🚀 Animações suaves

## 📁 Estrutura do Projeto

```
valorant-learning-platform/
├── index.html              # Página principal
├── package.json           # Dependências e scripts
├── vite.config.js         # Configuração do Vite
├── scss/                  # Estilos Sass
│   ├── main.scss         # Arquivo principal
│   ├── _variables.scss   # Variáveis (cores, gradientes)
│   ├── _sidebar.scss     # Sidebar estilo Spotify
│   ├── _topbar.scss      # Barra superior
│   ├── _hero.scss        # Seção hero
│   └── _cards.scss       # Cards de lições
└── public/
    └── img/              # Imagens e assets
```

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/valorant-learning-platform.git

# Entre no diretório
cd valorant-learning-platform

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
```

## 🖼️ Assets Necessários

Adicione as seguintes imagens na pasta `public/img/`:

- `valorant-logo.png` - Logo do Valorant
- `valorant-banner.jpg` - Banner hero (1920x1080)
- `jett-card.jpg` - Imagem da Jett (300x400)
- `sova-card.jpg` - Imagem do Sova (300x400)
- `user-avatar.jpg` - Avatar do usuário (100x100)

## 🎯 Funcionalidades

### Implementadas

- [x] Sidebar de navegação estilo Spotify
- [x] Barra de busca funcional
- [x] Hero section com banner
- [x] Grid de cards responsivo
- [x] Indicadores de dificuldade
- [x] Botões de play com hover
- [x] Design totalmente responsivo

### Próximas Features

- [ ] Sistema de autenticação
- [ ] Player de vídeo integrado
- [ ] Filtros por agente/função
- [ ] Sistema de progresso
- [ ] Modo claro/escuro toggle
- [ ] Favoritos e playlist

## 🎨 Paleta de Cores

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

## 📱 Responsividade

- **Desktop**: Layout completo com sidebar
- **Tablet**: Sidebar colapsável
- **Mobile**: Navigation drawer

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🎮 Sobre o Valorant

Valorant é um jogo de tiro tático em primeira pessoa desenvolvido pela Riot Games. Esta plataforma foi criada para ajudar jogadores a melhorar suas habilidades através de conteúdo educativo estruturado.

---

**Desenvolvido com 💜 para a comunidade Valorant**

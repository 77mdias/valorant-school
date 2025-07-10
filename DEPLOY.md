# Deploy no Netlify - Valorant Ace School

## 🚀 Configuração para Deploy

### 1. Arquivos de Configuração

- ✅ `netlify.toml` - Configuração principal do Netlify
- ✅ `package.json` - Scripts de build configurados
- ✅ `vite.config.js` - Configuração do Vite para múltiplas páginas

### 2. Como Fazer o Deploy

#### Via Git (Recomendado)

1. **Conecte seu repositório no Netlify:**
   - Acesse [netlify.com](https://netlify.com)
   - Clique em "New site from Git"
   - Conecte seu repositório GitHub/GitLab

2. **Configurações automáticas:**
   - Build command: `npm run build` (já configurado)
   - Publish directory: `dist` (já configurado)
   - Node version: `18` (já configurado)

#### Via CLI do Netlify

```bash
# Instalar o CLI do Netlify
npm install -g netlify-cli

# Fazer login
netlify login

# Build do projeto
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### 3. Páginas Disponíveis

O site terá as seguintes rotas configuradas:

- **Home**: `/` → `index.html`
- **Agentes**: `/agentes` → `pages/agentes.html`
- **Funções**: `/funcoes` → `pages/funcoes.html`
- **Mapas**: `/mapas` → `pages/mapas.html`
- **Configurações**: `/configuracoes` → `pages/configuracoes.html`
- **Perfil**: `/perfil` → `pages/perfil.html`
- **Progresso**: `/progresso` → `pages/progresso.html`
- **Favoritas**: `/favoritas` → `pages/favoritas.html`
- **Certificados**: `/certificados` → `pages/certificados.html`
- **Rank**: `/rank` → `pages/rank.html`
- **Estatísticas**: `/estatisticas` → `pages/estatisticas.html`

### 4. Otimizações Incluídas

#### Cache Headers

- Assets estáticos: 1 ano de cache
- Imagens: Cache otimizado
- CSS/JS: Cache para performance

#### Redirects

- URLs amigáveis configuradas
- Fallback para 404 personalizado
- Suporte a rotas diretas

### 5. Verificações Pré-Deploy

Antes de fazer o deploy, certifique-se de:

```bash
# 1. Instalar dependências
npm install

# 2. Testar build local
npm run build

# 3. Verificar se a pasta dist foi criada
ls -la dist/

# 4. Testar localmente
npm run preview
```

### 6. Variáveis de Ambiente

Não há variáveis de ambiente necessárias para este projeto.

### 7. Domínio Personalizado

Para configurar um domínio personalizado:

1. Vá para o painel do Netlify
2. Domain settings → Add custom domain
3. Configure os DNS records conforme instruções

### 8. Troubleshooting

#### Problemas Comuns:

**Build falha:**

```bash
# Limpar cache e reinstalar
rm -rf node_modules dist
npm install
npm run build
```

**Assets não carregam:**

- Verifique se os caminhos estão relativos
- Confirme se as imagens estão na pasta `src/assets/`

**Páginas 404:**

- Verifique se todas as páginas estão listadas no `vite.config.js`
- Confirme se os redirects estão configurados no `netlify.toml`

## 📝 Notas Importantes

- O projeto usa **Vite** como bundler
- **SCSS** para estilização
- **Bootstrap 5** para componentes
- **Font Awesome** para ícones
- Estrutura **multi-page** com roteamento configurado

## 🎯 URLs de Exemplo

Após o deploy, o site estará disponível em:

- `https://seu-site.netlify.app`
- `https://seu-site.netlify.app/agentes`
- `https://seu-site.netlify.app/perfil`
- etc.

---

**Projeto:** Valorant Ace School  
**Desenvolvido por:** 77mdias  
**Deploy:** Netlify

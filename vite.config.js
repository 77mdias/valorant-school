import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  root: 'src',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "sass:math";`,
        quietDeps: true,
        silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin', 'color-functions'],
        includePaths: ['node_modules']
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    rollupOptions: {
      input: {
        main: 'src/index.html',
        agentes: 'src/pages/agentes.html',
        funcoes: 'src/pages/funcoes.html',
        mapas: 'src/pages/mapas.html',
        configuracoes: 'src/pages/configuracoes.html',
        perfil: 'src/pages/perfil.html',
        progresso: 'src/pages/progresso.html',
        favoritas: 'src/pages/favoritas.html',
        certificados: 'src/pages/certificados.html',
        rank: 'src/pages/rank.html',
        estatisticas: 'src/pages/estatisticas.html'
      }
    },
    outDir: '../dist',
    assetsDir: 'assets'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}) 
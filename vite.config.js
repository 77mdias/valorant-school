import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "sass:math";`,
        quietDeps: true,
        silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin', 'color-functions']
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
        main: 'src/index.html'
      }
    },
    outDir: '../dist',
    assetsDir: 'assets'
  }
}) 
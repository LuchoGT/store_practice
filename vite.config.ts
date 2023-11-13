import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    manifest: {
      name: 'Mi Aplicación PWA',
      short_name: 'PWA',
      description: 'Una Progressive Web App de ejemplo',
      start_url: '/index.html',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#000000',
      icons: [
        {
          src: '/path/to/icon.png',
          sizes: '192x192',
          type: 'image/png',
        },
      ],
    },
  })],
  assetsInclude: ['**/*.svg'],
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets',
      '@modules': '/src/modules',
      '@router': '/src/router',
      '@services': '/src/services',
      '@theme': '/src/theme',
      '@components': '/src/components',
      '@contexts': '/src/contexts',
      '@hooks': '/src/hooks',
      '@interfaces': '/src/interfaces'
    },
  },
  css:{
    preprocessorOptions:{
      scss: {
        additionalData: `@import './src/theme/App';`,
      },
    }
  }
})

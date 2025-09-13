import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// We serve under /secura-pwa/ both in dev and when deploying to GitHub Pages.
const base = '/secura-pwa/'

export default defineConfig({
  base,
  plugins: [
    react(),
    VitePWA({
      // injectRegister: 'auto',
      registerType: 'autoUpdate',
      devOptions: { enabled: true }, // enable PWA in dev so we can test Install
      includeAssets: ['icons/icon-192.png', 'icons/icon-512.png'],
      manifest: {
        id: '/secura-pwa/',          // keep trailing slash for consistency
        name: 'Secura',
        short_name: 'Secura',
        description: 'Secura — explainable safety copilot (PWA)',
        start_url: '/secura-pwa/',   // MUST match how you open the app
        scope: '/secura-pwa/',       // MUST match
        display: 'standalone',
        theme_color: '#0ea5e9',
        background_color: '#0b1220',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      }
    })
  ]
})

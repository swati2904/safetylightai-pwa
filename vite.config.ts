import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'
  const base = isDev ? '/' : '/safetylightai-pwa/'

  return {
    base,
    plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        devOptions: { enabled: true },
        includeAssets: ['icons/icon-192.png','icons/icon-512.png'],
        manifest: {
          id: '/safetylightai',
          name: 'SafetyLight AI',
          short_name: 'SafetyLight',
          description: 'SafetyLight AI — explainable safety copilot (PWA)',
          start_url: isDev ? '/' : '/safetylightai-pwa/',
          scope: isDev ? '/' : '/safetylightai-pwa/',
          display: 'standalone',
          theme_color: '#0ea5e9',
          background_color: '#0b1220',
          icons: [
            { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
            { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' }
          ]
        },
        workbox: { globPatterns: ['**/*.{js,css,html,ico,png,svg}'] }
      })
    ]
  }
})

import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: { 'content-gmail': 'src/content-gmail.ts' },
      output: { entryFileNames: `[name].js` }
    }
  },
  publicDir: 'public'
})

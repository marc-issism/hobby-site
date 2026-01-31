import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "https:/marc-issism.github.io/hobby-site",
  plugins: [react()],
})

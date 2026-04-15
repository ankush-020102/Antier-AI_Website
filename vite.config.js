import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
      port: 5173,
        allowedHosts: ['deangelo-brandless-carmina.ngrok-free.dev']
    // allowedHosts: 'all' // 👈 THIS fixes 403 with ngrok
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/GroceryWatch/',
  plugins: [
    react(),
    // Dev-server middleware to set a permissive CSP for framing diagrams.net during local development.
    {
      name: 'dev-csp-headers',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          // Allow framing from app.diagrams.net for interactive embeds in dev only.
          res.setHeader(
            'Content-Security-Policy',
            "default-src 'self' 'unsafe-inline' 'unsafe-eval'; frame-ancestors 'self' https://app.diagrams.net;"
          )
          next()
        })
      },
    },
  ],
})

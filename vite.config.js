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
          // Allow diagrams.net to frame this app, and allow this app to embed
          // Google Docs, Drive, and Slides used by the labs and presentations pages.
          res.setHeader(
            'Content-Security-Policy',
            "default-src 'self' 'unsafe-inline' 'unsafe-eval'; frame-src 'self' https://docs.google.com https://drive.google.com https://app.diagrams.net; frame-ancestors 'self' https://app.diagrams.net;"
          )
          next()
        })
      },
    },
  ],
})

import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const devApiKey = env.OPENROUTER_API_KEY || env.VITE_OPENROUTER_API_KEY || ''

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api/openrouter': {
          target: 'https://openrouter.ai/api/v1',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/openrouter/, ''),
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq, req) => {
              if (!req.headers['authorization'] && devApiKey) {
                proxyReq.setHeader('Authorization', `Bearer ${devApiKey}`)
              }
            })
          },
        },
      },
    },
  }
})



import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
  ],
  optimizeDeps: {
    include: ['react-chat-engine'],
  },
  build: {
    chunkSizeWarningLimit: 921600,  // Set your desired chunk size limit here
  },
});

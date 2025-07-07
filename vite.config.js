// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // You might need to add something like this
    // Make sure it matches what env.mjs expects
    '__DEFINES__': JSON.stringify({ /* your definitions here */ }),
    // Or if it's related to process.env
    // 'process.env': process.env
  },
});
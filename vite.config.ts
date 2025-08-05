// vite.config.ts
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'; // The working plugin for you
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    tailwindcss(), // Use it like this
    react(),
  ],
});
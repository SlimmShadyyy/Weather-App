import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Weather-App/',  // Add this line to fix GitHub Pages deployment
});
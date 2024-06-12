import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './tic-tac-toe.github.io',
  plugins: [react()],
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import eslint from '@rollup/plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  plugins: [
    react(),
    {
      ...eslint({
        include: "src/**/*.+(js|jsx|ts|tsx)",
      }),
      enforce: "pre",
      apply: "build",
    },
  ],
});

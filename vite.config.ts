import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// 项目部署的相对 url。仓库名不是 resume 时改这里。
const baseUrl = '/resume/';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: baseUrl,
  server: {
    open: baseUrl
  }
});

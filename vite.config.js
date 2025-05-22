import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
})
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import tailwindcss from '@tailwindcss/vite';

// export default defineConfig({
//   content: ['./src/**/*.{js,jsx,ts,tsx}'],
//   theme: {
//     extend: {
//       fontFamily: {
//         custom: ['myFirstFont', 'Helvetica', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [react(), tailwindcss(),],
//   server: {
//     proxy: {
//       '/imagekit': {
//         target: 'https://media-hosting.imagekit.io',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/imagekit/, ''),
   
//       },
//     },
//   },
// });
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ardnoan.com',
  output: 'static',
  integrations: [],
  // Tambahkan integrasi Tailwind jika ingin menggunakan Tailwind CSS
  // integrations: [tailwind()],
});
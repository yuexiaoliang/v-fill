import { defineConfig } from 'vite';
import path from 'node:path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    outDir: path.resolve(__dirname, './lib'),
    lib: {
      entry: path.resolve(__dirname, './src/main.ts'),
      formats: ['cjs', 'es'],
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue']
    }
  },
  plugins: [
    dts({
      include: ['src/main.ts'],
      insertTypesEntry: true
    })
  ]
});

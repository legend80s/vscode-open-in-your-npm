/// <reference types="vitest" />
import { defineConfig } from 'vite';
// import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      statements: 96,
      branches: 98,
      functions: 89,
      lines: 96,
    },
    // deps: {
    //   inline: [
    //     /_@alipay_limo-core@\d+\.\d+\.\d+@@alipay/,
    //     /@alipay\/limo-core@\d+\.\d+\.\d+/
    //   ],
    // },
    // setupFiles: ['./test/vitest-setup.js'], 按需开启
  },
  // resolve: { alias: { '@': path.resolve('src') } }, 按需开启
});

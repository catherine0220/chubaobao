import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import path from 'path' // 👈 加上这个

export default defineConfig({
  plugins: [vue(), UnoCSS()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 👈 重点就在这里
    },
    extensions: ['.js', '.vue', '.json']
  }
})

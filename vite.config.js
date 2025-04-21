import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        math: "always",
        javascriptEnabled: true,
        globalVars: {},
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // 配置 @ 别名指向 src 目录
    },
  },
  server: {
    open: true, // 是否自动在浏览器打开
    port: 3210, //端口号
    host: "localhost",
    proxy: {
      "/api": {
        target: "http://api.ilkhome.com", //dev环境
        changeOrigin: true, //是否跨域
        rewrite: (path) => path.replace(/^\/api/, "/api/index"),
      },
    },
  },
});

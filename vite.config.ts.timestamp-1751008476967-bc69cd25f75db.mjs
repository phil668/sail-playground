// vite.config.ts
import { defineConfig } from "file:///Users/liuyue/i/work-project/sail-playground/node_modules/.pnpm/vite@5.4.19_sass-embedded@1.89.2_terser@5.42.0/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/liuyue/i/work-project/sail-playground/node_modules/.pnpm/@vitejs+plugin-vue@5.2.4_vite@5.4.19_vue@3.5.16/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import UnoCSS from "file:///Users/liuyue/i/work-project/sail-playground/node_modules/.pnpm/unocss@65.5.0_postcss@8.5.4_vite@5.4.19_vue@3.5.16/node_modules/unocss/dist/vite.mjs";
import vueJsx from "file:///Users/liuyue/i/work-project/sail-playground/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.2.0_vite@5.4.19_vue@3.5.16/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import legacy from "file:///Users/liuyue/i/work-project/sail-playground/node_modules/.pnpm/@vitejs+plugin-legacy@6.1.1_terser@5.42.0_vite@5.4.19/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    vueJsx(),
    legacy({
      targets: ["defaults", "not IE 11"]
    })
  ],
  server: {
    allowedHosts: ["bs-local.com"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbGl1eXVlL2kvd29yay1wcm9qZWN0L3NhaWwtcGxheWdyb3VuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2xpdXl1ZS9pL3dvcmstcHJvamVjdC9zYWlsLXBsYXlncm91bmQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2xpdXl1ZS9pL3dvcmstcHJvamVjdC9zYWlsLXBsYXlncm91bmQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XG5pbXBvcnQgVW5vQ1NTIGZyb20gXCJ1bm9jc3Mvdml0ZVwiO1xuaW1wb3J0IHZ1ZUpzeCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlLWpzeFwiO1xuaW1wb3J0IGxlZ2FjeSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tbGVnYWN5XCI7XG5cbi8vIGh0dHBzOi8vdml0ZS5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIFVub0NTUygpLFxuICAgIHZ1ZUpzeCgpLFxuICAgIGxlZ2FjeSh7XG4gICAgICB0YXJnZXRzOiBbXCJkZWZhdWx0c1wiLCBcIm5vdCBJRSAxMVwiXSxcbiAgICB9KSxcbiAgXSxcbiAgc2VydmVyOiB7XG4gICAgYWxsb3dlZEhvc3RzOiBbXCJicy1sb2NhbC5jb21cIl0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc1QsU0FBUyxvQkFBb0I7QUFDblYsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxZQUFZO0FBR25CLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFNBQVMsQ0FBQyxZQUFZLFdBQVc7QUFBQSxJQUNuQyxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sY0FBYyxDQUFDLGNBQWM7QUFBQSxFQUMvQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==

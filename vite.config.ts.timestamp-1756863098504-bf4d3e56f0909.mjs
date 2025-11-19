// vite.config.ts
import { defineConfig } from "file:///Users/liuyue/i/work-project/sail-playground/node_modules/.pnpm/vite@5.4.19_lightningcss@1.30.1_sass-embedded@1.91.0_sass@1.91.0_terser@5.43.1/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/liuyue/i/work-project/sail-playground/node_modules/.pnpm/@vitejs+plugin-vue@5.2.4_vite@5.4.19_lightningcss@1.30.1_sass-embedded@1.91.0_sass@1.91_92aef8a866b9cb7d6205fa6e2bf40e3a/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import UnoCSS from "file:///Users/liuyue/i/work-project/sail-playground/node_modules/.pnpm/unocss@65.5.0_postcss@8.5.6_vite@5.4.19_lightningcss@1.30.1_sass-embedded@1.91.0_sass@1_499a83423b282a6f134d4a311545b689/node_modules/unocss/dist/vite.mjs";
import vueJsx from "file:///Users/liuyue/i/work-project/sail-playground/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.2.0_vite@5.4.19_lightningcss@1.30.1_sass-embedded@1.91.0_sass@_ff77d1fd2624fd496693eaeef56b7ec4/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import legacy from "file:///Users/liuyue/i/work-project/sail-playground/node_modules/.pnpm/@vitejs+plugin-legacy@6.1.1_terser@5.43.1_vite@5.4.19_lightningcss@1.30.1_sass-embedded_5915406f3b965c793f180edf64029dda/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
import tailwindcss from "file:///Users/liuyue/i/work-project/sail-playground/node_modules/.pnpm/@tailwindcss+vite@4.1.12_vite@5.4.19_lightningcss@1.30.1_sass-embedded@1.91.0_sass@1.91.0_terser@5.43.1_/node_modules/@tailwindcss/vite/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "/Users/liuyue/i/work-project/sail-playground";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    vueJsx(),
    legacy({
      targets: ["defaults", "not IE 11"]
    }),
    tailwindcss()
  ],
  server: {
    allowedHosts: ["bs-local.com"]
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbGl1eXVlL2kvd29yay1wcm9qZWN0L3NhaWwtcGxheWdyb3VuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2xpdXl1ZS9pL3dvcmstcHJvamVjdC9zYWlsLXBsYXlncm91bmQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2xpdXl1ZS9pL3dvcmstcHJvamVjdC9zYWlsLXBsYXlncm91bmQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XG5pbXBvcnQgVW5vQ1NTIGZyb20gXCJ1bm9jc3Mvdml0ZVwiO1xuaW1wb3J0IHZ1ZUpzeCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlLWpzeFwiO1xuaW1wb3J0IGxlZ2FjeSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tbGVnYWN5XCI7XG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSBcIkB0YWlsd2luZGNzcy92aXRlXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG4vLyBodHRwczovL3ZpdGUuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBVbm9DU1MoKSxcbiAgICB2dWVKc3goKSxcbiAgICBsZWdhY3koe1xuICAgICAgdGFyZ2V0czogW1wiZGVmYXVsdHNcIiwgXCJub3QgSUUgMTFcIl0sXG4gICAgfSksXG4gICAgdGFpbHdpbmRjc3MoKSxcbiAgXSxcbiAgc2VydmVyOiB7XG4gICAgYWxsb3dlZEhvc3RzOiBbXCJicy1sb2NhbC5jb21cIl0sXG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzVCxTQUFTLG9CQUFvQjtBQUNuVixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sWUFBWTtBQUNuQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxVQUFVO0FBTmpCLElBQU0sbUNBQW1DO0FBU3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFNBQVMsQ0FBQyxZQUFZLFdBQVc7QUFBQSxJQUNuQyxDQUFDO0FBQUEsSUFDRCxZQUFZO0FBQUEsRUFDZDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sY0FBYyxDQUFDLGNBQWM7QUFBQSxFQUMvQjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==

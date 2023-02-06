// vite.config.ts
import { ViteWebfontDownload } from "file:///D:/New%20Projects/cb-dev-main/phq-mailing-system/node_modules/vite-plugin-webfont-dl/dist/index.js";
import { chunkSplitPlugin } from "file:///D:/New%20Projects/cb-dev-main/phq-mailing-system/node_modules/vite-plugin-chunk-split/dist/index.js";
import { defineConfig } from "file:///D:/New%20Projects/cb-dev-main/phq-mailing-system/node_modules/vite/dist/node/index.js";
import hotExport from "file:///D:/New%20Projects/cb-dev-main/phq-mailing-system/node_modules/vite-plugin-hot-export/dist/index.mjs";
import path from "path";
import react from "file:///D:/New%20Projects/cb-dev-main/phq-mailing-system/node_modules/@vitejs/plugin-react/dist/index.mjs";
import viteCompression from "file:///D:/New%20Projects/cb-dev-main/phq-mailing-system/node_modules/vite-plugin-compression/dist/index.mjs";
import viteImagemin from "file:///D:/New%20Projects/cb-dev-main/phq-mailing-system/node_modules/vite-plugin-imagemin/dist/index.mjs";
import vitePluginBrowserSync from "file:///D:/New%20Projects/cb-dev-main/phq-mailing-system/node_modules/vite-plugin-browser-sync/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\New Projects\\cb-dev-main\\phq-mailing-system";
var vite_config_default = defineConfig({
  resolve: {
    alias: [
      {
        find: "components",
        replacement: path.resolve(__vite_injected_original_dirname, "./src/components")
      },
      {
        find: "assets",
        replacement: path.resolve(__vite_injected_original_dirname, "./src/assets")
      },
      {
        find: "global",
        replacement: path.resolve(__vite_injected_original_dirname, "./src/global")
      },
      {
        find: "router",
        replacement: path.resolve(__vite_injected_original_dirname, "./src/router")
      }
    ]
  },
  plugins: [
    react(),
    hotExport(),
    chunkSplitPlugin(),
    ViteWebfontDownload(),
    vitePluginBrowserSync(),
    viteCompression({
      algorithm: "brotliCompress",
      threshold: 100
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 30
      },
      pngquant: {
        quality: [0.7, 0.8],
        speed: 4
      },
      webp: {
        quality: 70
      },
      svgo: {
        multipass: true,
        plugins: [
          {
            name: "removeViewBox"
          },
          {
            name: "minifyStyles"
          },
          {
            name: "removeMetadata"
          },
          {
            name: "removeUselessStrokeAndFill"
          },
          {
            name: "reusePaths"
          },
          {
            name: "removeEmptyAttrs",
            active: true
          }
        ]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxOZXcgUHJvamVjdHNcXFxcY2ItZGV2LW1haW5cXFxccGhxLW1haWxpbmctc3lzdGVtXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxOZXcgUHJvamVjdHNcXFxcY2ItZGV2LW1haW5cXFxccGhxLW1haWxpbmctc3lzdGVtXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9OZXclMjBQcm9qZWN0cy9jYi1kZXYtbWFpbi9waHEtbWFpbGluZy1zeXN0ZW0vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBWaXRlV2ViZm9udERvd25sb2FkIH0gZnJvbSBcInZpdGUtcGx1Z2luLXdlYmZvbnQtZGxcIjtcclxuaW1wb3J0IHsgY2h1bmtTcGxpdFBsdWdpbiB9IGZyb20gXCJ2aXRlLXBsdWdpbi1jaHVuay1zcGxpdFwiO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgaG90RXhwb3J0IGZyb20gXCJ2aXRlLXBsdWdpbi1ob3QtZXhwb3J0XCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcclxuaW1wb3J0IHZpdGVDb21wcmVzc2lvbiBmcm9tIFwidml0ZS1wbHVnaW4tY29tcHJlc3Npb25cIjtcclxuaW1wb3J0IHZpdGVJbWFnZW1pbiBmcm9tIFwidml0ZS1wbHVnaW4taW1hZ2VtaW5cIjtcclxuaW1wb3J0IHZpdGVQbHVnaW5Ccm93c2VyU3luYyBmcm9tIFwidml0ZS1wbHVnaW4tYnJvd3Nlci1zeW5jXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBmaW5kOiBcImNvbXBvbmVudHNcIixcclxuICAgICAgICByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9jb21wb25lbnRzXCIpLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgZmluZDogXCJhc3NldHNcIixcclxuICAgICAgICByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9hc3NldHNcIiksXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBmaW5kOiBcImdsb2JhbFwiLFxyXG4gICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL2dsb2JhbFwiKSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGZpbmQ6IFwicm91dGVyXCIsXHJcbiAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvcm91dGVyXCIpLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICBob3RFeHBvcnQoKSxcclxuICAgIGNodW5rU3BsaXRQbHVnaW4oKSxcclxuICAgIFZpdGVXZWJmb250RG93bmxvYWQoKSxcclxuICAgIHZpdGVQbHVnaW5Ccm93c2VyU3luYygpLFxyXG4gICAgdml0ZUNvbXByZXNzaW9uKHtcclxuICAgICAgYWxnb3JpdGhtOiBcImJyb3RsaUNvbXByZXNzXCIsXHJcbiAgICAgIHRocmVzaG9sZDogMTAwLFxyXG4gICAgfSksXHJcbiAgICB2aXRlSW1hZ2VtaW4oe1xyXG4gICAgICBnaWZzaWNsZToge1xyXG4gICAgICAgIG9wdGltaXphdGlvbkxldmVsOiA3LFxyXG4gICAgICAgIGludGVybGFjZWQ6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpcG5nOiB7XHJcbiAgICAgICAgb3B0aW1pemF0aW9uTGV2ZWw6IDcsXHJcbiAgICAgIH0sXHJcbiAgICAgIG1vempwZWc6IHtcclxuICAgICAgICBxdWFsaXR5OiAzMCxcclxuICAgICAgfSxcclxuICAgICAgcG5ncXVhbnQ6IHtcclxuICAgICAgICBxdWFsaXR5OiBbMC43LCAwLjhdLFxyXG4gICAgICAgIHNwZWVkOiA0LFxyXG4gICAgICB9LFxyXG4gICAgICB3ZWJwOiB7XHJcbiAgICAgICAgcXVhbGl0eTogNzAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHN2Z286IHtcclxuICAgICAgICBtdWx0aXBhc3M6IHRydWUsXHJcbiAgICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcInJlbW92ZVZpZXdCb3hcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwibWluaWZ5U3R5bGVzXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcInJlbW92ZU1ldGFkYXRhXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcInJlbW92ZVVzZWxlc3NTdHJva2VBbmRGaWxsXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcInJldXNlUGF0aHNcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwicmVtb3ZlRW1wdHlBdHRyc1wiLFxyXG4gICAgICAgICAgICBhY3RpdmU6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzVSxTQUFTLDJCQUEyQjtBQUMxVyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLGVBQWU7QUFDdEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sV0FBVztBQUNsQixPQUFPLHFCQUFxQjtBQUM1QixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLDJCQUEyQjtBQVJsQyxJQUFNLG1DQUFtQztBQVV6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYSxLQUFLLFFBQVEsa0NBQVcsa0JBQWtCO0FBQUEsTUFDekQ7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDckQ7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDckQ7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDckQ7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLElBQ1YsaUJBQWlCO0FBQUEsSUFDakIsb0JBQW9CO0FBQUEsSUFDcEIsc0JBQXNCO0FBQUEsSUFDdEIsZ0JBQWdCO0FBQUEsTUFDZCxXQUFXO0FBQUEsTUFDWCxXQUFXO0FBQUEsSUFDYixDQUFDO0FBQUEsSUFDRCxhQUFhO0FBQUEsTUFDWCxVQUFVO0FBQUEsUUFDUixtQkFBbUI7QUFBQSxRQUNuQixZQUFZO0FBQUEsTUFDZDtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1AsbUJBQW1CO0FBQUEsTUFDckI7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQSxVQUFVO0FBQUEsUUFDUixTQUFTLENBQUMsS0FBSyxHQUFHO0FBQUEsUUFDbEIsT0FBTztBQUFBLE1BQ1Q7QUFBQSxNQUNBLE1BQU07QUFBQSxRQUNKLFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQSxNQUFNO0FBQUEsUUFDSixXQUFXO0FBQUEsUUFDWCxTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0UsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLFFBQVE7QUFBQSxVQUNWO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
      spa: {
        enabled: true,
        prerender: {
          enabled: true,
          crawlLinks: true,
          outputPath: "/index",
        },
      },
    }),
    viteReact(),
    nitro({
      output: {
        dir: "dist",
        serverDir: "dist/server",
        publicDir: "dist",
      },
    }),
  ],
});

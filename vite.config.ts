import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

export default defineConfig(({ command }) => {
  const isBuild = command === "build";
  return {
    server: {
      port: 3000,
    },
    plugins: [
      tsConfigPaths({ projects: ["./tsconfig.json"] }),
      tailwindcss(),
      tanstackStart({
        server: { entry: "server" },
        // Only prerender a static shell during `vite build` — enabling this
        // for `vite dev` too makes Nitro's dev server try to serve the SPA
        // shell asset before it exists, crashing with "path...undefined".
        ...(isBuild && {
          spa: {
            enabled: true,
            prerender: {
              enabled: true,
              crawlLinks: true,
              outputPath: "/index",
            },
          },
        }),
      }),
      viteReact(),
      nitro(
        isBuild
          ? {
              output: {
                dir: "dist",
                serverDir: "dist/server",
                publicDir: "dist",
              },
            }
          : {},
      ),
    ],
  };
});

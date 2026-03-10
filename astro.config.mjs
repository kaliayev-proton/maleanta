// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/pieces": "/",
    "/posts/[...slug]": "/",
    "/news": "/",
    "/blog": "/",
    "/authors": "/",
  },

  integrations: [mdx()],
  site: "https://maleanta-astro-blog.netlify.app",
});

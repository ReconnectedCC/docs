// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightTypeDoc, { typeDocSidebarGroup } from "starlight-typedoc";
import starlightLinksValidator from "starlight-links-validator";
import starlightLlmsTxt from "starlight-llms-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.reconnected.cc",
  integrations: [
    starlight({
      plugins: [
        // Generate the documentation.
        starlightTypeDoc({
          typeDoc: {
            compilerOptions: {
              typeRoots: ["ReconnectedChat/node_modules/@types"],
            },
          },
          entryPoints: ["./ReconnectedChat/src/index.ts"],
          tsconfig: "./ReconnectedChat/tsconfig.json",
          sidebar: {
            label: "ReconnectedChat Library",
            collapsed: true,
          },
          output: "reconnectedchat",
        }),

        starlightLinksValidator({
          //exclude: ["/ReconnectedChat/**/*", "reconnectedchat/classes/client/"],
          errorOnRelativeLinks: false,
        }),
        starlightLlmsTxt(),
      ],
      pagefind: true,
      title: "ReconnectedCC",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/ReconnectedCC/docs",
        },
      ],
      sidebar: [
        {
          label: "Frequently Asked Questions",
          autogenerate: { directory: "faq" },
        },
        {
          label: "Community Guides",
          autogenerate: { directory: "community" },
        },
        {
          label: "Mods",
          autogenerate: { directory: "mods" },
        },
        {
          label: "Chatbox",
          autogenerate: { directory: "chatbox" },
        },

        typeDocSidebarGroup,
      ],
    }),
  ],
});

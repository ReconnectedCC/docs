// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightTypeDoc, { typeDocSidebarGroup } from "starlight-typedoc";
import starlightLinksValidator from "starlight-links-validator";
import starlightLlmsTxt from "starlight-llms-txt";
import umami from "@yeskunall/astro-umami";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.reconnected.cc",
  image: {
    responsiveStyles: true,
    layout: "constrained",
  },
  integrations: [
    umami({ id: "fda22935-c8c7-4d6f-b8d3-975171fd7480", endpointUrl: "https://umami.knijn.one" }),

    starlight({
      logo: {
        src: "./src/assets/rCC.svg",
      },
      favicon: "/favicon.ico",
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/custom.css",
      ],
      description: "Documentation for ReconnectedCC Minecraft Server",
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
          //errorOnRelativeLinks: false,
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
          slug: "rules"
        },
        {
          label: "Frequently Asked Questions",
          items: [{ autogenerate: { directory: "faq" } }],
        },
        {
          label: "Community Guides",
          items: [{ autogenerate: { directory: "community" } }],
        },
        {
          label: "Mods",
          items: [{ autogenerate: { directory: "mods" } }],
        },
        {
          label: "Chatbox",
          items: [{ autogenerate: { directory: "chatbox" } }, typeDocSidebarGroup],
        },
        {
          label: "Kromer",
          items: [{ autogenerate: { directory: "kromer" } }],
        },
      ],
    }),
  ],
});

// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightTypeDoc, { typeDocSidebarGroup } from 'starlight-typedoc';
import starlightLinksValidator from 'starlight-links-validator';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.reconnected.cc',
	integrations: [
		starlight({
			plugins: [
				// Generate the documentation.
				starlightTypeDoc({
				  entryPoints: ['./ReconnectedChat/src/index.ts'],
				  tsconfig: './ReconnectedChat/tsconfig.json',
				  sidebar: {
					label: 'ReconnectedChat Library',
					collapsed: true
				  },
				  output: 'ReconnectedChat'
				}),
				starlightLinksValidator({
					exclude: ['/ReconnectedChat/**/*','reconnectedchat/classes/client/'],
					errorOnRelativeLinks: false
				}),
			  ],
			title: 'ReconnectedCC',
			social: {
				github: 'https://github.com/ReconnectedCC/docs',
			},
			sidebar: [
				{
					label: 'Frequently Asked Questions',
					autogenerate: { directory: 'faq' },
				},
				{
					label: 'Mods',
					autogenerate: { directory: 'mods' },
				},
				{
					label: 'Chatbox',
					autogenerate: { directory: 'chatbox' },
				},
				typeDocSidebarGroup,
			],
		}),
	],
});

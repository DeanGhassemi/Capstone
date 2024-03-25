import { importAssets } from 'svelte-preprocess-import-assets';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},
	// Update the preprocess configuration here
	preprocess: [
		vitePreprocess(), // Existing preprocess for Vite specific enhancements
		importAssets() // Add importAssets to enable asset imports in your Svelte components
	]
};

export default config;
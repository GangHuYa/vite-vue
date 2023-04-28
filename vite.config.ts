import { defineConfig, normalizePath } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		tsconfigPaths(),
		viteStaticCopy({
			targets: [
				{
					src: normalizePath(path.resolve(__dirname, './src', 'image/*.txt')),
					dest: normalizePath(path.resolve(__dirname, 'dist/txt')),
				},
			],
		}),
	],
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, './src/components'),
		},
	},
});

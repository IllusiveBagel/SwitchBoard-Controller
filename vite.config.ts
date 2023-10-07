import { defineConfig } from 'vite'
//import path from 'node:path'
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron-renderer'
import react from '@vitejs/plugin-react'
import { notBundle } from 'vite-plugin-electron/plugin'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
	plugins: [
		react(),
		electron({
			entry: [
				'electron/main.ts',
				'electron/preload.ts',
				//'electron/worker.ts'
			],
			vite: {
				plugins: [
					command === 'serve' && notBundle(/* NotBundleOptions */),
				],
			},
		},
		),
		renderer(),
	],
}));

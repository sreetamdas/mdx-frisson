import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	optimizeDeps: {},
	build: {
		rollupOptions: {
			input: "src/main.ts",
		},
	},
});

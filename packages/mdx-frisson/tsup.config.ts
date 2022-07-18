import { defineConfig } from "tsup";

// https://vitejs.dev/config/
export default defineConfig({
	entry: ["src/index.ts", "src/plugin.ts"],
	format: ["esm"],
	dts: true,
	target: "esnext",
});

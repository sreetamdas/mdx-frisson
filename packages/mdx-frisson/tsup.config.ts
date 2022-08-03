import { defineConfig } from "tsup";

// https://vitejs.dev/config/
export default defineConfig({
	entry: ["src/index.ts"],
	format: ["esm"],
	dts: true,
	target: "esnext",
});

import { defineConfig } from "tsup";

/** @type {import('tsup').UserConfig} */
export default defineConfig({
	entry: ["src/index.ts"],
	format: ["esm"],
	dts: true,
	target: "esnext",
});

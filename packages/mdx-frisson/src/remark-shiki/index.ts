import karmaThemeJSON from "@sreetamdas/karma/themes/default.json" assert { type: "json" };

export async function getKarmaTheme() {
	return { karmaThemeJSON };
}

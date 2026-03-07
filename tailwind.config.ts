import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "system-ui", "sans-serif"],
				serif: ["Literata", "serif"],
			},

			spacing: {
				section: "6rem",
				container: "72rem",
			},

			borderRadius: {
				lg: "var(--radius-lg)",
			},
		},
	},
	plugins: [typography],
} satisfies Config;

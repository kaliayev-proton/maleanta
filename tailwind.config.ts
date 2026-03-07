import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				mal: {
					50: "var(--color-brand-50)",
					500: "var(--color-brand-500)",
					900: "var(--color-brand-900)",
				},
				brand: {
					50: "#f5f5f5",
					100: "#e5e5e5",
					500: "#404040",
					700: "#262626",
					900: "#111111",
				},

				accent: {
					500: "#C1121F",
				},
			},

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

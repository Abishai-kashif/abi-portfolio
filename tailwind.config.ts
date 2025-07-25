import type { Config } from "tailwindcss"

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx,js,jsx,html}",
		"./components/**/*.{ts,tsx,js,jsx,html}",
		"./app/**/*.{ts,tsx,js,jsx,html}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1450px",
			},
		},
		extend: {
			fontFamily: {
				montserrat: ["var(--font-montserrat)"],
				lora: ["var(--font-lora)"],
				hind: ["var(--font-hind-madurai)"],
			},
			colors: {
				// "dark-purple": "#4e1f61",
				// "light-purple": "#cb6ce6",
				// "bright-purple": "#dc00f2",
				// "accent-purple": "#bd00ff",
				"dark-purple": "#4e1f61",
				"secondary-background": "#f5f5f5",
				// "primary-text": "#ffffff", its white basically
				// "secondary-text": "#333333",
				"light-purple": "#ac6bbe",
				accent: "#FFB200",
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				// accent: {
				// 	DEFAULT: "hsl(var(--accent))",
				// 	foreground: "hsl(var(--accent-foreground))",
				// },
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				scroll: {
					to: {
						transform: "translate(calc(-50% - 0.5rem))",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				scroll:
					"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config

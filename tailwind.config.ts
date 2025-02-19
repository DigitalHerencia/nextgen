// tailwind.config.ts
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
	darkMode: [ "class" ],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		container: {
			center: true,
		  padding: "2rem",
		  screens: {
			  sm: "640px",
			  md: "768px",
			  lg: "1024px",
			  xl: "1280px",
			  "2xl": "1400px",
		  },
	  },
	  extend: {
		  colors: {
			border: "var(--border)",
			input: "var(--input)",
			ring: "var(--ring)",
			background: "var(--background)",
			foreground: "var(--foreground)",
			primary: {
				DEFAULT: "var(--primary)",
				foreground: "var(--foreground)",
			},
			secondary: {
				DEFAULT: "var(--secondary)",
				foreground: "var(--secondary-foreground)",
			},
			destructive: {
				DEFAULT: "var(--destructive)",
				foreground: "var(--destructive-foreground)",
			},
			muted: {
				DEFAULT: "var(--muted)",
				foreground: "var(--muted-foreground)",
			},
			accent: {
				DEFAULT: "var(--accent)",
				foreground: "var(--accent-foreground)",
			},
			popover: {
				DEFAULT: "var(--popover)",
				foreground: "var(--popover-foreground)",
			},
			card: {
				DEFAULT: "var(--card)",
				foreground: "var(--card-foreground)",
			},
			chart: {
				1: "var(--chart-1)",
				2: "var(--chart-2)",
				3: "var(--chart-3)",
				4: "var(--chart-4)",
				5: "var(--chart-5)",
			},
			sidebar: {
				DEFAULT: "var(--sidebar-background)",
				foreground: "var(--sidebar-foreground)",
				primary: "var(--sidebar-primary)",
				"primary-foreground": "var(--sidebar-primary-foreground)",
				accent: "var(--sidebar-accent)",
				"accent-foreground": "var(--sidebar-accent-foreground)",
				border: "var(--sidebar-border)",
				ring: "var(--sidebar-ring)",
			},
		},
		backgroundImage: {
			gradient: "var(--gradient)",
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
		},
		animation: {
			"accordion-down": "accordion-down 0.2s ease-out",
			"accordion-up": "accordion-up 0.2s ease-out",
		},
		},
	},
	plugins: [ tailwindcssAnimate ],
};

export default config;

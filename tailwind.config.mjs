/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg-rgb) / <alpha-value>)",
        "bg-alt": "rgb(var(--bg-alt-rgb) / <alpha-value>)",
        fg: "rgb(var(--fg-rgb) / <alpha-value>)",
        muted: "rgb(var(--muted-rgb) / <alpha-value>)",
        line: "rgb(var(--line-rgb) / <alpha-value>)",
        accent: "rgb(var(--accent-rgb) / <alpha-value>)",
        "accent-dark": "rgb(var(--accent-dark-rgb) / <alpha-value>)",
        "hero-bg": "rgb(var(--hero-bg-rgb) / <alpha-value>)",
        "hero-fg": "rgb(var(--hero-fg-rgb) / <alpha-value>)",
        "hero-muted": "rgb(var(--hero-muted-rgb) / <alpha-value>)",
        "hero-accent": "rgb(var(--hero-accent-rgb) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      maxWidth: {
        container: "1200px",
      },
      letterSpacing: {
        eyebrow: "0.14em",
      },
    },
  },
  plugins: [],
};

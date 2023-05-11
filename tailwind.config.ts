/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,html}",
  ],
  darkmode: "device",
  theme: {
    "dark": {
      "colors": {
        "primary": "var(--primary)",
        "secondary": "var(--secondary)",
        "success": "var(--success)",
        "warning": "var(--warning)",
        "danger": "var(--danger)",
        "info": "var(--info)",
        "black": "var(--black)",
        "white": "var(--white)",
        "current": "currentColor",
      },
    },
    "light": {
      "colors": {
        "primary": "var(--primary)",
        "secondary": "var(--secondary)",
        "success": "var(--success)",
        "warning": "var(--warning)",
        "danger": "var(--danger)",
        "info": "var(--info)",
        "black": "var(--black)",
        "white": "var(--white)",
        "current": "currentColor",
      },
    },
    extend: {
      "colors": {
        "primary": "var(--primary)",
        "secondary": "var(--secondary)",
        "success": "var(--success)",
        "warning": "var(--warning)",
        "danger": "var(--danger)",
        "info": "var(--info)",
        "black": "var(--black)",
        "white": "var(--white)",
        "current": "currentColor",
      },
      "fontFamily": {
        "school": "var(--font-xl)",
        "fancy": "var(--font-lg)",
        "simple": "var(--font-md)",
        "fat": "var(--font-sm)",
        "default": "var(--font-default)",
      }
    },
  },
  plugins: [],
}


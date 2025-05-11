/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        theme1: {
          primary: '#ef4444',
          hover: '#fca5a5',
          background: '#ffffff',
          text: '#1f2937',
        },
        // Theme 2 colors (Blue Professional)
        theme2: {
          primary: '#3b82f6',
          hover: '#93c5fd',
          background: '#f8fafc',
          text: '#1e293b',
        },
        // Theme 3 colors (Dark Mode)
        theme3: {
          primary: '#10b981',
          hover: '#6ee7b7',
          background: '#1e293b',
          text: '#f8fafc',
        },
        theme4: {
          primary: '#8b5cf6',
          hover: '#c4b5fd',
          background: '#1e1b4b',
          text: '#e9d5ff',
          accent: '#a78bfa',
          secondary: '#4c1d95'
        },

        // New theme 5 (Orange Dark)
        theme5: {
          primary: '#f97316',
          hover: '#fdba74',
          background: '#431407',
          text: '#ffedd5',
          accent: '#fb923c',
          secondary: '#9a3412'
        }
      }
    },
  },
  plugins: [],
}
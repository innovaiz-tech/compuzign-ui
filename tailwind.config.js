/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Theme 1 (Red Vibrant)
        theme1: {
          primary: '#ef4444',
          hover: '#fca5a5',
          background: '#ffffff',
          secondaryBg: '#fef2f2',  // Light red background
          text: '#1f2937',
          accent: '#fee2e2',
          secondary: '#dc2626'
        },

        // Theme 2 (Blue Professional)
        theme2: {
          primary: '#3b82f6',
          hover: '#93c5fd',
          background: '#f8fafc',
          secondaryBg: '#e0f2fe',  // Light blue background
          text: '#1e293b',
          accent: '#bfdbfe',
          secondary: '#1d4ed8'
        },

        // Theme 3 (Green Dark Mode)
        theme3: {
          primary: '#10b981',
          hover: '#6ee7b7',
          background: '#1e293b',
          secondaryBg: '#0f172a',  // Darker slate background
          text: '#f8fafc',
          accent: '#6ee7b7',
          secondary: '#047857'
        },

        // Theme 4 (Purple Elegant)
        theme4: {
          primary: '#8b5cf6',
          hover: '#c4b5fd',
          background: '#1e1b4b',
          secondaryBg: '#312e81',  // Darker purple background
          text: '#e9d5ff',
          accent: '#a78bfa',
          secondary: '#4c1d95'
        },

        // Theme 5 (Orange Dark)
        theme5: {
          primary: '#f97316',
          hover: '#fdba74',
          background: '#431407',
          secondaryBg: '#7c2d12',  // Darker orange background
          text: '#ffedd5',
          accent: '#fb923c',
          secondary: '#9a3412'
        }
      }
    },
  },
  plugins: [],
}
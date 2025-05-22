/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary color palette
        primary: {
          DEFAULT: '#5DA6A7',     // Teal header
          hover: '#4D8D8E',       // Teal hover
          light: '#7FBEBF',       // Light teal
          dark: '#366070',        // Dark teal
        },
        // Secondary color palette
        secondary: {
          DEFAULT: '#3D3151',     // Deep purple hero
          hover: '#332843',       // Deep purple hover
          light: '#8778B9',       // Light purple
          dark: '#2A2139',        // Dark purple
        },
         tertiary: {
          DEFAULT: '#FBFCFE',     // Deep purple hero
          light: '#FBFCFE'
        },
        // Accent colors
        accent: {
          DEFAULT: '#BFA8E3',     // Lavender accent
          purple: '#8A4FBD',      // Purple CTA button
          'purple-hover': '#7A3FAD', // Purple CTA hover
        },
        // Content background colors
        content: {
          DEFAULT: '#FFFFFF',     // White content background
          light: '#F5F4F8',     // Light gray background
          dark: '#1B1E2F'       // Dark content background
        },
        // Footer color
        footer: '#947CA9',        // Footer background
        
        // Text colors
        text: {
          primary: '#1B1E2F',     // Dark Text
          secondary: '#5C5F70',   // Muted Text
          light: '#FFFFFF',       // White text
        },
        
        // Background colors
        bg: {
          light: '#F5F4F8',       // Light background
          white: '#FFFFFF',       // White background
        },
        
        // UI colors for consistency
        success: '#27ae60',
        warning: '#f39c12',
        error: '#e74c3c',

      }
    },
  },
  plugins: [],
}
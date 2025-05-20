/**
 * Theme colors for the application
 * Based on the mockup design with teal, white, and black color scheme
 */

const COLORS = {
  // Primary colors
  primary: "#5DA6A7",        // Teal - Main brand color
  primaryHover: "#4D8D8E",   // Teal hover state
  secondary: "#3D3151",      // Dark purple - For hero section
  secondaryHover: "#332843", // Dark purple hover state
  accent: "#BFA8E3",         // Light purple - For accents
  black: "#000000",          // Black - For text and dark elements
  white: "#FFFFFF",          // White - For backgrounds and light text
  
  // Text colors
  text: {
    primary: "#1B1E2F",    // Dark text
    secondary: "#5C5F70",   // Muted text
    light: "#FFFFFF"        // Light text (white)
  },
  
  // Background colors
  background: {
    light: "#F5F4F8",  // Light gray background
    white: "#FFFFFF",     // White background
    dark: "#1B1E2F"      // Dark background
  },
  
  // UI elements
  footer: "#3D3151",       // Footer background (dark purple)
  border: "#E5E7EB"       // Light border color
};

// Component styles using direct color values
// This provides a pragmatic way to maintain consistent styling
// without the complexity of a context system
export const styles = {
  // Header/Navbar styles
  navbar: {
    container: `bg-[${COLORS.primary}] text-white fixed w-full z-50 flex items-center justify-between p-4`,
    link: "text-white hover:text-white/80",
    button: "bg-white text-[#5DA6A7] px-4 py-1 rounded",
    contactButton: "bg-white text-[#5DA6A7] hover:bg-gray-100 px-4 py-1 rounded",
    supportButton: "text-white hover:text-white/80 px-3 py-1"
  },
  
  // Hero section styles
  hero: {
    container: `bg-[${COLORS.secondary}] text-white`,
    title: "text-white font-bold text-4xl md:text-5xl leading-tight",
    accent: `text-[${COLORS.accent}] ml-2`,
    description: "text-white/90 mt-6 text-sm leading-relaxed max-w-2xl",
    stats: "text-white text-2xl font-bold",
    statsLabel: "text-white/70 uppercase text-xs",
    button: `bg-[${COLORS.primary}] hover:bg-[${COLORS.primaryHover}] text-white px-6 py-2 rounded`
  },
  
  // Navigation tabs styles
  tabs: {
    container: "bg-black text-white py-3",
    tabsList: "flex flex-wrap px-4 md:px-14 text-white",
    tab: "uppercase font-medium hover:text-gray-300 cursor-pointer px-3 py-2"
  },
  
  // About Us section styles
  aboutUs: {
    container: `bg-[${COLORS.yellow}]`,
    title: `text-[${COLORS.textPrimary}] font-bold text-3xl mb-4`,
    text: `text-[${COLORS.textPrimary}] mb-4`,
    button: `bg-[${COLORS.black}] text-white px-6 py-2 rounded hover:bg-gray-800`
  },
  
  // Footer styles
  footer: {
    container: `bg-[${COLORS.footer}] text-white py-10`,
    logo: "text-xl font-bold",
    logoText: "text-white text-2xl font-bold",
    link: "text-white hover:text-white/80",
    socialIcon: "text-white hover:text-white/80 p-2 rounded-full inline-flex items-center justify-center",
    copyright: "mt-8 pt-8 border-t border-white/20 text-sm text-white/80"
  },
  
  // Common button styles
  buttons: {
    primary: `bg-[${COLORS.primary}] hover:bg-[${COLORS.primaryHover}] text-white px-6 py-2 rounded`,
    secondary: `bg-[${COLORS.secondary}] hover:bg-[${COLORS.secondaryHover}] text-white px-6 py-2 rounded`,
    black: `bg-[${COLORS.black}] hover:bg-gray-800 text-white px-6 py-2 rounded`
  },
  
  // Services
  services: {
    title: `text-[${COLORS.textPrimary}] font-bold text-2xl`,
    card: 'bg-white rounded-lg shadow-md p-6',
    button: `bg-[${COLORS.primary}] hover:bg-[${COLORS.primaryHover}] text-white px-4 py-2 rounded`
  }
};

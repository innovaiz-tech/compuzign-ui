// Theme configuration based on the approved mockup
export const themeConfig = {
  // CCI Theme - based on the approved mockup
  cci: {
    colors: {
      primary: '#5DA6A7',        // Teal header color 
      secondary: '#5E457E',      // Purple hero section background
      accent: '#BFA8E3',         // Lavender accent for "Innovative Solutions"
      textPrimary: '#1B1E2F',    // Dark text color for primary content
      textSecondary: '#5C5F70',  // Muted text for secondary content
      bgLight: '#F5F4F8',        // Light background
      footer: '#947CA9',         // Footer purple background
      buttonHover: '#4D8D8E',    // Teal button hover state
      yellow: '#FFCB05',         // Yellow from About Us section
      navBlack: '#000000',       // Black navigation bar
      white: '#FFFFFF',          // White text and elements
      socialBg: '#5DA6A7'        // Background for social media icons
    },
    // Component specific theme classes
    components: {
      // Header/Navbar
      nav: {
        container: 'bg-[#5DA6A7] text-white fixed w-full z-50 flex items-center justify-between p-4',
        link: 'text-white hover:text-white/80',
        button: 'bg-white text-[#5DA6A7] px-4 py-1 rounded',
        supportButton: 'text-white hover:text-white/80 px-3 py-1',
        mobileMenu: 'bg-white text-[#5DA6A7]'
      },
      // Hero section
      hero: {
        container: 'bg-[#5E457E] text-white',
        title: 'text-white font-bold text-[40px] leading-tight',
        accent: 'text-[#BFA8E3] ml-2',
        description: 'text-[#f0f0f0] mt-6 text-sm leading-relaxed max-w-2xl',
        stats: 'text-white text-2xl font-bold',
        statsLabel: 'text-white/70 uppercase text-xs',
        button: 'bg-[#5DA6A7] hover:bg-[#4D8D8E] text-white px-6 py-2 rounded'
      },
      // Nav Tabs section (black bar)
      navTabs: {
        container: 'bg-black text-white py-4',
        tab: 'font-medium uppercase'
      },
      // About Us section
      aboutUs: {
        container: 'bg-[#FFCB05]',
        title: 'text-[#1B1E2F] font-bold text-3xl mb-4',
        text: 'text-[#1B1E2F] mb-4',
        button: 'bg-black text-white px-6 py-2 rounded'
      },
      // Tab component
      tabs: {
        container: 'bg-[#000000] text-white',
        tabsList: 'flex flex-wrap px-14 text-white',
        tab: 'text-white hover:text-[#5DA6A7] uppercase',
        activeTab: 'text-[#5DA6A7] border-b-2 border-[#5DA6A7]'
      },
      // Footer
      footer: {
        container: 'bg-[#947CA9] text-white py-12',
        logo: 'bg-white p-2 rounded-md inline-block',
        logoText: 'text-[#5DA6A7] text-2xl font-bold',
        socialIcon: 'text-white hover:text-white/80 bg-[#5DA6A7] p-2 rounded-full',
        link: 'text-white/80 hover:text-white transition-colors',
        copyright: 'border-t border-white/20 mt-12 pt-6 text-center'
      },
      // Services
      services: {
        title: 'text-[#1B1E2F] font-bold text-2xl',
        card: 'bg-white rounded-lg shadow-md p-6',
        button: 'bg-[#5DA6A7] hover:bg-[#4D8D8E] text-white px-4 py-2 rounded'
      }
    }
  }
};

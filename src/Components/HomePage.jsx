import homepageBanner from "../assets/home-page-banner.jpg";
import customerImage from "../assets/Customers.png";
import TabsContainer from "./Tabs/Tabs";

export default function HomePage({theme}) {
  const themeClasses = {
    theme1: {
      bg: 'bg-theme1-background',
      text: 'text-theme1-text',
      accent: 'bg-theme1-primary',
      hoverText: 'hover:text-theme1-primary',
      hoverBg: 'hover:bg-theme1-hover',
      button: 'bg-theme1-primary hover:bg-theme1-hover text-white',
      dropdown: 'bg-white shadow-md',
      dropdownItem: 'hover:bg-gray-100'
    },
    theme2: {
      bg: 'bg-theme2-background',
      text: 'text-theme2-text',
      accent: 'bg-theme2-primary',
      hoverText: 'hover:text-theme2-primary',
      hoverBg: 'hover:bg-theme2-hover',
      button: 'bg-theme2-primary hover:bg-theme2-hover text-white',
      dropdown: 'bg-white shadow-lg border border-slate-100',
      dropdownItem: 'hover:bg-blue-50'
    },
    theme3: {
      bg: 'bg-theme3-background',
      text: 'text-theme3-text',
      accent: 'bg-theme3-primary',
      hoverText: 'hover:text-theme3-primary',
      hoverBg: 'hover:bg-theme3-hover',
      button: 'bg-theme3-primary hover:bg-theme3-hover text-white',
      dropdown: 'bg-slate-700 shadow-lg border border-slate-600',
      dropdownItem: 'hover:bg-slate-600'
    },
    theme4: {
      bg: 'bg-theme4-background',
      text: 'text-theme4-text',
      accent: 'bg-theme4-primary',
      hoverText: 'hover:text-theme4-primary',
      hoverBg: 'hover:bg-theme4-hover',
      button: 'bg-theme4-primary hover:bg-theme4-hover text-white',
      dropdown: 'bg-theme4-secondary shadow-lg border border-theme4-accent',
      dropdownItem: 'hover:bg-theme4-accent/20'
    },
    theme5: {
      bg: 'bg-theme5-background',
      text: 'text-theme5-text',
      accent: 'bg-theme5-primary',
      hoverText: 'hover:text-theme5-primary',
      hoverBg: 'hover:bg-theme5-hover',
      button: 'bg-theme5-primary hover:bg-theme5-hover text-white',
      dropdown: 'bg-theme5-secondary shadow-lg border border-theme5-accent',
      dropdownItem: 'hover:bg-theme5-accent/20'
    }
  };
  const currentTheme = themeClasses[theme] || themeClasses.theme1;

  return (
    <div className="home">
      <div
        className="bg-cover bg-[position:50%] pb-[100px] pt-[100px]"
        style={{ backgroundImage: `url(${homepageBanner})` }}
      >
        <div className="m-auto w-full px-1 py-10 sm:p-20 max-w-[1200px]">
          <div className={`${currentTheme.text} ${currentTheme.hoverText} tracking-[3px] uppercase text-xs font-semibold`}>Your Premier IT Consulting Partner!</div>
          <div className="text-white mt-0 mb-0 text-[40px] font-bold leading-[48px] no-underline">
            Transform Your Business
            <span className="text-white mt-0 mb-0 text-[40px] font-bold leading-[48px] no-underline flex flex-wrap">
              with&nbsp;
              <span className={`${currentTheme.text} mt-0 mb-0 text-[40px] font-bold leading-[48px] no-underline`}>
                Innovative Solutions
              </span>
            </span>
          </div>
          <div className="text-[#f0f0f0] mt-0 mb-0 pt-[25px] text-sm font-normal leading-[22px] no-underline">
            As your reliable IT consulting partner, we deliver cutting-edge technology services tailored to elevate your business.
          </div>
          <div className="text-white mt-0 mb-0 pt-[15px] text-sm font-medium leading-[22px] no-underline">
            Together, we drive your success in a rapidly evolving digital landscape.
          </div>
          <div className="py-5 flex items-center justify-start gap-5 flex-wrap">
            <button className="bg-blue-600 hover:bg-blue-500 cursor-pointer text-white px-6 py-1 rounded-md">Get Started</button>
            <img src={customerImage} alt="" />
            <p className="flex flex-row text-white mt-0 mb-0 text-sm font-medium leading-[22px] no-underline">1M+ Happy Customers</p>
          </div>
          <div className="flex items-center justify-start gap-10 flex-wrap">
            <div>
              <p className="text-white mt-0 mb-0 text-2xl font-bold leading-[56px] no-underline">
                99.99%
              </p>
              <p className="text-white/70 uppercase mt-0 mb-0 text-xs font-medium leading-6 no-underline">
                tech customer support
              </p>
            </div>
            <div>
              <p className="text-white mt-0 mb-0 text-2xl font-bold leading-[56px] no-underline">
                99.99%
              </p>
              <p className="text-white/70 uppercase mt-0 mb-0 text-xs font-medium leading-6 no-underline">
                Success Rate
              </p>
            </div>
            <div>
              <p className="text-white mt-0 mb-0 text-2xl font-bold leading-[56px] no-underline">
                99.99%
              </p>
              <p className="text-white/70 uppercase mt-0 mb-0 text-xs font-medium leading-6 no-underline">
                customer retention rate
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <TabsContainer />
      </div>
    </div>
  );
}
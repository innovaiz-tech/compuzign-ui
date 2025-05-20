import homepageBanner from "../assets/home-page-banner.jpg";
import customerImage from "../assets/Customers.png";
import TabsContainer from "./Tabs/Tabs";
import { useTheme } from "../hooks/useTheme";

export default function HomePage() {
  const { themeClasses } = useTheme();
  
  return (
    <div className="home">
      <div
        className={`bg-cover bg-[position:50%] pb-[60px] pt-[120px] ${themeClasses.components.hero.container}`}
        style={{ backgroundImage: `url(${homepageBanner})` }}
      >
        <div className="m-auto w-full px-4 md:px-8 max-w-[1200px]">
          <div className="text-white tracking-[3px] uppercase text-xs font-semibold">YOUR PREMIER CLOUD SOLUTIONS PARTNER!</div>
          <div className={themeClasses.components.hero.title}>
            Transform Your Business
            <span className="flex flex-wrap items-center">
              with 
              <span className={themeClasses.components.hero.accent}>
                Innovative Solutions
              </span>
            </span>
          </div>
          <div className={themeClasses.components.hero.description}>
            As your reliable cloud solutions partner, we deliver cutting-edge technology services tailored to elevate your business.
          </div>
          <div className="text-white mt-2 text-sm leading-relaxed">
            See how we drive success in rapidly evolving digital lands.
          </div>
          <div className="mt-8 flex items-center gap-4">
            <button className={themeClasses.components.hero.button}>Get Started</button>
            <div className="flex items-center gap-2">
              <img src={customerImage} alt="Happy customers" className="h-8" />
              <p className="text-white text-sm">+ Mr. Happy Customers</p>
            </div>
          </div>
          <div className="mt-10 flex items-start justify-start gap-12 flex-wrap">
            <div>
              <p className={themeClasses.components.hero.stats}>
                99.99%
              </p>
              <p className={themeClasses.components.hero.statsLabel}>
                tech customer support
              </p>
            </div>
            <div>
              <p className={themeClasses.components.hero.stats}>
                99.99%
              </p>
              <p className={themeClasses.components.hero.statsLabel}>
                Success Rate
              </p>
            </div>
            <div>
              <p className={themeClasses.components.hero.stats}>
                99.99%
              </p>
              <p className={themeClasses.components.hero.statsLabel}>
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
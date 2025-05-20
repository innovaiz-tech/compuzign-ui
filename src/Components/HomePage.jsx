import homepageBanner from "../assets/home-page-banner.jpg";
import customerImage from "../assets/Customers.png";
import TabsContainer from "./Tabs/Tabs";

export default function HomePage() {
  
  return (
    <div className="home">
      <div
        className="bg-cover bg-[position:50%] pb-[60px] pt-[120px] bg-secondary text-white"
        style={{ backgroundImage: `url(${homepageBanner})` }}
      >
        <div className="m-auto w-full px-4 md:px-8 max-w-[1200px]">
          <div className="text-white tracking-[3px] uppercase text-xs font-semibold">YOUR PREMIER CLOUD SOLUTIONS PARTNER!</div>
          <div className="text-white font-bold text-4xl md:text-5xl leading-tight">
            Transform Your Business
            <span className="flex flex-wrap items-center">
              with 
              <span className="text-white ml-2">
                Innovative Solutions
              </span>
            </span>
          </div>
          <div className="text-white/90 mt-6 text-sm leading-relaxed max-w-2xl">
            As your reliable cloud solutions partner, we deliver cutting-edge technology services tailored to elevate your business.
          </div>
          <div className="text-white mt-2 text-sm leading-relaxed">
            See how we drive success in rapidly evolving digital lands.
          </div>
          <div className="mt-8 flex items-center gap-4">
            <button className="bg-accent-purple hover:bg-accent-purple-hover text-white px-6 py-2 rounded">Get Started</button>
            <div className="flex items-center gap-2">
              <img src={customerImage} alt="Happy customers" className="h-8" />
              <p className="text-white text-sm">+ Mr. Happy Customers</p>
            </div>
          </div>
          <div className="mt-10 flex items-start justify-start gap-12 flex-wrap">
            <div>
              <p className="text-white text-2xl font-bold">
                99.99%
              </p>
              <p className="text-white/70 uppercase text-xs">
                tech customer support
              </p>
            </div>
            <div>
              <p className="text-white text-2xl font-bold">
                99.99%
              </p>
              <p className="text-white/70 uppercase text-xs">
                Success Rate
              </p>
            </div>
            <div>
              <p className="text-white text-2xl font-bold">
                99.99%
              </p>
              <p className="text-white/70 uppercase text-xs">
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
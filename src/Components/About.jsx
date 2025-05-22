import AboutUsBanner from "../assets/about-us-banner.jpg"
import AboutUsContainer from "../assets/about-us-container.png"
import useScrollToTop from "../hooks/useScrollToTop.JS";
import Integrity from "../assets/integrity.png"
import CustomerService from "../assets/customer-service.png"
import Innovation from "../assets/innovation.png"
import Collaboration from "../assets/collaboration.png"
import AboutUsSection from "../assets/about-us-section-img.jpg"
import { Link } from "react-router-dom";

export default function About() {
  useScrollToTop();
  const coreValues = [
    {
      icon: Integrity,
      title: 'Integrity',
      description: 'We operate transparently and hold ourselves accountable to the highest ethical standards.'
    },
    {
      icon: CustomerService,
      title: 'Client-Centric',
      description: 'Your needs are at the center of everything we do, from our service offerings to our day-to-day support.'
    },
    {
      icon: Innovation,
      title: 'Innovation',
      description: 'We continually seek new ways to improve our services and anticipate future needs.'
    },
    {
      icon: Collaboration,
      title: 'Collaboration',
      description: 'Success is built on teamwork. We collaborate with our clients to tailor solutions that fit their unique goals.'
    }
  ]
  return (
    <>
      <section
        className="bg-[position:50%] bg-cover pt-[100px] pb-[250px]"
        style={{ backgroundImage: `url(${AboutUsBanner})` }}
      >
        <div className="max-w-[700px] px-4 md:pl-24 flex flex-col gap-4">
          <h1 className="text-primary tracking-[.28em] uppercase mt-0 mb-0 font-poppins text-xs font-semibold leading-[22px] no-underline">Empowering Business with End-to-End IT Solutions</h1>
          <div className="flex flex-col gap-4">
            <span className="text-text-light mt-0 mb-0 font-poppins text-[40px] font-bold leading-[48px] no-underline">
              Empowering Businesses with
            </span>
            <span className="text-primary mt-0 mb-0 font-poppins text-[40px] font-bold leading-[48px] no-underline">
              Reliable IT Solutions
            </span>
          </div>
          <div className="text-text-light mt-0 mb-0 pt-[25px] font-poppins text-sm font-normal leading-[22px] no-underline">
            Ensure your business stays online and optimized with proactive, around-the-clock IT support. Our experts monitor, manage, and maintain your IT infrastructure, providing quick resolutions to issues before they impact your productivity.
          </div>
          <button className="bg-primary hover:bg-primary-hover text-text-light px-6 py-2 rounded-lg w-fit">Get in Touch</button>
        </div>
      </section>
      <section
        className="bg-[position:50%] bg-cover pt-[100px] pb-[250px]"
        style={{ backgroundImage: `url(${AboutUsContainer})` }}
      >
        <div className="flex w-full justify-center items-center">
          <div className="w-1/3"></div>
          <div className="w-1/2 max-w-[700px] px-4 md:pl-24 flex flex-col gap-4 text-text-light">
            <h2 className="text-text-light text-left mt-0 mb-0 font-poppins text-[40px] font-bold leading-[56px] no-underline">
              Our Mission and Vision
            </h2>
            <div className="text-text-light text-left mt-0 mb-0 pt-5 font-poppins text-sm font-normal leading-[22px] no-underline">
              Our mission is to empower businesses by providing seamless, reliable IT services that enhance productivity, streamline operations, and foster growth.
            </div>
            <div className="text-text-light text-left mt-0 mb-0 pt-5 font-poppins text-sm font-normal leading-[22px] no-underline">
              We envision a world where businesses of all sizes can leverage top-tier IT solutions without barriers. Through innovation and dedicated support, we aim to be the trusted partner for organizations worldwide.
            </div>
          </div>
        </div>

      </section>
      <section className="p-1 sm:p-4">
        <h2 className="text-black text-center my-5 font-poppins text-[36px] font-bold leading-[44px] no-underline">
          Our Core Values
        </h2>
        <div className="flex flex-row flex-wrap justify-center items-start gap-5">
          {coreValues.map((value, index) => (
            <div key={index} className="bg-secondary-dark border-0 border-black rounded-[10px] flex flex-col justify-center items-center p-[40px_15px] w-[258px]">
              <img className="" width={90} src={value.icon} alt={`core-icon ${index + 1}`} />
              <h3 className="text-text-light text-left mt-0 mb-0 font-poppins text-[24px] font-bold leading-[32px] no-underline">
                {value.title}
              </h3>
              <p className="text-text-light text-left mt-0 mb-0 pt-5 font-poppins text-sm font-normal leading-[22px] no-underline">
                {value.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-row flex-wrap gap-5 justify-center items-center my-16">
          <div className="flex flex-col gap-4 w-[80vw] sm:w-[50vw] lg:w-[40vw]">
            <h2 className="text-left mt-0 mb-0 font-poppins text-[40px] font-bold leading-[56px] no-underline">IT Support Expert with CompuZign</h2>
            <p className="mt-0 mb-0 pt-5 font-poppins text-sm font-normal leading-[22px] no-underline">
              Unlock your business's potential with our tailored expertise. We dive deep into your technical landscape to connect you with the perfect IT support professional, ensuring a seamless fit for your unique needs.
            </p>
            <Link className="bg-primary hover:bg-primary-hover text-text-light px-5 py-2 rounded-lg w-fit">
              <button>
                MEET OUR SUPPORT TEAM
              </button>
            </Link>
          </div>
          <img className="w-[80vw] sm:w-[50vw] lg:w-[40vw]" src={AboutUsSection} alt="about-us-section-banner" />
        </div>
      </section>
    </>
  );
}
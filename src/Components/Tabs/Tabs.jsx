import * as React from "react";
import { Tabs } from "radix-ui";
import "./styles.css";
import AboutUsBanner from "../../assets/about-us-banner.png"
import TechnicalSupportBanner from "../../assets/technical-support-banner.png"
import SwiperComponent from "../Slider/Slider";

import Slider1 from '../../assets/slider1.png';
import Slider2 from '../../assets/slider2.png';
import Slider3 from '../../assets/slider3.png';
import Slider4 from '../../assets/slider4.png';
import Slider5 from '../../assets/slider5.png';

import WhoWeAreIcon1 from "../../assets/who_we_are_icon_1.png"
import WhoWeAreIcon2 from "../../assets/who_we_are_icon_2.png"
import WhoWeAreIcon3 from "../../assets/who_we_are_icon_3.png"
import WhoWeAreIcon4 from "../../assets/who_we_are_icon_4.png"
import WhoWeAreIcon5 from "../../assets/who_we_are_icon_5.png"
import WhoWeAreIcon6 from "../../assets/who_we_are_icon_6.png"

import MigrationAsAService from '../../assets/migration-as-a-service.png';
import SupportAsAService from '../../assets/support-as-a-service.png';
import CloudAndInfrastructure from '../../assets/cloud-and-infrastructure.png';
import { Link } from "react-router-dom";

const TabsContainer = () => {
    const industries = {
        slidesPerView: 4,
        heading1: 'Supporting Diverse Sectors',
        heading2: 'Industries we focus',
        imageWidth: '250px',
        imageHeight: '360px',
        imageContainer: [Slider1, Slider2, Slider3, Slider4, Slider5],
        bodyContent: [],
        breakPoints: [
            { screen: 640, slidesPerView: 2, spaceBetween: 10 },
            { screen: 768, slidesPerView: 3, spaceBetween: 20 },
            { screen: 1024, slidesPerView: 4, spaceBetween: 30 }
        ]
    }

    const services = {
        slidesPerView: 3,
        heading1: 'Explore our services',
        heading2: 'IT Support Services',
        imageContainer: [MigrationAsAService, SupportAsAService, CloudAndInfrastructure],
        bodyContent: [
            {
                heading: 'Support as a Service',
                content: "At CompuZign, our dedicated technical support team provides comprehensive tech support services for your organization's network systems.",
                href: '#',
                image: SupportAsAService,
            },
            {
                heading: 'Migration As A Service',
                content: "Skilled engineers are fully dedicated to support specific product or specific duration. Our MaaS is perfect for companies with changing demands.",
                href: '#',
                image: MigrationAsAService,
            },
            {
                heading: 'Cloud and Infrastructure',
                content: "Our cyber security experts monitor each element of your infrastructure, assess its current health, including potential and existing threats, and responds to threats. Know More",
                href: '#',
                image: CloudAndInfrastructure
            },
        ],
        breakPoints: [
            { screen: 640, slidesPerView: 1, spaceBetween: 10 },
            { screen: 867, slidesPerView: 2, spaceBetween: 20 },
            { screen: 1224, slidesPerView: 3, spaceBetween: 30 }
        ]
    }

    const whoWeAre = {
        heading1: 'Expertise Across Industries',
        heading2: 'Understanding Industry Challenges is Key',
        bodyContent: [
            {
                icon: WhoWeAreIcon1,
                title: 'Customer First',
                content: 'Success starts with you, our customers. We help envision your future.'
            },
            {
                icon: WhoWeAreIcon2,
                title: 'Industry Awareness',
                content: "Let's face it, tech moves fast. We at CCI are always on the edge with the latest and greatest."
            },
            {
                icon: WhoWeAreIcon3,
                title: 'Enterprise',
                content: "With competition growing, it's more important than ever to bring higher levels of productivity & efficiency to business operations."
            },
            {
                icon: WhoWeAreIcon4,
                title: 'Customer First',
                content: 'Success starts with you, our customers. We help envision your future.'
            },
            {
                icon: WhoWeAreIcon5,
                title: 'Industry Awareness',
                content: "Let's face it, tech moves fast. We at CCI are always on the edge with the latest and greatest."
            },
            {
                icon: WhoWeAreIcon6,
                title: 'Enterprise',
                content: "With competition growing, it's more important than ever to bring higher levels of productivity & efficiency to business operations."
            },
        ]
    }

    return (
        <div direction="column" gap="4" pb="2">
            <Tabs.Root className="TabsRoot" defaultValue="tab1">
                <Tabs.List className="TabsList" aria-label="Manage your account">
                    <Tabs.Trigger className="TabsTrigger uppercase font-medium cursor-pointer px-3 py-2" value="tab1">
                        ABOUT US
                    </Tabs.Trigger>
                    <Tabs.Trigger className="TabsTrigger uppercase font-medium cursor-pointer px-3 py-2" value="tab2">
                        OUR SERVICES
                    </Tabs.Trigger>
                    <Tabs.Trigger className="TabsTrigger uppercase font-medium cursor-pointer px-3 py-2" value="tab3">
                        TECHNICAL SUPPORT
                    </Tabs.Trigger>
                    <Tabs.Trigger className="TabsTrigger uppercase font-medium cursor-pointer px-3 py-2" value="tab4">
                        WHO WE ARE?
                    </Tabs.Trigger>
                    <Tabs.Trigger className="TabsTrigger uppercase font-medium cursor-pointer px-3 py-2" value="tab5">
                        INDUSTRIES
                    </Tabs.Trigger>
                    <Tabs.Trigger className="TabsTrigger uppercase font-medium cursor-pointer px-3 py-2" value="tab6">
                        CLIENT TESTIMONIAL
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content className="TabsContent bg-tertiary-light" value="tab1">
                    <div className="flex flex-row flex-wrap justify-between w-full">
                        <div className="w-full md:w-1/2 flex justify-center items-center">
                            <img className="1/2 md-w-2/3" src={AboutUsBanner} alt="about-us-banner" />
                        </div>

                        <div className="w-full flex flex-col gap-5 md:w-1/2 py-20 px-10 md:px-10 lg:pr-28">
                            <p className="text-black text-left tracking-[.28em] uppercase mt-0 mb-0 text-xs font-semibold leading-[22px] no-underline">about us</p>
                            <div className="text-black text-left mt-0 mb-0 text-4xl font-bold leading-[56px] no-underline">
                                World Class Technical Support
                            </div>
                            <div className="flex flex-col gap-4">
                                <div>
                                    At
                                    <strong>
                                        &nbsp;CompuZign
                                    </strong>
                                    , we believe in harnessing the power of technology to propel businesses forward.
                                    <strong>
                                        &nbsp;"Innovation that drives success"
                                    </strong>
                                    is at the core of everything we do. We deliver cutting-edge IT solutions and world-class technical support that are tailored to meet the unique needs of your business.
                                </div>
                                <div>
                                    With a team of experienced professionals, we’re committed to solving your technology challenges with precision and expertise. "Empowering your business with seamless technology." From scalable solutions to dependable support, we ensure your business thrives in a rapidly changing digital world.
                                </div>
                                <div>
                                    Our promise is simple: "Your success is our mission." At
                                    <strong>
                                        &nbsp;CompuZign, we’re not just a service provider—we’re your trusted technology partner. Together, we turn potential into progress.
                                    </strong>
                                </div>
                            </div>

                            <Link className="w-fit bg-primary hover:bg-primary-hover cursor-pointer px-8 py-3 text-text-light rounded-md" to='about'>
                                Know more
                            </Link>

                        </div>
                    </div>
                </Tabs.Content>
                <Tabs.Content className="TabsContent bg-content" value="tab2">
                    <div>
                        <SwiperComponent slideContent={services} />
                        <div className="bg-content flex justify-between py-8 px-4 items-center">
                            <div></div>
                            <Link to='#' className="underline">Know More</Link>
                        </div>
                    </div>
                </Tabs.Content>
                <Tabs.Content className="TabsContent bg-content" value="tab3">
                    <div className="flex flex-row flex-wrap justify-between w-full">
                        <div className="w-full md:w-1/2 bg-content flex justify-center items-center">
                            <img className="1/2 md-w-2/3" src={TechnicalSupportBanner} alt="tech-support-banner" />
                        </div>
                        <div className="w-full md:w-1/2 bg-content py-20 px-10 md:px-10 lg:pr-28">
                            <p className="text-left tracking-[.28em] uppercase mt-0 mb-0 text-xs font-semibold leading-[22px] no-underline">We're Here to Help</p>
                            <div className="text-left mt-0 mb-0 pt-5 pb-5 text-4xl font-bold leading-[56px] no-underline">
                                Reach Out To Our Technical Support
                            </div>
                            <div className="flex flex-col gap-4">
                                <div>
                                    At
                                    <strong>
                                        &nbsp;CompuZign
                                    </strong>
                                    , we know that seamless technology is key to your success, and we're here to ensure it never slows you down. "Your technology, our priority"—our expert support team is available 24/7 to solve problems, optimize your systems, and keep your business running at its best.
                                </div>
                                <div>
                                    From instant remote troubleshooting to on-site assistance, we provide
                                    <strong>
                                        &nbsp;custom solutions designed for your unique needs.
                                    </strong>
                                    &nbsp;"We don't just fix problems; we prevent them." Our proactive approach ensures minimal downtime, so you can focus on growing your business without the tech headaches.
                                </div>
                                <div>
                                    Contact us today—
                                    <strong>
                                        where support meets excellence.
                                    </strong>
                                </div>
                            </div>
                            <button className="mt-10 bg-primary hover:bg-primary-hover cursor-pointer px-8 py-3 text-text-light rounded-md">Know more</button>
                        </div>
                    </div>
                </Tabs.Content>
                <Tabs.Content className="TabsContent bg-content" value="tab4">
                    <div className="bg-content flex flex-wrap justify-center gap-5 p-10">
                        {whoWeAre.bodyContent.map((item, index) => (
                            <div key={`who-we-are-item-${index}`} className={`max-w-[360px] h-[276px] ${index % 2 === 0 ? 'bg-secondary' : 'bg-secondary-light'} p-3`}>
                                <img src={item.icon} alt={item.title} />
                                <h2 className={`${index % 2 !== 0 ? 'text-black' : 'text-text-light'} mt-0 mb-0 pt-[15px] text-[20px] font-semibold leading-[28px] no-underline`}>{item.title}</h2>
                                <div className={`${index % 2 !== 0 ? 'text-black' : 'text-text-light'} mt-0 mb-0 pt-[15px] text-[14px] font-normal leading-[22px] no-underline`}>{item.content}</div>
                            </div>
                        ))}
                    </div>
                </Tabs.Content>
                <Tabs.Content className="TabsContent" value="tab5">
                    <div>
                        <SwiperComponent slideContent={industries} />
                    </div>
                </Tabs.Content>
                <Tabs.Content className="TabsContent" value="tab6">
                    <div>
                        6
                    </div>
                </Tabs.Content>
            </Tabs.Root>
        </div>
    )
}

export default TabsContainer;

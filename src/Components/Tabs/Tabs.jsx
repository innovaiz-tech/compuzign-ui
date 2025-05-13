import * as React from "react";
import { Tabs } from "radix-ui";
import "./styles.css";
import AboutUsBanner from "../../assets/about-us-banner.png"
import TechnicalSupportBanner from "../../assets/technical-support-banner.png"
import SwiperComponent from "../Slider/Slider";

const TabsContainer = () => (
    <div direction="column" gap="4" pb="2">
        <Tabs.Root className="TabsRoot" defaultValue="tab1">
            <Tabs.List className="flex flex-wrap px-14 text-white" aria-label="Manage your account">
                <Tabs.Trigger className="TabsTrigger" value="tab1">
                    ABOUT US
                </Tabs.Trigger>
                <Tabs.Trigger className="TabsTrigger" value="tab2">
                    OUR SERVICES
                </Tabs.Trigger>
                <Tabs.Trigger className="TabsTrigger" value="tab3">
                    TECHNICAL SUPPORT
                </Tabs.Trigger>
                <Tabs.Trigger className="TabsTrigger" value="tab4">
                    WHO WE ARE?
                </Tabs.Trigger>
                <Tabs.Trigger className="TabsTrigger" value="tab5">
                    INDUSTRIES
                </Tabs.Trigger>
                <Tabs.Trigger className="TabsTrigger" value="tab6">
                    CLIENT TESTIMONIAL
                </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content className="TabsContent" value="tab1">
                <div className="flex flex-row flex-wrap justify-between w-full">
                    <div className="w-full md:w-1/2 bg-yellow-400 flex justify-center items-center">
                        <img className="1/2 md-w-2/3" src={AboutUsBanner} alt="about-us-banner" />
                    </div>

                    <div className="w-full md:w-1/2 bg-yellow-400 py-20 px-10 md:px-10 lg:pr-28">
                        <p className="text-black text-left tracking-[.28em] uppercase mt-0 mb-0 text-xs font-semibold leading-[22px] no-underline">about us</p>
                        <div className="text-black text-left mt-0 mb-0 pt-5 pb-5 text-4xl font-bold leading-[56px] no-underline">
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
                        <button className="mt-10 bg-black px-8 py-2 text-white rounded-md">Know more</button>
                    </div>
                </div>
            </Tabs.Content>
            <Tabs.Content className="TabsContent" value="tab2">
                <div>
                    2
                </div>
            </Tabs.Content>
            <Tabs.Content className="TabsContent" value="tab3">
                <div className="flex flex-row flex-wrap justify-between w-full">
                    <div className="w-full md:w-1/2 bg-yellow-400 flex justify-center items-center">
                        <img className="1/2 md-w-2/3" src={TechnicalSupportBanner} alt="tech-support-banner" />
                    </div>
                    <div className="w-full md:w-1/2 bg-yellow-400 py-20 px-10 md:px-10 lg:pr-28">
                        <p className="text-black text-left tracking-[.28em] uppercase mt-0 mb-0 text-xs font-semibold leading-[22px] no-underline">We're Here to Help</p>
                        <div className="text-black text-left mt-0 mb-0 pt-5 pb-5 text-4xl font-bold leading-[56px] no-underline">
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
                        <button className="mt-10 bg-black px-8 py-2 text-white rounded-md">Know more</button>
                    </div>
                </div>
            </Tabs.Content>
            <Tabs.Content className="TabsContent" value="tab4">
                <div>
                    4
                </div>
            </Tabs.Content>
            <Tabs.Content className="TabsContent" value="tab5">
                <div>
                    <SwiperComponent />
                </div>
            </Tabs.Content>
            <Tabs.Content className="TabsContent" value="tab6">
                <div>
                    6
                </div>
            </Tabs.Content>
        </Tabs.Root>
    </div>

);

export default TabsContainer;

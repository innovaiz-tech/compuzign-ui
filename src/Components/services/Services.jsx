import ServicesBanner from "../../assets/services-banner.jpg";
import * as Tabs from "@radix-ui/react-tabs";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
  animate,
  inView,
  scroll,
  stagger,
} from "framer-motion";
import useSmoothScroll from "../../hooks/useSmoothScroll";

// Import the actual service images
import SupportImg from "../../assets/csaas.svg";
import MigrationImg from "../../assets/maas.svg";
import InfrastructureImg from "../../assets/ciaas.svg";

// Haptic feedback function
const triggerHapticFeedback = () => {
  if (navigator.vibrate) {
    navigator.vibrate(10); // 10ms vibration for tab selection
  }
};

export default function Services() {
  const [activeTab, setActiveTab] = useState("support");
  const [direction, setDirection] = useState(0);
  const controls = useAnimation();
  const tabContentRef = useRef(null);
  const bannerRef = useRef(null);
  const tabsRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const tabContainerRef = useRef(null);
  const isInView = useInView(tabContentRef, { once: false, amount: 0.1 });
  const { scrollTo } = useSmoothScroll({
    scrollOnMount: true,
    mountDelay: 50,
    duration: 300,
    offset: 80, // Account for header height
  });

  const scrollToTabContainer = useCallback(() => {
    if (tabContainerRef.current) {
      scrollTo(tabContainerRef.current, {
        duration: 600, // Slightly longer for smoother feel
        offset: 80, // Account for header height
      });
    }
  }, [scrollTo]);

  const handleTabChange = async (tabId) => {
    if (tabId === activeTab) return;

    const currentIndex = serviceTabsData.findIndex(
      (tab) => tab.id === activeTab
    );
    const newIndex = serviceTabsData.findIndex((tab) => tab.id === tabId);
    const direction = newIndex > currentIndex ? 1 : -1;

    // Update direction and trigger exit animation
    setDirection(direction);

    // Start scroll to top in parallel with exit animation
    // const scrollPromise = scrollToTop({ delay: 100 });

    // Wait for exit animation to complete before changing tab
    await Promise.all([
      controls.start({
        opacity: 0,
        scale: 0.97,
        transition: { duration: 0.2 },
      }),
    ]);

    // Update active tab
    setActiveTab(tabId);

    // Scroll to tab container after the exit animation completes
    // Using a slightly longer delay to ensure content is ready
    setTimeout(() => {
      scrollToTabContainer();
    }, 100);

    // Haptic feedback for mobile devices
    if (navigator.vibrate) {
      navigator.vibrate(10);
    }
  };

  // Service tabs data
  const serviceTabsData = [
    {
      id: "support",
      title: "SUPPORT AS A SERVICE",
      subtitle: "SUPPORT AS A SERVICE (SAAS)",
      heading: "Smart. Scalable. Seamless.",
      description: [
        "At CompuZign, we understand that seamless technology is essential for uninterrupted business growth. Our Support-as-a-Service offers proactive, 24/7 technical support tailored to the pace and needs of modern organizations.",
        "Whether you're a startup or an enterprise, we act as your extended IT team—ensuring your systems remain efficient, secure, and stress-free so you can focus on what truly matters: scaling your business.",
      ],
      image: SupportImg,
      buttonText: "Learn More About SaaS",
      color: "#7FBEBF",
      route: "/csaas",
    },
    {
      id: "migration",
      title: "MIGRATION AS A SERVICE",
      subtitle: "MIGRATION AS A SERVICE",
      heading: "Effortless Migration, Built Around Your Business",
      description: [
        "At CompuZign, we deliver secure, high-speed migration experiences backed by automation, expert support, and zero business disruption. Say goodbye to downtime and data risks—our team ensures every migration is seamless, secure, and stress-free.",
        "Whether you're moving on-prem to cloud, cloud to on-prem, or working with hybrid environments, we handle the complexity so you can stay focused on scaling your business.",
      ],
      image: MigrationImg,
      buttonText: "Explore Our Migration Services",
      color: "#7FBEBF",
      route: "/maas",
    },
    {
      id: "infrastructure-cloud",
      title: "INFRASTRUCTURE AND CLOUD AS A SERVICE",
      subtitle: "INFRASTRUCTURE AND CLOUD AS A SERVICE",
      heading: "Scalable Infrastructure & Cloud Solutions for Innovation",
      description: [
        "Empower your business with a comprehensive infrastructure and cloud solution that provides both the foundation and flexibility needed in today's digital landscape. Our combined IaaS and CaaS offering delivers high-performance resources, robust security, and consistent uptime alongside innovative cloud capabilities.",
        "By taking the complexities of infrastructure and cloud management off your hands, we enable your team to focus on strategic goals while enjoying seamless operations. Our solution evolves with your business, helping you work smarter, reduce costs, and enhance productivity.",
      ],
      image: InfrastructureImg,
      buttonText: "Discover Our Infrastructure & Cloud Solutions",
      color: "#7FBEBF",
      route: "/ciaas",
    },
  ];

  useEffect(() => {
    // Banner animation
    if (bannerRef.current) {
      inView(bannerRef.current, () => {
        animate(
          bannerRef.current.querySelector("h4"),
          { opacity: [0, 1], y: [20, 0] },
          { delay: 0.2, duration: 0.6, easing: "ease-out" }
        );

        animate(
          bannerRef.current.querySelector("h1"),
          { opacity: [0, 1], y: [30, 0] },
          { delay: 0.4, duration: 0.6, easing: "ease-out" }
        );

        animate(
          bannerRef.current.querySelectorAll("p"),
          { opacity: [0, 1], y: [20, 0] },
          {
            delay: stagger(0.2, { start: 0.6 }),
            duration: 0.6,
            easing: "ease-out",
          }
        );

        animate(
          bannerRef.current.querySelector("button"),
          { opacity: [0, 1], scale: [0.9, 1] },
          { delay: 1.2, duration: 0.5, easing: "ease-out" }
        );
      });
    }

    // Tabs animation
    if (tabsRef.current) {
      inView(tabsRef.current, () => {
        animate(
          tabsRef.current.querySelectorAll("button"),
          { opacity: [0, 1], y: [20, 0] },
          { delay: stagger(0.1), duration: 0.5, easing: "ease-out" }
        );
      });
    }

    // Parallax scroll effect for service images
    if (imageRef.current) {
      const images = document.querySelectorAll(".service-image-container");
      images.forEach((image) => {
        scroll(
          animate(image, {
            y: [0, 20],
            scale: [1, 1.05],
          }),
          { target: image, offset: ["start end", "end start"] }
        );
      });
    }
  }, []);

  return (
    <>
      <section
        ref={bannerRef}
        className="bg-center bg-cover bg-no-repeat relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px] w-full flex items-center overflow-hidden"
        style={{ backgroundImage: `url(${ServicesBanner})` }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
          <div className="max-w-[800px] flex flex-col gap-4 md:gap-5 lg:gap-6">
            <h4 className="text-primary tracking-[.28em] uppercase font-poppins text-xs sm:text-sm font-semibold leading-tight">
              Empowering Business with End-to-End IT Solutions
            </h4>

            <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-text-light">
                Comprehensive IT Services Tailored{" "}
              </span>
              <span className="text-primary">for Your Success</span>
            </h1>

            <div className="text-text-light font-poppins text-sm sm:text-base max-w-[600px] mt-2 space-y-4">
              <p>
                From seamless cloud migrations to robust infrastructure support,
                our specialized services are crafted to elevate your digital
                capabilities. We simplify technology, so you can focus on
                growth.
              </p>
              <p>
                Discover the full potential of IT as a service with solutions
                designed to meet your unique needs.
              </p>
            </div>

            <div className="mt-4 md:mt-6">
              <motion.button 
                className="bg-primary hover:bg-primary/80 text-text-light px-6 py-3 rounded-lg font-medium shadow-md transition-all duration-300 text-sm sm:text-base cursor-pointer flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section className="py-12 bg-white" id="services-tabs">
        <div className="container mx-auto px-4" ref={tabContainerRef}>
          {/* Sticky tab navigation */}
          <div className="top-0 z-10 bg-white pt-6 pb-4 -mx-4 px-8 mb-10 shadow-sm">
            <Tabs.Root
              value={activeTab}
              className="flex flex-col"
              onValueChange={handleTabChange}
            >
              <Tabs.List
                ref={tabsRef}
                aria-label="Services"
                className="flex flex-wrap justify-center gap-3 mb-2"
              >
                {serviceTabsData.map((service) => (
                  <Tabs.Trigger
                    key={service.id}
                    value={service.id}
                    className={`px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 rounded-md 
                    ${
                      activeTab === service.id
                        ? "bg-primary text-white shadow-lg scale-105"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    } 
                    cursor-pointer active:scale-95 select-none`}
                    onClick={() => triggerHapticFeedback()}
                  >
                    {service.title}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>

              {/* Animated Tab Content */}
              <div
                className="relative w-full pt-6"
                ref={(el) => {
                  tabContentRef.current = el;
                }}
              >
                <AnimatePresence mode="wait" initial={false} custom={direction}>
                  <Tabs.Content
                    key={activeTab}
                    value={activeTab}
                    className="w-full focus:outline-none"
                    forceMount
                  >
                    <motion.div
                      className="w-full"
                      initial={{ opacity: 0, scale: 0.97, y: 10 }}
                      animate={
                        isInView
                          ? {
                              opacity: 1,
                              scale: 1,
                              y: 0,
                              transition: {
                                duration: 0.4,
                                ease: [0.16, 1, 0.3, 1],
                                scale: {
                                  type: "spring",
                                  damping: 20,
                                  stiffness: 400,
                                },
                              },
                            }
                          : {}
                      }
                      exit={{
                        opacity: 0,
                        scale: 0.98,
                        y: -5,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        {/* Left side - Image */}
                        <motion.div
                          ref={imageRef}
                          className="rounded-lg w-4/6 aspect-square flex items-center justify-center service-image-container mx-auto"
                          style={{
                            backgroundColor: serviceTabsData.find(
                              (tab) => tab.id === activeTab
                            ).color,
                          }}
                          initial={{ opacity: 0, scale: 0.5, y: 10 }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                          }}
                        >
                          <img
                            src={
                              serviceTabsData.find(
                                (tab) => tab.id === activeTab
                              ).image
                            }
                            alt={
                              serviceTabsData.find(
                                (tab) => tab.id === activeTab
                              ).title
                            }
                            className="object-contain transition-transform duration-500 hover:scale-105"
                          />
                        </motion.div>

                        {/* Right side - Content */}
                        <motion.div
                          ref={contentRef}
                          className="flex flex-col gap-4"
                          initial={{ opacity: 0, scale: 0.5, y: 10 }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                          }}
                        >
                          <h3 className="text-xs uppercase tracking-widest text-gray-500">
                            {
                              serviceTabsData.find(
                                (tab) => tab.id === activeTab
                              ).subtitle
                            }
                          </h3>
                          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
                            {
                              serviceTabsData.find(
                                (tab) => tab.id === activeTab
                              ).heading
                            }
                          </h2>

                          <div className="space-y-4 mt-2">
                            {serviceTabsData
                              .find((tab) => tab.id === activeTab)
                              .description.map((paragraph, idx) => (
                                <p key={idx} className="text-gray-700">
                                  {paragraph}
                                </p>
                              ))}
                          </div>

                          <div className="mt-6">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Link
                                to={`${window.location.origin}${
                                  serviceTabsData.find(
                                    (tab) => tab.id === activeTab
                                  ).route
                                }`}
                                className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 shadow-md inline-flex items-center"
                              >
                                {
                                  serviceTabsData.find(
                                    (tab) => tab.id === activeTab
                                  ).buttonText
                                }
                              </Link>
                            </motion.div>
                          </div>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </Tabs.Content>
                </AnimatePresence>
              </div>
            </Tabs.Root>
          </div>
        </div>
      </section>
    </>
  );
}

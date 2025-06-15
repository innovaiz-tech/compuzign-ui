import ComprehensiveMigrationSolutionsIcon1 from "../assets/Comprehensive-Migration-icon-1.png";
import ComprehensiveMigrationSolutionsIcon2 from "../assets/Comprehensive-Migration-icon-2.png";
import ComprehensiveMigrationSolutionsIcon3 from "../assets/Comprehensive-Migration-icon-3.png";
import ComprehensiveMigrationFrame1 from "../assets/Comprehensive-Migration-Frame-1.png";
import ComprehensiveMigrationFrame2 from "../assets/Comprehensive-Migration-Frame-2.png";
import ComprehensiveMigrationFrame3 from "../assets/Comprehensive-Migration-Frame-3.png";
import EmpoweringGlobalSuccessIcon1 from "../assets/Empowering-Global-Success-Icon-1.png";
import EmpoweringGlobalSuccessIcon2 from "../assets/Empowering-Global-Success-Icon-2.png";
import EmpoweringGlobalSuccessIcon3 from "../assets/Empowering-Global-Success-Icon-3.png";
import EmpoweringGlobalSuccessIcon4 from "../assets/Empowering-Global-Success-Icon-4.png";
import EmpoweringGlobalSuccessFrame1 from "../assets/Empowering-Global-Success-Frame-1.png";
import EmpoweringGlobalSuccessFrame2 from "../assets/Empowering-Global-Success-Frame-2.png";
import EmpoweringGlobalSuccessFrame3 from "../assets/Empowering-Global-Success-Frame-3.png";
import EmpoweringGlobalSuccessFrame4 from "../assets/Empowering-Global-Success-Frame-4.png";
import NavigateTechnologyBanner from "../assets/Navigate-Technology-banner.png";
import ExpertiseSolutions1 from "../assets/Expertise-Solutions-1.png";
import ExpertiseSolutions2 from "../assets/Expertise-Solutions-2.png";
import ProvenIndustryExperienceFrame1 from "../assets/Proven-Industry-Experience-frame-1.png";
import ProvenIndustryExperienceFrame2 from "../assets/Proven-Industry-Experience-frame-2.png";
import InnovatingWithAIBanner from "../assets/Innovating-with-AI-banner.png";
import InnovatingWithAI from "../assets/Innovating-with-AI.png";
import Blogs1 from "../assets/Blogs1.png";
import Blogs2 from "../assets/Blogs2.png";
import Blogs3 from "../assets/Blogs3.png";


import Cards from "../components/ui/cards";
import SliderCarousel from "../components/ui/carousel";
import useWindowSize from "../hooks/useWindowSize";
import { desc } from "framer-motion/client";
import Cards2 from "../components/ui/cards2";

export default function Home() {
    const { width } = useWindowSize();
    const ComprehensiveMigrationSolutionsContainer = [
        {
            header: "Streamlined Data Center Migration",
            content: "Migrating your data center is essential for optimizing IT infrastructure. Our proven methods enable rapid, efficient data transfers with minimal downtime, ensuring business continuity. We assess your systems and strategically plan the migration, so you can focus on what matters most—your business.",
            icon: ComprehensiveMigrationSolutionsIcon1,
            hoverImage: ComprehensiveMigrationFrame1,
            paddingTop: '12px',
            paddingBottom: '12px',
            paddingLeft: '12px',
            paddingRight: '12px',
            width: '340px',
            height: '340px'
        },
        {
            header: "Tailored Cloud Migration Services",
            content: "Transitioning to the cloud unlocks new levels of agility and scalability. VTG’s cloud migration services are customized to meet your needs, ensuring a seamless transition that maximizes cloud potential. Whether moving to AWS, Microsoft Azure, or Google Cloud, our experts guide you through every phase.",
            icon: ComprehensiveMigrationSolutionsIcon2,
            hoverImage: ComprehensiveMigrationFrame2,
            paddingTop: '12px',
            paddingBottom: '12px',
            paddingLeft: '12px',
            paddingRight: '12px',
            width: '340px',
            height: '340px'
        },
        {
            header: "Optimizing Infrastructure Assessments",
            content: "Understanding the strengths and weaknesses of your current IT setup is crucial for strategic growth. Our in-depth infrastructure assessments provide actionable insights, identifying areas for improvement and laying the groundwork for a robust IT strategy that aligns with your business goals.",
            icon: ComprehensiveMigrationSolutionsIcon3,
            hoverImage: ComprehensiveMigrationFrame3,
            paddingTop: '12px',
            paddingBottom: '12px',
            paddingLeft: '12px',
            paddingRight: '12px',
            width: '340px',
            height: '340px'
        },

    ]
    const EmpoweringGlobalSuccessContent = [
        {
            header: "16 Years of Trusted Service",
            content: "",
            icon: EmpoweringGlobalSuccessIcon1,
            hoverImage: EmpoweringGlobalSuccessFrame1,
            paddingTop: '30px',
            paddingBottom: '12px',
            paddingLeft: '18px',
            paddingRight: '18px',
            width: '270px',
            height: '180px'
        },
        {
            header: "50k+ Globally Talent Network",
            content: "",
            icon: EmpoweringGlobalSuccessIcon2,
            hoverImage: EmpoweringGlobalSuccessFrame2,
            paddingTop: '30px',
            paddingBottom: '12px',
            paddingLeft: '18px',
            paddingRight: '18px',
            width: '270px',
            height: '180px'
        },
        {
            header: "3 Countries of Operations",
            content: "",
            icon: EmpoweringGlobalSuccessIcon3,
            hoverImage: EmpoweringGlobalSuccessFrame3,
            paddingTop: '30px',
            paddingBottom: '12px',
            paddingLeft: '18px',
            paddingRight: '18px',
            width: '270px',
            height: '180px'
        },
        {
            header: "250+ Expert Employees",
            content: "",
            icon: EmpoweringGlobalSuccessIcon4,
            hoverImage: EmpoweringGlobalSuccessFrame4,
            paddingTop: '30px',
            paddingBottom: '12px',
            paddingLeft: '18px',
            paddingRight: '18px',
            width: '270px',
            height: '180px'
        },
    ]

    const EnterpriseLevelConsulting = [
        {
            header: "Maximizing IT Investments",
            content: "Every business seeks to get the most out of its IT infrastructure. At VTG, we offer enterprise-level consulting that drives significant value. Our team works closely with you to assess your existing operations, identify gaps, and develop a strategic roadmap that enhances performance, reduces costs, and accelerates service delivery.",
            icon: EmpoweringGlobalSuccessIcon1,
            hoverImage: ProvenIndustryExperienceFrame1,
            paddingTop: '30px',
            paddingBottom: '12px',
            paddingLeft: '18px',
            paddingRight: '18px',
            width: '570px',
            height: '395px'
        },
        {
            header: "Proven Industry Experience",
            content: "With a strong track record of success, VTG has been recognized among the fastest-growing businesses in Dallas. Our approach is centered on delivering measurable results that align with your organizational objectives. We combine industry expertise with tailored strategies to drive growth and maximize your IT investments.",
            icon: EmpoweringGlobalSuccessIcon1,
            hoverImage: ProvenIndustryExperienceFrame2,
            paddingTop: '30px',
            paddingBottom: '12px',
            paddingLeft: '18px',
            paddingRight: '18px',
            width: '570px',
            height: '395px'
        },
    ]

    const Blogs = [
        {
            title: 'Strengthening Digital Resilience with VTG’s Automated DORA Compliance',
            date: 'May 16, 2025',
            description: 'In today’s fast-paced digital world, many businesses find themselves held back by outdated IT systems. Imagine trying to keep up with the competition while dealing with slow processes, rising costs, and constant security threats. It’s…',
            image: Blogs1,
            href: 'https://virtualtechgurus.com/strengthening-digital-resilience-with-vtg-dora-compliance/'
        },
        {
            title: 'Overcome IT Challenges with Unified Migration and Expertly Managed Services',
            date: 'December 12, 2024',
            description: 'In today’s fast-paced digital world, many businesses find themselves held back by outdated IT systems. Imagine trying to keep up with the competition while dealing with slow processes, rising costs, and constant security threats. It’s…',
            image: Blogs2,
            href: 'https://virtualtechgurus.com/overcome-it-challenges-unified-migration-managed-services/'
        },
        {
            title: 'Resource as a Service for Cyber Forensics: Your Shield Against Digital Threats!',
            date: 'December 6, 2024',
            description: 'In today’s increasingly complex digital landscape, cyber threats are escalating in frequency and sophistication, with cybercrime costs expected to reach $10.5 trillion annually by 2025. VTG’s Cyber Forensics as a Service (CFaaS) offers expert, rapid-response…',
            image: Blogs3,
            href: 'https://virtualtechgurus.com/resource-as-a-service-cyber-forensics-digital-threats/'
        },
    ]



    return (
        <div className="flex flex-col items-center justify-center ">
            <div className="relative bg-primary-bgLightBlack w-full flex flex-col items-center justify-center">
                <h2 className="text-primary-textWhite my-8 text-2xl font-bold text-center px-4">Empowering Global Success Through Expert IT Solutions</h2>
                <div className="flex flex-row gap-4 cursor-pointer flex-wrap w-full justify-center items-center px-4">
                    {EmpoweringGlobalSuccessContent.map((item, index) => (
                        <Cards key={index} data={item} />
                    ))}
                </div>
                <div className="h-16 w-full absolute bottom-0 bg-primary-bgLight z-1"></div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full px-4 pt-24 pb-8 md:px-8 lg:px-16">
                <img
                    src={NavigateTechnologyBanner}
                    className="w-full lg:w-1/2 object-cover max-h-[500px]"
                    alt="Technology landscape"
                />
                <div className="flex flex-col gap-4 w-full lg:w-1/2 lg:max-w-[600px]">
                    <p className="text-2xl md:text-3xl font-medium text-primary uppercase">Introduction</p>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                        Navigate the Technology Landscape with Confidence
                    </h2>
                    <p className="text-base md:text-lg text-gray-600">
                        At Virtual Tech Gurus (VTG), we empower businesses to thrive in an ever-evolving technological landscape. Our team of seasoned IT professionals offers innovative, cost-effective solutions tailored to your unique needs. We specialize in IT consulting, project services, and flexible staffing solutions, all designed to enhance your operational efficiency and drive growth.
                    </p>
                </div>
            </div>
            <div className="bg-primary-bgLightBlack w-full flex flex-col items-center justify-center pb-24">
                <h2 className="text-primary-textWhite my-8 text-2xl font-bold text-center px-4">Comprehensive Migration Solutions</h2>
                <div className="flex flex-row gap-4 cursor-pointer flex-wrap w-full justify-center items-center px-4">
                    {ComprehensiveMigrationSolutionsContainer.map((item, index) => (
                        <Cards key={index} data={item} />
                    ))}
                </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center bg-primary-bgYellow">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight pt-16">Expertise Solutions</h2>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-16 w-full px-4 pt-8 pb-8 md:px-8 lg:px-16">
                    <img
                        src={ExpertiseSolutions1}
                        className="w-full lg:w-1/3 object-cover max-h-[400px]"
                        alt="Technology landscape"
                    />
                    <div className="flex flex-col gap-4 w-full lg:w-1/2 lg:max-w-[600px]">
                        <p className="text-2xl font-medium text-primary">Resource-as-a-Service (RaaS)</p>
                        <h2 className="text-2xl lg:text-4xl font-bold leading-tight">
                            Flexible Talent Solutions for IT Demands
                        </h2>
                        <p className="text-base md:text-lg text-gray-600">
                            In today’s fast-paced environment, accessing top-tier IT talent on demand is essential. Our RaaS staffing solutions connect you with highly skilled professionals who meet your project needs—whether it's for short-term engagements or long-term initiatives. This flexibility enables you to scale your operations without the overhead costs associated with traditional hiring.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-16 w-full px-4 pt-16 pb-8 md:px-8 lg:px-16">
                    <div className="flex flex-col gap-4 w-full lg:w-1/2 lg:max-w-[600px]">
                        <p className="text-2xl font-medium text-primary">Cyber Security</p>
                        <h2 className="text-2xl lg:text-4xl font-bold leading-tight">
                            Cyber Resilience and Incident Response
                        </h2>
                        <p className="text-base md:text-lg text-gray-600">
                            Amid evolving threats, our Cyber Resilience and Incident Response (IRR) services ensure your IT infrastructure withstands disruptions and recovers swiftly. We focus on proactive risk assessments and rapid recovery to minimize downtime and data loss. Our team continuously monitors for potential threats, enabling quick response and mitigation to protect critical assets. With customized recovery plans, we help you maintain business continuity and enhance resilience against future incidents.
                        </p>
                    </div>
                    <img
                        src={ExpertiseSolutions2}
                        className="w-full lg:w-1/3 object-cover max-h-[400px]"
                        alt="Technology landscape"
                    />
                </div>
            </div>
            <div className="bg-primary-bgLightBlack w-full flex flex-col items-center justify-center pb-24">
                <h2 className="text-primary-textWhite my-8 text-2xl font-bold text-center px-4">Enterprise-Level Consulting</h2>
                <div className="flex flex-row gap-4 cursor-pointer flex-wrap w-full justify-center items-center px-4">
                    {EnterpriseLevelConsulting.map((item, index) => (
                        <Cards key={index} data={item} />
                    ))}
                </div>
            </div>
            <div className="h-36 py-16 w-fit ">
                <SliderCarousel />
            </div>
            <div>
                Carousel 2
            </div>
            <div
                className="bg-white py-16 flex flex-col lg:flex-row items-center justify-center gap-8 w-full px-4 pt-24 pb-8 md:px-8 lg:px-16"
                style={{ backgroundImage: width >= 1300 ? `url(${InnovatingWithAIBanner})` : 'none', backgroundPosition: 'right', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
                <div className="flex flex-col gap-4 w-full lg:w-1/2 lg:max-w-[700px] px-8">
                    <p className="text-2xl md:text-3xl font-medium text-primary uppercase">
                        INNOVATING WITH AI-POWERED ZENfra
                    </p>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                        Harnessing the Power of AI in Project Management
                    </h2>
                    <p className="text-base md:text-lg text-gray-600">
                        At VTG, we believe in leveraging the latest technology to drive success. Our AI-powered ZENfra platform enhances every stage of project management, from initial planning to execution. This innovative solution provides real-time insights and predictive analytics, enabling you to make informed decisions that lead to superior outcomes.
                    </p>
                </div>

                {/* Hidden on mobile and tablet, visible on desktop */}
                <div className="hidden lg:block">
                    <img
                        src={InnovatingWithAI}
                        className="
                            w-[450px] h-[450px]
                            object-cover 
                            rounded-full 
                            border-8 
                            border-primary-bgLight 
                            hover:border-primary-bgYellow"
                        alt="Technology landscape"
                    />
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center bg-primary-bgGray py-8">
                <h2 className="text-xl font-bold leading-tight py-4">BLOGS</h2>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight py-2 text-center">
                    Guiding You Through the Digital Transformation Journey</h2>
                <div className="w-full flex flex-wrap gap-5 justify-center m-4">
                    {Blogs.map((item, index) => (
                        <Cards2 key={index} data={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
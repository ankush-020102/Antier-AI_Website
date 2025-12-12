import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRobot, FaUserTie, FaChartLine, FaQuestion, FaGraduationCap, FaHeartPulse } from "react-icons/fa6";

// Import Images
import Ai_mentor1 from '../assets/aiagents/Ai_mentor1.png';
import Ai_mentor2 from '../assets/aiagents/Ai_mentor2.png';
import Ai_mentor3 from '../assets/aiagents/Ai_mentor3.png';
import Ai_mentor4 from '../assets/aiagents/Ai_mentor4.png';
import healthaera from '../assets/aiagents/healthaera.png';
import metaverse_bot1 from '../assets/aiagents/metaverse_bot1.png';
import metaverse_bot2 from '../assets/aiagents/metaverse_bot2.png';
import metaverse_bot3 from '../assets/aiagents/metaverse_bot3.png';
import metaverse_bot4 from '../assets/aiagents/metaverse_bot4.png';
import qatobit1 from '../assets/aiagents/qatobit1.png';
import qatobit2 from '../assets/aiagents/qatobit2.png';
import abstraxn from '../assets/aiagents/abstraxn_ask_ai.webp';
import hrBot from '../assets/aiagents/hr_bot.webp';
import faqBot from '../assets/aiagents/faq_bot.webp';
import staleLead from '../assets/aiagents/stale_lead_revival.webp';
import salesBot from '../assets/aiagents/sales_bot.webp';

const AiAgentDevelopment = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const [activeFAQ, setActiveFAQ] = useState(null);

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    // Grouped Platform Data
    const platforms = [
        {
            title: "Abstraxn Ask AI",
            description: "Abstraxn AI is one of the leading Web3 custom AI agent builders, designed to simplify complex blockchain interactions through a conversational, chat-based interface. Instead of navigating multiple dApps or dashboards, users can perform on-chain transactions such as token swaps, transfers, staking, and liquidity operations using natural language commands.",
            images: [abstraxn]
        },
        {
            title: "HR Bot",
            description: "The HR Bot simplifies employee access to company policies. Employees can ask questions in plain English, such as about maternity leave, and the bot will quickly retrieve and provide the relevant information directly from HR documents. This reduces repetitive queries by up to 40%, keeps information current, and eases HR workloads.",
            images: [hrBot]
        },
        {
            title: "Qatobit",
            description: "Qatobit delivers instant, real-time financial data to crypto users via text or voice. Whether it’s checking Bitcoin’s price or tracking blockchain events, Qatobit provides tailored responses that suit individual needs. This always-on advisor reduces research time and empowers users to make informed decisions quickly, even in volatile markets.",
            images: [qatobit1, qatobit2]
        },
        {
            title: "FAQ Bot",
            description: "The FAQ Bot automates customer support & onboarding and offers role-specific answers. Initially, it handles fixed queries like assignment submissions or material uploads. In later phases, it evolves to answer open-ended queries and learns from user interactions to refine responses.",
            images: [faqBot]
        },
        {
            title: "AI Mentor",
            description: "AI Mentor assists students by providing personalized answers drawn from class materials. A student can simply ask about a topic like photosynthesis, and the system will pull relevant curriculum content, offering a clear, concise explanation. This reduces tutor reliance, scales to support many users, and boosts academic performance by delivering relevant, curriculum-based content.",
            images: [Ai_mentor1, Ai_mentor2, Ai_mentor3, Ai_mentor4]
        },
        {
            title: "EHR Bot",
            description: "EHR Bot helps users manage health-related queries by leveraging retrieval-augmented generation for general or personalized insights. General health queries are answered by AI models, while personalized queries pull data from secure records for custom responses. With privacy assured, this bot eases provider workloads, clarifies medical information, and promotes proactive health management.",
            images: [healthaera]
        },
        {
            title: "Metaverse Bot",
            description: "Metaverse Bot tracks real-world energy usage through virtual activities. Users input appliance data, like AC runtime, and the bot calculates costs, emissions, and potential savings. By making comparisons to everyday activities, it encourages sustainable practices and links virtual play to real-world environmental impacts, all without needing complex calculations.",
            images: [metaverse_bot1, metaverse_bot2, metaverse_bot3, metaverse_bot4]
        },
        {
            title: "Stale Lead Revival Engine",
            description: "The Stale Lead Revival Engine re-engages CRM leads that have been inactive for over three months by sending personalized messages. It sparks conversations and routes leads to nurturing, support, or sales teams, handling responses with tailored wit when needed. Revival rates of 20-30% help businesses convert overlooked leads into fresh opportunities.",
            images: [staleLead]
        },
        {
            title: "Sales Bot",
            description: "Sales Bot streamlines customer support across multiple channels, providing instant responses to inquiries, qualifying leads, and ensuring a seamless customer experience 24/7.",
            images: [salesBot]
        }
    ];

    // Internal Card Component for Slideshow
    const PlatformCard = ({ platform }) => {
        const [imgIndex, setImgIndex] = useState(0);

        useEffect(() => {
            if (platform.images.length <= 1) return;
            const interval = setInterval(() => {
                setImgIndex((prev) => (prev + 1) % platform.images.length);
            }, 3000);
            return () => clearInterval(interval);
        }, [platform.images]);

        return (
            <div className="group/card h-[600px] relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/50 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:-translate-y-2">
                {/* Image Container */}
                <div className="absolute inset-0 w-full h-2/3 bg-slate-900 flex items-center justify-center overflow-hidden">
                    {/* Blurred Background Layer */}
                    {platform.images.map((img, idx) => (
                        <motion.div
                            key={`bg-${idx}`}
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: idx === imgIndex ? 0.6 : 0,
                            }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0 w-full h-full z-0"
                        >
                            <img
                                src={img}
                                alt=""
                                className="w-full h-full object-cover blur-2xl scale-110"
                            />
                        </motion.div>
                    ))}

                    {/* Main Image Layer */}
                    <div className="relative w-full h-full z-10">
                        {platform.images.map((img, idx) => (
                            <motion.img
                                key={idx}
                                src={img}
                                alt={`${platform.title} ${idx + 1}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{
                                    opacity: idx === imgIndex ? 1 : 0,
                                    scale: idx === imgIndex ? 1 : 0.9
                                }}
                                transition={{ duration: 0.8 }}
                                className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
                            />
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-slate-900 border-t border-slate-700 p-6 flex flex-col justify-between group-hover/card:bg-slate-800 transition-colors">
                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-2xl font-bold text-white group-hover/card:text-emerald-400 transition-colors">
                                {platform.title}
                            </h3>
                            <div className="flex space-x-1">
                                {platform.images.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-2 h-2 rounded-full transition-colors ${idx === imgIndex ? 'bg-emerald-500' : 'bg-slate-600'}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                            {platform.description}
                        </p>
                    </div>

                    <div className="mt-4 flex items-center text-emerald-500 text-sm font-semibold opacity-0 transform translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300">
                        Explore Platform <FaChartLine className="ml-2" />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-slate-900 min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl mix-blend-screen animate-pulse"></div>
                    <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl mix-blend-screen animate-pulse delay-1000"></div>
                </div>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
                >
                    <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-slate-800/50 rounded-full px-3 py-1 mb-6 border border-slate-700">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="text-emerald-400 text-sm font-medium tracking-wide uppercase">Intelligent Automation</span>
                    </motion.div>
                    <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        AI Agent Development <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                            Company: Where Trust Meets Intelligence
                        </span>
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Get advanced AI agent development services from an experienced team at a renowned AI agent development company. Antier offers custom AI agent solutions for automation, decision-making, and business optimization.
                    </motion.p>
                    <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-lg text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg shadow-emerald-500/25 transition-all hover:scale-105"
                        >
                            Schedule A Free Demo
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* Web3 AI Agent Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Web3 AI Agent Development: Empowering Businesses with <br />
                            <span className="text-emerald-600">Smarter Automated Workflows</span>
                        </h2>
                        <p className="text-slate-600 max-w-3xl mx-auto">
                            Many businesses in the web3 space face significant challenges related to inefficiencies in decentralized operations, security vulnerabilities, and slow decision-making processes. The new era of AI agents has emerged to solve these challenges.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mb-16 text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Our AI Agent Development Services
                        </h2>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {[
                            "Custom AI Agent Development",
                            "Seamless AI Agent Integration",
                            "Strategic AI Agent Consulting",
                            "AI-Powered Smart Contract Auditing",
                            "Advanced AI Agent Model Optimization",
                            "Ongoing AI Agent Support & Maintenance"
                        ].map((service, index) => (
                            <motion.div variants={fadeInUp} key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-emerald-500 transition-all group hover:-translate-y-1">
                                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                                    <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{service}</h3>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Platforms Section - Carousel */}
            <section className="py-20 bg-slate-50 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Our Enterprise-Grade <span className="text-emerald-600">AI Agent Platforms</span>
                        </h2>
                        <p className="text-slate-600 max-w-3xl mx-auto">
                            Explore our cutting-edge AI agent platforms designed to revolutionize various industries with intelligent automation and insights.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                        {platforms.map((platform, index) => (
                            <PlatformCard key={index} platform={platform} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industries We Support</h2>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6"
                    >
                        {[
                            "Finance & Banking", "Healthcare", "Retail & E-commerce", "Supply Chain",
                            "IT & Services", "Energy & Utilities", "Legal & Compliance", "Real Estate",
                            "Education", "Travel & Hospitality", "Insurance", "Government"
                        ].map((industry, index) => (
                            <motion.div variants={fadeInUp} key={index} className="flex items-center space-x-3 p-4 bg-slate-800 rounded-lg border border-slate-700 hover:bg-slate-700 transition-colors">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                <span className="text-slate-300 font-medium">{industry}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section> */}

            {/* FAQ Section */}
            {/* FAQ Section */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Common questions about our AI Agent development services and solutions.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { question: "What is the timeline for developing and deploying an AI agent?", answer: "Timelines vary based on complexity, but typically range from 4-12 weeks." },
                            { question: "What is the cost of AI agent development?", answer: "Costs depend on features and integration requirements. Contact us for a detailed quote." },
                            { question: "How are AI agents different from traditional automation tools?", answer: "AI agents can make decisions and learn, whereas traditional tools follow fixed rules." },
                            { question: "Can AI agents seamlessly integrate with existing systems?", answer: "Yes, our agents are designed to integrate with your current tech stack via APIs." }
                        ].map((faq, index) => {
                            const isOpen = activeFAQ === index;
                            return (
                                <div
                                    key={index}
                                    className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-emerald-500 shadow-lg ring-1 ring-emerald-500/20' : 'border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-400'}`}
                                >
                                    <button
                                        onClick={() => setActiveFAQ(isOpen ? null : index)}
                                        className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none group"
                                    >
                                        <span className={`text-lg font-semibold transition-colors duration-300 ${isOpen ? 'text-emerald-700' : 'text-slate-900 group-hover:text-emerald-500'}`}>
                                            {faq.question}
                                        </span>
                                        <span className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 bg-gradient-to-r from-emerald-500 to-teal-500 text-white ${isOpen ? 'rotate-180' : ''}`}>
                                            {isOpen ? (
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                                </svg>
                                            ) : (
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                </svg>
                                            )}
                                        </span>
                                    </button>
                                    <div
                                        className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-emerald-900/50 to-teal-900/50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">Unlock Intelligent Automation with Antier’s AI Agent Platforms</h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex justify-center items-center px-8 py-3 text-base font-semibold rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
                            >
                                Get in touch
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AiAgentDevelopment;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRobot, FaUserTie, FaChartLine, FaQuestion, FaGraduationCap, FaHeartPulse } from "react-icons/fa6";

const AiAgentDevelopment = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
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
                        viewport={{ once: true, amount: 0.1 }}
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

            {/* Platforms Section */}
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
                            Our Enterprise-Grade <span className="text-emerald-600">AI Agent Platforms</span>
                        </h2>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {[
                            { title: "Abstraxn Ask AI", icon: <FaRobot className="w-16 h-16 text-emerald-500" />, desc: "Developer-Focused Automation in Web3" },
                            { title: "HR Bot", icon: <FaUserTie className="w-16 h-16 text-emerald-500" />, desc: "Simplifying Employee Access to Policies" },
                            { title: "Qatobit", icon: <FaChartLine className="w-16 h-16 text-emerald-500" />, desc: "Financial Insights on Demand" },
                            { title: "FAQ Bot", icon: <FaQuestion className="w-16 h-16 text-emerald-500" />, desc: "Automating Support and Onboarding" },
                            { title: "AI Mentor", icon: <FaGraduationCap className="w-16 h-16 text-emerald-500" />, desc: "Personalized Academic Support" },
                            { title: "EHR Bot", icon: <FaHeartPulse className="w-16 h-16 text-emerald-500" />, desc: "A Smart Health Companion" }
                        ].map((platform, index) => (
                            <motion.div
                                variants={fadeInUp}
                                key={index}
                                className="bg-white border border-slate-200 p-8 rounded-xl hover:shadow-xl transition-all flex flex-col items-center text-center group"
                                whileHover={{ y: -10 }}
                            >
                                <motion.div
                                    className="mb-6 p-4 bg-emerald-50 rounded-full group-hover:bg-emerald-100 transition-colors"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                                >
                                    {platform.icon}
                                </motion.div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{platform.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{platform.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
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
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center"
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <div className="space-y-6">
                        {[
                            { q: "What is the timeline for developing and deploying an AI agent?", a: "Timelines vary based on complexity, but typically range from 4-12 weeks." },
                            { q: "What is the cost of AI agent development?", a: "Costs depend on features and integration requirements. Contact us for a detailed quote." },
                            { q: "How are AI agents different from traditional automation tools?", a: "AI agents can make decisions and learn, whereas traditional tools follow fixed rules." },
                            { q: "Can AI agents seamlessly integrate with existing systems?", a: "Yes, our agents are designed to integrate with your current tech stack via APIs." }
                        ].map((faq, index) => (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                key={index}
                                className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm"
                            >
                                <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.q}</h3>
                                <p className="text-slate-600">{faq.a}</p>
                            </motion.div>
                        ))}
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

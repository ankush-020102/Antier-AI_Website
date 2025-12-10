import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const GenerativeAiDevelopment = () => {
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
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl mix-blend-screen animate-pulse"></div>
                    <div className="absolute top-20 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl mix-blend-screen animate-pulse delay-1000"></div>
                </div>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
                >
                    <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-slate-800/50 rounded-full px-3 py-1 mb-6 border border-slate-700">
                        <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                        <span className="text-purple-400 text-sm font-medium tracking-wide uppercase">Generative AI Excellence</span>
                    </motion.div>
                    <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Generative AI Development <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                            Company: Where Trust Meets Intelligence
                        </span>
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Antier is a generative AI development company that serves businesses with advanced generative AI development services to help them stay ahead of the AI curve.
                    </motion.p>
                    <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-lg text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25 transition-all hover:scale-105"
                        >
                            Schedule A Free Demo
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* Services Section */}
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
                            Our Leading-Edge <span className="text-purple-600">Generative AI Development Services</span>
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            We provide comprehensive generative AI solutions tailored to your business needs.
                        </p>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {[
                            { title: "Custom Generative AI Model Development", desc: "Building bespoke models tailored to specific business requirements." },
                            { title: "Generative AI Consultation", desc: "Expert guidance on leveraging generative AI for business growth." },
                            { title: "Advanced Generative AI Model Replication", desc: "Replicating and improving existing models for enhanced performance." },
                            { title: "Generative AI Model Fine Tuning", desc: "Optimizing models to ensure they meet precise operational goals." },
                            { title: "Generative AI Model Integration", desc: "Seamlessly integrating AI models into existing workflows and systems." },
                            { title: "Ongoing Support & Maintenance", desc: "Continuous monitoring and updates to keep AI solutions efficient." }
                        ].map((service, index) => (
                            <motion.div variants={fadeInUp} key={index} className="bg-white border border-slate-200 p-6 rounded-xl hover:shadow-xl transition-all group hover:-translate-y-1">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                                    <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
                                <p className="text-slate-600 text-sm">{service.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            How do Antier’s Generative AI Solutions help Businesses Gain a <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                                Competitive Market Edge?
                            </span>
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
                            "Advanced Process Automation",
                            "Enhanced Data Security",
                            "Improved Creativity",
                            "Better Decision-Making",
                            "Reduced Cost",
                            "Tailored User Experiences"
                        ].map((benefit, index) => (
                            <motion.div variants={fadeInUp} key={index} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-purple-500 transition-colors">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                    <h3 className="text-lg font-semibold text-white">{benefit}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-20 bg-slate-800/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
                    >
                        Top Generative AI Use Cases
                    </motion.h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {[
                            "Content Generation",
                            "Natural Language Processing Applications",
                            "Creative Design Creation",
                            "Predictive Analytics",
                            "Speech Synthesis",
                            "Fraud Detection"
                        ].map((useCase, index) => (
                            <motion.div variants={fadeInUp} key={index} className="bg-slate-900 border border-slate-700 p-6 rounded-xl hover:border-purple-400 transition-all">
                                <h3 className="text-xl font-semibold text-white mb-2">{useCase}</h3>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Models Section */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
                    >
                        Generative AI Models We Harness for Your Business Growth
                    </motion.h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        {[
                            "Amazon Titan", "Claude", "Stable Diffusion", "Mistral AI",
                            "Meta Llama", "Command R", "Embed", "GPT-4",
                            "DALL·E 3", "Gemini", "Midjourney", "PaLM-2"
                        ].map((model, index) => (
                            <motion.span variants={fadeInUp} key={index} className="px-4 py-2 bg-slate-800 text-purple-300 rounded-full border border-slate-700 text-sm font-medium hover:bg-slate-700 transition-colors">
                                {model}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Generative AI Solutions Spans Numerous Industries</h2>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6"
                    >
                        {[
                            "Healthcare", "Insurance", "Retail", "Travel",
                            "Media & Entertainment", "Banking and Finance", "Real Estate",
                            "Manufacturing", "Automotive"
                        ].map((industry, index) => (
                            <motion.div variants={fadeInUp} key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                <span className="text-slate-700 font-medium">{industry}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <div className="space-y-6">
                        {[
                            { q: "What is Generative AI?", a: "Generative AI refers to artificial intelligence algorithms that can generate new content, including text, images, audio, and video, based on training data." },
                            { q: "What is the cost of developing a robust Generative AI solution?", a: "The cost varies depending on the complexity, features, and specific requirements of the project. Contact us for a tailored quote." },
                            { q: "How long does it take to create a generative AI solution?", a: "Development time depends on the scope of the project, but typically ranges from a few weeks to several months." },
                            { q: "What are the benefits of utilizing generative AI solutions?", a: "Benefits include increased efficiency, enhanced creativity, cost reduction, and improved decision-making capabilities." },
                            { q: "What is Antier’s generative AI integration process?", a: "Our process involves consultation, strategy formulation, model development or selection, integration, and ongoing support." }
                        ].map((faq, index) => (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                key={index}
                                className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-purple-500 transition-colors"
                            >
                                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                                <p className="text-slate-400">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">Transform Your Business with our Cutting-Edge Generative AI Solutions</h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex justify-center items-center px-8 py-3 text-base font-semibold rounded-lg text-white bg-purple-600 hover:bg-purple-700 transition-colors"
                            >
                                Connect on WhatsApp
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex justify-center items-center px-8 py-3 text-base font-semibold rounded-lg text-white bg-pink-600 hover:bg-pink-700 transition-colors"
                            >
                                Connect on Telegram
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default GenerativeAiDevelopment;

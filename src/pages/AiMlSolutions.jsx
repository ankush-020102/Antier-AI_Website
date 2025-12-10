import React from 'react';
import { Link } from 'react-router-dom';

const AiMlSolutions = () => {
    return (
        <div className="bg-slate-900 min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl mix-blend-screen"></div>
                    <div className="absolute top-20 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl mix-blend-screen"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center space-x-2 bg-slate-800/50 rounded-full px-3 py-1 mb-6 border border-slate-700">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                        <span className="text-cyan-400 text-sm font-medium tracking-wide uppercase">AI & ML Excellence</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Amplifying Efficiency With <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            Top-Graded AI/ML Solutions
                        </span>
                    </h1>
                    <p className="text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Revolutionize your business operations with our top-rated AI development services and result-oriented machine learning development solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-lg text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-500/25 transition-all hover:scale-105"
                        >
                            Schedule A Free Demo
                        </Link>
                    </div>
                </div>
            </section>

            {/* Crypto Revolution Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900  mb-4">
                            Revolutionize the Crypto World with <span className="text-cyan-400">AI Development</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            The integration of AI and ML into the world of crypto can bring about a massive transformation in the way it operates.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            "AI-Technology Powered Trading Bot",
                            "AI-Based Portfolio Management",
                            "AI-Based Launchpad",
                            "Fraud Detection with AI",
                            "AI-Powered Crypto Trading Insights",
                            "AI-Integrated Crypto Market Tools"
                        ].map((item, index) => (
                            <div key={index} className="bg-slate-900 border border-slate-700 p-6 rounded-xl hover:border-cyan-400 transition-all group">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                                    <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{item}</h3>
                                <p className="text-slate-400 text-sm">
                                    Leveraging advanced algorithms to optimize operations and enhance decision-making in the crypto space.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Metaverse & NFT Section */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Embrace the Future with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                                AI-Driven Metaverse & NFT Solutions
                            </span>
                        </h2>
                    </div>
                    <div className="space-y-12">
                        {[
                            {
                                title: "AI-Based NFT Generator",
                                desc: "Create stunning digital artworks to sell as NFTs without coding. Features style transfer, bulk creation, and text-to-image generation."
                            },
                            {
                                title: "AI-Driven Sales Systems",
                                desc: "Analyze customer preferences and behavioral patterns to deliver personalized product recommendations and tailored offers."
                            },
                            {
                                title: "Personalized Virtual Environments",
                                desc: "AI algorithms tailor immersive digital spaces in real-time, adapting landscapes and NPCs to individual user preferences."
                            },
                            {
                                title: "AI-Powered NPCs",
                                desc: "Intelligent non-playable characters that mimic realistic behavior and emotions, enhancing immersion in the Metaverse."
                            },
                            {
                                title: "AI-Based Personal Avatars",
                                desc: "Create virtual representations that learn from user interactions, mimicking personalities for authentic virtual experiences."
                            },
                            {
                                title: "Real-Time Language Translation",
                                desc: "Break language barriers with instant AI translation, facilitating seamless global communication in virtual worlds."
                            }
                        ].map((feature, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-8 items-start border-b border-slate-800 pb-12 last:border-0">
                                <div className="md:w-1/3">
                                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                                </div>
                                <div className="md:w-2/3">
                                    <p className="text-lg text-slate-400 leading-relaxed">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Focus Areas */}
            <section className="py-20 bg-slate-800/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Focus Areas</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[
                            "Machine Learning",
                            "Deep Learning",
                            "Data Science",
                            "Data Capture/OCR",
                            "Predictive Analysis",
                            "NLP"
                        ].map((area, index) => (
                            <div key={index} className="bg-slate-900 border border-slate-700 p-4 rounded-lg text-center hover:bg-slate-800 transition-colors">
                                <span className="text-cyan-400 font-semibold">{area}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industries We Serve</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            AI and ML can streamline operations, enhance user experience, and improve decision-making across various sectors.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            "Finance", "Marketing", "Healthcare", "Retail",
                            "Insurance", "Banking", "Logistics", "Telecommunication",
                            "Cybersecurity", "IT Operations", "e-Commerce", "Pharma",
                            "Human Resources", "Education", "Legal Services"
                        ].map((industry, index) => (
                            <div key={index} className="flex items-center space-x-3 p-4 bg-slate-800 rounded-lg border border-slate-700">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                <span className="text-slate-300 font-medium">{industry}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Create Your Industry’s Tomorrow with Our AI/ML Expertise</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex justify-center items-center px-8 py-3 text-base font-semibold rounded-lg text-white bg-cyan-600 hover:bg-cyan-700 transition-colors"
                        >
                            Connect on WhatsApp
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex justify-center items-center px-8 py-3 text-base font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                        >
                            Connect on Telegram
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AiMlSolutions;

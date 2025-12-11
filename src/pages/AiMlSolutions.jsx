import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import imgTranslation from '../assets/ML_AI/Language_Translation.png';
import imgNFT from '../assets/ML_AI/NFT.png';
import imgNPC from '../assets/ML_AI/NPC.png';
import imgAvatar from '../assets/ML_AI/Personalize_Avatar.png';
import imgSales from '../assets/ML_AI/Sales.png';
import imgVirtual from '../assets/ML_AI/Virtual_env.png';

const AiMlSolutions = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [activeFAQ, setActiveFAQ] = React.useState(null);

    const carouselItems = [
        {
            src: imgNFT,
            title: "AI-Based NFT Generator",
            description: "Generate unique, high-quality NFTs instantly using advanced AI algorithms. Create distinct digital assets with ease and precision."
        },
        {
            src: imgSales,
            title: "AI-Driven Sales Systems",
            description: "Boost your sales performance with AI-driven insights. Predict trends, optimize strategies, and maximize revenue with intelligent automation."
        },
        {
            src: imgVirtual,
            title: "Personalized Virtual Environments",
            description: "Immerse users in tailored virtual worlds. Our AI adapts environments in real-time to match user preferences and behaviors."
        },
        {
            src: imgNPC,
            title: "AI-Powered NPCs",
            description: "Bring your virtual worlds to life with intelligent NPCs. Create dynamic, responsive characters that interact naturally with players."
        },
        {
            src: imgAvatar,
            title: "AI-Based Personal Avatars",
            description: "Create lifelike digital avatars that mirror your expressions and personality. Experience a new level of digital identity and interaction."
        },
        {
            src: imgTranslation,
            title: "Real-Time Language Translation",
            description: "Break down communication barriers with instant, accurate translation. Connect with a global audience seamlessly in real-time."
        }
    ];

    const itemsPerPage = 3;
    const totalPages = Math.ceil(carouselItems.length / itemsPerPage);
    const lastScrollTime = React.useRef(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const handleWheel = (e) => {
        const now = Date.now();
        if (now - lastScrollTime.current < 500) return; // 500ms cooldown

        if (Math.abs(e.deltaX) > 30) { // Threshold for horizontal swipe
            if (e.deltaX > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
            lastScrollTime.current = now;
        }
    };

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.dataset.visible = 'true';
                    }
                });
            },
            { threshold: 0.2 }
        );

        document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

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

            {/* Metaverse & NFT Section
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
            </section> */}

            {/* Image Carousel Section */}
            <section className="py-20 bg-slate-50 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                        Visualizing <span className="text-cyan-400">AI Innovation</span>
                    </h2>

                    <div className="relative group">
                        {/* Left Button */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-30 p-3 rounded-full bg-slate-900/80 border border-slate-700 text-white hover:bg-cyan-500 hover:border-cyan-400 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-lg"
                            aria-label="Previous slide"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Carousel Container */}
                        <div className="overflow-hidden" onWheel={handleWheel}>
                            <div
                                className="flex transition-transform duration-700 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {Array.from({ length: totalPages }).map((_, pageIndex) => (
                                    <div key={pageIndex} className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                                        {carouselItems.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((item, index) => (
                                            <div key={index} className="group/card h-[400px] relative overflow-hidden rounded-xl border border-slate-700 shadow-xl">
                                                {/* Image Background */}
                                                <div className="absolute inset-0 w-full h-full">
                                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80 z-10"></div>
                                                    <img
                                                        src={item.src}
                                                        alt={item.title}
                                                        className="w-full h-full object-cover transform group-hover/card:scale-110 group-hover/card:blur-[2px] transition-all duration-700"
                                                    />
                                                </div>

                                                {/* Slide-up Content Overlay */}
                                                <div className="absolute bottom-0 left-0 w-full bg-slate-900/95 backdrop-blur-sm border-t border-cyan-500/30 p-6 z-20 transition-transform duration-500 ease-out translate-y-[calc(100%-88px)] group-hover/card:translate-y-0">
                                                    <div className="flex flex-col">
                                                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                                        <div className="h-1 w-12 bg-cyan-400 rounded-full mb-4 group-hover/card:w-full transition-all duration-500"></div>

                                                        <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-100">
                                                            {item.description}
                                                        </p>

                                                        <div className="mt-4 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-200">
                                                            <span className="text-cyan-400 text-sm font-semibold flex items-center gap-2">
                                                                Learn More
                                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Button */}
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-30 p-3 rounded-full bg-slate-900/80 border border-slate-700 text-white hover:bg-cyan-500 hover:border-cyan-400 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-lg"
                            aria-label="Next slide"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>



            {/* AI/ML Development Process Section */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            AI/ML Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Process</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            From concept to deployment, we follow a rigorous process to ensure your AI solution delivers real business value.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500/20 via-blue-500/20 to-purple-500/20 hidden md:block"></div>

                        <div className="space-y-12 md:space-y-24">
                            {[
                                {
                                    title: "Consultation Phase",
                                    description: "We analyze your business needs and identify high-impact AI opportunities.",
                                    icon: (
                                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                    ),
                                    color: "from-cyan-400 to-blue-500"
                                },
                                {
                                    title: "Requirements Gathering",
                                    description: "Detailed documentation of technical requirements, data sources, and success metrics.",
                                    icon: (
                                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                        </svg>
                                    ),
                                    color: "from-blue-500 to-purple-500"
                                },
                                {
                                    title: "Development Phase",
                                    description: "Agile development of models and algorithms with regular checkpoints and updates.",
                                    icon: (
                                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    ),
                                    color: "from-purple-500 to-pink-500"
                                },
                                {
                                    title: "Testing and Deployment",
                                    description: "Rigorous testing for accuracy and performance followed by seamless deployment.",
                                    icon: (
                                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    ),
                                    color: "from-pink-500 to-red-500"
                                },
                                {
                                    title: "Maintenance and Support",
                                    description: "Continuous monitoring, model retraining, and support to ensure long-term success.",
                                    icon: (
                                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    ),
                                    color: "from-red-500 to-orange-500"
                                }
                            ].map((step, index) => (
                                <div key={index} className={`flex flex-col md:flex-row items-center justify-between relative group ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} reveal-on-scroll`}>
                                    {/* Content Side */}
                                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} mb-8 md:mb-0 opacity-0 transition-all duration-1000 ease-out group-data-[visible=true]:opacity-100 group-data-[visible=true]:translate-x-0 ${index % 2 === 0 ? '-translate-x-24' : 'translate-x-24'}`}>
                                        <div className="bg-slate-800/50 backdrop-blur-md p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/10 group-hover:transform group-hover:-translate-y-1">
                                            <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                                            <p className="text-slate-400 leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>

                                    {/* Center Icon */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center hidden md:flex scale-0 transition-all duration-700 delay-300 group-data-[visible=true]:scale-100">
                                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} p-[2px] shadow-[0_0_20px_rgba(6,182,212,0.3)] z-10`}>
                                            <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                                                {step.icon}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Empty Side for spacing */}
                                    <div className="w-full md:w-5/12 hidden md:block"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Focus Areas */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Focus Areas</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Specialized domains where we deliver exceptional value.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {[
                            {
                                title: "Machine Learning",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Deep Learning",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Data Science",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Data Capture/OCR",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Predictive Analysis",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                )
                            },
                            {
                                title: "NLP",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                )
                            }
                        ].map((area, index) => (
                            <div
                                key={index}
                                className="bg-white border border-slate-200 p-6 rounded-xl text-center hover:shadow-lg hover:-translate-y-1 hover:border-cyan-400 transition-all duration-300 group flex flex-col items-center justify-center gap-4 h-full"
                            >
                                <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-cyan-600 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-500 group-hover:text-white transition-all duration-300">
                                    {area.icon}
                                </div>
                                <span className="text-slate-900 font-semibold text-lg group-hover:text-cyan-700 transition-colors">{area.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            {/* <section className="py-20 bg-slate-900">
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
            </section> */}

            {/* FAQ Section */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Everything you need to know about our AI & ML solutions and how we can help your business grow.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                question: "How will the integration of AI benefit my business?",
                                answer: "The integration of AI and ML into your business comes with a wide range of benefits. Artificial intelligence and machine learning development solutions can readily enhance operational efficiency, optimize the decision-making process, and drive innovation, thereby leading to fruitful as well as improved business outcomes. Connect with our team to embrace AI and let your business be at par with technological advancement to uncover the potential for innovation, growth, and efficiency."
                            },
                            {
                                question: "What is the cost of AI Development?",
                                answer: "The cost of AI/ML development services varies from one project to another and hence it is very difficult to specify the exact cost of development. The cost depends on a number of factors such as the type of project, its complexity, and many more. It is ideal to get in touch with our AI/ML developers at the earliest and discuss your project requirements to get the best quote."
                            },
                            {
                                question: "How much time is required to execute an AI project?",
                                answer: "The overall time needed for complete execution of the AI and machine learning development project significantly varies according to the complexity as well as the nature of the project. Different projects have different needs which play a crucial role in determining the overall timeline. Feel free to discuss your project with our team to get an estimated timeline."
                            },
                            {
                                question: "What security measures do you follow for AI/ML projects?",
                                answer: "Our AI/ML development services ensure proper security measures. Our development team implements an extensive security strategy for AI projects that includes uncompromised data encryption, access controls, and an entirely secure architecture design. In addition to this, we focus on user authentication, carry out security audits at regular intervals, and implement advanced systems for detection of intrusion for threat detection in real-time."
                            },
                            {
                                question: "Do you offer AI consulting services?",
                                answer: "Yes, of course! We offer top-notch AI consulting services to come up with a holistic approach for the appropriate harnessing of the potential of artificial intelligence and machine learning so that they can bring about transformative value to your business. Our AI consulting services are focused on understanding the business goals and identifying the areas where AI can bring significant value to your business. Jump on a call with our team to know more!"
                            }
                        ].map((faq, index) => {
                            const isOpen = activeFAQ === index;
                            return (
                                <div
                                    key={index}
                                    className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-cyan-500 shadow-lg ring-1 ring-cyan-500/20' : 'border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-400'}`}
                                >
                                    <button
                                        onClick={() => setActiveFAQ(isOpen ? null : index)}
                                        className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none group"
                                    >
                                        <span className={`text-lg font-semibold transition-colors duration-300 ${isOpen ? 'text-cyan-700' : 'text-slate-900 group-hover:text-cyan-500'}`}>
                                            {faq.question}
                                        </span>
                                        <span className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-500 text-white ${isOpen ? 'rotate-180' : ''}`}>
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
            {/* <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
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
            </section> */}
        </div>
    );
};

export default AiMlSolutions;

import React, { useEffect, useRef, useState } from "react";
import energyVideo from "../assets/Industries_Videos/Energy.mp4";
import itVideo from "../assets/Industries_Videos/IT.mp4";
import propertyVideo from "../assets/Industries_Videos/Property .mp4";
import educationVideo from "../assets/Industries_Videos/Education.mp4";
import bankingVideo from "../assets/Industries_Videos/banking1.mp4";
import ecommerceVideo from "../assets/Industries_Videos/ecommerce.mp4";
import healthcareVideo from "../assets/Industries_Videos/healthcare.mp4";

const Hero = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl mix-blend-screen"></div>
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl mix-blend-screen"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 rounded-full px-3 py-1 mb-6 border border-slate-700">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-cyan-400 text-sm font-medium tracking-wide uppercase">AI · Generative AI · Autonomous AI</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Future Built<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                AI-native partner
              </span> <br />
              for intelligent enterprises
            </h1>

            <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-lg">
              We combine autonomous AI agents with on-chain data to build the next generation of enterprise platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#industries"
                className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-lg text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-500/25 transition-all hover:scale-105"
              >
                Industries We Serve
              </a>
              <a
                href="#solutions"
                className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-lg text-white bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-all"
              >
                Explore AI Use Cases
              </a>
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-500 font-medium border-t border-slate-800 pt-6">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">1200+</span> implementations
              </div>
              <div className="w-1 h-1 bg-slate-700 rounded-full"></div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">1000+</span> experts
              </div>
              <div className="w-1 h-1 bg-slate-700 rounded-full"></div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">15+</span> years in tech
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-20 transform rotate-3 scale-95"></div>
            <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-slate-500 font-mono">agent_orchestrator.exe</div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">DeFi Risk Agent</div>
                      <div className="text-xs text-slate-400">Active · Monitoring 12 pools</div>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-green-500/10 text-green-400">Running</span>
                </div>

                <div className="p-4 bg-slate-950 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
                  <div className="flex justify-between">
                    <span>&gt; Analyzing on-chain volume...</span>
                    <span className="text-cyan-400">Done (23ms)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>&gt; Detecting arbitrage opportunity...</span>
                    <span className="text-yellow-400">Found</span>
                  </div>
                  <div className="flex justify-between">
                    <span>&gt; Executing smart contract call...</span>
                    <span className="text-slate-500">Pending</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 bg-slate-800/50 rounded-lg text-center">
                    <div className="text-xs text-slate-400 mb-1">Risk Score</div>
                    <div className="text-lg font-bold text-white">12/100</div>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-center">
                    <div className="text-xs text-slate-400 mb-1">APY</div>
                    <div className="text-lg font-bold text-cyan-400">8.4%</div>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-center">
                    <div className="text-xs text-slate-400 mb-1">Gas</div>
                    <div className="text-lg font-bold text-white">14 gwei</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Differentiators = () => {
  const features = [
    {
      title: "Discover & Define",
      description: "We analyze your business objectives, workflows, and data landscape to identify high-impact AI opportunities with clear ROI potential.",
      tag: "Strategy"
    },
    {
      title: "Design the Intelligence",
      description: "We architect the complete AI system — from model and LLM selection to data pipelines, security, and human-AI interaction flows.",
      tag: "Architecture"
    },
    {
      title: "Build & Integrate",
      description: "Our engineers develop, fine-tune, and integrate AI models into your existing platforms with enterprise-grade security and reliability.",
      tag: "Engineering"
    },
    {
      title: "Deploy, Learn & Scale",
      description: "We deploy your AI solution to the cloud, monitor performance in real time, and continuously optimize for scale and accuracy.",
      tag: "Operations"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">From Idea to Product</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white border border-slate-200 p-6 rounded-xl hover:shadow-xl hover:shadow-slate-200/50 transition-all hover:-translate-y-1 group">
              <div className="mb-4">
                <span className="inline-block px-2 py-1 text-xs font-semibold tracking-wide text-blue-600 bg-blue-100 rounded-full">
                  {feature.tag}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Solutions = () => {
  const solutions = [
    {
      title: "AI Agents for Finance",
      items: [
        "KYC automation & identity verification",
        "Fraud detection & on-chain risk monitoring",
        "Treasury optimization & yield farming agents"
      ]
    },
    {
      title: "AI for Customer & Growth",
      items: [
        "Hyper-personalization engines",
        "Lifecycle marketing automation",
        "Churn prediction & community analytics"
      ]
    },
    {
      title: "AI Platforms & Co-pilots",
      items: [
        "Internal co-pilots for ops & engineering",
        "Decision support dashboards",
        "Custom data products & knowledge graphs"
      ]
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            AI solutions built for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">next digital economy</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Seamlessly integrating artificial intelligence with Web3 infrastructure and traditional enterprise systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((sol, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-cyan-500/20 transition-all"></div>

              <h3 className="text-2xl font-bold text-white mb-6">{sol.title}</h3>

              <ul className="space-y-4 mb-8">
                {sol.items.map((item, i) => (
                  <li key={i} className="flex items-start text-slate-300">
                    <svg className="w-5 h-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <a href="#" className="inline-flex items-center text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                Learn more
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);

  const industries = [
    {
      id: 1,
      name: "Energy & Utilities",
      description: "Empowering energy and utility providers with AI agents that enable predictive maintenance, analyze energy consumption patterns, and optimize resources.",
      video: energyVideo
    },
    {
      id: 2,
      name: "IT & Services",
      description: "Enhancing IT service management with AI agents that automate technical support, enable intelligent system monitoring, and streamline troubleshooting.",
      video: itVideo
    },
    {
      id: 3,
      name: "Real Estate & PropTech",
      description: "Redefining real estate management with AI agents that enable virtual property tours, deliver intelligent market analysis, and simplify sales processes.",
      video: propertyVideo
    },
    {
      id: 4,
      name: "Banking & Financial Services",
      description: "Empowering financial institutions with intelligent AI agents that automate operations, strengthen fraud detection, streamline transactions, and deliver secure, compliant, and personalized banking experiences.",
      video: bankingVideo
    },
    {
      id: 5,
      name: "Retail & eCommerce",
      description: "Enabling retailers with AI agents that manage customer interactions, optimize inventory, track orders in real-time, and deliver intelligent product recommendations to boost sales and enhance customer satisfaction.",
      video: ecommerceVideo
    },
    {
      id: 6,
      name: "Healthcare & Life Sciences",
      description: "Transforming healthcare with custom AI agents that enhance patient engagement, streamline appointment scheduling, support diagnostics, enable health monitoring, and improve data-driven clinical research with greater efficiency and accessibility.",
      video: healthcareVideo
    },
    {
      id: 7,
      name: "Education",
      description: "Empowering the education sector with AI agents that personalize learning through intelligent tutoring, automate grading and administrative tasks, support both students and educators, and enhance overall learning outcomes and operational efficiency.",
      video: educationVideo
    }
  ];

  const handleVideoEnd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % industries.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleVideoEnd();
    }, 3000);

    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) {
          video.currentTime = 0;
          video.play().catch(error => console.log("Autoplay prevented:", error));
        } else {
          video.pause();
        }
      }
    });

    return () => clearTimeout(timer);
  }, [currentIndex, industries.length]);

  return (
    <section id="industries" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Industries We Transform</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-slate-800">
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {industries.map((industry, index) => (
              <div
                key={industry.id}
                className="min-w-full h-full relative"
              >
                <video
                  ref={el => videoRefs.current[index] = el}
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  onEnded={handleVideoEnd}
                >
                  <source src={industry.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>

                <div className="absolute bottom-8 left-4 right-4 md:bottom-12 md:left-12 md:max-w-xl">
                  <div className="bg-transparent p-6 md:p-8 rounded-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                        {industry.name}
                      </h3>
                    </div>

                    <p className="text-slate-100 text-base md:text-lg mb-6 leading-relaxed drop-shadow-md font-medium">
                      {industry.description}
                    </p>

                    <div className="flex space-x-2">
                      {industries.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentIndex(idx)}
                          className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-cyan-400' : 'w-4 bg-white/30 hover:bg-white/50'
                            }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setCurrentIndex(currentIndex === 0 ? industries.length - 1 : currentIndex - 1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all hover:scale-110 border border-white/20 z-20"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentIndex(currentIndex === industries.length - 1 ? 0 : currentIndex + 1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all hover:scale-110 border border-white/20 z-20"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

const CaseStudies = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const cases = [
    {
      client: "Global Crypto Exchange",
      problem: "High manual review costs for KYC",
      solution: "Deployed autonomous AI verification agents",
      impact: "Reduced fraud losses by 27%"
    },
    {
      client: "Retail Bank",
      problem: "Low engagement on mobile app",
      solution: "Implemented hyper-personalized AI recommendations",
      impact: "Increased engagement by 35%"
    },
    {
      client: "Metaverse Gaming Studio",
      problem: "Static NPC interactions",
      solution: "Integrated LLM-driven character brains",
      impact: "2x average session duration"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="case-studies"
      className="py-20 bg-[#F0F6FC] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            From experiments to <br /> measurable outcomes
          </h2>
        </div>

        <div className="relative flex justify-center items-center h-[420px]">
          {cases.map((study, index) => {
            let positionClass = "translate-x-0 z-30";

            if (animate) {
              if (index === 0) positionClass = "-translate-x-[420px] z-10";
              if (index === 1) positionClass = "translate-x-0 z-30";
              if (index === 2) positionClass = "translate-x-[420px] z-10";
            }

            return (
              <div
                key={index}
                className={`absolute w-[340px] bg-slate-900 border border-slate-800 rounded-2xl p-8
                  transition-all duration-1000 ease-in-out
                  ${positionClass}
                `}
              >
                <div className="text-xs font-bold tracking-wider text-blue-400 uppercase mb-4">
                  {study.client}
                </div>

                <div className="space-y-4 mb-8">
                  <div>
                    <div className="text-xs text-slate-500 uppercase mb-1">Problem</div>
                    <p className="text-slate-300 text-sm">{study.problem}</p>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase mb-1">Solution</div>
                    <p className="text-slate-300 text-sm">{study.solution}</p>
                  </div>
                </div>

                <div className="border-t border-slate-800 pt-6">
                  <div className="text-3xl font-bold text-white mb-1">
                    {study.impact.split(' ').find(w => w.match(/\d/))}
                    <span className="text-lg font-normal text-slate-400 ml-2">
                      {study.impact.replace(study.impact.split(' ').find(w => w.match(/\d/)), '').trim()}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { number: 1200, suffix: "+", label: "Digital and AI implementations" },
    { number: 1000, suffix: "+", label: "Consultants, engineers, and designers" },
    { number: 25, suffix: "+", label: "Countries served" },
    { number: 15, suffix: "+", label: "Years building in emerging tech" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const Counter = ({ end, duration, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime = null;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return <span>{count}{suffix}</span>;
  };

  return (
    <section ref={sectionRef} className="py-16 bg-blue-950 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <Counter end={stat.number} duration={2000} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-blue-200 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AIWidgetPreview = () => {
  return (
    <section className="py-24 bg-slate-50  overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Meet your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Antier AI co-pilot</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Experience the power of our proprietary AI agents before you even sign a contract. Ask questions, get estimates, and explore possibilities.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Explain AI use cases for your specific industry",
                "Estimate potential ROI and value from AI initiatives",
                "Get technical architecture recommendations instantly"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg border border-slate-700 transition-colors">
              Try the Demo
            </button>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative max-w-md mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-30"></div>

              <div className="relative bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-slate-800/50 p-4 border-b border-slate-700 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">Antier Co-pilot</div>
                    <div className="text-xs text-green-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                      Online
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-6 h-80 overflow-hidden relative">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0 flex items-center justify-center text-xs text-white">U</div>
                    <div className="bg-slate-800 rounded-2xl rounded-tl-none p-4 text-sm text-slate-300 max-w-[85%]">
                      How can AI help reduce churn in my DeFi platform?
                    </div>
                  </div>

                  <div className="flex gap-4 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex-shrink-0 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="bg-blue-600/10 border border-blue-500/20 rounded-2xl rounded-tr-none p-4 text-sm text-slate-200 max-w-[90%]">
                      <p className="mb-2">I can deploy a predictive agent that analyzes on-chain wallet activity.</p>
                      <p>For example, if a user's transaction frequency drops by <strong>15%</strong> or they move assets to a competitor protocol, the agent can trigger a personalized yield boost offer automatically.</p>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-6 flex gap-1">
                    <span className="w-2 h-2 bg-slate-600 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-slate-600 rounded-full animate-bounce delay-100"></span>
                    <span className="w-2 h-2 bg-slate-600 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>

                <div className="p-4 border-t border-slate-800 bg-slate-800/30">
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Ask a question..." 
                      className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                      disabled
                    />
                    <button className="p-2 bg-cyan-600 rounded-lg text-white">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <Differentiators />
      <Solutions />
      <Industries />
      <CaseStudies />
      <Stats />
      <AIWidgetPreview />
    </>
  );
};

export default Home;

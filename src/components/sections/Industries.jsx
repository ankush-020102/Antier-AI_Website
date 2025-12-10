import React, { useState, useEffect, useRef } from 'react';
import energyVideo from '../../assets/Industries_Videos/Energy.mp4';
import itVideo from '../../assets/Industries_Videos/IT.mp4';
import propertyVideo from '../../assets/Industries_Videos/Property .mp4';

import educationVideo from '../../assets/Industries_Videos/Education.mp4';
import bankingVideo from '../../assets/Industries_Videos/banking1.mp4';
import ecommerceVideo from '../../assets/Industries_Videos/ecommerce.mp4';
import healthcareVideo from '../../assets/Industries_Videos/healthcare.mp4';

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
  }, [currentIndex]);

  return (
    <section id="industries" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Industries We Transform</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Video Carousel Container */}
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

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>

                {/* Content Overlay */}
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

                    {/* Progress Indicators */}
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

          {/* Navigation Arrows */}
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

export default Industries;

/*
// Previous Implementation
import educationImg from '../../assets/Industries/Education.png';
import energyImg from '../../assets/Industries/Energy_Utilities.png';
import financeImg from '../../assets/Industries/Finance_Banking.png';
import governmentImg from '../../assets/Industries/Government & Public Services.png';
import healthcareImg from '../../assets/Industries/Healthcare.png';
import itImg from '../../assets/Industries/IT.png';
import insuranceImg from '../../assets/Industries/Insurance.png';
import legalImg from '../../assets/Industries/Legal_Compliance.png';
import realEstateImg from '../../assets/Industries/Real_Estate.png';
import retailImg from '../../assets/Industries/Retail_E-commerce.jpg';

const IndustriesOld = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const timeoutRef = useRef(null);

  const industries = [
    {
      id: 1,
      name: "Banking & Financial Services",
      description: "Empowering financial institutions with intelligent AI agents that automate operations, strengthen fraud detection, streamline transactions, and deliver secure, compliant, and personalized banking experiences.",
      highlights: [
        "Intelligent Automation",
        "Advanced Fraud Detection",
        "Personalized Customer Support"
      ],
      image: financeImg
    },
    {
      id: 2,
      name: "Retail & eCommerce",
      description: "Enabling retailers with AI agents that manage customer interactions, optimize inventory, track orders in real-time, and deliver intelligent product recommendations to boost sales and enhance customer satisfaction.",
      highlights: [
        "Personalized Shopping",
        "Inventory Management",
        "Smart Product Recommendations"
      ],
      image: retailImg
    },
    {
      id: 3,
      name: "Healthcare & Life Sciences",
      description: "Transforming healthcare with custom AI agents that enhance patient engagement, streamline appointment scheduling, support diagnostics, enable health monitoring, and improve data-driven clinical research with greater efficiency and accessibility.",
      highlights: [
        "Virtual Health Assistants",
        "Smart Diagnostics",
        "Patient Data Management"
      ],
      image: healthcareImg
    },
    {
      id: 4,
      name: "Real Estate & PropTech",
      description: "Redefining real estate management with AI agents that enable virtual property tours, deliver intelligent market analysis and price estimation, match buyers with the right properties, and simplify sales and leasing processes.",
      highlights: [
        "Virtual Property Tours",
        "AI-Powered Price Estimation",
        "Smart Buyer Matching"
      ],
      image: realEstateImg
    },
    {
      id: 5,
      name: "Energy & Utilities",
      description: "Empowering energy and utility providers with AI agents that enable predictive maintenance, analyze energy consumption patterns, automate customer support, and optimize resources for improved efficiency and service reliability.",
      highlights: [
        "Predictive Maintenance",
        "Energy Consumption Analytics",
        "Automated Customer Support"
      ],
      image: energyImg
    },
    {
      id: 6,
      name: "IT & Services",
      description: "Enhancing IT service management with AI agents that automate technical support, enable intelligent system monitoring, streamline troubleshooting, reduce downtime, and improve overall user satisfaction.",
      highlights: [
        "Automated Technical Support",
        "Intelligent System Monitoring",
        "AI-Driven Troubleshooting"
      ],
      image: itImg
    },
    {
      id: 7,
      name: "Education",
      description: "Empowering the education sector with AI agents that personalize learning through intelligent tutoring, automate grading and administrative tasks, support both students and educators, and enhance overall learning outcomes and operational efficiency.",
      highlights: [
        "Intelligent Tutoring",
        "Automated Grading",
        "Administrative Assistance"
      ],
      image: educationImg
    },
    {
      id: 8,
      name: "Government & Public Services",
      description: "Modernizing government and public services with AI agents that automate administrative workflows, deliver data-driven insights for better decision-making, and enhance citizen engagement through secure, transparent, and efficient digital interfaces.",
      highlights: [
        "Automated Public Workflows",
        "Data-Driven Decision Making",
        "Citizen Engagement Platforms"
      ],
      image: governmentImg
    },
    {
      id: 9,
      name: "Insurance",
      description: "Empowering insurance providers with AI agents that automate claims processing, accelerate risk assessments, enhance customer engagement, and enable faster, more accurate, and transparent decision-making.",
      highlights: [
        "Automated Claims Processing",
        "AI-Driven Risk Assessment",
        "Intelligent Fraud Detection"
      ],
      image: insuranceImg
    },
    {
      id: 10,
      name: "Legal & Compliance",
      description: "Streamlining legal operations with AI agents that automate document review, contract analysis, compliance tracking, and case outcome prediction to improve accuracy, reduce manual effort, and accelerate decision-making.",
      highlights: [
        "Automated Contract Analysis",
        "Compliance Tracking",
        "AI-Powered Legal Research"
      ],
      image: legalImg
    }
  ];

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    if (!isPaused) {
      timeoutRef.current = setTimeout(
        () => setCurrentIndex((prevIndex) =>
          prevIndex === industries.length - 1 ? 0 : prevIndex + 1
        ),
        2000
      );
    }
    return () => resetTimeout();
  }, [currentIndex, isPaused, industries.length]);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === industries.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? industries.length - 1 : currentIndex - 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Touch handlers for swipe
  const minSwipeDistance = 50;
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  return (
    <section
      id="industries"
      className="py-24 bg-slate-50 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Industries We Transform</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div
          className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="min-w-full h-full relative"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
                  style={{ backgroundImage: `url(${industry.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                </div>

                <div className="absolute bottom-8 left-4 right-4 md:bottom-12 md:left-12 md:max-w-xl">
                  <div className="bg-transparent p-6 md:p-8 rounded-2xl transform transition-all duration-500 translate-y-0 opacity-100">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                        {industry.name}
                      </h3>
                    </div>

                    <p className="text-slate-100 text-base md:text-lg mb-6 leading-relaxed drop-shadow-md font-medium">
                      {industry.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {industry.highlights.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs md:text-sm font-semibold rounded-full border border-white/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all hover:scale-110 border border-white/20 z-10 hidden md:flex"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all hover:scale-110 border border-white/20 z-10 hidden md:flex"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-6 right-6 md:right-12 flex space-x-2 z-10">
            {industries.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index
                  ? 'bg-cyan-400 w-8'
                  : 'bg-white/50 hover:bg-white/80'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
*/

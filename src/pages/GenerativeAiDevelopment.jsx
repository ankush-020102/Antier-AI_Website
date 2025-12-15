import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SiAmazon, SiAnthropic, SiOpenai, SiGoogle, SiMeta, SiGooglegemini } from "react-icons/si";
import { FaBrain, FaRobot, FaCode, FaImage, FaComments } from "react-icons/fa6";
import AmazonTitan from '../assets/ML_AI/Amazon-Titan.png';
import CommandR from '../assets/ML_AI/Command-R.png';
import Embed from '../assets/ML_AI/Embed.png';

const GenerativeAiDevelopment = () => {
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
            <section className="py-20 bg-slate-50/20">
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
                            {
                                name: "Amazon Titan",
                                icon: <img src={AmazonTitan} alt="Amazon Titan" className="w-12 h-12 object-contain" />
                            },
                            {
                                name: "Claude",
                                icon: (
                                    <svg className="w-12 h-12" viewBox="0 0 256 176" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M147.487 0C147.487 0 217.568 175.78 217.568 175.78C217.568 175.78 256 175.78 256 175.78C256 175.78 185.919 0 185.919 0C185.919 0 147.487 0 147.487 0Z" fill="#D97757" />
                                        <path d="M66.1828 106.221C66.1828 106.221 90.1625 44.4471 90.1625 44.4471C90.1625 44.4471 114.142 106.221 114.142 106.221C114.142 106.221 66.1828 106.221 66.1828 106.221ZM70.0705 0C70.0705 0 0 175.78 0 175.78C0 175.78 39.1792 175.78 39.1792 175.78C39.1792 175.78 53.5098 138.866 53.5098 138.866C53.5098 138.866 126.818 138.866 126.818 138.866C126.818 138.866 141.146 175.78 141.146 175.78C141.146 175.78 180.325 175.78 180.325 175.78C180.325 175.78 110.254 0 110.254 0C110.254 0 70.0705 0 70.0705 0Z" fill="#D97757" />
                                    </svg>
                                )
                            },
                            {
                                name: "Stable Diffusion",
                                icon: (
                                    <svg className="w-12 h-12" viewBox="0 0 256 213" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M72.4183 212.45C121.896 212.45 154.076 186.245 154.076 146.824C154.076 116.252 134.504 96.8259 99.5072 88.7808L77.0382 82.0413C57.3276 77.6165 45.8228 72.3032 48.5335 58.7294C50.7885 47.4372 57.5348 41.0624 73.2228 41.0624C123.095 41.0624 141.573 58.7294 141.573 58.7294L141.573 16.2374C141.573 16.2374 123.583 0 73.2228 0C25.7566 0 0 24.4238 0 62.2359C0 92.8074 17.8493 110.586 54.0524 119.034C56.5861 119.667 57.8811 119.993 57.9374 120.01C63.4442 121.714 70.875 123.966 80.2297 126.765C98.7335 131.19 103.492 135.886 103.492 149.965C103.492 162.837 90.1176 170.154 72.4183 170.154C21.432 170.154 0 144.361 0 144.361L0 191.439C0 191.439 13.4025 212.45 72.4183 212.45Z" fill="#7C3AED" />
                                        <path d="M225.442 209.266C242.957 209.266 256 196.596 256 179.454C256 161.939 243.33 149.641 225.442 149.641C207.927 149.641 195.257 161.939 195.257 179.454C195.257 196.969 207.927 209.266 225.442 209.266Z" fill="#EF4444" />
                                    </svg>
                                )
                            },
                            {
                                name: "Mistral AI",
                                icon: (
                                    <svg className="w-12 h-12" viewBox="0 0 256 233" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="186.182" width="46.5455" height="46.5455" fill="#FACC15" />
                                        <rect x="209.455" width="46.5455" height="46.5455" fill="#FACC15" />
                                        <rect width="46.5455" height="46.5455" fill="#FACC15" />
                                        <rect y="46.5455" width="46.5455" height="46.5455" fill="#FACC15" />
                                        <rect y="93.0909" width="46.5455" height="46.5455" fill="#FB923C" />
                                        <rect y="139.636" width="46.5455" height="46.5455" fill="#F97316" />
                                        <rect y="186.182" width="46.5455" height="46.5455" fill="#EF4444" />
                                        <rect x="23.2727" width="46.5455" height="46.5455" fill="#FACC15" />
                                        <rect x="209.455" y="46.5455" width="46.5455" height="46.5455" fill="#FACC15" />
                                        <rect x="23.2727" y="46.5455" width="46.5455" height="46.5455" fill="#FACC15" />
                                        <rect x="139.636" y="46.5455" width="46.5455" height="46.5455" fill="#FACC15" />
                                        <rect x="162.909" y="46.5455" width="46.5455" height="46.5455" fill="#FB923C" />
                                        <rect x="69.8182" y="46.5455" width="46.5455" height="46.5455" fill="#FACC15" />
                                        <rect x="116.364" y="93.0909" width="46.5455" height="46.5455" fill="#FB923C" />
                                        <rect x="162.909" y="93.0909" width="46.5455" height="46.5455" fill="#FB923C" />
                                        <rect x="69.8182" y="93.0909" width="46.5455" height="46.5455" fill="#FB923C" />
                                        <rect x="93.0909" y="139.636" width="46.5455" height="46.5455" fill="#F97316" />
                                        <rect x="116.364" y="139.636" width="46.5455" height="46.5455" fill="#F97316" />
                                        <rect x="209.455" y="93.0909" width="46.5455" height="46.5455" fill="#FB923C" />
                                        <rect x="23.2727" y="93.0909" width="46.5455" height="46.5455" fill="#FB923C" />
                                        <rect x="186.182" y="139.636" width="46.5455" height="46.5455" fill="#F97316" />
                                        <rect x="209.455" y="139.636" width="46.5455" height="46.5455" fill="#F97316" />
                                        <rect x="186.182" y="186.182" width="46.5455" height="46.5455" fill="#EF4444" />
                                        <rect x="23.2727" y="139.636" width="46.5455" height="46.5455" fill="#F97316" />
                                        <rect x="209.455" y="186.182" width="46.5455" height="46.5455" fill="#EF4444" />
                                        <rect x="23.2727" y="186.182" width="46.5455" height="46.5455" fill="#EF4444" />
                                    </svg>
                                )
                            },
                            { name: "Meta Llama", icon: <SiMeta className="w-12 h-12 text-blue-500" /> },
                            {
                                name: "Command R",
                                icon: <img src={CommandR} alt="Command R" className="w-12 h-12 object-contain" />
                            },
                            {
                                name: "Embed",
                                icon: <img src={Embed} alt="Embed" className="w-12 h-12 object-contain" />
                            },
                            { name: "GPT-4", icon: <SiOpenai className="w-12 h-12 text-white" /> },
                            { name: "DALL·E 3", icon: <SiOpenai className="w-12 h-12 text-white" /> },
                            {
                                name: "Gemini",
                                icon: (
                                    <svg className="w-12 h-12" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M256 0C256 141.385 141.385 256 0 256C141.385 256 256 370.615 256 512C256 370.615 370.615 256 512 256C370.615 256 256 141.385 256 0Z" fill="url(#gemini-gradient)" />
                                        <defs>
                                            <linearGradient id="gemini-gradient" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
                                                <stop offset="0%" stopColor="#4facfe" />
                                                <stop offset="100%" stopColor="#00f2fe" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                )
                            },
                            {
                                name: "Midjourney",
                                icon: (
                                    <svg className="w-12 h-12" viewBox="0 0 256 214" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M125.939 126.641C125.939 144.036 120.778 157.894 110.457 168.215C98.8607 180.507 83.6112 186.653 64.7088 186.653C46.6182 186.653 31.3107 180.391 18.7864 167.867C6.26214 155.342 0 139.919 0 121.596C0 103.274 6.26214 87.8504 18.7864 75.3261C31.3107 62.8018 46.6182 56.5397 64.7088 56.5397C73.8701 56.5397 82.5095 58.1632 90.6271 61.4102C98.7447 64.6573 105.413 69.2379 110.631 75.1521L99.1506 86.6327C95.3237 81.9941 90.3662 78.3702 84.278 75.761C78.1898 73.1517 71.6667 71.8471 64.7088 71.8471C51.1408 71.8471 39.6602 76.5437 30.267 85.9369C20.9898 95.4461 16.3511 107.333 16.3511 121.596C16.3511 135.86 20.9898 147.747 30.267 157.256C39.6602 166.649 51.1408 171.346 64.7088 171.346C77.1171 171.346 87.4381 167.867 95.6716 160.909C103.905 153.951 108.66 144.384 109.935 132.207L64.7088 132.207L64.7088 117.248L125.069 117.248C125.649 120.495 125.939 123.626 125.939 126.641Z" fill="white" />
                                        <path d="M240.86 162.892C241.522 164.611 240.979 166.05 239.511 167.231C225.757 178.303 211.32 188.346 195.606 196.473L182.486 203.248C185.192 205.409 188.247 206.017 191.489 205.896C195.039 205.763 198.013 204.133 200.76 202.038C204.042 199.534 207.146 196.764 210.595 194.519C218.945 189.084 227.944 189.575 235.843 195.704C239.198 198.308 242.282 201.282 245.763 203.692C247.446 204.857 249.601 205.493 251.667 205.949L252.124 206.048C254.631 206.576 256.155 207.839 255.987 210.003C255.822 212.151 254.12 213.406 251.55 213.24C246.105 212.888 241.837 210.079 237.837 206.684C235.339 204.564 232.926 202.304 230.231 200.465C225.232 197.056 219.928 196.957 214.835 200.23C211.834 202.159 209.105 204.519 206.296 206.738C201.769 210.316 196.883 212.95 190.922 213.04C184.384 213.139 179.123 210.205 174.302 206.174C172.578 204.732 170.871 203.269 169.114 201.868C162.528 196.614 155.78 196.617 149.171 201.872C148.401 202.484 147.639 203.107 146.879 203.732L145.359 204.982C144.091 206.023 142.818 207.056 141.51 208.044C133.42 214.159 124.155 214.451 115.772 208.725C112.721 206.642 109.941 204.164 107.032 201.872C100.422 196.667 94.9358 196.683 88.2082 201.85L87.6578 202.274L86.0081 203.549C83.8072 205.249 81.593 206.934 79.2684 208.445C70.5077 214.141 61.5912 213.903 52.8844 208.398C49.2814 206.12 45.9919 203.346 42.5791 200.767L42.0662 200.381C40.7041 199.364 39.3584 198.322 37.9599 197.357C36.0092 196.011 33.9097 195.635 31.7978 196.917C28.0661 199.183 24.378 201.521 20.682 203.845C17.1891 206.041 13.8139 208.455 10.1817 210.387C8.21426 211.433 5.84967 211.92 3.60651 212.207C1.51908 212.473 0.0829625 210.923 0.00346201 208.967C-0.0748963 207.041 1.18319 205.831 3.13813 205.275L3.25168 205.244C5.33036 204.688 7.47068 203.982 9.27366 202.849C14.3613 199.65 19.2907 196.2 24.2774 192.841C24.4185 192.746 24.5009 192.565 24.6701 192.348L21.5745 186.494C20.5415 184.54 19.509 182.584 18.4822 180.624C16.6811 177.186 17.8532 174.88 21.7191 174.603C32.1417 173.859 42.572 173.22 52.9997 172.549L113.02 168.697C127.207 167.784 141.393 166.862 155.579 165.947C175.585 164.656 195.592 163.367 215.598 162.078C220.918 161.735 226.238 161.401 231.558 161.053L236.877 160.7C238.71 160.577 240.18 161.13 240.86 162.892Z" fill="white" />
                                    </svg>
                                )
                            },
                            {
                                name: "PaLM-2",
                                icon: (
                                    <svg className="w-12 h-12" viewBox="0 0 256 229" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M128 228.542C137.895 228.542 145.91 220.527 145.91 210.632V55.4133H110.09V210.632C110.09 220.527 118.105 228.542 128 228.542Z" fill="#F9AB00" />
                                        <path d="M199.356 112.053C180.043 92.7554 151.193 88.845 128 100.307L204.669 176.976C207.833 180.14 213.281 178.887 214.624 174.633C221.37 153.276 216.281 128.993 199.356 112.053Z" fill="#5BB974" />
                                        <path d="M56.6442 112.053C75.957 92.7554 104.807 88.845 128 100.307L51.331 176.976C48.1669 180.14 42.7193 178.887 41.3761 174.633C34.63 153.276 39.7194 128.993 56.6442 112.053Z" fill="#129EAF" />
                                        <path d="M193.669 52.5478C163.163 52.5478 137.268 72.5471 128 100.307H249.25C254.22 100.307 257.533 95.0538 255.279 90.6211C243.757 68.0099 220.504 52.5478 193.669 52.5478Z" fill="#AF5CF7" />
                                        <path d="M140.671 20.1011C119.09 41.6825 114.926 74.1142 128 100.307L213.743 14.564C217.266 11.0417 215.893 4.98221 211.161 3.44495C187.013 -4.3906 159.641 1.1316 140.671 20.1011Z" fill="#FF8BCB" />
                                        <path d="M115.329 20.1011C136.91 41.6825 141.074 74.1142 128 100.307L42.2566 14.564C38.7344 11.0417 40.1075 4.98221 44.8386 3.44495C68.9871 -4.3906 96.3593 1.1316 115.329 20.1011Z" fill="#FA7B17" />
                                        <path d="M62.3306 52.5478C92.837 52.5478 118.732 72.5471 128 100.307H6.75038C1.7804 100.307 -1.53292 95.0538 0.720731 90.6211C12.2427 68.0099 35.4957 52.5478 62.3306 52.5478Z" fill="#4285F4" />
                                    </svg>
                                )
                            }
                        ].map((model, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center justify-center w-32 h-32 sm:w-40 sm:h-40"
                                // variants={fadeInUp}
                                animate={{
                                    y: [0, -15, 0],
                                    scale: [1, 1.05, 1]
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.2
                                }}
                            >
                                <div className="mb-3">{model.icon}</div>
                                <span className="text-slate-300 text-sm font-medium text-center">{model.name}</span>
                            </motion.div>
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
            {/* FAQ Section */}
            <section className="py-24 bg-slate-900 border-t border-slate-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            Common questions about our Generative AI development services and solutions.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { question: "What is Generative AI?", answer: "Generative AI refers to artificial intelligence algorithms that can generate new content, including text, images, audio, and video, based on training data." },
                            { question: "What is the cost of developing a robust Generative AI solution?", answer: "The cost varies depending on the complexity, features, and specific requirements of the project. Contact us for a tailored quote." },
                            { question: "How long does it take to create a generative AI solution?", answer: "Development time depends on the scope of the project, but typically ranges from a few weeks to several months." },
                            { question: "What are the benefits of utilizing generative AI solutions?", answer: "Benefits include increased efficiency, enhanced creativity, cost reduction, and improved decision-making capabilities." },
                            { question: "What is Antier’s generative AI integration process?", answer: "Our process involves consultation, strategy formulation, model development or selection, integration, and ongoing support." }
                        ].map((faq, index) => {
                            const isOpen = activeFAQ === index;
                            return (
                                <div
                                    key={index}
                                    className={`bg-slate-800 rounded-xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-purple-500 shadow-lg ring-1 ring-purple-500/20' : 'border-slate-700 shadow-sm hover:shadow-md hover:border-purple-400'}`}
                                >
                                    <button
                                        onClick={() => setActiveFAQ(isOpen ? null : index)}
                                        className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none group"
                                    >
                                        <span className={`text-lg font-semibold transition-colors duration-300 ${isOpen ? 'text-purple-400' : 'text-white group-hover:text-purple-400'}`}>
                                            {faq.question}
                                        </span>
                                        <span className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-500 text-white ${isOpen ? 'rotate-180' : ''}`}>
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
                                        <div className="px-6 pb-6 text-slate-400 leading-relaxed">
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

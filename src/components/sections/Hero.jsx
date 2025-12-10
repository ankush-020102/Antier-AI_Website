import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl mix-blend-screen"></div>
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl mix-blend-screen"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
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

            {/* Trust Strip */}
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

          {/* Visual Block - Dashboard Mockup */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-20 transform rotate-3 scale-95"></div>
            <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-2xl">
              {/* Fake Header */}
              <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-slate-500 font-mono">agent_orchestrator.exe</div>
              </div>

              {/* Fake Content */}
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

export default Hero;

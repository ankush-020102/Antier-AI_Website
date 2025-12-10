import React from 'react';

const AIWidgetPreview = () => {
  return (
    <section className="py-24 bg-slate-50  overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
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

          {/* Chat Visual */}
          <div className="lg:w-1/2 w-full">
            <div className="relative max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-30"></div>
              
              <div className="relative bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden">
                {/* Chat Header */}
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

                {/* Chat Body */}
                <div className="p-6 space-y-6 h-80 overflow-hidden relative">
                  {/* Message 1 */}
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0 flex items-center justify-center text-xs text-white">U</div>
                    <div className="bg-slate-800 rounded-2xl rounded-tl-none p-4 text-sm text-slate-300 max-w-[85%]">
                      How can AI help reduce churn in my DeFi platform?
                    </div>
                  </div>

                  {/* Message 2 */}
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

                  {/* Typing Indicator */}
                  <div className="absolute bottom-4 left-6 flex gap-1">
                    <span className="w-2 h-2 bg-slate-600 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-slate-600 rounded-full animate-bounce delay-100"></span>
                    <span className="w-2 h-2 bg-slate-600 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>

                {/* Chat Input */}
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

export default AIWidgetPreview;

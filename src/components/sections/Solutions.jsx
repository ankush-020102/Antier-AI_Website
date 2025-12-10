import React from 'react';

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

export default Solutions;

import React from 'react';

const Differentiators = () => {
  // const features = [
  //   {
  //     title: "Web3-first AI strategies",
  //     description: "We don't just add AI to legacy systems. We design architectures where AI agents natively interact with blockchain protocols for autonomous value creation.",
  //     tag: "Strategy"
  //   },
  //   {
  //     title: "On-chain signals as trusted data",
  //     description: "Leverage immutable on-chain data to train models that are verifiable and tamper-proof, solving the 'black box' problem of traditional AI.",
  //     tag: "Data"
  //   },
  //   {
  //     title: "AI agents for Enterprise",
  //     description: "Deploy autonomous agents that handle complex workflows in DeFi, supply chain, and gaming, reducing operational overhead by up to 60%.",
  //     tag: "Engineering"
  //   },
  //   {
  //     title: "From PoC to production at scale",
  //     description: "We move beyond hype. Our engineering rigor ensures your AI solutions are robust, secure, and ready for millions of users.",
  //     tag: "Operations"
  //   }
  // ];
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
          {/* <p className="text-lg text-slate-600">
            We bridge the gap between deterministic blockchain logic and probabilistic AI intelligence to build systems that are both smart and trustworthy.
          </p> */}
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

export default Differentiators;

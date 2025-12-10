// import React from 'react';

// const CaseStudies = () => {
//   const cases = [
//     {
//       client: "Global Crypto Exchange",
//       problem: "High manual review costs for KYC",
//       solution: "Deployed autonomous AI verification agents",
//       impact: "Reduced fraud losses by 27%"
//     },
//     {
//       client: "Retail Bank",
//       problem: "Low engagement on mobile app",
//       solution: "Implemented hyper-personalized AI recommendations",
//       impact: "Increased engagement by 35%"
//     },
//     {
//       client: "Metaverse Gaming Studio",
//       problem: "Static NPC interactions",
//       solution: "Integrated LLM-driven character brains",
//       impact: "2x average session duration"
//     }
//   ];

//   return (
//     <section id="case-studies" className="py-20 bg-[#F0F6FC]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row justify-between items-end mb-12">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">From experiments to <br/> measurable outcomes</h2>
//           </div>
//           <a href="#" className="hidden md:inline-flex items-center text-cyan-400 font-medium hover:text-cyan-300 transition-colors">
//             View more stories
//             <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//             </svg>
//           </a>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {cases.map((study, index) => (
//             <div key={index} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:shadow-xl hover:shadow-blue-900/10 transition-all">
//               <div className="text-xs font-bold tracking-wider text-blue-400 uppercase mb-4">
//                 {study.client}
//               </div>
              
//               <div className="space-y-4 mb-8">
//                 <div>
//                   <div className="text-xs text-slate-500 uppercase mb-1">Problem</div>
//                   <p className="text-slate-300 text-sm">{study.problem}</p>
//                 </div>
//                 <div>
//                   <div className="text-xs text-slate-500 uppercase mb-1">Solution</div>
//                   <p className="text-slate-300 text-sm">{study.solution}</p>
//                 </div>
//               </div>

//               <div className="border-t border-slate-800 pt-6">
//                 <div className="text-3xl font-bold text-white mb-1">
//                   {study.impact.split(' ').find(w => w.match(/\d/))}
//                   <span className="text-lg font-normal text-slate-400 ml-2">
//                     {study.impact.replace(study.impact.split(' ').find(w => w.match(/\d/)), '').trim()}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-8 text-center md:hidden">
//           <a href="#" className="inline-flex items-center text-cyan-400 font-medium hover:text-cyan-300 transition-colors">
//             View more stories
//             <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//             </svg>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CaseStudies;



import React, { useEffect, useRef, useState } from 'react';

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

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            From experiments to <br /> measurable outcomes
          </h2>
        </div>

        {/* Cards Wrapper */}
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

export default CaseStudies;

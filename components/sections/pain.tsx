const painPoints = [
  {
    title: "Hours Wasted on Dead Ends",
    description: "You call 10 agents. Only 3 pick up. Of those, 2 have nothing available. The last one promises to call back—but never does.",
    stat: "10+ calls",
  },
  {
    title: "Pay Before You Even Look",
    description: "Agents demand viewing fees upfront. You pay 2,000 FCFA just to see a house that might not even match what you need.",
    stat: "2,000 FCFA per view",
  },
  {
    title: "False Promises & Misleading Photos",
    description: "The listing showed a modern apartment. You arrive to find peeling walls, broken fixtures, and a neighborhood you'd never consider.",
    stat: "50% mismatch rate",
  },
  {
    title: "No Transparency, No Trust",
    description: "Prices change without warning. Availability is unclear. You're left guessing if the agent is honest or just wasting your time.",
    stat: "Zero accountability",
  },
];

export function Pain() {
  return (
    <section
      id="problem"
      className="relative scroll-mt-20 py-32 bg-[#006A4C] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[64px_64px]"></div>
     
      <div className="relative mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-sm font-semibold tracking-wider text-[#D67B28] uppercase mb-4">The Reality</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            House Hunting in Buea Is <span className="text-[#D67B28]">Broken</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Every day, people waste time, money, and energy navigating a system designed to frustrate them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 container mx-auto mb-20">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative p-8 border-l-4 border-[#D67B28]/50 group-hover:border-[#D67B28] transition-colors">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {point.title}
                  </h3>
                  <span className="text-xs font-mono text-[#D67B28] bg-[#D67B28]/20 px-3 py-1.5 rounded-full whitespace-nowrap border border-[#D67B28]/30">
                    {point.stat}
                  </span>
                </div>
                <p className="text-base text-white/80 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-[#D67B28] blur-2xl opacity-20"></div>
            <p className="relative text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="text-white/90">You deserve</span>{" "}
              <span className="text-[#D67B28]">better</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

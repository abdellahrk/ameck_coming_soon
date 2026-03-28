export function SocialProof() {
  const stats = [
    { 
      value: "50+", 
      label: "Verified Listings",
      sublabel: "Ready to view"
    },
    { 
      value: "20+", 
      label: "Trusted Agents",
      sublabel: "Vetted & approved"
    },
    { 
      value: "200+", 
      label: "Early Adopters",
      sublabel: "Joining the waitlist"
    },
  ];

  return (
    <section
      id="stats"
      className="relative scroll-mt-20 py-32 bg-white dark:bg-zinc-50 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#006A4C08_1px,transparent_1px),linear-gradient(to_bottom,#006A4C08_1px,transparent_1px)] bg-size-[64px_64px]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-[#006A4C]/5 via-transparent to-[#D67B28]/5"></div>
      
      <div className="relative mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="text-sm font-semibold tracking-wider text-[#D67B28] uppercase mb-4">Momentum</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#006A4C] mb-8">
              Building Trust, One Listing at a Time
            </h2>
            
            <div className="space-y-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 group"
                >
                  <div className="shrink-0">
                    <div className="text-5xl sm:text-6xl font-bold bg-linear-to-br from-[#006A4C] to-[#D67B28] bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                  </div>
                  <div className="border-l-4 border-[#D67B28]/30 pl-6 group-hover:border-[#D67B28] transition-colors">
                    <div className="text-xl font-bold text-[#006A4C] mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-700">
                      {stat.sublabel}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="relative p-10 lg:p-12 bg-white border-2 border-[#006A4C]/20 rounded-3xl">
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 bg-[#D67B28] rounded-full flex items-center justify-center">
                  <span className="text-3xl text-white">&quot;</span>
                </div>
              </div>
              
              <blockquote>
                <p className="text-xl sm:text-2xl font-medium text-[#006A4C] leading-relaxed mb-8">
                  If this works the way it says, it will change everything about finding a home in Buea.
                </p>
                <footer className="flex items-center gap-3">
                  <div className="w-12 h-1 bg-[#D67B28] rounded-full"></div>
                  <cite className="text-base font-semibold text-zinc-700 dark:text-zinc-800 not-italic">
                    Early Tester
                  </cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

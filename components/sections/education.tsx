import { LayoutGrid, AlertTriangle, Users } from "lucide-react";

export function Education() {
  const points = [
    {
      title: "Information is Scattered Everywhere",
      description: "Listings spread across WhatsApp, Facebook, and individual agents with no central source.",
      icon: <LayoutGrid className="w-7 h-7" />,
    },
    {
      title: "No Way to Verify What's Real",
      description: "Misleading photos, unclear availability, and no way to verify agent legitimacy.",
      icon: <AlertTriangle className="w-7 h-7" />,
    },
    {
      title: "Agents Have No Accountability",
      description: "No professional system, broken promises, and constantly changing prices.",
      icon: <Users className="w-7 h-7" />,
    },
  ];

  return (
    <section className="relative py-32 bg-white dark:bg-zinc-50 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#006A4C08_1px,transparent_1px),linear-gradient(to_bottom,#006A4C08_1px,transparent_1px)] bg-size-[64px_64px]"></div>
      
      <div className="relative mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-24">
            <p className="text-sm font-semibold tracking-wider text-[#D67B28] uppercase mb-4">The Problem</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#006A4C] mb-6">
              Why Finding a Home in Buea Feels Impossible
            </h2>
            <p className="text-xl text-zinc-700 dark:text-zinc-800 mb-8 leading-relaxed">
              House hunting should be exciting—not exhausting. But the current system is designed to frustrate you at every turn.
            </p>
            <div className="p-8 bg-linear-to-br from-[#006A4C]/10 to-[#D67B28]/10 rounded-2xl border-l-4 border-[#006A4C]">
              <p className="text-lg font-semibold text-[#006A4C] mb-2">
                Ameck changes this.
              </p>
              <p className="text-base text-zinc-700 dark:text-zinc-800">
                We create a verified, transparent platform where every listing is real, every agent is accountable, and you can make decisions with confidence.
              </p>
            </div>
          </div>

          <div className="space-y-10">
            {points.map((point, index) => (
              <div key={index} className="group flex gap-6">
                <div className="shrink-0 w-14 h-14 bg-linear-to-br from-[#006A4C]/10 to-[#D67B28]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="text-[#006A4C]">
                    {point.icon}
                  </div>
                </div>
                <div className="border-l-4 border-[#D67B28]/30 pl-6 group-hover:border-[#D67B28] transition-colors">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#006A4C] mb-2">
                    {point.title}
                  </h3>
                  <p className="text-base text-zinc-700 dark:text-zinc-800">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

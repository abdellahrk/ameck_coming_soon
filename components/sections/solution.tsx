import { ShieldCheck, Video, Users, Zap } from "lucide-react";
import Image from "next/image";

const features = [
  {
    name: "Only Verified Properties",
    description: "Every listing is inspected and confirmed before going live. No fake houses, no misleading information—just real, available homes.",
    icon: <ShieldCheck className="w-6 h-6 text-[#006A4C]" />,
  },
  {
    name: "See Exactly What You're Getting",
    description: "Authentic photos and video tours show you the real condition of each property. What you see on Ameck is what you'll find when you visit.",
    icon: <Video className="w-6 h-6 text-[#006A4C]" />,
  },
  {
    name: "Work With Vetted Professionals",
    description: "Connect only with agents who've been verified and rated by real tenants. No more unreliable contacts or broken promises.",
    icon: <Users className="w-6 h-6 text-[#006A4C]" />,
  },
  {
    name: "Find Your Home Faster",
    description: "Filter by location, price, and features to see exactly what fits your needs. Make confident decisions without endless searching.",
    icon: <Zap className="w-6 h-6 text-[#006A4C]" />,
  },
];

export function Solution() {
  return (
    <section id="solution" className="scroll-mt-20 py-24 bg-white dark:bg-zinc-50">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative">
              <Image 
                src="/img/app.png" 
                width={400} 
                height={800} 
                className="mx-auto lg:mx-0 drop-shadow-2xl" 
                alt="Ameck App Solution" 
                priority
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#D67B28]/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-[#006A4C]/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>

          <div>
            <div className="mb-12">
              <p className="text-sm font-semibold tracking-wider text-[#D67B28] uppercase mb-4">The Solution</p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#006A4C] mb-6">
                A Platform Built on Trust, Transparency, and Real Results
              </h2>
              <p className="text-lg text-zinc-700 dark:text-zinc-800">
                Ameck eliminates the guesswork from house hunting. We verify every listing, vet every agent, and give you complete visibility—so you can find your home with confidence, not frustration.
              </p>
            </div>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 group"
                >
                  <div className="shrink-0 w-12 h-12 bg-[#006A4C]/10 rounded-lg flex items-center justify-center group-hover:bg-[#006A4C]/20 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#006A4C] mb-2">
                      {feature.name}
                    </h3>
                    <p className="text-base text-zinc-700 dark:text-zinc-800">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ShieldCheck, FileCheck, CheckCircle2 } from "lucide-react";

export function TrustSystem() {
  const steps = [
    {
      number: "01",
      title: "Agent Verification",
      description: "Every agent is vetted with ID confirmation, background checks, and performance history before joining the platform.",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
    {
      number: "02",
      title: "Property Inspection",
      description: "Our team physically inspects each listing to verify photos, condition, amenities, and availability before publishing.",
      icon: <FileCheck className="w-8 h-8" />,
    },
    {
      number: "03",
      title: "Quality Control",
      description: "Only properties that meet our standards for accuracy and transparency are approved to appear on Ameck.",
      icon: <CheckCircle2 className="w-8 h-8" />,
    },
  ];

  return (
    <section
      id="trust"
      className="relative scroll-mt-20 py-32 bg-linear-to-br from-[#006A4C]/5 via-white to-[#D67B28]/5 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#006A4C08_1px,transparent_1px),linear-gradient(to_bottom,#006A4C08_1px,transparent_1px)] bg-size-[64px_64px]"></div>
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#006A4C]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#D67B28]/5 rounded-full blur-3xl"></div>

      <div className="relative mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-semibold tracking-wider text-[#D67B28] uppercase mb-4">Our Process</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#006A4C] mb-6">
            Three-Step Verification System
          </h2>
          <p className="text-lg text-zinc-700 dark:text-zinc-800">
            Every listing on Ameck goes through rigorous checks to ensure you&apos;re getting accurate, trustworthy information.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
           
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 rounded-2xl bg-white border-4 border-[#006A4C]/20 flex items-center justify-center relative z-10 group-hover:border-[#006A4C] group-hover:shadow-lg group-hover:shadow-[#006A4C]/20 transition-all duration-300">
                      <div className="text-[#006A4C]">
                        {step.icon}
                      </div>
                    </div>
                    <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-[#D67B28] flex items-center justify-center text-white font-bold text-sm shadow-lg z-20">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#006A4C] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-base text-zinc-700 dark:text-zinc-800 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <div className="inline-block relative">
          
            <div className="relative px-8 py-6 bg-white border-2 border-[#006A4C] rounded-2xl">
              <p className="text-xl sm:text-2xl font-bold text-[#006A4C]">
                If it&apos;s not verified, it doesn&apos;t go on Ameck.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

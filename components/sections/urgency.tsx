import { Sparkles, Eye, Trophy, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Urgency() {
  const benefits = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "First Look",
      text: "See verified listings before they go public",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Priority Access",
      text: "Get matched with the best properties first",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Skip the Wait",
      text: "Avoid the rush when we launch publicly",
    },
  ];

  return (
    <section className="relative py-32 bg-linear-to-br from-[#D67B28]/10 via-white to-[#006A4C]/10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#D67B2808_1px,transparent_1px),linear-gradient(to_bottom,#D67B2808_1px,transparent_1px)] bg-size-[64px_64px]"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#D67B28]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#006A4C]/10 rounded-full blur-3xl"></div>

      <div className="relative mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D67B28]/10 border border-[#D67B28]/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#D67B28]" />
              <span className="text-sm font-semibold text-[#D67B28] uppercase tracking-wider">Limited Spots</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#006A4C] mb-6">
              Join the Early Access List
            </h2>
            <p className="text-xl text-zinc-700 dark:text-zinc-800 max-w-3xl mx-auto">
              We&apos;re launching with a limited group to ensure every user gets the best experience. Early members get exclusive benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="relative group">
                <div className="p-8 bg-white border-2 border-[#006A4C]/10 rounded-2xl hover:border-[#006A4C]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#006A4C]/5">
                  <div className="w-14 h-14 bg-linear-to-br from-[#006A4C]/10 to-[#D67B28]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <div className="text-[#006A4C]">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#006A4C] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-base text-zinc-700 dark:text-zinc-800 leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="h-14 px-10 rounded-full text-lg bg-[#D67B28] hover:bg-[#D67B28]/90 text-white shadow-lg shadow-[#D67B28]/20"
              asChild
            >
              <a href="#waitlist">Get Early Access Now</a>
            </Button>
            <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-700">
              <span className="font-semibold text-[#006A4C]">200+ people</span> have already joined the waitlist
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

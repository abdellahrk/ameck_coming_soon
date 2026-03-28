import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative scroll-mt-20 py-32 bg-[#006A4C] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[64px_64px]"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D67B28]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="relative mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Stop Wasting Time.<br />Start Finding Homes.
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the waitlist and be among the first to experience verified house hunting in Buea.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              asChild 
              className="h-14 px-10 rounded-full text-lg bg-[#D67B28] hover:bg-[#D67B28]/90 text-white shadow-xl shadow-[#D67B28]/30 font-bold group"
            >
              <a href="#waitlist" className="flex items-center gap-2">
                Get Early Access
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          <p className="text-sm text-white/70">
            No credit card required • Free to join • <span className="font-semibold text-white">200+ people</span> already waiting
          </p>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32 bg-linear-to-br from-[#f6eede] via-[#D67B28]/5 to-[#006A4C]/10 dark:from-[#006A4C]/20 dark:via-[#D67B28]/10 dark:to-[#006A4C]/20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#006A4C]/20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-linear-to-r from-[#006A4C]/10 to-[#D67B28]/10 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#D67B28]/20 blur-3xl"></div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl md:text-6xl">
              Find Verified Houses in Buea Without Paying to Look
            </h1>
            <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-xl">
              No fake listings. No wasted time. No unnecessary viewing fees. Just
              real houses from trusted agents — ready when you are.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
              <Button size="lg" className="h-12 px-8 rounded-full text-base w-full sm:w-auto" asChild>
                <a href="#waitlist">Get Early Access</a>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 rounded-full text-base w-full sm:w-auto border-[#006A4C] text-[#006A4C] hover:bg-[#006A4C]/5 dark:border-[#006A4C] dark:text-[#006A4C]">
                View Sample Listings
              </Button>
            </div>
            <p className="mt-4 text-sm font-medium text-[#006A4C] dark:text-[#D67B28]">
              ✓ Joining 200+ people already waiting for Ameck
            </p>
          </div>
          <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center lg:justify-center">
            <div className="relative">
              <Image 
                src="/img/app.png" 
                width={300} 
                height={600} 
                className="mx-auto drop-shadow-2xl" 
                alt="Ameck App" 
                priority
              />
              <div className="absolute inset-0  pointer-events-none rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

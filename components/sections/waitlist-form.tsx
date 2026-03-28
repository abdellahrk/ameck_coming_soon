"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add waitlist logic here
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900" id="waitlist">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-zinc-950 rounded-3xl shadow-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
          <div className="p-8 sm:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl mb-4">
                Join the Ameck Priority List
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Tell us what you&apos;re looking for so we can match you faster.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-900 dark:text-zinc-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 text-zinc-900 dark:text-zinc-100 focus:border-[#006A4C] focus:ring-1 focus:ring-[#006A4C] outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-zinc-900 dark:text-zinc-300 mb-2">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    required
                    className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 text-zinc-900 dark:text-zinc-100 focus:border-[#006A4C] focus:ring-1 focus:ring-[#006A4C] outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-900 dark:text-zinc-300 mb-3">
                  Preferred Location
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {["Molyko", "Bomaka", "Mile 16", "Others"].map((loc) => (
                    <label key={loc} className="relative flex cursor-pointer rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4 shadow-sm focus:outline-none has-checked:border-[#006A4C] has-checked:ring-1 has-checked:ring-[#006A4C] has-checked:bg-[#006A4C]/5">
                      <input type="radio" name="location" value={loc} className="sr-only" required />
                      <span className="flex flex-1 text-sm font-medium text-zinc-900 dark:text-zinc-100 justify-center">
                        {loc}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-900 dark:text-zinc-300 mb-3">
                  Budget Range (XAF)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {["Under 50k", "50k–100k", "100k+"].map((budget) => (
                    <label key={budget} className="relative flex cursor-pointer rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4 shadow-sm focus:outline-none has-checked:border-[#006A4C] has-checked:ring-1 has-checked:ring-[#006A4C] has-checked:bg-[#006A4C]/5">
                      <input type="radio" name="budget" value={budget} className="sr-only" required />
                      <span className="flex flex-1 text-sm font-medium text-zinc-900 dark:text-zinc-100 justify-center">
                        {budget}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-900 dark:text-zinc-300 mb-3">
                  Property Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {["Room", "Studio", "Apartment"].map((type) => (
                    <label key={type} className="relative flex cursor-pointer rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4 shadow-sm focus:outline-none has-checked:border-[#006A4C] has-checked:ring-1 has-checked:ring-[#006A4C] has-checked:bg-[#006A4C]/5">
                      <input type="radio" name="type" value={type} className="sr-only" required />
                      <span className="flex flex-1 text-sm font-medium text-zinc-900 dark:text-zinc-100 justify-center">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-900 dark:text-zinc-300 mb-3">
                  When do you need a house?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {["Immediately", "Within 1–2 months", "Just exploring"].map((time) => (
                    <label key={time} className="relative flex cursor-pointer rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4 shadow-sm focus:outline-none has-checked:border-[#006A4C] has-checked:ring-1 has-checked:ring-[#006A4C] has-checked:bg-[#006A4C]/5">
                      <input type="radio" name="timeline" value={time} className="sr-only" required />
                      <span className="flex flex-1 text-sm font-medium text-zinc-900 dark:text-zinc-100 justify-center text-center">
                        {time}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <Button size="lg" className="h-12 px-8 rounded-full text-base w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Get Early Access"}
                </Button>
                <p className="mt-4 text-center text-sm text-zinc-500 dark:text-zinc-400">
                  No spam. Only verified listings and early access updates.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

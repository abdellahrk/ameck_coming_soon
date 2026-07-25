"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

// ← Change this to your API endpoint
const WAITLIST_API_ENDPOINT = "https://ameck.ddev.site/api/v1/subscribe-waitlist"; //"https://ameck.co/api/v1/subscribe-waitlist";

interface FormData {
  name: string;
  whatsapp: string;
  location: string;
  budget: string;
  type: string;
  timeline: string;
}

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function WaitlistForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    whatsapp: "",
    location: "",
    budget: "",
    type: "",
    timeline: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    try {
      const res = await fetch(WAITLIST_API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message ?? `Server error: ${res.status}`);
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  if (status === "success") {
    return (
      <section className="scroll-mt-20 py-24 bg-zinc-50 dark:bg-zinc-900" id="waitlist">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-zinc-950 rounded-3xl shadow-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
            <div className="p-8 sm:p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="rounded-full bg-[#006A4C]/10 p-4">
                  <svg className="w-10 h-10 text-[#006A4C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
                You&apos;re on the list!
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                We&apos;ll reach out on WhatsApp as soon as we have a match for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="scroll-mt-20 py-24 bg-zinc-50 dark:bg-zinc-900" id="waitlist">
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
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 text-zinc-900 dark:text-zinc-100 focus:border-[#006A4C] focus:ring-1 focus:ring-[#006A4C] outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Radio group helper */}
              {[
                {
                  label: "Preferred Location",
                  name: "location",
                  options: ["Molyko", "Bomaka", "Mile 16", "Others"],
                  cols: "grid-cols-2 sm:grid-cols-4",
                },
                {
                  label: "Budget Range (XAF)",
                  name: "budget",
                  options: ["Under 50k", "50k–100k", "100k+"],
                  cols: "grid-cols-1 sm:grid-cols-3",
                },
                {
                  label: "Property Type",
                  name: "type",
                  options: ["Room", "Studio", "Apartment"],
                  cols: "grid-cols-1 sm:grid-cols-3",
                },
                {
                  label: "When do you need a house?",
                  name: "timeline",
                  options: ["Immediately", "Within 1–2 months", "Just exploring"],
                  cols: "grid-cols-1 sm:grid-cols-3",
                },
              ].map((group) => (
                <div key={group.name}>
                  <label className="block text-sm font-medium text-zinc-900 dark:text-zinc-300 mb-3">
                    {group.label}
                  </label>
                  <div className={`grid ${group.cols} gap-3`}>
                    {group.options.map((option) => {
                      const checked = formData[group.name as keyof FormData] === option;
                      return (
                        <label
                          key={option}
                          className={`relative flex cursor-pointer rounded-xl border p-4 shadow-sm transition-colors ${
                            checked
                              ? "border-[#006A4C] ring-1 ring-[#006A4C] bg-[#006A4C]/5"
                              : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950"
                          }`}
                        >
                          <input
                            type="radio"
                            name={group.name}
                            value={option}
                            checked={checked}
                            onChange={handleChange}
                            className="sr-only"
                            required
                          />
                          <span className="flex flex-1 text-sm font-medium text-zinc-900 dark:text-zinc-100 justify-center text-center">
                            {option}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}

              {status === "error" && (
                <div className="rounded-xl border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800 px-4 py-3 text-sm text-red-700 dark:text-red-400">
                  {errorMessage}
                </div>
              )}

              <div className="pt-6">
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 px-8 rounded-full text-base w-full"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Get Early Access"
                  )}
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

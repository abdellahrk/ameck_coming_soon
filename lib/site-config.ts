/**
 * Contact and social URLs — replace placeholders with your real channels.
 * `whatsappPhone`: country + number, no + or spaces (e.g. 2376XXXXXXXX).
 */
export const siteConfig = {
  email: "hello@ameck.com",
  locationLine: "Buea, Southwest Region, Cameroon",
  whatsappPhone: "237670000000",
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    x: "https://x.com/",
    linkedin: "https://www.linkedin.com/",
  },
} as const;

export const siteAbout = {
  title: "About Ameck",
  body: "Ameck is a verified rental marketplace for Buea. We inspect listings, vet agents, and cut through fake photos and viewing fees — so you see real homes, know who you are dealing with, and find a place you can trust without the usual runaround.",
} as const;

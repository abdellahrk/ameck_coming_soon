import type { ReactNode } from "react";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { siteNavLinks } from "@/lib/site-nav";
import { siteAbout, siteConfig } from "@/lib/site-config";

const whatsappHref = `https://wa.me/${siteConfig.whatsappPhone}`;

const footerLinkClass =
  "text-base text-zinc-600 transition-colors hover:text-[#006A4C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006A4C] focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 rounded-sm";

const columnTitleClass =
  "text-sm font-semibold uppercase tracking-wider text-[#D67B28]";

function SocialIconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex size-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-colors hover:border-[#006A4C]/50 hover:bg-zinc-50 hover:text-[#006A4C]"
    >
      {children}
    </a>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073C24 5.445 18.627.072 12 .072S0 5.444 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.077v-3.47h3.048V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
    </svg>
  );
}

function IconX({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.063 2.063 0 110-4.126 2.063 2.063 0 010 4.126zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconWhatsApp({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-20 border-t border-zinc-200 bg-zinc-50 text-zinc-800"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand & about */}
          <div id="about" className="lg:col-span-5">
            <a href="#hero" className="inline-block transition-opacity hover:opacity-90">
              <Image
                src="/img/logo.png"
                width={132}
                height={66}
                className="h-auto w-36 sm:w-40"
                alt="Ameck"
              />
            </a>
            <p className="mt-3 text-lg font-medium tracking-wide text-zinc-700">
              Verified homes. Zero stress.
            </p>
            <h2 className={`mt-8 ${columnTitleClass}`}>{siteAbout.title}</h2>
            <p className="mt-3 max-w-md text-lg leading-relaxed text-zinc-600">
              {siteAbout.body}
            </p>
            <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Follow us
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <SocialIconLink href={siteConfig.social.facebook} label="Ameck on Facebook">
                <IconFacebook className="size-6" />
              </SocialIconLink>
              <SocialIconLink href={siteConfig.social.instagram} label="Ameck on Instagram">
                <IconInstagram className="size-6" />
              </SocialIconLink>
              <SocialIconLink href={siteConfig.social.x} label="Ameck on X">
                <IconX className="size-6" />
              </SocialIconLink>
              <SocialIconLink href={siteConfig.social.linkedin} label="Ameck on LinkedIn">
                <IconLinkedIn className="size-6" />
              </SocialIconLink>
              <SocialIconLink href={whatsappHref} label="Chat with Ameck on WhatsApp">
                <IconWhatsApp className="size-6" />
              </SocialIconLink>
            </div>
          </div>

          {/* Explore */}
          <nav className="lg:col-span-3" aria-labelledby="footer-explore-heading">
            <h2 id="footer-explore-heading" className={columnTitleClass}>
              Explore
            </h2>
            <ul className="mt-5 flex flex-col gap-3.5">
              {siteNavLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className={footerLinkClass}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h2 className={columnTitleClass}>Contact</h2>
            <ul className="mt-5 flex flex-col gap-6">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex gap-4 text-base text-zinc-600 transition-colors hover:text-[#006A4C]"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white text-[#006A4C] shadow-sm transition-colors group-hover:border-[#006A4C]/40">
                    <Mail className="size-5" aria-hidden />
                  </span>
                  <span className="pt-1.5">
                    <span className="block text-sm font-semibold uppercase tracking-wider text-zinc-500">
                      Email
                    </span>
                    {siteConfig.email}
                  </span>
                </a>
              </li>
              <li className="flex gap-4 text-base text-zinc-600">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white text-[#006A4C] shadow-sm">
                  <MapPin className="size-5" aria-hidden />
                </span>
                <span className="pt-1.5">
                  <span className="block text-sm font-semibold uppercase tracking-wider text-zinc-500">
                    Based in
                  </span>
                  {siteConfig.locationLine}
                </span>
              </li>
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-4 text-base text-zinc-600 transition-colors hover:text-[#006A4C]"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white text-[#006A4C] shadow-sm transition-colors group-hover:border-[#006A4C]/40">
                    <IconWhatsApp className="size-5" />
                  </span>
                  <span className="pt-1.5">
                    <span className="block text-sm font-semibold uppercase tracking-wider text-zinc-500">
                      WhatsApp
                    </span>
                    Message us anytime
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-zinc-200 pt-10 sm:flex-row sm:items-start">
          <p className="text-center text-base text-zinc-500 sm:text-left">
            © {new Date().getFullYear()} Ameck. All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2" aria-label="Legal">
            <a href="#" className="text-base text-zinc-600 transition-colors hover:text-zinc-900">
              Privacy
            </a>
            <a href="#" className="text-base text-zinc-600 transition-colors hover:text-zinc-900">
              Terms
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-base text-zinc-600 transition-colors hover:text-zinc-900"
            >
              Support
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

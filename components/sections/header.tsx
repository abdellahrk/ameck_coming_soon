"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { siteNavLinks } from "@/lib/site-nav";

const desktopLinkClass =
  "text-base font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors";

const mobileLinkClass =
  "block rounded-md px-3 py-2 text-lg font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="shrink-0">
            <a href="#hero" className="inline-block">
              <Image src="/img/logo.png" width={120} height={60} className="" alt="Ameck — home" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden max-w-[min(100%,52rem)] flex-1 md:flex flex-wrap items-center justify-end gap-x-5 gap-y-1 lg:gap-x-6"
            aria-label="Page sections"
          >
            {siteNavLinks.map(({ href, label }) => (
              <a key={href} href={href} className={desktopLinkClass}>
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden shrink-0 md:flex items-center">
            <Button asChild size="lg" className="h-12 px-8 rounded-full text-base">
              <a href="#waitlist">Get Early Access</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
          <nav className="space-y-1 px-4 pb-3 pt-2" aria-label="Page sections">
            {siteNavLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={mobileLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button asChild size="lg" className="h-12 px-8 rounded-full text-base w-full">
                <a href="#waitlist" onClick={() => setIsMenuOpen(false)}>
                  Get Early Access
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

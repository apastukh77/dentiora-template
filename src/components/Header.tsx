import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Phone,
  Clock3,
  Facebook,
  Twitter,
  Linkedin,
  Menu,
  X,
  Calendar,
} from "lucide-react";
import { Logo } from "./Logo";
import { LanguageDropdown } from "./LanguageDropdown";
import { PinterestIcon } from "./PinterestIcon";
import { useLanguage } from "@/i18n/LanguageContext";
import { site } from "@/lib/site";

export function Header() {
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { to: "/", label: t.nav.home, end: true },
    { to: "/servicii", label: t.nav.services },
    { to: "/locatie", label: t.nav.directions },
    { to: "/contact", label: t.nav.contact },
  ];

  const socials = [
    { Icon: Facebook, href: site.social.facebook, label: "Facebook" },
    { Icon: Twitter, href: site.social.twitter, label: "Twitter" },
    { Icon: Linkedin, href: site.social.linkedin, label: "LinkedIn" },
    { Icon: PinterestIcon, href: site.social.pinterest, label: "Pinterest" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      {/* Top row */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-6">
        <Logo />
        <div className="hidden items-center gap-8 lg:flex">
          <a
            href={`tel:${site.phone}`}
            className="flex items-center gap-3 transition-opacity hover:opacity-80"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10">
              <Phone className="h-5 w-5 text-accent" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-foreground">
                {site.phoneDisplay}
              </span>
              <span className="text-xs text-muted-foreground">
                {t.header.phoneLabel}
              </span>
            </span>
          </a>

          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10">
              <Clock3 className="h-5 w-5 text-accent" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-foreground">
                {t.header.hoursTitle}
              </span>
              <span className="text-xs text-muted-foreground">
                {t.header.hoursValue}
              </span>
            </span>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageDropdown />
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-muted"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Second row - nav */}
      <div className="hidden border-t border-border lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-6">
          <nav className="flex items-center" aria-label="Primary">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `relative px-4 py-4 text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-foreground"
                  } after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:rounded-full after:bg-primary after:transition-transform after:duration-300 ${
                    isActive ? "after:scale-x-100" : "after:scale-x-0"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-accent transition-colors hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="h-5 w-px bg-border" />
            <LanguageDropdown />
            {/* Кнопка Online Appointment в шапке */}
            <NavLink
              to="/contact#contact-form"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              <Calendar className="h-4 w-4" />
              {t.header.onlineAppointment}
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="animate-fade-in border-t border-border bg-background lg:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col px-4 py-2"
            aria-label="Mobile"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `border-b border-border py-3 text-sm font-medium transition-colors ${
                    isActive ? "text-primary" : "text-foreground"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Кнопка Online Appointment в мобильном меню */}
            <NavLink
              to="/contact#contact-form"
              onClick={() => setMobileOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-md bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              <Calendar className="h-4 w-4" />
              {t.header.onlineAppointment}
            </NavLink>

            <a
              href={`tel:${site.phone}`}
              className="flex items-center gap-2 py-3 text-sm font-semibold text-primary"
            >
              <Phone className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
            <div className="flex items-center gap-3 py-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-accent transition-colors hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

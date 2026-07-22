import { Link } from "react-router-dom"
import { Phone, Mail, MapPin, Globe, Clock3, Facebook, Twitter, Linkedin } from "lucide-react"
import { useLanguage } from "@/i18n/LanguageContext"
import { PinterestIcon } from "./PinterestIcon"
import { site } from "@/lib/site"

export function Footer() {
  const { t } = useLanguage()
  const f = t.footer

  const socials = [
    { Icon: Facebook, href: site.social.facebook, label: "Facebook", bg: "bg-[#3b5998]" },
    { Icon: Twitter, href: site.social.twitter, label: "Twitter", bg: "bg-[#1da1f2]" },
    { Icon: Linkedin, href: site.social.linkedin, label: "LinkedIn", bg: "bg-[#0077b5]" },
    { Icon: PinterestIcon, href: site.social.pinterest, label: "Pinterest", bg: "bg-[#e60023]" },
  ]

  return (
    <footer>
      {/* Main footer */}
      <div className="bg-footer">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-6">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-extrabold">
              <span className="text-accent">{f.brand1} </span>
              <span className="text-primary">{f.brand2}</span>
            </h3>
            <div className="mt-3 h-0.5 w-16 bg-primary" />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{f.about}</p>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              <Globe className="h-4 w-4 text-accent" />
              {f.website}
            </a>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-extrabold text-accent">{f.urgente}</h3>
            <div className="mt-3 h-0.5 w-16 bg-primary" />
            <ul className="mt-5 space-y-3">
              {f.urgenteItems.map((item) => (
                <li key={item}>
                  <Link
                    to="/servicii"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-extrabold text-accent">{f.contact}</h3>
            <div className="mt-3 h-0.5 w-16 bg-primary" />
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  {f.contactAddress}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={`tel:${site.phone}`} className="hover:text-primary">
                  {f.contactPhone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${site.email}`} className="break-all hover:text-primary">
                  {f.contactEmail}
                </a>
              </li>
            </ul>
            <p className="mt-5 flex items-start gap-2 text-sm text-muted-foreground">
              <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {f.contactNote}
            </p>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-extrabold text-accent">{f.social}</h3>
            <div className="mt-3 h-0.5 w-16 bg-primary" />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{f.socialText}</p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ Icon, href, label, bg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-white transition-transform hover:scale-110 ${bg}`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright strip */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-sm sm:flex-row lg:px-6">
          <p>{f.copyright}</p>
          <nav className="flex items-center gap-6" aria-label="Footer">
            <Link to="/servicii" className="transition-opacity hover:opacity-80">
              {f.footerNavServices}
            </Link>
            <Link to="/locatie" className="transition-opacity hover:opacity-80">
              {f.footerNavLocation}
            </Link>
            <Link to="/contact" className="transition-opacity hover:opacity-80">
              {f.footerNavContact}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

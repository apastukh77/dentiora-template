import { PhoneCall, MapPinned, MailOpen } from "lucide-react"
import { useLanguage } from "@/i18n/LanguageContext"
import { site } from "@/lib/site"

export function ContactBlocks() {
  const { t } = useLanguage()
  const c = t.contactBlocks

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-4 text-center md:grid-cols-3 lg:px-6">
      <div className="flex flex-col items-center">
        <PhoneCall className="h-14 w-14 text-accent" strokeWidth={1.2} />
        <h3 className="mt-4 text-xl font-bold">{c.phoneTitle}</h3>
        <a href={`tel:${site.phone}`} className="mt-3 text-muted-foreground transition-colors hover:text-primary">
          {c.phoneValue}
        </a>
        <p className="text-muted-foreground">{c.phoneSub}</p>
      </div>

      <div className="flex flex-col items-center">
        <MapPinned className="h-14 w-14 text-accent" strokeWidth={1.2} />
        <h3 className="mt-4 text-xl font-bold">{c.addressTitle}</h3>
        <a
          href={site.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 text-muted-foreground transition-colors hover:text-primary"
        >
          {c.addressValue}
        </a>
        <a
          href={site.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors hover:text-primary"
        >
          {c.addressValue2}
        </a>
      </div>

      <div className="flex flex-col items-center">
        <MailOpen className="h-14 w-14 text-accent" strokeWidth={1.2} />
        <h3 className="mt-4 text-xl font-bold">{c.emailTitle}</h3>
        <a
          href={`mailto:${site.email}`}
          className="mt-3 break-all text-muted-foreground transition-colors hover:text-primary"
        >
          {c.emailValue}
        </a>
      </div>
    </div>
  )
}

import { site } from "@/lib/site"

export function MapEmbed() {
  return (
    <div className="mx-auto max-w-5xl px-4 lg:px-6">
      <a
        href={site.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open location in Google Maps"
        className="group relative block overflow-hidden rounded-xl border-2 border-primary shadow-sm"
      >
        <iframe
          title="Google Maps - Dentiora Template"
          src={site.mapsEmbed}
          className="pointer-events-none h-[420px] w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <span className="absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/5" />
      </a>
    </div>
  )
}

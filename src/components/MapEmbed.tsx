import { site } from "@/lib/site"
import { ExternalLink } from "lucide-react"

export function MapEmbed() {
  return (
    <div className="mx-auto max-w-5xl px-4 lg:px-6">
      <div className="relative block overflow-hidden rounded-xl border-2 border-primary shadow-sm">
        <iframe
          title="Google Maps - Dentiora Template"
          src={site.mapsEmbed}
          className="h-[420px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="mt-4 text-center">
        <a
          href={site.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          Open larger map / Get Directions
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}
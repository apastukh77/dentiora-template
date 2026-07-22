import { MapEmbed } from "@/components/MapEmbed"
import { ContactBlocks } from "@/components/ContactBlocks"
import { useLanguage } from "@/i18n/LanguageContext"

export function Location() {
  const { t } = useLanguage()

  return (
    <div className="animate-fade-in bg-background py-14">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{t.location.title}</h1>
      </div>

      <div className="mt-12">
        <MapEmbed />
      </div>

      <div className="mt-16">
        <ContactBlocks />
      </div>
    </div>
  )
}

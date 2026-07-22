import { MapEmbed } from "@/components/MapEmbed"
import { ContactBlocks } from "@/components/ContactBlocks"
import { useLanguage } from "@/i18n/LanguageContext"

export function Contact() {
  const { t } = useLanguage()

  return (
    <div className="animate-fade-in bg-background py-14">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <h1 className="text-center text-5xl font-extrabold tracking-tight sm:text-6xl">
          <span className="text-primary">{t.contactPage.title1} </span>
          <span className="text-accent">{t.contactPage.title2}</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-center text-muted-foreground">
          {t.contactPage.sub1}
          <br />
          {t.contactPage.sub2}
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-6xl px-4 lg:px-6">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{t.location.title}</h2>
      </div>

      <div className="mt-10">
        <MapEmbed />
      </div>

      <div className="mt-16">
        <ContactBlocks />
      </div>
    </div>
  )
}

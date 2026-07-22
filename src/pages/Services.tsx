import { ServicesGrid } from "@/components/ServicesGrid"
import { useLanguage } from "@/i18n/LanguageContext"

export function Services() {
  const { t } = useLanguage()

  return (
    <div className="animate-fade-in">
      {/* Title band with dentist photo */}
      <section className="relative overflow-hidden bg-background">
        <div
          className="absolute inset-y-0 right-0 w-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/dentist-working.png)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/30" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-4 pt-12 lg:px-6">
          <p className="text-lg font-bold tracking-wide text-primary sm:text-2xl">{t.services.pageEyebrow}</p>
          <h1 className="mt-1 text-5xl font-extrabold tracking-tight text-accent sm:text-7xl">
            {t.services.pageTitle}
          </h1>

          <div className="mt-8 border-t border-border pt-12 pb-16">
            <ServicesGrid variant="inline" />
          </div>
        </div>
      </section>
    </div>
  )
}

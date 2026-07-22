import { Link } from "react-router-dom"
import { HeroSlider } from "@/components/HeroSlider"
import { ServicesGrid } from "@/components/ServicesGrid"
import { ContactBlocks } from "@/components/ContactBlocks"
import { useLanguage } from "@/i18n/LanguageContext"

export function Home() {
  const { t } = useLanguage()

  return (
    <div className="animate-fade-in">
      <HeroSlider />

      {/* Services preview */}
      <section className="bg-section" aria-label={t.nav.services}>
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
          <ServicesGrid variant="inline" />
        </div>
      </section>

      {/* View all services CTA */}
      <div className="flex justify-center bg-background py-10">
        <Link
          to="/servicii"
          className="rounded-md bg-primary px-8 py-4 text-sm font-semibold tracking-wide text-primary-foreground shadow-sm transition-colors hover:bg-primary-dark"
        >
          {t.hero.viewAllServices}
        </Link>
      </div>

      {/* Contact preview */}
      <section className="bg-background pb-20" aria-label="Contact">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <h2 className="text-center text-5xl font-extrabold leading-tight sm:text-6xl">
            <span className="text-primary">{t.contactPreview.title1}</span>
            <br />
            <span className="text-accent">{t.contactPreview.title2}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-center text-muted-foreground">
            {t.contactPreview.sub1}
            <br />
            {t.contactPreview.sub2}
          </p>

          <div className="mt-14">
            <ContactBlocks />
          </div>
        </div>
      </section>
    </div>
  )
}

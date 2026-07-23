import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { MapEmbed } from "@/components/MapEmbed"
import { ContactBlocks } from "@/components/ContactBlocks"
import { ContactForm } from "@/components/ContactForm"
import { useLanguage } from "@/i18n/LanguageContext"

export function Contact() {
  const { t } = useLanguage()
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""))
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }, 100)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

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

      <div id="contact-form" className="mt-20 px-4 lg:px-6 scroll-mt-40">
        <ContactForm />
      </div>

    </div>
  )
}

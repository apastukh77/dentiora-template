import { useState } from "react"
import { site } from "@/lib/site"
import { useLanguage } from "@/i18n/LanguageContext"
import { translations } from "@/i18n/translations"

export function ContactForm() {
  const { language } = useLanguage()
  const t = translations[language].contactForm

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [service, setService] = useState<string>(t.serviceOptions[0])
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const text = `*${t.waTitle}*%0A%0A*${t.waName}:* ${encodeURIComponent(name)}%0A*${t.waPhone}:* ${encodeURIComponent(phone)}%0A*${t.waService}:* ${encodeURIComponent(service)}%0A*${t.waMessage}:* ${encodeURIComponent(message)}`

    const whatsappUrl = `https://wa.me/${site.phone}?text=${text}`
    window.open(whatsappUrl, "_blank")

    setSubmitted(true)
  }

  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <h3 className="text-2xl font-bold text-primary">{t.title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{t.subtitle}</p>

      {submitted ? (
        <div className="mt-6 rounded-lg bg-accent/10 p-6 text-center">
          <h4 className="text-lg font-bold text-primary">{t.successTitle}</h4>
          <p className="mt-2 text-sm text-muted-foreground">{t.successText}</p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-4 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            {t.anotherBtn}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{t.nameLabel}</label>
            <input
              type="text"
              placeholder={t.namePlaceholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-md border border-border bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{t.phoneLabel}</label>
            <input
              type="tel"
              placeholder="+40 700 000 000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full rounded-md border border-border bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{t.serviceLabel}</label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full rounded-md border border-border bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none"
            >
              {t.serviceOptions.map((opt, idx) => (
                <option key={idx} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{t.detailsLabel}</label>
            <textarea
              placeholder={t.detailsPlaceholder}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="w-full rounded-md border border-border bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-md bg-green-600 px-7 py-3 text-sm font-semibold tracking-wide text-white shadow-sm transition-colors hover:bg-green-700"
          >
            {t.submitBtn}
          </button>
        </form>
      )}
    </div>
  )
}
import { useEffect, useRef, useState } from "react"
import { ChevronDown, Check } from "lucide-react"
import { useLanguage } from "@/i18n/LanguageContext"
import { FlagRO, FlagGB } from "./Flags"
import type { Language } from "@/i18n/translations"

const options: { code: Language; flag: typeof FlagRO }[] = [
  { code: "ro", flag: FlagRO },
  { code: "en", flag: FlagGB },
]

export function LanguageDropdown({ fullWidth = false }: { fullWidth?: boolean }) {
  const { language, setLanguage, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("mousedown", onClick)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onClick)
      document.removeEventListener("keydown", onKey)
    }
  }, [])

  const Current = options.find((o) => o.code === language)!.flag

  return (
    <div ref={ref} className={`relative ${fullWidth ? "w-full" : ""}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.lang[language]}
        className={`flex items-center gap-1.5 rounded-md border border-border bg-background px-2 py-1.5 text-sm transition-colors hover:bg-muted ${
          fullWidth ? "w-full justify-between" : ""
        }`}
      >
        <span className="flex items-center gap-2">
          <Current className="h-4 w-6 rounded-[2px] object-cover" />
          {fullWidth && <span className="font-medium">{t.lang[language]}</span>}
        </span>
        <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <ul
          role="listbox"
          className={`animate-fade-in absolute right-0 z-50 mt-1 min-w-[10rem] overflow-hidden rounded-md border border-border bg-background py-1 shadow-lg ${
            fullWidth ? "left-0 w-full" : ""
          }`}
        >
          {options.map(({ code, flag: Flag }) => (
            <li key={code} role="option" aria-selected={language === code}>
              <button
                type="button"
                onClick={() => {
                  setLanguage(code)
                  setOpen(false)
                }}
                className="flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors hover:bg-muted"
              >
                <Flag className="h-4 w-6 rounded-[2px]" />
                <span className="flex-1 font-medium">{t.lang[code]}</span>
                {language === code && <Check className="h-4 w-4 text-primary" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

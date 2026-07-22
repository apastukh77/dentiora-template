import { useEffect, useState, useCallback } from "react";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { site } from "@/lib/site";

const images = [
  "/images/hero-dentist.png",
  "/images/patient-smile.png",
  "/images/dentist-working.png",
];

const icons = [
  {
    left: "/images/icons/slide1-left.svg",
    right: "/images/icons/slide1-right.svg",
  },
  {
    left: "/images/icons/slide2-left.svg",
    right: "/images/icons/slide2-right.svg",
  },
  {
    left: "/images/icons/slide3-left.svg",
    right: "/images/icons/slide3-right.svg",
  },
];

const imagePositions = [
  "center 15%", // Слайд 1
  "center 25%", // Слайд 2
  "center 15%", // Слайд 3
];

export function HeroSlider() {
  const { t } = useLanguage();
  const slides = t.hero.slides;
  const [index, setIndex] = useState(0);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % slides.length),
    [slides.length]
  );

  useEffect(() => {
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="relative overflow-hidden bg-muted" aria-label="Hero">
      <div className="relative h-[560px] w-full sm:h-[600px]">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            {/* Background image on the right */}
            <div
              className="absolute inset-0 bg-cover bg-no-repeat"
              style={{ 
                backgroundImage: `url(${images[i]})` ,
                backgroundPosition: imagePositions[i],
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/20" />

            <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 lg:px-6">
              <div className="max-w-xl">
                <p className="text-2xl font-bold text-primary sm:text-3xl">
                  {slide.eyebrow}
                </p>
                <a
                  href={`tel:${site.phone}`}
                  className="mt-2 block text-5xl font-extrabold tracking-tight text-accent sm:text-6xl"
                >
                  {slide.phone}
                </a>

                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="flex gap-3">
                    <img
                      src={icons[i]?.left}
                      alt=""
                      className="h-12 w-12"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-bold text-primary">
                        {slide.f1Title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {slide.f1Text}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <img
                      src={icons[i]?.right}
                      alt=""
                      className="h-12 w-12"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-bold text-primary">
                        {slide.f2Title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {slide.f2Text}
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href={`tel:${site.phone}`}
                  className="mt-9 inline-flex items-center gap-3 rounded-md bg-primary px-7 py-4 text-sm font-semibold tracking-wide text-primary-foreground shadow-sm transition-colors hover:bg-primary-dark"
                >
                  {slide.cta}
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            aria-current={i === index}
            className={`h-2.5 rounded-full transition-all ${
              i === index
                ? "w-7 bg-primary"
                : "w-2.5 bg-primary/30 hover:bg-primary/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

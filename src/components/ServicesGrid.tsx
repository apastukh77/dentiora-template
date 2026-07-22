import { useLanguage } from "@/i18n/LanguageContext";
import { serviceIcons } from "@/lib/services";

type Variant = "inline" | "card";

export function ServicesGrid({ variant = "inline" }: { variant?: Variant }) {
  const { t } = useLanguage();
  const items = t.services.items;

  if (variant === "card") {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => {
          // const Icon = serviceIcons[i];
          return (
            <article
              key={item.title}
              className="rounded-xl border border-border bg-background p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <img
                src={serviceIcons[i]}
                alt=""
                className="h-12 w-12"
                aria-hidden="true"
              />
              <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </article>
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, i) => {
        // const Icon = serviceIcons[i];
        return (
          <article key={item.title} className="flex gap-4">
             <img
                src={serviceIcons[i]}
                alt=""
                className="h-12 w-12"
                aria-hidden="true"
              />
            <div>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

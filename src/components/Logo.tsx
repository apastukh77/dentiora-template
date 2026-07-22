import { Link } from "react-router-dom"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`} aria-label="Dentiora Template - Acasă">
      <svg
        width="40"
        height="44"
        viewBox="0 0 40 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M20 4.5C13.8 4.5 9.5 7.2 6.6 7.2c-2.4 0-3.6 2-3.6 5.4 0 4.9 1.7 9.6 3.2 14.1 1 3 1.6 6.2 2.2 9.2.4 2 1.2 3.4 2.7 3.4 1.7 0 2.3-1.6 2.9-3.9.7-2.7 1.4-6.4 3.4-6.4h1.2c2 0 2.7 3.7 3.4 6.4.6 2.3 1.2 3.9 2.9 3.9 1.5 0 2.3-1.4 2.7-3.4.6-3 1.2-6.2 2.2-9.2 1.5-4.5 3.2-9.2 3.2-14.1 0-3.4-1.2-5.4-3.6-5.4C30.5 7.2 26.2 4.5 20 4.5Z"
          stroke="var(--color-primary)"
          strokeWidth="2.6"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-xl font-extrabold tracking-tight text-primary">Dentiora</span>
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
          Template
        </span>
      </span>
    </Link>
  )
}

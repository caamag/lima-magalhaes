import { useState, type CSSProperties } from "react";
import { Link, useMatch } from "react-router-dom";
import { PHONE_LABEL, WHATSAPP } from "../config";
import { findCourse } from "../data/courses";

/** Cor de destaque do header: definida pela página de curso atual, senão rosa. */
function useHeaderAccent() {
  const match = useMatch("/cursos/:id");
  return findCourse(match?.params.id)?.page?.headerAccent ?? "var(--color-pink)";
}

export const NAV_LINKS = [
  { label: "Home", to: "/#topo" },
  { label: "Sobre", to: "/#sobre" },
  { label: "Cursos", to: "/#cursos" },
  { label: "Bootcamp", to: "?curso=bootcamp-cores" },
  { label: "Galeria", to: "/#galeria" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const accent = useHeaderAccent();

  return (
    <header id="topo" className="sticky top-0 z-50 bg-dark" style={{ "--accent": accent } as CSSProperties}>
      <div className="container-site flex h-[76px] items-center gap-6 lg:gap-10">
        <Link to="/" onClick={close} aria-label="Lima & Magalhães - início" className="flex items-center">
          {/* Logo em máscara: o PNG define a forma e a cor vem de --accent */}
          <span
            role="img"
            aria-label="Lima & Magalhães — Escola de Criatividade"
            className="block aspect-[879/174] h-[34px] bg-[var(--accent)] transition-colors duration-300 [mask:url(/img/logo.png)_center/contain_no-repeat] sm:h-[46px]"
          />
        </Link>

        <nav
          aria-label="Menu principal"
          className={`absolute inset-x-0 top-[76px] flex flex-col overflow-hidden bg-dark transition-[max-height] duration-300 md:static md:ml-2.5 md:max-h-none md:flex-row md:gap-[18px] lg:gap-7 ${
            open ? "max-h-80" : "max-h-0"
          }`}
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              preventScrollReset={l.to.startsWith("?")}
              onClick={close}
              className="border-t border-[#0d2c25] px-5 py-3.5 font-head text-xs font-semibold uppercase text-white transition-colors hover:text-[var(--accent)] md:border-0 md:p-0"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:+${WHATSAPP}`}
          className="ml-auto hidden items-center gap-2.5 font-head text-[13px] font-semibold text-[var(--accent)] sm:flex md:text-sm"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-3.5">
            <path
              fill="currentColor"
              d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"
            />
          </svg>
          {PHONE_LABEL}
        </a>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="ml-auto flex cursor-pointer flex-col gap-[5px] p-2 sm:ml-0 md:hidden"
        >
          <span className="h-0.5 w-6 bg-[var(--accent)]" />
          <span className="h-0.5 w-6 bg-[var(--accent)]" />
          <span className="h-0.5 w-6 bg-[var(--accent)]" />
        </button>
      </div>
    </header>
  );
}

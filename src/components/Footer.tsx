import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ADDRESS, MAPS_LINK, PHONE_LABEL, whatsappLink } from "../config";

const SOCIAL = [
  { label: "Facebook", short: "f", href: "#" },
  { label: "Instagram", short: "ig", href: "#" },
  { label: "YouTube", short: "yt", href: "#" },
  { label: "LinkedIn", short: "in", href: "#" },
  { label: "WhatsApp", short: "wa", href: whatsappLink() },
];

const LINKS = [
  { label: "Sobre a escola", to: "/#sobre" },
  { label: "Nossos cursos", to: "/#cursos" },
  { label: "Bootcamp", to: "?curso=bootcamp-cores" },
  { label: "Galeria", to: "/#galeria" },
];

const h4 = "mb-[22px] font-head text-[13px] font-semibold uppercase text-white";

export default function Footer() {
  return (
    <footer className="bg-footer text-[13px] text-[#bdbdbd]">
      <div className="container-site grid gap-[30px] py-[50px] md:grid-cols-3 md:gap-10">
        <div data-reveal>
          <h4 className={h4}>Sobre a Lima &amp; Magalhães</h4>
          <img
            src="/img/logo.png"
            alt="Lima & Magalhães — Escola de Criatividade"
            width={879}
            height={174}
            className="mb-3.5 h-10 w-auto"
          />
          <p className="leading-[1.7]">
            Escola de fotografia, direção de arte e criatividade em Mogi das Cruzes. Formamos novos olhares unindo
            técnica, repertório e prática profissional.
          </p>
          <div className="mt-5 flex gap-2">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid size-[26px] place-items-center rounded-full border border-[#555] text-[10px] font-bold text-[#ddd] transition-colors hover:border-pink hover:bg-pink"
              >
                {s.short}
              </a>
            ))}
          </div>
        </div>

        <div data-reveal style={{ "--reveal-delay": "120ms" } as CSSProperties}>
          <h4 className={h4}>Links</h4>
          <ul>
            {LINKS.map((l) => (
              <li key={l.label} className="border-b border-footer-line">
                <Link
                  to={l.to}
                  preventScrollReset={l.to.startsWith("?")}
                  className="block py-[11px] transition-all hover:pl-1 hover:text-pink"
                >
                  <span className="text-[9px]">▸ </span>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal style={{ "--reveal-delay": "240ms" } as CSSProperties}>
          <h4 className={h4}>Contato</h4>
          <p className="leading-[1.7]">
            <span className="mb-2 block">☏ {PHONE_LABEL}</span>
          </p>
          <a href={MAPS_LINK} target="_blank" rel="noopener" className="group mt-1 flex gap-2 leading-[1.7]">
            <span aria-hidden="true">⌂</span>
            <span>
              <strong className="block font-semibold text-white transition-colors group-hover:text-pink">
                {ADDRESS.place}
              </strong>
              {ADDRESS.street}
              <br />
              {ADDRESS.rooms}
              <br />
              {ADDRESS.city}
              <span className="mt-1 block text-xs text-pink">Ver no mapa ›</span>
            </span>
          </a>
        </div>
      </div>
      <div className="border-t border-footer-line py-[18px] text-xs text-[#888]">
        <div className="container-site">
          © {new Date().getFullYear()} Lima &amp; Magalhães. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

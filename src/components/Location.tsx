import type { CSSProperties } from "react";
import { ADDRESS, MAPS_DIRECTIONS, MAPS_EMBED, MAPS_LINK } from "../config";

/** Seção "Onde estamos" com o mapa do Google Maps. */
export default function Location() {
  return (
    <section id="localizacao" className="scroll-mt-[76px] bg-light py-[70px] md:py-[90px]">
      <div className="container-site grid items-center gap-8 md:grid-cols-[5fr_7fr] md:gap-10">
        <div data-reveal="left">
          <h2 className="section-title">
            Onde
            <br />
            estamos
          </h2>
          <p className="mt-5 text-[13.5px] leading-relaxed text-muted">
            <strong className="block font-head text-[15px] font-semibold text-ink">{ADDRESS.place}</strong>
            {ADDRESS.street}
            <br />
            {ADDRESS.rooms}
            <br />
            {ADDRESS.city}
          </p>
          <div className="mt-[22px] flex flex-wrap gap-3">
            <a href={MAPS_DIRECTIONS} target="_blank" rel="noopener" className="btn">
              Como chegar
            </a>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener"
              className="btn !bg-transparent !text-ink ring-2 ring-ink ring-inset hover:!bg-ink hover:!text-white"
            >
              Abrir no Google Maps
            </a>
          </div>
        </div>

        <div data-reveal="right" style={{ "--reveal-delay": "150ms" } as CSSProperties} className="relative aspect-[4/3] overflow-hidden bg-[#e5e3df] shadow-[0_12px_28px_rgba(0,0,0,.1)] md:aspect-[16/10]">
          <iframe
            src={MAPS_EMBED}
            title={`Mapa: ${ADDRESS.place}, ${ADDRESS.city}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="absolute inset-0 size-full border-0"
          />
        </div>
      </div>
    </section>
  );
}

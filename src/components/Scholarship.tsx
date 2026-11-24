import type { CSSProperties } from "react";
import { whatsappLink } from "../config";

type Props = { variant?: "white" | "cyan" };

export default function Scholarship({ variant = "white" }: Props) {
  const cyan = variant === "cyan";
  return (
    <section className={cyan ? "bg-cyan py-[70px] md:py-[80px]" : "bg-white pt-[90px] pb-[95px]"}>
      <div className="container-site grid items-center gap-6 md:grid-cols-[5fr_7fr] md:gap-10">
        <h2 className={`section-title ${cyan ? "!text-black after:!bg-pink" : ""}`} data-reveal="left">
          Educação
          <br />
          que transforma
          <br />
          oportunidades
        </h2>
        <div data-reveal style={{ "--reveal-delay": "150ms" } as CSSProperties} className={`text-[13.5px] leading-relaxed ${cyan ? "text-[#0b2530] [&_strong]:text-black" : "text-muted [&_strong]:text-[#444]"}`}>
          <p>
            Acreditamos que a criatividade e o conhecimento devem estar ao alcance de todos. Por isso, a{" "}
            <strong>Lima &amp; Magalhães</strong> reserva uma bolsa social integral por turma para mães solo, pessoas
            negras de territórios periféricos, estudantes bolsistas de universidades particulares, empreendedores
            periféricos e pais desempregados. A seleção acontece mediante o envio de uma redação contando a história de
            vida do candidato. Além da formação gratuita, o contemplado recebe material didático e auxílio integral para
            o transporte de ida e volta às aulas. <strong>Porque talento não pode ser limitado pela condição social.</strong>
          </p>
          <a
            href={whatsappLink("Olá! Gostaria de solicitar a bolsa social.")}
            target="_blank"
            rel="noopener"
            className="btn mt-[22px]"
          >
            Solicitar bolsa
          </a>
        </div>
      </div>
    </section>
  );
}

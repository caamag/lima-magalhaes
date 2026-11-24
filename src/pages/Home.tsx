import type { CSSProperties } from "react";
import CourseCard from "../components/CourseCard";
import { COURSES } from "../data/courses";
import Scholarship from "../components/Scholarship";
import Location from "../components/Location";

const splitText = "text-[13.5px] leading-relaxed text-muted [&_strong]:text-[#444]";
const split = "container-site grid items-center gap-6 md:grid-cols-[5fr_7fr] md:gap-10";

const HERO_BG = [
  "linear-gradient(90deg, rgba(4,14,28,.55) 0%, rgba(4,14,28,.2) 45%, rgba(4,14,28,0) 70%)",
  'url("/img/banner-home.webp")',
].join(", ");

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="hero-bg relative h-[480px] overflow-hidden bg-[#0a2a3a] text-white md:h-[540px] lg:flex lg:h-[600px] lg:items-center lg:pb-20"
        style={{ backgroundImage: HERO_BG, backgroundPosition: "85% center" }}
      >
        <div className="hero-anim container-site relative z-[2] pt-[100px] md:pt-[125px] lg:pt-0">
          <h1 className="hero-title text-pink">
            Criatividade
            <br />
            que move o mundo
          </h1>
          <a href="#cursos" className="btn">
            Saiba mais
          </a>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-[1] h-20 bg-[rgba(2,28,22,.85)]" />
      </section>

      {/* SOBRE + CURSOS */}
      <section id="sobre" className="scroll-mt-[76px] bg-light pt-[75px] pb-[90px]">
        <div className={`${split} mb-10`}>
          <h2 className="section-title" data-reveal="left">
            De criativo
            <br />
            para criativos
          </h2>
          <div className={splitText} data-reveal style={{ "--reveal-delay": "150ms" } as CSSProperties}>
            <p>
              Nossa escola nasce do propósito de transformar a maneira como as pessoas enxergam e produzem imagens.
              Idealizada por William Magalhães, fotógrafo, publicitário e diretor de arte, reúne experiência em campanhas
              para grandes marcas, projetos premiados internacionalmente, incluindo reconhecimento no Fearless e
              participação na direção de fotografia de campanha premiada em Cannes, e de Janayna, Advogada, empreendedora,
              apaixonada, com olhar minucioso para pessoas e comportamentos.
            </p>
            <p>
              Com uma trajetória que conecta fotografia, publicidade e audiovisual, oferecemos uma formação que vai além
              da técnica, unindo repertório visual, criatividade e prática profissional. Em Mogi das Cruzes, formamos
              novos olhares e preparamos pessoas para enxergar a fotografia como expressão, conhecimento e oportunidade.
            </p>
          </div>
        </div>

        <div id="cursos" className="container-site scroll-mt-[96px]">
          {/* 3 colunas: com 5 cursos fica 3 + 2, nunca um card sozinho na linha */}
          <div className="mx-auto flex max-w-[420px] flex-wrap justify-center gap-[var(--gap)] [--gap:16px] min-[601px]:max-w-[1000px] md:[--gap:24px]">
            {COURSES.map((c, i) => (
              <CourseCard key={c.id} course={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Scholarship />

      <Location />

      {/* FAIXA */}
      <section id="galeria" className="border-b border-[#444] bg-black py-[30px] text-white">
        <div className="container-site">
          <p className="font-serif text-[15px] uppercase tracking-[.08em]" data-reveal>
            Comece hoje a transformar o seu olhar. Venha fazer parte da Lima &amp; Magalhães.
          </p>
        </div>
      </section>
    </>
  );
}

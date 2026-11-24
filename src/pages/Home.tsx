import type { CSSProperties } from "react";
import CourseCard from "../components/CourseCard";
import { COURSES } from "../data/courses";
import Scholarship from "../components/Scholarship";
import Location from "../components/Location";

const splitText = "text-[13.5px] leading-relaxed text-muted [&_strong]:text-[#444]";

const HERO_BG = [
  "linear-gradient(90deg, rgba(4,14,28,.55) 0%, rgba(4,14,28,.2) 45%, rgba(4,14,28,0) 70%)",
  'url("/img/banner-home.webp")',
].join(", ");

export default function Home() {
  return (
    <>
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

      <section id="sobre" className="scroll-mt-[76px] bg-light pt-[75px] pb-[90px]">
        <div className="container-site mb-14 grid gap-6 md:grid-cols-[5fr_7fr] md:items-start md:gap-10">
          <h2 className="section-title md:sticky md:top-[110px]" data-reveal="left">
            De criativo
            <br />
            para criativos
          </h2>
          <div
            className={`${splitText} grid gap-4 [&_strong]:font-head [&_strong]:font-semibold`}
            data-reveal
            style={{ "--reveal-delay": "150ms" } as CSSProperties}
          >
            <p className="text-[15px] leading-relaxed text-ink">
              Nossa escola nasce do propósito de transformar a maneira como as pessoas enxergam e produzem imagens.
            </p>
            <p>
              Idealizada por William Magalhães e Janayna Lima, a Lima &amp; Magalhães Escola de Criatividade une duas
              trajetórias, diferentes perspectivas e uma paixão em comum: desenvolver pessoas por meio da criatividade, do
              conhecimento e da expressão visual.
            </p>
            <p>
              <strong>William Magalhães</strong> é fotógrafo, publicitário e diretor de arte, com uma trajetória marcada
              pela criação de campanhas para grandes marcas e projetos reconhecidos internacionalmente. Seu trabalho reúne
              experiência, repertório visual e uma visão artística construída ao longo de anos de atuação no mercado,
              incluindo reconhecimento no Fearless e participação na direção de fotografia de uma campanha premiada em
              Cannes.
            </p>
            <p>
              <strong>Janayna Lima</strong> é advogada, empreendedora e profissional com experiência nas áreas comercial e
              de relacionamento. Sua trajetória é marcada pela capacidade de conectar pessoas, compreender comportamentos e
              transformar ideias em projetos. Com olhar atento aos detalhes, visão estratégica e paixão pelo
              desenvolvimento humano, acredita no poder do conhecimento como ferramenta de transformação e novas
              oportunidades.
            </p>
            <p>
              Além da imagem, a escola também atua com <strong>tecnologia e desenvolvimento de software</strong>.
              Desenvolvemos sites, sistemas e soluções digitais no dia a dia, e é essa experiência prática de mercado que
              levamos para a sala de aula nos cursos da área, unindo programação, inteligência artificial e criatividade
              para formar profissionais preparados para a nova economia digital.
            </p>
            <p>
              Juntos, conectamos fotografia, publicidade, estratégia, audiovisual e tecnologia para oferecer uma formação
              que vai além da técnica. Unimos repertório visual, criatividade e prática profissional para formar novos
              olhares e preparar pessoas para enxergar a imagem como expressão, conhecimento e oportunidade.
            </p>
            <p>
              Em Mogi das Cruzes, queremos construir um espaço onde a criatividade encontra conhecimento e onde novas
              possibilidades começam a ganhar forma.
            </p>
          </div>
        </div>

        <div id="cursos" className="container-site scroll-mt-[96px]">
          <div className="mx-auto flex max-w-[420px] flex-wrap justify-center gap-[var(--gap)] [--gap:16px] min-[601px]:max-w-[1000px] md:[--gap:24px]">
            {COURSES.map((c, i) => (
              <CourseCard key={c.id} course={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Scholarship />

      <Location />

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

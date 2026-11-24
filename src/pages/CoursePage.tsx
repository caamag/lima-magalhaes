import type { CSSProperties } from "react";
import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import CourseDetails from "../components/CourseDetails";
import Html from "../components/Html";
import Scholarship from "../components/Scholarship";
import { findCourse, plainTitle } from "../data/courses";
import { whatsappLink } from "../config";

const lines = (items: string[]) =>
  items.map((l, i) => (
    <span key={l}>
      {i > 0 && <br />}
      {l}
    </span>
  ));

export default function CoursePage() {
  const { id } = useParams();
  const course = findCourse(id);
  const page = course?.page;

  useEffect(() => {
    if (course)
      document.title = `${plainTitle(course.title)} | Lima & Magalhães`;
    return () => {
      document.title = "Lima & Magalhães | Escola de Fotografia e Criatividade";
    };
  }, [course]);

  if (!course || !page) return <Navigate to="/" replace />;

  const name = plainTitle(course.title);
  const turmas = whatsappLink(
    `Olá! Tenho interesse nas próximas turmas do curso "${name}".`,
  );
  const heroImage = page.heroImage ?? course.image.replace("w=900", "w=1920");
  // Palavras longas (ex.: "Empreendedorismo") precisam de fonte menor no celular para caber na tela
  const longTitle = Math.max(...page.heroTitle.map((l) => l.length)) > 10;

  return (
    <>
      {/* BANNER */}
      <section
        className="hero-bg relative h-[420px] overflow-hidden bg-[#1b1b1b] md:h-[540px] lg:flex lg:h-[600px] lg:items-center lg:pb-[70px]"
        style={{
          backgroundImage: `url("${heroImage}")`,
          backgroundPosition: page.heroPosition ?? "center",
        }}
      >
        {page.heroOverlay !== false && (
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
        )}
        <div className="hero-anim container-site relative z-[2] pt-[90px] md:pt-[120px] lg:pt-0">
          <h1
            className={`hero-title md:text-[60px] ${longTitle ? "text-[26px] sm:text-[44px]" : "text-[38px] sm:text-[48px]"}`}
            style={{ color: page.heroColor ?? "var(--color-pink)" }}
          >
            {lines(page.heroTitle)}
          </h1>
          <a
            href={turmas}
            target="_blank"
            rel="noopener"
            className="btn !bg-yellow !text-black hover:!bg-[#ffd400]"
          >
            Próximas turmas
          </a>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-[1] h-12 bg-[rgba(2,28,22,.8)] md:h-[70px]" />
      </section>

      {/* APRESENTAÇÃO */}
      <section className="bg-light py-[70px] md:py-[80px]">
        <div className="container-site grid items-center gap-6 md:grid-cols-[5fr_7fr] md:gap-10">
          <h2 className="section-title" data-reveal="left">{lines(page.introTitle)}</h2>
          <div data-reveal style={{ "--reveal-delay": "150ms" } as CSSProperties} className="text-[13.5px] leading-relaxed text-muted [&_strong]:text-[#333]">
            <Html as="p" html={page.intro} />
            <a href="#conteudo" className="btn mt-[22px]">
              Conheça o curso
            </a>
          </div>
        </div>
      </section>

      {/* CONTEÚDO COMPLETO DO CURSO */}
      <section
        id="conteudo"
        className="scroll-mt-[76px] bg-white py-[70px] md:py-[90px]"
      >
        <div className="container-site">
          <div className="mx-auto max-w-[820px]" data-reveal>
            <h2 className="section-title">Tudo sobre o curso</h2>
            <p className="mt-3 font-head text-[13px] font-semibold uppercase tracking-[.04em] text-pink">
              {name}
            </p>
            {course.subtitle && <p className="mt-1 text-sm italic text-muted">{course.subtitle}</p>}
            <CourseDetails course={course} />
          </div>
        </div>
      </section>

      <Scholarship variant="cyan" />

      {/* FAIXA */}
      <section className="bg-black py-[30px] text-white">
        <div className="container-site">
          <p data-reveal className="font-head text-[13px] font-semibold uppercase tracking-[.18em] md:text-[15px]">
            Vamos começar juntos a mudar o mundo...
          </p>
        </div>
      </section>
    </>
  );
}

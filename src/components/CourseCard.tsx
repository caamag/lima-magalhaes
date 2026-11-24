import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { courseLink, type Course } from "../data/courses";
import Html from "./Html";

/** `index` escalona a animação de entrada dos cards (um após o outro, por linha). */
export default function CourseCard({ course, index = 0 }: { course: Course; index?: number }) {
  return (
    // O wrapper faz a animação de scroll; o card mantém sua própria transição de hover
    <div
      data-reveal
      style={{ "--reveal-delay": `${(index % 3) * 120}ms` } as CSSProperties}
      className="flex w-full min-[601px]:w-[calc((100%-2*var(--gap))/3)]"
    >
      <article className="group flex w-full flex-col bg-white text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,.1)]">
        <div className="aspect-[4/2.75] overflow-hidden bg-[#222]">
          <img
            src={course.image}
            alt=""
            loading="lazy"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col items-center justify-between gap-[22px] px-3 pt-[22px] pb-[18px] md:px-[18px] md:pt-[26px] md:pb-[22px]">
          <Html
            as="h3"
            html={course.title}
            className="flex min-h-[58px] items-center font-head text-[13px] font-semibold uppercase leading-normal text-ink"
          />
          <Link to={courseLink(course)} preventScrollReset={!course.page} className="btn px-4 py-2.5 text-xs md:px-7">
            Saiba mais
          </Link>
        </div>
      </article>
    </div>
  );
}

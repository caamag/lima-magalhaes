import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { findCourse, plainTitle } from "../data/courses";
import CourseDetails from "./CourseDetails";

/** Modal de curso, aberto via ?curso=<id> na URL. */
export default function CourseModal() {
  const [params, setParams] = useSearchParams();
  const course = findCourse(params.get("curso"));
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeFn = useRef<() => void>(() => {});

  const close = () => {
    const next = new URLSearchParams(params);
    next.delete("curso");
    setParams(next, { preventScrollReset: true });
  };
  closeFn.current = close;

  useEffect(() => {
    if (!course) return;
    const lastFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    dialogRef.current?.scrollTo(0, 0);
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeFn.current();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      lastFocus?.focus();
    };
  }, [course]);

  if (!course) return null;
  const name = plainTitle(course.title);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-5">
      <div className="modal-overlay-anim absolute inset-0 bg-[rgba(2,22,17,.82)]" onClick={close} />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="modal-anim relative max-h-[calc(100vh-40px)] w-full max-w-[760px] overflow-y-auto bg-white"
      >
        <button
          ref={closeRef}
          type="button"
          aria-label="Fechar"
          onClick={close}
          className="sticky top-2.5 z-[2] float-right mt-2.5 mr-3 -mb-12 size-[38px] cursor-pointer rounded-full bg-pink text-[26px] leading-none text-white hover:bg-pink-dark"
        >
          &times;
        </button>
        <div className="relative flex h-[200px] items-end overflow-hidden bg-[#222] sm:h-[300px]">
          <img src={course.image} alt={name} className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
          <h3
            id="modal-title"
            className="title-bar relative z-[1] px-[22px] pb-[18px] font-head text-lg font-bold uppercase leading-[1.3] text-white [text-shadow:0_2px_12px_rgba(0,0,0,.35)] sm:px-10 sm:pb-[26px] sm:text-[22px]"
          >
            {name}
            {course.subtitle && (
              <span className="mt-1.5 block font-body text-[13px] font-normal normal-case leading-snug text-white/85 sm:text-[15px]">
                {course.subtitle}
              </span>
            )}
          </h3>
        </div>
        <div className="px-[22px] pt-[26px] pb-7 md:px-10 md:pt-8 md:pb-[38px]">
          <CourseDetails course={course} />
        </div>
      </div>
    </div>
  );
}

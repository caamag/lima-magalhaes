import type { Course, Lesson } from "../data/courses";
import {
  DEFAULT_PAYMENT,
  DEFAULT_PRICE,
  INSTALLMENTS,
  brl,
  installmentValue,
  plainTitle,
} from "../data/courses";
import { ADDRESS, MAPS_LINK, whatsappLink } from "../config";
import Html from "./Html";

const h4 = "mt-[22px] mb-2 font-head text-[13px] font-semibold uppercase text-ink";
const h5 = "mt-2 mb-1.5 font-head text-xs font-semibold uppercase text-pink";

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="bullets">
      {items.map((i) => (
        <Html key={i} as="li" html={i} />
      ))}
    </ul>
  );
}

function LessonItem({ lesson }: { lesson: Lesson }) {
  return (
    <li>
      <details className="lesson border-b border-[#eee] pb-2">
        <summary className="relative flex cursor-pointer flex-col pr-[26px]">
          <span className="font-head text-[13.5px] font-semibold uppercase text-ink">{lesson.title}</span>
          {lesson.theme && <span className="text-[13.5px] italic text-muted">{lesson.theme}</span>}
          {lesson.badge && (
            <span className="mt-1.5 self-start bg-pink px-2 py-0.5 font-head text-[10.5px] font-semibold uppercase tracking-[.04em] text-white">
              {lesson.badge}
            </span>
          )}
        </summary>
        <div className="pt-2.5 pb-1">
          {lesson.topics && (
            <>
              <h5 className={h5}>Conteúdo</h5>
              <Bullets items={lesson.topics} />
            </>
          )}
          {lesson.practice && (
            <>
              <h5 className={h5}>
                Atividade prática
                {lesson.practiceDuration && (
                  <span className="font-body font-normal normal-case text-muted"> ({lesson.practiceDuration})</span>
                )}
              </h5>
              <Bullets items={lesson.practice} />
            </>
          )}
          {lesson.delivery && (
            <p className="mt-2.5 text-[13.5px] text-[#444]">
              <strong>Entrega:</strong> {lesson.delivery}
            </p>
          )}
        </div>
      </details>
    </li>
  );
}

/** Conteúdo completo de um curso (usado no modal e, futuramente, nas páginas de curso). */
export default function CourseDetails({ course }: { course: Course }) {
  const name = plainTitle(course.title);
  const price = course.price ?? DEFAULT_PRICE;
  const description = ([] as string[]).concat(course.description);

  return (
    <div className="text-sm text-muted">
      <div className="mt-4 mb-2 flex flex-wrap gap-x-6 gap-y-2 text-[13.5px]">
        <span>
          <strong className="text-pink">Carga horária:</strong> {course.hours}
        </span>
        {course.duration && (
          <span>
            <strong className="text-pink">Duração:</strong> {course.duration}
          </span>
        )}
        {course.format && (
          <span>
            <strong className="text-pink">Formato:</strong> {course.format}
          </span>
        )}
        {course.methodology && (
          <span>
            <strong className="text-pink">Metodologia:</strong> {course.methodology}
          </span>
        )}
      </div>

      {course.notice && (
        <p className="mt-1 mb-1.5 border-l-[3px] border-pink bg-light px-3.5 py-2.5 text-[13.5px] font-semibold text-ink">
          {course.notice}
        </p>
      )}

      <h4 className={h4}>Sobre o curso</h4>
      <div className="grid gap-2.5">
        {description.map((p) => (
          <Html key={p} as="p" html={p} />
        ))}
      </div>

      {course.highlight && (
        <blockquote className="mt-6 bg-dark px-6 py-5 text-white">
          <p className="font-head text-lg font-semibold uppercase leading-snug sm:text-xl">
            <span className="text-pink">“</span>
            {course.highlight.title}
            <span className="text-pink">”</span>
          </p>
          {course.highlight.text && (
            <p className="mt-2 text-[13.5px] leading-relaxed text-white/75">{course.highlight.text}</p>
          )}
        </blockquote>
      )}

      {course.audience && (
        <>
          <h4 className={h4}>Para quem é</h4>
          <Bullets items={course.audience} />
        </>
      )}
      {course.outcomes && (
        <>
          <h4 className={h4}>Ao final do curso, você será capaz de</h4>
          <Bullets items={course.outcomes} />
        </>
      )}
      {course.requirements && (
        <>
          <h4 className={h4}>Requisitos</h4>
          <Bullets items={course.requirements} />
        </>
      )}

      <h4 className={h4}>{course.contentTitle ?? "Conteúdo programático"}</h4>
      <ol className="numbered">
        {course.content.map((item) =>
          typeof item === "string" ? <li key={item}>{item}</li> : <LessonItem key={item.title} lesson={item} />,
        )}
      </ol>

      {course.sections?.map((s) => {
        const List = s.ordered ? "ol" : "ul";
        return (
          <div key={s.title}>
            <h4 className={h4}>{s.title}</h4>
            {s.intro && <Html as="p" className="mb-2 [&_strong]:text-[#444]" html={s.intro} />}
            {s.stats && (
              <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
                {s.stats.map((st) => (
                  <div key={st.label} className="border-l-[3px] border-pink bg-light px-4 py-3">
                    <span className="block font-head text-[22px] font-bold leading-tight text-pink">{st.value}</span>
                    <span className="text-[13px] text-[#555]">{st.label}</span>
                  </div>
                ))}
              </div>
            )}
            {s.items && (
              <List className={s.ordered ? "numbered" : "bullets"}>
                {s.items.map((i) => (
                  <Html key={i} as="li" html={i} />
                ))}
              </List>
            )}
            {s.outro && <Html as="p" className="mt-2.5" html={s.outro} />}
          </div>
        );
      })}

      <h4 className={h4}>Local das aulas</h4>
      <p className="text-[#555]">
        <strong className="text-ink">{ADDRESS.place}</strong>
        <br />
        {ADDRESS.street}
        <br />
        {ADDRESS.rooms} · {ADDRESS.city}
        <br />
        <a href={MAPS_LINK} target="_blank" rel="noopener" className="text-[13px] font-semibold text-pink hover:underline">
          Ver no mapa ›
        </a>
      </p>

      <div className="mt-[26px] mb-5 flex flex-wrap items-center justify-between gap-4 border-l-[3px] border-pink bg-light px-[22px] py-[18px]">
        <div>
          <span className="block text-[11px] uppercase tracking-[.08em] text-muted">Investimento</span>
          <span className="block font-head text-[26px] font-bold leading-[1.1] text-pink sm:text-[30px]">
            {brl(price)}
          </span>
          <span className="mt-1 block text-[13px] text-[#555]">
            ou <strong className="font-head text-[15px] text-ink">{INSTALLMENTS}x de {brl(installmentValue(price))}</strong> no
            cartão
          </span>
        </div>
        <ul className="text-[13px] text-[#555]">
          {(course.payment ?? DEFAULT_PAYMENT).map((p) => (
            <li key={p}>
              <span className="font-bold text-pink">✓ </span>
              {p}
            </li>
          ))}
        </ul>
      </div>

      <a
        href={whatsappLink(`Olá! Tenho interesse nas próximas turmas do curso "${name}".`)}
        target="_blank"
        rel="noopener"
        className="btn block w-full py-3.5 text-center"
      >
        Quero me inscrever
      </a>
    </div>
  );
}

import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CourseModal from "./CourseModal";

const LEAVE_MS = 250;

/** Rola até a âncora (#sobre, #cursos...) ou para o topo ao trocar de página. */
function useScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
  }, [pathname, hash]);
}

/**
 * Transição entre páginas: intercepta cliques em links internos que levam a outra página,
 * anima a saída do conteúdo atual e só então navega (a nova página entra com .page-enter).
 * Links para a mesma página (#âncoras, ?curso=) seguem normalmente, sem transição.
 */
function usePageTransition() {
  const navigate = useNavigate();
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let timer = 0;
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest("a");
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;

      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;

      // Captura antes do <Link>: o preventDefault faz o Link não navegar sozinho
      e.preventDefault();
      const to = url.pathname + url.search + url.hash;
      setLeaving(true);
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        navigate(to);
        setLeaving(false);
      }, LEAVE_MS);
    };

    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.clearTimeout(timer);
    };
  }, [navigate]);

  return leaving;
}

/** Revela os elementos com [data-reveal] quando eles entram na tela. */
function useScrollReveal() {
  const { pathname } = useLocation();
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
}

export default function Layout() {
  const { pathname } = useLocation();
  useScrollToHash();
  useScrollReveal();
  const leaving = usePageTransition();

  return (
    <>
      <Header />
      <main key={pathname} className={leaving ? "page-leave" : "page-enter"}>
        <Outlet />
      </main>
      <Footer />
      <CourseModal />
    </>
  );
}

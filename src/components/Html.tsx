import type { ElementType } from "react";

type Props = { html: string; as?: ElementType; className?: string };

/** Renderiza texto com HTML simples vindo dos dados fixos do site (src/data). */
export default function Html({ html, as: Tag = "span", className }: Props) {
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

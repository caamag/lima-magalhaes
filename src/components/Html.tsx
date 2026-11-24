import type { ElementType } from "react";

type Props = { html: string; as?: ElementType; className?: string };

export default function Html({ html, as: Tag = "span", className }: Props) {
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

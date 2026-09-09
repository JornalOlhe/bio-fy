import { defaultTheme, type BioTheme } from "./bio-types";

export interface TemplateDef {
  id: string;
  name: string;
  description: string;
  theme: BioTheme;
}

function t(partial: Partial<BioTheme>): BioTheme {
  return { ...defaultTheme, ...partial };
}

export const templates: TemplateDef[] = [
  {
    id: "minimal",
    name: "Minimal",
    description: "Limpo, claro e direto ao ponto.",
    theme: t({
      bgType: "solid",
      bgColor: "#f6f6f8",
      textColor: "#14141c",
      mutedColor: "#6b6b7c",
      font: "sans",
      buttonStyle: "outline",
      buttonShape: "rounded",
      buttonColor: "#14141c",
      buttonTextColor: "#14141c",
      buttonShadow: false,
      avatarBorder: false,
      hoverAnim: "lift",
    }),
  },
  {
    id: "creator",
    name: "Creator",
    description: "Vibrante para criadores de conteúdo.",
    theme: t({
      bgType: "gradient",
      bgFrom: "#ff7a45",
      bgTo: "#c2185b",
      bgAngle: 150,
      textColor: "#ffffff",
      mutedColor: "#ffe3d6",
      font: "display",
      buttonStyle: "solid",
      buttonShape: "pill",
      buttonColor: "#ffffff",
      buttonTextColor: "#20121c",
      buttonShadow: true,
      hoverAnim: "scale",
    }),
  },
  {
    id: "business",
    name: "Business",
    description: "Sóbrio e corporativo.",
    theme: t({
      bgType: "solid",
      bgColor: "#0f1b2d",
      textColor: "#ffffff",
      mutedColor: "#9db0c9",
      font: "sans",
      buttonStyle: "solid",
      buttonShape: "square",
      buttonColor: "#2563eb",
      buttonTextColor: "#ffffff",
      buttonShadow: false,
      avatarShape: "rounded",
      hoverAnim: "lift",
    }),
  },
  {
    id: "dark",
    name: "Dark",
    description: "Preto absoluto com contraste alto.",
    theme: t({
      bgType: "solid",
      bgColor: "#08080a",
      textColor: "#f5f5f7",
      mutedColor: "#8b8b96",
      font: "sans",
      buttonStyle: "outline",
      buttonShape: "rounded",
      buttonColor: "#f5f5f7",
      buttonTextColor: "#f5f5f7",
      buttonShadow: false,
      hoverAnim: "glow",
    }),
  },
  {
    id: "glass",
    name: "Glass",
    description: "Vidro fosco sobre gradiente profundo.",
    theme: t({
      bgType: "gradient",
      bgFrom: "#1b2a6b",
      bgTo: "#5b2a86",
      bgAngle: 165,
      textColor: "#ffffff",
      mutedColor: "#c8cdf0",
      buttonStyle: "glass",
      buttonShape: "rounded",
      buttonShadow: true,
      hoverAnim: "lift",
    }),
  },
  {
    id: "gradient",
    name: "Gradient",
    description: "Gradiente azul/violeta assinatura Biofy.",
    theme: t({
      bgType: "gradient",
      bgFrom: "#2b6cff",
      bgTo: "#8b3dff",
      bgAngle: 145,
      textColor: "#ffffff",
      mutedColor: "#e2ddff",
      font: "display",
      buttonStyle: "glass",
      buttonShape: "pill",
      buttonShadow: true,
      hoverAnim: "scale",
    }),
  },
  {
    id: "elegant",
    name: "Elegant",
    description: "Serifada, clara e sofisticada.",
    theme: t({
      bgType: "solid",
      bgColor: "#f3ede4",
      textColor: "#20180f",
      mutedColor: "#7a6a58",
      font: "serif",
      buttonStyle: "outline",
      buttonShape: "square",
      buttonColor: "#20180f",
      buttonTextColor: "#20180f",
      buttonShadow: false,
      avatarBorder: false,
      hoverAnim: "lift",
    }),
  },
  {
    id: "neon",
    name: "Neon",
    description: "Preto com brilho neon.",
    theme: t({
      bgType: "solid",
      bgColor: "#05010f",
      textColor: "#eafcff",
      mutedColor: "#7ce7ff",
      font: "mono",
      buttonStyle: "outline",
      buttonShape: "square",
      buttonColor: "#4df8ff",
      buttonTextColor: "#4df8ff",
      buttonShadow: true,
      hoverAnim: "glow",
    }),
  },
  {
    id: "portfolio",
    name: "Portfolio",
    description: "Espaçoso para mostrar trabalho.",
    theme: t({
      bgType: "solid",
      bgColor: "#111113",
      textColor: "#fafafa",
      mutedColor: "#a1a1aa",
      font: "condensed",
      buttonStyle: "transparent",
      buttonShape: "square",
      buttonColor: "#fafafa",
      buttonTextColor: "#fafafa",
      buttonShadow: false,
      gap: 18,
      avatarShape: "square",
      avatarSize: 110,
      hoverAnim: "lift",
    }),
  },
  {
    id: "store",
    name: "Store",
    description: "Feito para vender e converter.",
    theme: t({
      bgType: "gradient",
      bgFrom: "#fff8ec",
      bgTo: "#ffe3c2",
      bgAngle: 180,
      textColor: "#22160a",
      mutedColor: "#7c5a33",
      font: "sans",
      buttonStyle: "solid",
      buttonShape: "pill",
      buttonColor: "#f0700f",
      buttonTextColor: "#ffffff",
      buttonShadow: true,
      hoverAnim: "scale",
    }),
  },
];

export const templateMap: Record<string, TemplateDef> = Object.fromEntries(
  templates.map((tpl) => [tpl.id, tpl]),
);

export function getTemplate(id: string | null | undefined): TemplateDef {
  return (id && templateMap[id]) || templates[0]!;
}

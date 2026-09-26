import { type ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className = "",
}: Props) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && (
        <Reveal>
          <div
            className={`mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] ${
              align === "center" ? "justify-center" : ""
            } ${dark ? "text-accent" : "text-accent-600"}`}
          >
            <span className="h-px w-8 bg-current opacity-60" />
            {eyebrow}
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`text-h2 font-semibold ${dark ? "text-white" : "text-ink-900"}`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={`mt-5 text-lg leading-relaxed ${
              dark ? "text-white/70" : "text-charcoal-soft"
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

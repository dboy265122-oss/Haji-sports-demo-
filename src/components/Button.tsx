import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { motion } from "framer-motion";

type Variant = "primary" | "dark" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  as?: "button";
};

const base =
  "relative inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-colors duration-300 ease-smooth overflow-hidden select-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-ink-900 hover:bg-accent-400",
  dark: "bg-ink-900 text-white hover:bg-ink-800",
  ghost: "text-ink-900 hover:bg-mist-200",
  outline: "border border-ink-900/15 text-ink-900 hover:border-ink-900 hover:bg-ink-900 hover:text-white",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-sm rounded-full",
  md: "h-12 px-7 text-[0.95rem] rounded-full",
  lg: "h-14 px-9 text-base rounded-full",
};

export function Button({
  variant = "dark",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...(props as any)}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}

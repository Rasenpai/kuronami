import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  className?: string;
  onClick?: () => void;
};

const variants = {
  primary: "bg-primary-container text-on-primary hover:bg-primary",
  secondary:
    "border border-secondary/40 text-on-surface hover:border-on-surface",
};

const sizes = {
  sm: "h-10 px-5",
  md: "h-12 px-8",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: ButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center text-label-md uppercase transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  );
}

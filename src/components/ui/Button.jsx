import { forwardRef } from "react";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variantClasses = {
  primary:
    "bg-emerald-700 text-white shadow-sm hover:bg-emerald-800 focus-visible:outline-emerald-700",
  secondary:
    "bg-white text-zinc-950 ring-1 ring-inset ring-zinc-200 hover:bg-zinc-50 focus-visible:outline-emerald-700",
  ghost: "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-emerald-700",
};

const sizeClasses = {
  sm: "h-9 px-3",
  md: "h-11 px-5",
  lg: "h-12 px-6 text-base",
};

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Button = forwardRef(
  (
    {
      as: Component = "button",
      type = Component === "button" ? "button" : undefined,
      variant = "primary",
      size = "md",
      className,
      ...props
    },
    ref,
  ) => (
    <Component
      ref={ref}
      type={type}
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      {...props}
    />
  ),
);

Button.displayName = "Button";

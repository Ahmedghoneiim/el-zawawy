function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Card({ as: Component = "div", className, ...props }) {
  return (
    <Component
      className={cn(
        "rounded-lg border border-zinc-200 bg-white p-6 shadow-sm",
        className,
      )}
      {...props}
    />
  );
}

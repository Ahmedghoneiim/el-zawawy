function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Container({ as: Component = "div", className, ...props }) {
  return (
    <Component
      className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}

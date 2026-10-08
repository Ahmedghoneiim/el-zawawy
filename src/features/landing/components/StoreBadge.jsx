const platformStyles = {
  ios: {
    mark: "A",
    eyebrow: "حمّله من",
  },
  android: {
    mark: "G",
    eyebrow: "احصل عليه من",
  },
};

export function StoreBadge({ href, label, storeName, platform }) {
  const style = platformStyles[platform] ?? platformStyles.android;

  return (
    <a
      href={href}
      aria-label={label}
      className="flex min-h-14 w-full items-center gap-3 rounded-lg bg-zinc-950 px-4 py-3 text-white shadow-lg shadow-zinc-950/10 transition hover:bg-zinc-800 sm:w-auto"
      rel="noreferrer"
      target="_blank"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-base font-black text-zinc-950">
        {style.mark}
      </span>
      <span className="text-left">
        <span className="block text-[0.7rem] leading-none text-zinc-300">
          {style.eyebrow}
        </span>
        <span className="mt-1 block text-base font-bold leading-none">{storeName}</span>
      </span>
    </a>
  );
}

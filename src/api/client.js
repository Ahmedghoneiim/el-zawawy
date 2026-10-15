const BASE = import.meta.env.VITE_API_BASE_URL ?? "";

export async function api(path, { signal } = {}) {
  const res = await fetch(`${BASE}${path}`, { signal });
  if (!res.ok) throw new Error(`API ${res.status}: ${path}`);
  return res.json();
}
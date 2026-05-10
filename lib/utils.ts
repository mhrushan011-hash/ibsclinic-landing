import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Tiny per-instance rate limiter. Replace with Vercel KV before prod-scale. */
const buckets = new Map<string, { count: number; reset: number }>();

export function rateLimit(
  key: string,
  { limit = 5, windowMs = 15 * 60 * 1000 }: { limit?: number; windowMs?: number } = {},
): { ok: boolean; remaining: number; resetIn: number } {
  const now = Date.now();
  const bucket = buckets.get(key);
  if (!bucket || bucket.reset < now) {
    buckets.set(key, { count: 1, reset: now + windowMs });
    return { ok: true, remaining: limit - 1, resetIn: windowMs };
  }
  if (bucket.count >= limit) {
    return { ok: false, remaining: 0, resetIn: bucket.reset - now };
  }
  bucket.count += 1;
  return { ok: true, remaining: limit - bucket.count, resetIn: bucket.reset - now };
}

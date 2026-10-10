export const STAGGER_STEP_MS = 40;
export const STAGGER_MAX_MS  = 100;

export function staggerDelay(position, step = STAGGER_STEP_MS, max = STAGGER_MAX_MS) {
  return Math.min(Math.max(position, 0) * step, max);
}

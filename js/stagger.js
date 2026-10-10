export const STAGGER_STEP_MS = 50;
export const STAGGER_MAX_MS  = 120;
export const SEQ_STEP_MS = 25;
export const SEQ_MAX_MS  = 300;

export function staggerDelay(position, step = STAGGER_STEP_MS, max = STAGGER_MAX_MS) {
  return Math.min(Math.max(position, 0) * step, max);
}

export function seqDelay(index) {
  return staggerDelay(index, SEQ_STEP_MS, SEQ_MAX_MS);
}

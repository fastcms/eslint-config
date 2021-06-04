/**
 * Clamp number within the inclusive lower and upper bounds.
 *
 * @param value - The number to clamp
 * @param lower - The lower bound
 * @param upper The upper bound
 * @returns The clamped number
 */
export function clamp(value: number, lower: number, upper: number): number {
  return Math.min(upper, Math.max(lower, value));
}

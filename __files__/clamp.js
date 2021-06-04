/**
 * Clamp number within the inclusive lower and upper bounds.
 *
 * @param {number} value
 * @param {number} lower The lower bound
 * @param {number} upper The upper bound
 * @returns {number} The clamped number
 */
export function clamp(value, lower, upper) {
  return Math.min(upper, Math.max(lower, value));
}

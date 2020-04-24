
export const clamp = (value: number, maxValue: number, minValue: number) => {
  if (value <= minValue) return minValue
  if (value >= maxValue) return maxValue
  return value
}

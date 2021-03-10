export function isDarkColor(color: RgbColor): boolean {
  return (0.299 * color.r + 0.587 * color.g + 0.114 * color.b) / 255 <= 0.5;
}

export function isLightColor(color: RgbColor): boolean {
  return !isDarkColor(color);
}

export function rgbColorCss(color: RgbColor): string {
  const { r, g, b } = color;
  return `rgb(${r}, ${g}, ${b})`;
}

export type RgbColor = {
  r: number;
  g: number;
  b: number;
  a?: number;
};

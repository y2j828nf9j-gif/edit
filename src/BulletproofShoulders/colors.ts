export const palette = {
  bg: "#05080a",
  panel: "#12161de6",
  ink: "#f5f7fa",
  inkDim: "#b8c0cc",
  accent: "#39ff8c",
  accentDeep: "#0fae5c",
  amber: "#ffb020",
  danger: "#ff4d5e",
  muted: "#3a4048",
  mutedFill: "#2a2e35",
  bone: "#c9cdd4",
  // cinematic-grade additions
  cyan: "#5be8ff",
  cyanDeep: "#0fb8d6",
  lime: "#a6ff2e",
  limeDeep: "#6fc700",
  gradeShadow: "#03202b",
  gradeHighlight: "#ffd9a8",
};

const hexToRgb = (hex: string) => {
  const clean = hex.replace("#", "");
  const bigint = parseInt(clean.length === 8 ? clean.slice(0, 6) : clean, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
};

export const mixHex = (from: string, to: string, t: number) => {
  const clamped = Math.max(0, Math.min(1, t));
  const a = hexToRgb(from);
  const b = hexToRgb(to);
  const r = Math.round(a.r + (b.r - a.r) * clamped);
  const g = Math.round(a.g + (b.g - a.g) * clamped);
  const bl = Math.round(a.b + (b.b - a.b) * clamped);
  return `rgb(${r}, ${g}, ${bl})`;
};

export type MuscleState = "active" | "assist" | "inactive";

export const muscleColor = (state: MuscleState) => {
  if (state === "active") return palette.accent;
  if (state === "assist") return palette.amber;
  return palette.mutedFill;
};

export const muscleStroke = (state: MuscleState) => {
  if (state === "active") return palette.accentDeep;
  if (state === "assist") return "#c98412";
  return palette.muted;
};

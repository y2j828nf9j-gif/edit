import { staticFile } from "remotion";
import { CuffHighlight } from "./RotatorCuffDiagram";

export const FPS = 30;
const s = (seconds: number) => Math.round(seconds * FPS);

// Primary movers in all three external-rotation variants below are the
// infraspinatus (prime mover) and teres minor (synergist). Supraspinatus
// gets light, secondary recruitment stabilizing the joint. Subscapularis is
// an internal rotator and is not trained by any of these three exercises.
export const CUFF_WORKING: CuffHighlight = {
  supraspinatus: "assist",
  infraspinatus: "active",
  teresMinor: "active",
  subscapularis: "inactive",
};

export const CUFF_NEUTRAL: CuffHighlight = {
  supraspinatus: "assist",
  infraspinatus: "assist",
  teresMinor: "assist",
  subscapularis: "assist",
};

export const CUFF_RECAP: CuffHighlight = {
  supraspinatus: "assist",
  infraspinatus: "active",
  teresMinor: "active",
  subscapularis: "inactive",
};

export type ClipDef = {
  from: number;
  duration: number;
  src: string;
  trimBefore: number;
  trimAfter: number;
};

export type BlockDef = {
  from: number;
  duration: number;
};

// ---- timeline (all values in frames @30fps) ----

export const HOOK: BlockDef = { from: s(0), duration: s(3.2) };
export const HOOK_CLIP: ClipDef = {
  from: HOOK.from,
  duration: HOOK.duration,
  src: staticFile("clips/intro.mp4"),
  trimBefore: s(4.3),
  trimAfter: s(4.3) + HOOK.duration,
};

export const WHY_CARD: BlockDef = {
  from: HOOK.from + HOOK.duration,
  duration: s(3.4),
};

export const STEP1_CARD: BlockDef = {
  from: WHY_CARD.from + WHY_CARD.duration,
  duration: s(1.6),
};
export const STEP1_A: ClipDef = {
  from: STEP1_CARD.from + STEP1_CARD.duration,
  duration: s(5.0),
  src: staticFile("clips/ex1_setup.mp4"),
  trimBefore: s(15.0),
  trimAfter: s(20.0),
};
export const STEP1_B: ClipDef = {
  from: STEP1_A.from + STEP1_A.duration,
  duration: s(5.0),
  src: staticFile("clips/ex1_reps.mp4"),
  trimBefore: s(2.4),
  trimAfter: s(7.4),
};
export const STEP1_BLOCK: BlockDef = {
  from: STEP1_A.from,
  duration: STEP1_A.duration + STEP1_B.duration,
};

export const STEP2_CARD: BlockDef = {
  from: STEP1_B.from + STEP1_B.duration,
  duration: s(1.6),
};
export const STEP2_A: ClipDef = {
  from: STEP2_CARD.from + STEP2_CARD.duration,
  duration: s(5.0),
  src: staticFile("clips/ex2_reps.mp4"),
  trimBefore: s(3.45),
  trimAfter: s(8.45),
};
export const STEP2_B: ClipDef = {
  from: STEP2_A.from + STEP2_A.duration,
  duration: s(5.0),
  src: staticFile("clips/ex2_reps.mp4"),
  trimBefore: s(10.7),
  trimAfter: s(15.7),
};
export const STEP2_BLOCK: BlockDef = {
  from: STEP2_A.from,
  duration: STEP2_A.duration + STEP2_B.duration,
};

export const STEP3_CARD: BlockDef = {
  from: STEP2_B.from + STEP2_B.duration,
  duration: s(1.6),
};
export const STEP3_A: ClipDef = {
  from: STEP3_CARD.from + STEP3_CARD.duration,
  duration: s(5.0),
  src: staticFile("clips/ex3_explain.mp4"),
  trimBefore: s(11.0),
  trimAfter: s(16.0),
};
export const STEP3_B: ClipDef = {
  from: STEP3_A.from + STEP3_A.duration,
  duration: s(5.0),
  src: staticFile("clips/ex3_explain.mp4"),
  trimBefore: s(17.0),
  trimAfter: s(22.0),
};
export const STEP3_BLOCK: BlockDef = {
  from: STEP3_A.from,
  duration: STEP3_A.duration + STEP3_B.duration,
};

export const RECAP: BlockDef = {
  from: STEP3_B.from + STEP3_B.duration,
  duration: s(4.2),
};

export const OUTRO: BlockDef = {
  from: RECAP.from + RECAP.duration,
  duration: s(3.2),
};

export const TOTAL_DURATION = OUTRO.from + OUTRO.duration;

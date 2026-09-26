import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { AnatomyCorner } from "./AnatomyOverlay";
import { AnatomyFullCard } from "./AnatomyFullCard";
import { CaptionCue } from "./CaptionCue";
import { HookText } from "./HookText";
import { ProgressBar } from "./ProgressBar";
import { StepCard } from "./StepCard";
import {
  CUFF_NEUTRAL,
  CUFF_RECAP,
  CUFF_WORKING,
  HOOK,
  HOOK_CLIP,
  OUTRO,
  RECAP,
  STEP1_A,
  STEP1_B,
  STEP1_BLOCK,
  STEP1_CARD,
  STEP2_A,
  STEP2_B,
  STEP2_BLOCK,
  STEP2_CARD,
  STEP3_A,
  STEP3_B,
  STEP3_BLOCK,
  STEP3_CARD,
  WHY_CARD,
} from "./timeline";
import { VideoBlock } from "./VideoBlock";
import { palette } from "./colors";

export const BulletproofShoulders: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: palette.bg }}>
      {/* HOOK */}
      <Sequence from={HOOK.from} durationInFrames={HOOK.duration}>
        <VideoBlock clip={HOOK_CLIP} zoom />
        <HookText
          line1="Stop Skipping"
          line2="Your Rotator Cuff"
          sub="3 moves for bulletproof shoulders"
        />
      </Sequence>

      {/* WHY IT MATTERS / ANATOMY INTRO */}
      <Sequence from={WHY_CARD.from} durationInFrames={WHY_CARD.duration}>
        <AnatomyFullCard
          heading="Your Rotator Cuff"
          sub="4 small muscles that stabilize every push + pull"
          highlight={CUFF_NEUTRAL}
        />
      </Sequence>

      {/* STEP 1 */}
      <Sequence from={STEP1_CARD.from} durationInFrames={STEP1_CARD.duration}>
        <StepCard
          step="STEP 1"
          title="Cable External Rotation (Low)"
          cue="Elbow pinned to your ribs. Rotate out slow, 2 sec hold."
        />
      </Sequence>
      <Sequence from={STEP1_A.from} durationInFrames={STEP1_A.duration}>
        <VideoBlock clip={STEP1_A} />
      </Sequence>
      <Sequence from={STEP1_B.from} durationInFrames={STEP1_B.duration}>
        <VideoBlock clip={STEP1_B} />
      </Sequence>
      <Sequence from={STEP1_BLOCK.from} durationInFrames={STEP1_BLOCK.duration}>
        <AnatomyCorner highlight={CUFF_WORKING} label="NOW WORKING" />
        <CaptionCue
          label="STEP 1 · LOW PULLEY"
          text="Elbow at your side, forearm parallel to the floor — rotate out."
        />
      </Sequence>

      {/* STEP 2 */}
      <Sequence from={STEP2_CARD.from} durationInFrames={STEP2_CARD.duration}>
        <StepCard
          step="STEP 2"
          title="Cable External Rotation (High)"
          cue="90° elbow bend. Control the way back down, don't let it snap."
        />
      </Sequence>
      <Sequence from={STEP2_A.from} durationInFrames={STEP2_A.duration}>
        <VideoBlock clip={STEP2_A} />
      </Sequence>
      <Sequence from={STEP2_B.from} durationInFrames={STEP2_B.duration}>
        <VideoBlock clip={STEP2_B} />
      </Sequence>
      <Sequence from={STEP2_BLOCK.from} durationInFrames={STEP2_BLOCK.duration}>
        <AnatomyCorner highlight={CUFF_WORKING} label="NOW WORKING" />
        <CaptionCue
          label="STEP 2 · HIGH PULLEY"
          text="Same rotation, new angle — keeps the cuff working through its full range."
        />
      </Sequence>

      {/* STEP 3 */}
      <Sequence from={STEP3_CARD.from} durationInFrames={STEP3_CARD.duration}>
        <StepCard
          step="STEP 3"
          title="Cross-Body External Rotation"
          cue="Squeeze the shoulder blade back at the top of the rep."
        />
      </Sequence>
      <Sequence from={STEP3_A.from} durationInFrames={STEP3_A.duration}>
        <VideoBlock clip={STEP3_A} />
      </Sequence>
      <Sequence from={STEP3_B.from} durationInFrames={STEP3_B.duration}>
        <VideoBlock clip={STEP3_B} />
      </Sequence>
      <Sequence from={STEP3_BLOCK.from} durationInFrames={STEP3_BLOCK.duration}>
        <AnatomyCorner highlight={CUFF_WORKING} label="NOW WORKING" />
        <CaptionCue
          label="STEP 3 · CROSS-BODY"
          text="Drag the handle across your body — same muscles, different line of pull."
        />
      </Sequence>

      {/* RECAP */}
      <Sequence from={RECAP.from} durationInFrames={RECAP.duration}>
        <AnatomyFullCard
          heading="Infraspinatus + Teres Minor"
          sub="Your rotator cuff workhorses in all 3 moves. Subscapularis trains on internal-rotation day."
          highlight={CUFF_RECAP}
        />
      </Sequence>

      {/* OUTRO CTA */}
      <Sequence from={OUTRO.from} durationInFrames={OUTRO.duration}>
        <AbsoluteFill
          style={{
            backgroundColor: "#05070a",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HookText line1="Save This For" line2="Shoulder Day" sub="Follow for more real, no-BS training" />
        </AbsoluteFill>
      </Sequence>

      <ProgressBar />
    </AbsoluteFill>
  );
};

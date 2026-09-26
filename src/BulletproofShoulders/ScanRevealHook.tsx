import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { CUFF_WORKING } from "./timeline";
import { RotatorCuffDiagram } from "./RotatorCuffDiagram";
import { palette } from "./colors";

// A stylized "anatomy scan" reveal composited over the real hook footage:
// a cyan sweep line triggers the rotator-cuff diagram to fade in with a
// screen-blend glow, like an AR scan locking onto the shoulder, then clears
// out of the way for the hook headline. Not a body-tracked overlay — a
// graphic panel positioned over the shoulder region for the hook's duration.
export const ScanRevealHook: React.FC = () => {
  const frame = useCurrentFrame();

  const sweepY = interpolate(frame, [0, 26], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const diagramOpacity = interpolate(frame, [4, 22, 70, 88], [0, 0.85, 0.85, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const sweepOpacity = interpolate(frame, [0, 6, 22, 30], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          right: -40,
          top: 260,
          width: 460,
          height: 560,
          opacity: diagramOpacity,
          mixBlendMode: "screen",
          filter: "drop-shadow(0 0 24px rgba(91,232,255,0.55))",
        }}
      >
        <RotatorCuffDiagram highlight={CUFF_WORKING} showLabels={false} compact />
      </div>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: `${sweepY}%`,
          height: 3,
          opacity: sweepOpacity,
          background: palette.cyan,
          boxShadow: `0 0 24px 6px ${palette.cyan}`,
        }}
      />
    </div>
  );
};

import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { palette } from "./colors";

export const ProgressBar: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const pct = Math.min(100, (frame / durationInFrames) * 100);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 6,
        background: "rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          width: `${pct}%`,
          height: "100%",
          background: palette.accent,
        }}
      />
    </div>
  );
};

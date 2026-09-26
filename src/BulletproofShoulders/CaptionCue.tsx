import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette } from "./colors";

export const CaptionCue: React.FC<{
  label: string;
  text: string;
}> = ({ label, text }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(frame, [0, 8], [24, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ justifyContent: "flex-end" }}>
      <div
        style={{
          opacity,
          transform: `translateY(${y}px)`,
          margin: "0 44px 260px 44px",
          background: palette.panel,
          borderLeft: `6px solid ${palette.accent}`,
          borderRadius: 14,
          padding: "18px 24px",
          backdropFilter: "blur(6px)",
        }}
      >
        <div
          style={{
            fontFamily: "Inter, Helvetica, Arial, sans-serif",
            fontWeight: 800,
            fontSize: 18,
            letterSpacing: 2,
            color: palette.accent,
            marginBottom: 6,
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontFamily: "Inter, Helvetica, Arial, sans-serif",
            fontWeight: 700,
            fontSize: 30,
            lineHeight: 1.25,
            color: palette.ink,
          }}
        >
          {text}
        </div>
      </div>
    </AbsoluteFill>
  );
};

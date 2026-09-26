import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { palette } from "./colors";

export const HookText: React.FC<{
  line1: string;
  line2: string;
  sub?: string;
}> = ({ line1, line2, sub }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pop = spring({ frame, fps, config: { damping: 12, stiffness: 160, mass: 0.6 } });
  const subOpacity = interpolate(frame, [10, 22], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const subY = interpolate(frame, [10, 22], [16, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 170,
      }}
    >
      <div
        style={{
          transform: `scale(${0.7 + pop * 0.3}) translateY(${(1 - pop) * -30}px)`,
          opacity: pop,
          textAlign: "center",
          padding: "0 48px",
        }}
      >
        <div
          style={{
            fontFamily: "Inter, Helvetica, Arial, sans-serif",
            fontWeight: 900,
            fontSize: 76,
            lineHeight: 1.02,
            color: palette.ink,
            textTransform: "uppercase",
            letterSpacing: -1,
            textShadow: "0 6px 30px rgba(0,0,0,0.55)",
          }}
        >
          {line1}
        </div>
        <div
          style={{
            fontFamily: "Inter, Helvetica, Arial, sans-serif",
            fontWeight: 900,
            fontSize: 76,
            lineHeight: 1.02,
            color: palette.accent,
            textTransform: "uppercase",
            letterSpacing: -1,
            textShadow: "0 6px 30px rgba(0,0,0,0.55)",
          }}
        >
          {line2}
        </div>
      </div>
      {sub ? (
        <div
          style={{
            marginTop: 26,
            opacity: subOpacity,
            transform: `translateY(${subY}px)`,
            fontFamily: "Inter, Helvetica, Arial, sans-serif",
            fontWeight: 600,
            fontSize: 32,
            color: palette.inkDim,
            textAlign: "center",
            padding: "0 60px",
          }}
        >
          {sub}
        </div>
      ) : null}
    </AbsoluteFill>
  );
};

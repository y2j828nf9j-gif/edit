import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { palette } from "./colors";

export const StepCard: React.FC<{
  step: string;
  title: string;
  cue: string;
}> = ({ step, title, cue }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const slideIn = spring({ frame, fps, config: { damping: 16, stiffness: 180 } });
  const barWidth = interpolate(frame, [4, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#05070a",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          transform: `translateX(${(1 - slideIn) * -80}px)`,
          opacity: slideIn,
          padding: "0 56px",
          width: "100%",
        }}
      >
        <div
          style={{
            fontFamily: "Inter, Helvetica, Arial, sans-serif",
            fontWeight: 800,
            fontSize: 30,
            color: palette.accent,
            letterSpacing: 4,
            marginBottom: 14,
          }}
        >
          {step}
        </div>
        <div
          style={{
            fontFamily: "Inter, Helvetica, Arial, sans-serif",
            fontWeight: 900,
            fontSize: 58,
            lineHeight: 1.05,
            color: palette.ink,
            textTransform: "uppercase",
            letterSpacing: -0.5,
          }}
        >
          {title}
        </div>
        <div
          style={{
            width: `${barWidth * 140}px`,
            height: 6,
            background: palette.accent,
            borderRadius: 3,
            margin: "26px 0",
          }}
        />
        <div
          style={{
            fontFamily: "Inter, Helvetica, Arial, sans-serif",
            fontWeight: 600,
            fontSize: 30,
            color: palette.inkDim,
            lineHeight: 1.3,
          }}
        >
          {cue}
        </div>
      </div>
    </AbsoluteFill>
  );
};

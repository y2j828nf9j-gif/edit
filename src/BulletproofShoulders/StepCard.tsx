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
        background: `radial-gradient(120% 90% at 20% 100%, ${palette.gradeShadow} 0%, ${palette.bg} 55%, #000 100%)`,
        justifyContent: "flex-end",
      }}
    >
      <div
        style={{
          transform: `translateX(${(1 - slideIn) * -80}px)`,
          opacity: slideIn,
          padding: "0 48px",
          width: "100%",
          boxSizing: "border-box",
          marginBottom: 210,
        }}
      >
        <div
          style={{
            fontFamily: "Inter, Helvetica, Arial, sans-serif",
            fontWeight: 800,
            fontSize: 22,
            color: palette.lime,
            letterSpacing: 4,
            marginBottom: 10,
          }}
        >
          {step}
        </div>
        <div
          style={{
            fontFamily: "Inter, Helvetica, Arial, sans-serif",
            fontWeight: 900,
            fontSize: 46,
            lineHeight: 1.06,
            color: palette.ink,
            textTransform: "uppercase",
            letterSpacing: -0.5,
          }}
        >
          {title}
        </div>
        <div
          style={{
            width: `${barWidth * 110}px`,
            height: 5,
            background: palette.lime,
            borderRadius: 3,
            margin: "18px 0",
          }}
        />
        <div
          style={{
            fontFamily: "Inter, Helvetica, Arial, sans-serif",
            fontWeight: 600,
            fontSize: 24,
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

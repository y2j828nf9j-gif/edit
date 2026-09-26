import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { palette } from "./colors";

export const MinimalCue: React.FC<{
  headline: string;
  sub?: string;
  y?: number;
}> = ({ headline, sub, y = 62 }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const x = interpolate(frame, [0, 10], [-18, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: 44,
        top: `${y}%`,
        opacity,
        transform: `translateX(${x}px)`,
        maxWidth: 480,
      }}
    >
      <div
        style={{
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontWeight: 800,
          fontSize: 30,
          color: palette.lime,
          textShadow: "0 2px 14px rgba(0,0,0,0.85)",
          letterSpacing: 0.2,
        }}
      >
        {headline}
      </div>
      {sub ? (
        <div
          style={{
            marginTop: 4,
            fontFamily: "Inter, Helvetica, Arial, sans-serif",
            fontWeight: 600,
            fontSize: 19,
            color: palette.ink,
            opacity: 0.88,
            textShadow: "0 2px 10px rgba(0,0,0,0.85)",
          }}
        >
          {sub}
        </div>
      ) : null}
    </div>
  );
};

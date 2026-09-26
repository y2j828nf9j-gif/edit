import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { palette } from "./colors";

// Direct-on-footage form-check annotation: a dotted plumb line plus a
// curved path tracing the joint's line of motion, the way a form-review
// edit marks up a rep. Positions are percentages of the 1080x1920 frame.
export const FormLine: React.FC<{
  plumbX: number;
  plumbTop: number;
  plumbBottom: number;
  arc: { x1: number; y1: number; cx: number; cy: number; x2: number; y2: number };
  label?: string;
}> = ({ plumbX, plumbTop, plumbBottom, arc, label }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 10, 55, 70], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const draw = interpolate(frame, [4, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const pathD = `M ${arc.x1} ${arc.y1} Q ${arc.cx} ${arc.cy} ${arc.x2} ${arc.y2}`;

  return (
    <div style={{ position: "absolute", inset: 0, opacity }}>
      <svg
        viewBox="0 0 1080 1920"
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0 }}
      >
        <line
          x1={plumbX}
          y1={plumbTop}
          x2={plumbX}
          y2={plumbBottom}
          stroke={palette.ink}
          strokeWidth={4}
          strokeDasharray="2 16"
          strokeLinecap="round"
          opacity={0.85}
        />
        <path
          d={pathD}
          fill="none"
          stroke={palette.lime}
          strokeWidth={10}
          strokeLinecap="round"
          opacity={0.92}
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={1 - draw}
          style={{ filter: `drop-shadow(0 0 10px ${palette.limeDeep})` }}
        />
      </svg>
      {label ? (
        <div
          style={{
            position: "absolute",
            left: arc.x2 + 24,
            top: arc.y2 - 14,
            fontFamily: "Inter, Helvetica, Arial, sans-serif",
            fontWeight: 700,
            fontSize: 20,
            color: palette.lime,
            textShadow: "0 2px 10px rgba(0,0,0,0.9)",
          }}
        >
          {label}
        </div>
      ) : null}
    </div>
  );
};

import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { CuffHighlight } from "./RotatorCuffDiagram";
import { RotatorCuffDiagram } from "./RotatorCuffDiagram";
import { palette } from "./colors";

export const AnatomyCorner: React.FC<{ highlight: CuffHighlight; label: string }> = ({
  highlight,
  label,
}) => {
  const frame = useCurrentFrame();
  const in_ = interpolate(frame, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        top: 130,
        right: 26,
        width: 214,
        height: 278,
        opacity: in_,
        transform: `translateX(${(1 - in_) * 30}px)`,
        background: palette.panel,
        borderRadius: 20,
        border: `1px solid ${palette.muted}`,
        boxShadow: "0 18px 40px rgba(0,0,0,0.45)",
        padding: "10px 8px 6px 8px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontWeight: 800,
          fontSize: 11.5,
          letterSpacing: 1.5,
          color: palette.accent,
          textAlign: "center",
          marginBottom: 2,
        }}
      >
        {label}
      </div>
      <RotatorCuffDiagram highlight={highlight} compact showLabels={false} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 8,
          marginTop: -4,
        }}
      >
        <Legend color={palette.accent} text="working" />
        <Legend color={palette.mutedFill} text="not used" />
      </div>
    </div>
  );
};

const Legend: React.FC<{ color: string; text: string }> = ({ color, text }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
    <div style={{ width: 8, height: 8, borderRadius: 4, background: color, border: `1px solid ${palette.muted}` }} />
    <div
      style={{
        fontFamily: "Inter, Helvetica, Arial, sans-serif",
        fontSize: 10,
        fontWeight: 600,
        color: palette.inkDim,
      }}
    >
      {text}
    </div>
  </div>
);

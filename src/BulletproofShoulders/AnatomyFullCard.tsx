import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { RotatorCuffDiagram, CuffHighlight } from "./RotatorCuffDiagram";
import { palette } from "./colors";

export const AnatomyFullCard: React.FC<{
  heading: string;
  sub?: string;
  highlight: CuffHighlight;
}> = ({ heading, sub, highlight }) => {
  const frame = useCurrentFrame();
  const headOpacity = interpolate(frame, [0, 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const diagramOpacity = interpolate(frame, [6, 24], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const diagramScale = interpolate(frame, [6, 24], [0.92, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#05070a" }}>
      <div
        style={{
          position: "absolute",
          top: 90,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: headOpacity,
          padding: "0 44px",
        }}
      >
        <div
          style={{
            fontFamily: "Inter, Helvetica, Arial, sans-serif",
            fontWeight: 900,
            fontSize: 42,
            lineHeight: 1.08,
            color: palette.ink,
            textTransform: "uppercase",
            letterSpacing: -0.5,
          }}
        >
          {heading}
        </div>
        {sub ? (
          <div
            style={{
              marginTop: 14,
              fontFamily: "Inter, Helvetica, Arial, sans-serif",
              fontWeight: 600,
              fontSize: 24,
              color: palette.inkDim,
            }}
          >
            {sub}
          </div>
        ) : null}
      </div>
      <div
        style={{
          position: "absolute",
          top: 260,
          left: 60,
          right: 60,
          bottom: 110,
          opacity: diagramOpacity,
          transform: `scale(${diagramScale})`,
        }}
      >
        <RotatorCuffDiagram highlight={highlight} showLabels />
      </div>
    </AbsoluteFill>
  );
};

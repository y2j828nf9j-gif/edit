import React from "react";
import { interpolate, OffthreadVideo, useCurrentFrame } from "remotion";
import { ClipDef } from "./timeline";

// cinematic grade: cool cyan shadows, warm highlights, lifted contrast —
// approximates the teal/orange gym-tutorial look via CSS filter + a
// duotone gradient blended with "color" so it tints without flattening detail.
export const CINEMATIC_FILTER =
  "contrast(1.16) saturate(1.08) brightness(0.94) sepia(0.06)";

export const VideoBlock: React.FC<{ clip: ClipDef; zoom?: boolean }> = ({ clip, zoom }) => {
  const frame = useCurrentFrame();
  const fade = interpolate(frame, [0, 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scale = zoom
    ? interpolate(frame, [0, clip.duration], [1, 1.06], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : 1;

  return (
    <div style={{ position: "absolute", inset: 0, opacity: fade, overflow: "hidden" }}>
      <OffthreadVideo
        src={clip.src}
        trimBefore={clip.trimBefore}
        trimAfter={clip.trimAfter}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: `scale(${scale})`,
          filter: CINEMATIC_FILTER,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          mixBlendMode: "color",
          opacity: 0.45,
          background:
            "linear-gradient(160deg, #0a3a42 0%, rgba(0,0,0,0) 42%, rgba(0,0,0,0) 60%, #2a1608 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 24%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.6) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          boxShadow: "inset 0 0 180px rgba(0,0,0,0.55)",
        }}
      />
    </div>
  );
};

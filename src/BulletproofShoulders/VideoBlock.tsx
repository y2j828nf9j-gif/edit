import React from "react";
import { interpolate, OffthreadVideo, useCurrentFrame } from "remotion";
import { ClipDef } from "./timeline";

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
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 22%, rgba(0,0,0,0) 62%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
};

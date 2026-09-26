import React from "react";
import { muscleColor, muscleStroke, palette, MuscleState } from "./colors";

export type CuffHighlight = {
  supraspinatus: MuscleState;
  infraspinatus: MuscleState;
  teresMinor: MuscleState;
  subscapularis: MuscleState;
};

const Muscle: React.FC<{
  d: string;
  state: MuscleState;
}> = ({ d, state }) => (
  <path
    d={d}
    fill={muscleColor(state)}
    stroke={muscleStroke(state)}
    strokeWidth={3}
    strokeLinejoin="round"
  />
);

const Label: React.FC<{
  x: number;
  y: number;
  anchor?: "start" | "middle" | "end";
  size?: number;
  color?: string;
  weight?: number;
  children: React.ReactNode;
}> = ({ x, y, anchor = "start", size = 15, color = palette.ink, weight = 700, children }) => (
  <text
    x={x}
    y={y}
    textAnchor={anchor}
    fontSize={size}
    fontWeight={weight}
    fill={color}
    fontFamily="Inter, Helvetica, Arial, sans-serif"
    style={{ letterSpacing: 0.3 }}
  >
    {children}
  </text>
);

export const RotatorCuffDiagram: React.FC<{
  highlight: CuffHighlight;
  compact?: boolean;
  showLabels?: boolean;
  title?: string;
}> = ({ highlight, compact = false, showLabels = true, title }) => {
  return (
    <svg
      viewBox="0 0 400 520"
      width="100%"
      height="100%"
      style={{ overflow: "visible" }}
    >
      <defs>
        <radialGradient id="skinShade" cx="45%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#232830" />
          <stop offset="100%" stopColor="#171a20" />
        </radialGradient>
      </defs>

      {/* upper back silhouette for context */}
      <path
        d="M60 40
           C 140 -10 260 -10 340 40
           L 360 300
           C 300 380 260 470 230 510
           L 170 510
           C 140 470 100 380 40 300
           Z"
        fill="url(#skinShade)"
        stroke="#2c323b"
        strokeWidth={2}
      />

      {/* spine hint */}
      <line x1="200" y1="30" x2="200" y2="510" stroke="#2c323b" strokeWidth={3} />

      {/* humerus (upper arm bone), lateral side */}
      <rect
        x="300"
        y="120"
        width="34"
        height="230"
        rx="17"
        fill={palette.bone}
        opacity={0.28}
      />
      {/* humeral head */}
      <circle cx="300" cy="150" r="30" fill={palette.bone} opacity={0.28} />

      {/* scapula outline */}
      <path
        d="M150 110
           L 295 145
           C 300 220 270 300 235 355
           C 210 390 175 375 165 330
           C 150 270 140 180 150 110 Z"
        fill="#20252c"
        stroke="#3a414b"
        strokeWidth={2.5}
      />

      {/* scapular spine divider */}
      <path
        d="M158 148 C 210 165 260 170 292 152"
        fill="none"
        stroke="#4a525d"
        strokeWidth={3}
      />

      {/* SUPRASPINATUS - above the spine */}
      <Muscle
        state={highlight.supraspinatus}
        d="M160 118
           C 205 100 260 104 292 148
           C 258 166 208 162 160 145
           Z"
      />

      {/* INFRASPINATUS - main body below the spine */}
      <Muscle
        state={highlight.infraspinatus}
        d="M162 150
           C 212 168 262 156 292 152
           C 296 210 274 278 244 322
           C 214 264 176 220 162 150 Z"
      />

      {/* TERES MINOR - narrow band along lateral border */}
      <Muscle
        state={highlight.teresMinor}
        d="M246 250
           C 268 262 284 278 288 298
           C 276 312 254 314 236 306
           C 232 285 236 266 246 250 Z"
      />

      {/* TERES MAJOR - not a rotator cuff muscle, always neutral */}
      <path
        d="M232 308
           C 254 316 274 316 286 302
           C 288 322 276 344 252 352
           C 232 344 226 326 232 308 Z"
        fill={palette.mutedFill}
        stroke={palette.muted}
        strokeWidth={2.5}
        opacity={0.85}
      />

      {/* deltoid outline for context only, not a rotator cuff muscle */}
      <path
        d="M280 110
           C 320 118 345 150 344 195
           C 344 215 336 232 322 244
           C 306 210 296 170 280 140 Z"
        fill="none"
        stroke="#4a525d"
        strokeWidth={2}
        strokeDasharray="4 5"
      />

      {showLabels ? (
        <>
          <Label x={20} y={100} size={compact ? 13 : 16}>
            SUPRASPINATUS
          </Label>
          <Label x={20} y={100 + 20} size={compact ? 11 : 13} color={palette.inkDim} weight={500}>
            (minor assist)
          </Label>

          <Label x={20} y={210} size={compact ? 13 : 16}>
            INFRASPINATUS
          </Label>
          <Label x={20} y={210 + 20} size={compact ? 11 : 13} color={palette.inkDim} weight={500}>
            (main external rotator)
          </Label>

          <Label x={20} y={335} size={compact ? 13 : 16}>
            TERES MINOR
          </Label>
          <Label x={20} y={335 + 20} size={compact ? 11 : 13} color={palette.inkDim} weight={500}>
            (external rotator)
          </Label>

          <Label x={380} y={455} anchor="end" size={compact ? 12 : 14} color={palette.inkDim} weight={600}>
            TERES MAJOR
          </Label>
          <Label x={380} y={455 + 18} anchor="end" size={compact ? 10 : 12} color={palette.inkDim} weight={500}>
            not rotator cuff
          </Label>

          {/* connective leader lines */}
          <line x1="150" y1="94" x2="200" y2="115" stroke={palette.inkDim} strokeWidth={1.5} opacity={0.6} />
          <line x1="150" y1="204" x2="200" y2="220" stroke={palette.inkDim} strokeWidth={1.5} opacity={0.6} />
          <line x1="150" y1="328" x2="232" y2="292" stroke={palette.inkDim} strokeWidth={1.5} opacity={0.6} />
          <line x1="378" y1="450" x2="272" y2="330" stroke={palette.inkDim} strokeWidth={1.5} opacity={0.6} />
        </>
      ) : null}

      {/* subscapularis inset - anterior surface, not visible from behind */}
      <g transform="translate(230, 20)">
        <circle cx="70" cy="60" r="72" fill="#14171d" stroke="#3a414b" strokeWidth={2} />
        <path
          d="M40 30
             C 65 18 95 20 104 46
             C 108 70 96 92 74 100
             C 52 92 40 70 40 46 Z"
          fill={muscleColor(highlight.subscapularis)}
          stroke={muscleStroke(highlight.subscapularis)}
          strokeWidth={2.5}
        />
        {showLabels ? (
          <>
            <Label x={70} y={130} anchor="middle" size={compact ? 11 : 12.5} color={palette.inkDim} weight={700}>
              SUBSCAPULARIS
            </Label>
            <Label x={70} y={147} anchor="middle" size={compact ? 9.5 : 11} color={palette.inkDim} weight={500}>
              front of blade – internal rotation
            </Label>
            <Label x={70} y={162} anchor="middle" size={compact ? 9.5 : 11} color={palette.inkDim} weight={500}>
              not trained by these 3 moves
            </Label>
          </>
        ) : null}
      </g>

      {title ? (
        <Label x={200} y={505} anchor="middle" size={compact ? 13 : 15} color={palette.inkDim} weight={600}>
          {title}
        </Label>
      ) : null}
    </svg>
  );
};

import type { CSSProperties } from "react";

interface PetalConfig {
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  flutter: number;
  type: "single" | "curved" | "flower";
  color: string;
}

// 26 staggered petals with natural drifting speeds, varied sizes, and vibrant sakura colors.
// Staggered negative delays ensure petals are already distributed across the viewport from the first frame.
const petals: PetalConfig[] = [
  { left: 2, size: 20, duration: 16, delay: -3, drift: 80, flutter: 4.5, type: "single", color: "#fb7185" },
  { left: 6, size: 28, duration: 22, delay: -12, drift: 100, flutter: 6.5, type: "flower", color: "#f43f5e" },
  { left: 11, size: 16, duration: 18, delay: -7, drift: -65, flutter: 5, type: "curved", color: "#f472b6" },
  { left: 16, size: 22, duration: 20, delay: -16, drift: 85, flutter: 5.8, type: "single", color: "#fda4af" },
  { left: 21, size: 15, duration: 17, delay: -9, drift: -70, flutter: 4.8, type: "curved", color: "#fb7185" },
  { left: 26, size: 26, duration: 23, delay: -19, drift: 110, flutter: 7, type: "flower", color: "#f43f5e" },
  { left: 31, size: 19, duration: 19, delay: -4, drift: 65, flutter: 5.2, type: "single", color: "#f472b6" },
  { left: 36, size: 17, duration: 18, delay: -14, drift: -80, flutter: 4.6, type: "curved", color: "#fb7185" },
  { left: 42, size: 24, duration: 21, delay: -2, drift: 90, flutter: 6.2, type: "single", color: "#f43f5e" },
  { left: 47, size: 28, duration: 24, delay: -17, drift: -95, flutter: 7.2, type: "flower", color: "#fb7185" },
  { left: 52, size: 16, duration: 18, delay: -8, drift: 70, flutter: 5, type: "single", color: "#fda4af" },
  { left: 58, size: 21, duration: 20, delay: -21, drift: -65, flutter: 5.6, type: "curved", color: "#f472b6" },
  { left: 63, size: 18, duration: 17, delay: -11, drift: 80, flutter: 4.8, type: "single", color: "#fb7185" },
  { left: 68, size: 30, duration: 23, delay: -6, drift: 105, flutter: 7.5, type: "flower", color: "#f43f5e" },
  { left: 74, size: 15, duration: 16, delay: -18, drift: -75, flutter: 4.4, type: "curved", color: "#f472b6" },
  { left: 79, size: 22, duration: 21, delay: -10, drift: -85, flutter: 6, type: "single", color: "#fb7185" },
  { left: 84, size: 19, duration: 19, delay: -15, drift: 85, flutter: 5.4, type: "single", color: "#fda4af" },
  { left: 89, size: 27, duration: 22, delay: -5, drift: -90, flutter: 6.8, type: "flower", color: "#f43f5e" },
  { left: 93, size: 17, duration: 18, delay: -13, drift: 75, flutter: 5, type: "curved", color: "#f472b6" },
  { left: 97, size: 21, duration: 20, delay: -1, drift: -60, flutter: 5.5, type: "single", color: "#fb7185" },
  { left: 9, size: 18, duration: 17, delay: -22, drift: 75, flutter: 4.9, type: "curved", color: "#fda4af" },
  { left: 23, size: 23, duration: 21, delay: -8, drift: 95, flutter: 6.2, type: "single", color: "#fb7185" },
  { left: 45, size: 15, duration: 16, delay: -23, drift: -60, flutter: 4.6, type: "curved", color: "#f472b6" },
  { left: 66, size: 20, duration: 19, delay: -3, drift: 85, flutter: 5.2, type: "single", color: "#fb7185" },
  { left: 81, size: 16, duration: 18, delay: -20, drift: -70, flutter: 4.7, type: "curved", color: "#fda4af" },
  { left: 91, size: 24, duration: 22, delay: -7, drift: 80, flutter: 6.4, type: "single", color: "#f43f5e" },
];

export function SakuraBackground({ paused = false }: { paused?: boolean }) {
  return (
    <div
      className="sakura-background"
      aria-hidden="true"
      data-paused={paused}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      {petals.map((petal, index) => (
        <span
          className="sakura-petal"
          key={index}
          style={
            {
              left: `${petal.left}%`,
              width: petal.size,
              height: petal.size,
              "--petal-duration": `${petal.duration}s`,
              "--petal-delay": `${petal.delay}s`,
              "--petal-drift": `${petal.drift}px`,
              "--petal-flutter": `${petal.flutter}s`,
            } as CSSProperties
          }
        >
          <span className="sakura-petal-inner">
            <svg
              viewBox="0 0 32 32"
              width="100%"
              height="100%"
              focusable="false"
              aria-hidden="true"
            >
              {petal.type === "flower" ? (
                <>
                  {[0, 72, 144, 216, 288].map((rot) => (
                    <path
                      key={rot}
                      d="M 16 16 C 13 13, 10 7, 13 3 C 14.2 3, 15.2 4.2, 16 5 C 16.8 4.2, 17.8 3, 19 3 C 22 7, 19 13, 16 16 Z"
                      fill={petal.color}
                      transform={`rotate(${rot} 16 16)`}
                    />
                  ))}
                  <circle cx="16" cy="16" r="2.2" fill="#fbbf24" />
                  <circle cx="16" cy="16" r="1.1" fill="#f59e0b" />
                </>
              ) : petal.type === "curved" ? (
                <>
                  <path
                    d="M 13 29 C 8 24, 4 16, 8 9 C 10 5, 14 3.5, 16.5 5 C 17.5 5.6, 18 6.5, 18.5 6 C 20 4.5, 23.5 5, 24.5 10 C 26 17, 20 25, 13 29 Z"
                    fill={petal.color}
                  />
                  <path
                    d="M 13 26 C 9.5 21.5, 7 15, 10 10 C 11.5 7, 14.5 6, 16 7 C 18 8, 21 8, 22 12 C 23 16.5, 18.5 22.5, 13 26 Z"
                    fill="#ffe4e6"
                    opacity="0.45"
                  />
                </>
              ) : (
                <>
                  <path
                    d="M 16 29 C 11 25, 4 19, 5 11 C 5.5 6, 9.5 3, 13.5 4 C 14.8 4.3, 15.5 6, 16 7 C 16.5 6, 17.2 4.3, 18.5 4 C 22.5 3, 26.5 6, 27 11 C 28 19, 21 25, 16 29 Z"
                    fill={petal.color}
                  />
                  <path
                    d="M 16 25 C 13 21, 8.5 16.5, 9.5 11.5 C 10 7.5, 12.5 5.5, 14.5 6.5 C 15.2 7, 15.8 7.8, 16 8.2 C 16.2 7.8, 16.8 7, 17.5 6.5 C 19.5 5.5, 22 7.5, 22.5 11.5 C 23.5 16.5, 19 21, 16 25 Z"
                    fill="#ffe4e6"
                    opacity="0.5"
                  />
                </>
              )}
            </svg>
          </span>
        </span>
      ))}
    </div>
  );
}

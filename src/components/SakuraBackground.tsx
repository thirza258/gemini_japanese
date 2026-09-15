import type { CSSProperties } from "react";

// Staggered starting points keep the breeze gentle from the first frame.
const petals = [
  { left: 4, size: 19, duration: 26, delay: -5, drift: 80 },
  { left: 13, size: 32, duration: 34, delay: -19, drift: 100, flower: true },
  { left: 27, size: 16, duration: 29, delay: -12, drift: -65 },
  { left: 43, size: 22, duration: 32, delay: -25, drift: 115 },
  { left: 62, size: 18, duration: 27, delay: -7, drift: 75 },
  { left: 79, size: 30, duration: 36, delay: -27, drift: -90, flower: true },
  { left: 92, size: 21, duration: 31, delay: -16, drift: -60 },
  { left: 7, size: 15, duration: 28, delay: -22, drift: 110 },
  { left: 22, size: 20, duration: 33, delay: -3, drift: 70 },
  { left: 37, size: 17, duration: 30, delay: -20, drift: -75 },
  { left: 54, size: 28, duration: 38, delay: -14, drift: 95, flower: true },
  { left: 70, size: 23, duration: 35, delay: -31, drift: 65 },
  { left: 87, size: 16, duration: 29, delay: -4, drift: -85 },
  { left: 97, size: 19, duration: 32, delay: -24, drift: -100 },
];

export function SakuraBackground({ paused }: { paused: boolean }) {
  return (
    <div className="sakura-background" aria-hidden="true" data-paused={paused}>
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
              "--petal-flutter": `${6 + (index % 5)}s`,
            } as CSSProperties
          }
        >
          <svg viewBox="0 0 40 40" fill="currentColor" focusable="false">
            {petal.flower ? (
              <>
                {[0, 72, 144, 216, 288].map((rotation) => (
                  <path
                    key={rotation}
                    d="M20 21C12 17 11 7 16 3L20 6L24 3C29 7 28 17 20 21Z"
                    transform={`rotate(${rotation} 20 21)`}
                  />
                ))}
                <circle
                  cx="20"
                  cy="21"
                  r="2.5"
                  className="sakura-flower-center"
                />
              </>
            ) : (
              <path d="M9 32C5 20 10 7 20 5L23 11L29 9C36 20 25 32 9 32Z" />
            )}
          </svg>
        </span>
      ))}
    </div>
  );
}

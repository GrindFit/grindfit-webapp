// components/Brand.jsx
import React from "react";

export default function Brand({ size = "2xl", className = "" }) {
  // Visual height targets (px) to line up with your hero sizing
  const heights = { sm: 28, md: 36, lg: 44, xl: 56, "2xl": 64, "3xl": 72 };
  const h = heights[size] ?? 56;

  return (
    <span className={`inline-flex items-center ${className}`} style={{ lineHeight: 0 }}>
      <svg
        role="img"
        aria-label="GRINDFIT"
        height={h}
        viewBox="0 0 640 100"
        className="select-none"
        style={{ display: "block" }}
      >
        <defs>
          {/* Exact GrindFit orange gradient (from your globals.css variables) */}
          <linearGradient id="gf-wordmark" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--gf-amber)" />
            <stop offset="55%" stopColor="var(--gf-orange)" />
            <stop offset="100%" stopColor="var(--gf-vermillion)" />
          </linearGradient>
        </defs>

        <text
          x="0"
          y="78"
          fill="url(#gf-wordmark)"
          style={{
            fontFamily:
              'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
            fontWeight: 900,
            // Tighter tracking so the mark feels bolder/denser
            letterSpacing: "-0.045em",
          }}
        >
          GRINDFIT
        </text>
      </svg>
    </span>
  );
}

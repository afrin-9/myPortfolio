export default function EarthCurve() {
  return (
    <div className="absolute bottom-0 w-full z-0 -mt-400">
      <svg viewBox="0 0 1440 300" className="w-full">
        <defs>
          <radialGradient id="glow" cx="50%" cy="100%" r="60%">
            <stop offset="0%" stopColor="#264035" stopOpacity="0.6" />
            <stop offset="100%" stopColor="black" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="720" cy="320" rx="900" ry="300" fill="url(#glow)" />

        <path
          d="M -200 250 A 920 300 0 0 1 1640 250"
          stroke="#264035"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
}
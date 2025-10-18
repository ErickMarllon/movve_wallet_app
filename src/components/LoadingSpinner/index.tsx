export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center absolute w-full h-full z-70 bg-black/50 cursor-default">
      <div className="relative flex justify-center items-center">
        <svg
          aria-hidden="true"
          className="w-16 h-16 sm:w-23 sm:h-23 md:w-24 md:h-24 absolute animate-spin  text-red-600"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="cometTrail" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
              <stop offset="20%" stopColor="currentColor" stopOpacity="0.6" />
              <stop offset="40%" stopColor="currentColor" stopOpacity="0.4" />
              <stop offset="60%" stopColor="currentColor" stopOpacity="0.3" />
              <stop offset="80%" stopColor="currentColor" stopOpacity="0.2" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>

          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="url(#cometTrail)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="180 188"
            transform="rotate(70 50 50)"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="40 243"
            transform="rotate(-90 50 50)"
          />
        </svg>
      </div>
    </div>
  );
}

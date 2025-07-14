import React from "react";

interface GradientBackgroundProps {
  className?: string;
}

export default function GradientBackground({
  className = "",
}: GradientBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden bg-black ${className}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-orange-500/15 to-orange-600/8 rounded-full blur-3xl" />

        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-orange-400/25 to-orange-500/15 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-orange-400/25 to-orange-500/15 rounded-full blur-2xl" />
        <div className="absolute top-2/3 right-1/3 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-orange-500/12 rounded-full blur-xl" />

        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-gradient-to-br from-orange-300/30 to-orange-400/20 rounded-full blur-xl" />
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-gradient-to-br from-orange-300/30 to-orange-400/20 rounded-full blur-xl" />

        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent transform rotate-12" />
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent transform -rotate-12" />
        </div>

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 165, 0, 0.3) 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, rgba(255, 165, 0, 0.2) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );
}

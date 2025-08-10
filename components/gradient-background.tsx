import { cn } from "@/lib/utils";
import React from "react";

function GradientBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 bg-gradient-to-b from-transparent to-dark-purple/50 z-[-2]",
        className
      )}
    />
  );
}

export default GradientBackground;

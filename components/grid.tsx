import React from "react";

function Grid({ className }: IProps) {
  return (
				<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className={className}>
					<defs>
							<pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
							<line x1="0" y1="0" x2="0" y2="20" stroke="#fff" strokeWidth="1" strokeOpacity="0.2" />
							<line x1="0" y1="0" x2="20" y2="0" stroke="#fff" strokeWidth="1" strokeOpacity="0.2" />
							</pattern>

							{/* <radialGradient id="purpleGlow" cx="50%" cy="50%" r="50%">
							<stop offset="0%" stopColor="#ac6bbe" stopOpacity="0.8" />
							<stop offset="100%" stopColor="#ac6bbe" stopOpacity="0" />
							</radialGradient> */}

							<filter id="blur">
							<feGaussianBlur stdDeviation="10" />
							</filter>

							<filter id="noiseFilter">
							<feTurbulence type="fractalNoise" baseFrequency="2" numOctaves="2" result="noise" />
							<feComponentTransfer>
									<feFuncA type="linear" slope="0.05" />
							</feComponentTransfer>
							</filter>
					</defs>

					<rect width="100%" height="100%" fill="url(#grid)" />

					<ellipse cx="50%" cy="50%" rx="40%" ry="30%" fill="url(#purpleGlow)" filter="url(#blur)" />

					<rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.05" />
				</svg>
  )
}

interface IProps {
	className?: string;
}

export default Grid;

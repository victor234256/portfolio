import React from "react";

type FigmaIconProps = {
	size?: number;
};

export default function FigmaIcon({
	size = 40,
}: FigmaIconProps) {
	return (
		<div
			className="group transition-colors duration-300"
			style={{ width: size, height: size }}
		>
			<svg
				viewBox="0 0 32 32"
				xmlns="http://www.w3.org/2000/svg"
				className="w-full h-full"
			>
				{/* Blue circle */}
				<path
					d="M16 16C16 13.7909 17.7909 12 20 12C22.2091 12 24 13.7909 24 16C24 18.2091 22.2091 20 20 20C17.7909 20 16 18.2091 16 16Z"
					className="fill-gray-400 group-hover:fill-[#1ABCFE]"
				/>
				{/* Green circle */}
				<path
					d="M8 24C8 21.7909 9.79086 20 12 20H16V24C16 26.2091 14.2091 28 12 28C9.79086 28 8 26.2091 8 24Z"
					className="fill-gray-400 group-hover:fill-[#0ACF83]"
				/>
				{/* Red-orange circle */}
				<path
					d="M16 4V12H20C22.2091 12 24 10.2091 24 8C24 5.79086 22.2091 4 20 4H16Z"
					className="fill-gray-400 group-hover:fill-[#FF7262]"
				/>
				{/* Orange circle */}
				<path
					d="M8 8C8 10.2091 9.79086 12 12 12H16V4H12C9.79086 4 8 5.79086 8 8Z"
					className="fill-gray-400 group-hover:fill-[#F24E1E]"
				/>
				{/* Purple circle */}
				<path
					d="M8 16C8 18.2091 9.79086 20 12 20H16V12H12C9.79086 12 8 13.7909 8 16Z"
					className="fill-gray-400 group-hover:fill-[#A259FF]"
				/>
			</svg>
		</div>
	);
}

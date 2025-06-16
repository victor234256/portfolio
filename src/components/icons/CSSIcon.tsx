import React from "react";

type CSSIconProps = {
	size?: number;
};

export default function CSSIcon({
	size = 40,
}: CSSIconProps) {
	return (
		<div
			className="group transition-colors duration-300"
			style={{ width: size, height: size }}
		>
			<svg
				viewBox="0 0 124 141.53"
				xmlns="http://www.w3.org/2000/svg"
				className="w-full h-full"
			>
				{/* Dark blue background - turns gray by default, blue on hover */}
				<path
					d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z"
					fill="currentColor"
					className="text-gray-400 group-hover:text-[#1B73BA]"
				/>
				{/* Lighter blue highlight */}
				<path
					d="M62.468 129.275V12.085l51.064.17-9.106 104.85z"
					fill="currentColor"
					className="text-gray-400 group-hover:text-[#1C88C7]"
				/>
				{/* CSS 'S' symbol - stays white */}
				<path
					d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z"
					fill="#ffffff"
				/>
			</svg>
		</div>
	);
}

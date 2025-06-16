import React from "react";

type TailwindIconProps = {
	size?: number;
};

export default function TailwindIcon({
	size = 40,
}: TailwindIconProps) {
	return (
		<div
			className="text-gray-400 hover:text-[#38bdf8] transition-colors duration-300"
			style={{ width: size, height: size }}
		>
			<svg
				viewBox="0 0 32 32"
				xmlns="http://www.w3.org/2000/svg"
				className="w-full h-full"
				fill="currentColor"
			>
				<title>Tailwind CSS</title>
				<path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z" />
			</svg>
		</div>
	);
}

"use client";

import Image from "next/image";
import React from "react";

interface SectionHeaderProps {
	title: string;
	className?: string;
	justify?: "left" | "center" | "right";
}

export default function SectionHeader({
	title,
	className = "",
	justify = "left",
}: SectionHeaderProps) {
	const justifyClass =
		justify === "center"
			? "justify-center"
			: justify === "right"
			? "justify-end"
			: "justify-start";

	return (
		<div
			className={`flex gap-3 items-center ${justifyClass} ${className}`}
		>
			<Image
				src="/star-2.png"
				alt="star"
				width={40}
				height={40}
			/>
			<p className="text-white text-3xl font-semibold">
				{title}
			</p>
			<Image
				src="/star-2.png"
				alt="star"
				width={40}
				height={40}
			/>
		</div>
	);
}

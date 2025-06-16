import Image from "next/image";
import { ReactNode } from "react";

type CardWithIconProps = {
	icon: string;
	title?: ReactNode;
	children?: ReactNode;
	className?: string;
	iconPosition?: "left" | "right";
	iconSize?: number;
	titlePosition?: "left" | "center" | "right";
};

export default function CardWithIcon({
	icon,
	title,
	children,
	className = "",
	iconPosition = "left",
	iconSize = 32,
	titlePosition = "left",
}: CardWithIconProps) {
	const titleAlignClass =
		titlePosition === "center"
			? "mx-auto"
			: titlePosition === "right"
			? "ml-auto"
			: "";

	return (
		<div
			className={`relative px-4 pt-2 pb-6 rounded-2xl text-white shadow-md backdrop-blur-md
        bg-[linear-gradient(120deg,rgba(255,255,255,0.3),rgba(255,255,255,0.05))] ${className}`}
		>
			<div
				className={`flex items-center gap-3 ${
					iconPosition === "right" ? "flex-row-reverse" : ""
				}`}
			>
				<Image
					src={icon}
					alt={typeof title === "string" ? title : "icon"}
					width={iconSize}
					height={iconSize}
				/>
				<div className={`flex-1 ${titleAlignClass}`}>
					{typeof title === "string" ? (
						<h3 className="text-lg font-semibold">
							{title}
						</h3>
					) : (
						title
					)}
				</div>
			</div>

			{children && (
				<div className="mt-3 text-sm text-white/80">
					{children}
				</div>
			)}
		</div>
	);
}

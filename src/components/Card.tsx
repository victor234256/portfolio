import { ReactNode } from "react";

type CardProps = {
	title?: string;
	subtitle?: string;
	children?: ReactNode;
	className?: string;
};

export default function Card({
	title,
	subtitle,
	children,
	className,
}: CardProps) {
	return (
		//
		<div
			className={`rounded-2xl p-3 backdrop-blur-md shadow-md text-white hover:bg-black   
        bg-[linear-gradient(120deg,rgba(255,255,255,0.3),rgba(255,255,255,0.05))] 
         ${className}`}
		>
			{subtitle && (
				<p className="text-sm text-gray-400 mb-1">
					{subtitle}
				</p>
			)}
			<h3 className="text-lg font-semibold">{title}</h3>
			{children && <div className="mt-2">{children}</div>}
		</div>
	);
}

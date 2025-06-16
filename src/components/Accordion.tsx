"use client";

import { ChevronDown } from "lucide-react";
import React, { ReactNode, useState } from "react";

type AccordionProps = {
	title: ReactNode;
	children: React.ReactNode;
	defaultOpen?: boolean;
};

const Accordion: React.FC<AccordionProps> = ({
	title,
	children,
	defaultOpen = false,
}) => {
	const [isOpen, setIsOpen] = useState(defaultOpen);

	return (
		<div className="mb-4">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex w-full items-center justify-between rounded bg-gray-800 px-4 py-3 text-left text-sm font-medium text-gray-700"
			>
				<span className="text-lg font-semibold">
					{title}
				</span>
				<ChevronDown
					className={`h-5 w-5 transform transition-transform duration-200 ${
						isOpen ? "rotate-180" : ""
					}`}
				/>
			</button>
			{isOpen && (
				<div className="my-6 px-4 py-3">{children}</div>
			)}
		</div>
	);
};

export default Accordion;

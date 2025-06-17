import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import CardWithIcon from "./CardWithIcon";

interface PopUpModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
	title?: string;
	width?: string;
}

export default function PopUpModal({
	isOpen,
	onClose,
	children,
	title,
	width = "w-full max-w-md",
}: PopUpModalProps) {
	if (!isOpen) return null;
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
			<CardWithIcon
				icon="/icon3.png"
				className="w-[20%] bg-black"
			>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, duration: 0.7 }}
					className={`relative  rounded-lg bg-[url('/bg1.png')] py-3 shadow-lg ${width}`}
				>
					<div className="flex items-center justify-between border-b px-4 py-4 pb-7">
						<h2 className="px-4 text-xl font-medium">
							{title}
						</h2>
						<button
							onClick={onClose}
							className="text-2xl leading-none"
						>
							&times;
						</button>
					</div>
					<div className="p-4">{children}</div>
				</motion.div>
			</CardWithIcon>
		</div>
	);
}

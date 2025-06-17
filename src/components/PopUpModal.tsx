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
	width = "w-full max-w-lg", // cap size on large screens
}: PopUpModalProps) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
			<CardWithIcon
				icon="/icon3.png"
				className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-black"
			>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.6 }}
					className={`relative rounded-lg bg-[url('/bg1.png')] bg-cover py-3 shadow-lg w-full ${width}`}
				>
					<div className="flex items-center justify-between border-b px-4 py-4 pb-6">
						<h2 className="text-lg sm:text-xl font-medium px-2">
							{title}
						</h2>
						<button
							onClick={onClose}
							className="text-2xl leading-none hover:text-red-400 transition"
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

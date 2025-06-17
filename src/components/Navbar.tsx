"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import PopUpModal from "./PopUpModal";
import ContactForm from "./Contact";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isScrolled, setIsScrolled] =
		useState<boolean>(false);
	const [isModalOpen, setIsModalOpen] =
		useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () =>
			window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div
			className={`w-full px-6 py-4 sticky top-0 z-50 transition-colors duration-300 ${
				isScrolled
					? "bg-black shadow text-white h-auto"
					: "bg-transparent text-white"
			}`}
		>
			<div className="max-w-6xl mx-auto flex justify-between items-center">
				<Image
					src="/logo-black.png"
					width={120}
					height={50}
					alt="logo"
				/>

				<div className="hidden md:block">
					<button
						className="bg-[#323232] py-2 px-4 rounded-xl hover:bg-gray-50 hover:text-[#323232]"
						onClick={() => setIsModalOpen(true)}
					>
						Let’s talk
					</button>
				</div>

				<div className="md:hidden">
					<button onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>

			{isOpen && (
				<div className="md:hidden mt-4 space-y-3 px-4">
					<button
						className="w-full mt-2 bg-[#323232] py-2 px-4 rounded-xl hover:bg-gray-50 hover:text-[#323232]"
						onClick={() => setIsModalOpen(true)}
					>
						Let’s talk
					</button>
				</div>
			)}
			<PopUpModal
				title="Let's talk"
				isOpen={isModalOpen}
				onClose={() => {
					setIsModalOpen(false);
				}}
			>
				<ContactForm />
			</PopUpModal>
		</div>
	);
}

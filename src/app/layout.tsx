"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import "../../styles/globals.css";
import Navbar from "../components/Navbar";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();

	return (
		<html lang="en">
			<head>
				<title>Victor Omeiza Portfolio</title>
				<meta
					name="description"
					content="Created with Next.js 15 and Tailwind CSS"
				/>
				<link rel="icon" href="/logo-black.png" />
			</head>
			<body className="min-h-screen bg-[#0F0F0F] bg-[url('/bg1.png')] bg-cover bg-no-repeat bg-fixed text-white ">
				<Navbar />
				<AnimatePresence mode="wait">
					<motion.div
						key={pathname}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{
							duration: 0.5,
							ease: "easeInOut",
						}}
					>
						<main className="max-w-6xl mx-auto px-4 py-6 ">
							{children}
						</main>
					</motion.div>
				</AnimatePresence>
			</body>
		</html>
	);
}

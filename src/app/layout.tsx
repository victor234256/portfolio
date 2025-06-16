import "../../styles/globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
	title: "My Portfolio",
	description: "Created with Next.js 15 and Tailwind CSS",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-[#0F0F0F] bg-[url('/bg1.png')] ">
				<Navbar />
				<div className="max-w-4xl mx-auto p-4">
					{children}
				</div>
			</body>
		</html>
	);
}

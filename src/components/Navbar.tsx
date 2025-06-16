import Image from "next/image";

export default function Navbar() {
	return (
		<nav className="w-full shadow px-6 py-4 sticky top-0 z-50 text-white">
			<div className="max-w-6xl mx-auto flex justify-between items-center">
				<Image
					src="/logo-black.png"
					width={150}
					height={150}
					alt="logo"
				/>
				<ul className="flex gap-6">
					<li className="text-[#d3cece]">Home</li>
					<li className="text-[#5c5a5a]">About</li>
					<li className="text-[#5c5a5a]">Project</li>
					<li className="text-[#5c5a5a]">Contact</li>
				</ul>
				<button className="bg-[#323232] py-2 px-4 rounded-xl hover:bg-gray-50 hover:text-[#323232]">
					Lets talk
				</button>
			</div>
		</nav>
	);
}

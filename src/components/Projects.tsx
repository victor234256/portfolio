"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Project = {
	id: string;
	name: string;
	image: string;
	languages: string[];
	link: string;
};

const projects: Project[] = [
	// {
	// 	id: "1",
	// 	name: "Portfolio",
	// 	image: "/port.png",
	// 	languages: [
	// 		"React",
	// 		"Next.js",
	// 		"TailwindCSS",
	// 		"TypeScript",
	// 	],
	// 	link: "https://yourdomain.com/portfolio",
	// },
	{
		id: "2",
		name: "Cart Management",
		image: "/cart.png",
		languages: [
			"Vite",
			"React",
			"Redux",
			"Redux Toolkit",
			"TailwindCSS",
		],
		link: "https://cart-six-pink.vercel.app/",
	},
	{
		id: "3",
		name: "Shutett URL Shortener",
		image: "/shut.png",
		languages: ["Vite", "Tailwind CSS", "React", "Redux"],
		link: "https://shutett.vercel.app/",
	},
	{
		id: "4",
		name: "Coffee Site",
		image: "/coffee.png",
		languages: ["HTML", "CSS"],
		link: "https://coffee-landing-page-site-eight.vercel.app/",
	},
	{
		id: "5",
		name: "Furniture Landing Page",
		image: "/production.png",
		languages: ["HTML", "CSS"],
		link: "https://furnitures-landing-page.vercel.app/",
	},
];
export default function Projects() {
	const [visibleCount, setVisibleCount] = useState(1);

	const handleLoadMore = () => {
		setVisibleCount(projects.length);
	};

	return (
		<div className="flex flex-col gap-6">
			{projects.slice(0, visibleCount).map((project) => (
				<div
					key={project.id}
					className=" bg-[url('/bg1.png')] border border-white/10 rounded-xl p-4 shadow-md flex flex-col items-center gap-4"
				>
					<Image
						src={project.image}
						alt={project.name}
						width={200}
						height={200}
						className="rounded-lg object-cover"
					/>
					<h3 className="text-lg font-semibold text-white">
						{project.name}
					</h3>
					<p className="text-sm text-gray-400 text-center">
						{String(project.languages)
							.split(",")
							.join(" | ")}
					</p>
					<Link
						href={project.link}
						target="_blank"
						className="mt-2 inline-block bg-gradient-to-r from-lime-500 to-blue-500 text-white px-4 py-2 rounded-md shadow hover:opacity-90 transition-opacity"
					>
						Visit Site
					</Link>
				</div>
			))}

			{visibleCount < projects.length && (
				<button
					onClick={handleLoadMore}
					className="mt-4 self-center bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-lime-700 transition"
				>
					Load More
				</button>
			)}
		</div>
	);
}

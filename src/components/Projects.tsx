"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Project = {
	id: string;
	name: string;
	image: string;
	languages: string[];
	link?: string;
	live: boolean;
};

const projects: Project[] = [
	{
		id: "1",
		name: "E-Portal for Park British School",
		image: "/eportal.png",
		languages: [
			"Next.js",
			"TypeScript",
			"TailwindCSS",
			"Redux",
			"React Query",
			"Axios",
			"Docker",
			"CI/CD",
		],
		link: "https://eportal.parkbritishschool.com",
		live: true,
	},
	{
		id: "2",
		name: "Admin Office – Park British School (Admin Portal)",
		image: "/park-admin.png",
		languages: [
			"Next.js",
			"TypeScript",
			"TailwindCSS",
			"Redux",
			"React Query",
			"Axios",
			"Docker",
			"CI/CD",
		],
		link: "https://admin-office.parkbritishschool.com",
		live: true,
	},
	{
		id: "3",
		name: "Pennup Admin – Osai Tech Project",
		image: "/pennup-admin.png",
		languages: [
			"Next.js",
			"TypeScript",
			"React",
			"TailwindCSS",
			"Redux",
		],
		live: false,
	},
	{
		id: "4",
		name: "Pennup Student – Osai Tech Project",
		image: "/pennup-student.png",
		languages: [
			"Next.js",
			"TypeScript",
			"React",
			"TailwindCSS",
			"Redux",
		],
		live: false,
	},
	{
		id: "5",
		name: "School Management Software – Personal Project",
		image: "/School-Management-Software.png",
		languages: [
			"Next.js",
			"TypeScript",
			"React",
			"TailwindCSS",
		],
		link: "https://next-school-mgt.vercel.app/admin",
		live: true,
	},
	{
		id: "6",
		name: "Com4t | E-Commerce Platform",
		image: "/com4t.png",
		languages: [
			"React",
			"Redux",
			"TailwindCSS",
			"React Query",
			"Axios",
		],
		link: "https://com4t.vercel.app/",
		live: true,
	},
	{
		id: "7",
		name: "Cart Management App",
		image: "/cart.png",
		languages: [
			"Vite",
			"React",
			"Redux Toolkit",
			"TailwindCSS",
		],
		link: "https://cart-six-pink.vercel.app/",
		live: true,
	},
	{
		id: "8",
		name: "Shutett URL Shortener",
		image: "/shut.png",
		languages: ["Vite", "React", "Redux", "TailwindCSS"],
		link: "https://shutett.vercel.app/",
		live: true,
	},
	{
		id: "9",
		name: "Portfolio Website",
		image: "/portfolio.png",
		languages: [
			"Next.js",
			"React",
			"TypeScript",
			"TailwindCSS",
		],
		link: "https://victor-omeiza.vercel.app/",
		live: true,
	},
	{
		id: "10",
		name: "Coffee Landing Page",
		image: "/coffee.png",
		languages: ["HTML", "CSS"],
		link: "https://coffee-landing-page-site-eight.vercel.app/",
		live: true,
	},
	{
		id: "11",
		name: "Furniture Landing Page",
		image: "/production.png",
		languages: ["HTML", "CSS"],
		link: "https://furnitures-landing-page.vercel.app/",
		live: true,
	},
];

export default function Projects() {
	const [visibleCount, setVisibleCount] = useState(1);

	const handleLoadMore = () => {
		setVisibleCount(projects.length);
	};

	const handleLinkClick = (project: Project) => {
		if (!project.live) {
			toast.error("This project is not live yet.");
		}
	};

	return (
		<div className="flex flex-col gap-6">
			{projects.slice(0, visibleCount).map((project) => (
				<div
					key={project.id}
					className="bg-[url('/bg1.png')] border border-white/10 rounded-xl p-4 shadow-md flex flex-col items-center gap-4"
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
						{project.languages.join(" | ")}
					</p>
					{project.live && project.link ? (
						<Link
							href={project.link}
							target="_blank"
							className="mt-2 inline-block bg-gradient-to-r from-lime-500 to-blue-500 text-white px-4 py-2 rounded-md shadow hover:opacity-90 transition-opacity"
						>
							Visit Site
						</Link>
					) : (
						<button
							onClick={() => handleLinkClick(project)}
							className="mt-2 inline-block bg-gray-600 text-white px-4 py-2 rounded-md shadow hover:opacity-80 transition-opacity cursor-not-allowed"
						>
							Not Live
						</button>
					)}
				</div>
			))}

			{visibleCount < projects.length && (
				<button
					onClick={handleLoadMore}
					className="mt-4 self-center bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-lime-700 transition"
				>
					Load More Projects
				</button>
			)}

			<ToastContainer position="top-right" />
		</div>
	);
}

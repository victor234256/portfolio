"use client";
import Card from "@/components/Card";
import CardWithIcon from "@/components/CardWithIcon";
import Image from "next/image";
import SectionHeader from "./SessionHeader";
import CSSIcon from "./icons/CSSIcon";
import BootstrapIcon from "./icons/BootstrapIcon";
import TailwindIcon from "./icons/TailwindIcon";
import FigmaIcon from "./icons/FigmaIcon";
import ReactLogo from "./icons/ReactLogo";
import NextIcon from "./icons/NextIcon";
import ReduxIcon from "./icons/ReduxIcon";
import JSIcon from "./icons/JSIcon";
import TypeScriptIcon from "./icons/TypeScriptIcon";
import GitHubIcon from "./icons/GithubIcon";
import LinkedInIcon from "./icons/LinkedinIcon";
import ButtonIcon from "./ButtonIcon";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import PopUpModal from "./PopUpModal";
import ContactForm from "./Contact";

export default function MainPage() {
	const [isModalOpen, setIsModalOpen] =
		useState<boolean>(false);
	return (
		<div className="p-4">
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.4, duration: 0.7 }}
				className="flex flex-col md:flex-row gap-6 items-center"
			>
				<Card>
					<Image
						src="/profile.jpeg"
						alt="Profile"
						className="rounded-lg object-cover"
						width={250}
						height={250}
					/>
				</Card>
				<div className="flex flex-col gap-5 justify-center text-center md:text-left">
					<SectionHeader title="SELF-SUMMARY" />
					<CardWithIcon
						icon="/icon2.png"
						iconPosition="left"
					>
						<div>
							<p className="text-sm text-gray-400">
								A Front End Developer
							</p>
							<h2 className="text-xl font-bold text-lime-500">
								Victor Omeiza Jimoh.
							</h2>
							<p className="text-gray-300">
								I am skilled in React and Tailwind, I enjoy
								turning complex requirements into elegant
								front-end features.
							</p>
						</div>
					</CardWithIcon>
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.4, duration: 0.7 }}
				className="flex flex-col lg:flex-row gap-6 justify-between py-6"
			>
				<div className="w-full lg:w-[80%]">
					<SectionHeader title="Experience" />
					<Card>
						<div className="flex flex-col md:flex-row gap-6 p-4">
							<div className="flex-1">
								<div className="border-b border-gray-400 pb-2 mb-2">
									<p className="font-semibold">
										Front End Developer
									</p>
									<p className="text-xs text-gray-400">
										Intern
									</p>
									<p className="text-sm">
										Osai Tech Nigeria
									</p>
									<p className="text-xs">2025</p>
								</div>
								<div>
									<p className="font-semibold">
										STEM Instructor
									</p>
									<p className="text-xs">STEMWonders</p>
									<p className="text-sm text-gray-400">
										MD United State
									</p>
									<p className="text-xs">2024 - 2025</p>
								</div>
							</div>

							<div className="flex-1">
								<div className="border-b border-gray-400 pb-2 mb-2">
									<p className="font-semibold">
										Coding Instructor
									</p>
									<p className="text-xs text-gray-400">
										Instinctech Academy
									</p>
									<p className="text-sm">Lagos Nigeria</p>
									<p className="text-xs">2019 - 2024</p>
								</div>
								<div>
									<p className="font-semibold">
										STEM Instructor
									</p>
									<p className="text-xs">
										Science Screw Educational Consult
									</p>
									<p className="text-sm text-gray-400">
										Lagos Nigeria
									</p>
									<p className="text-xs">2020 - 2025</p>
								</div>
							</div>
						</div>
					</Card>
				</div>

				<div className="w-full lg:w-[20%] flex flex-col items-center gap-5">
					<Card>
						<div
							className="flex gap-3 items-center justify-center cursor-pointer"
							onClick={() => setIsModalOpen(true)}
						>
							<p>Hire Me</p>
							<ButtonIcon
								size={30}
								className="text-lime-300"
							/>
						</div>
					</Card>
					<Card>
						<Link
							href="https://docs.google.com/document/d/1ymGrp8jKp_wAEobPnOfBKug_wkCUZHOX_vUeYQCM_Mk/edit?usp=sharing"
							target="_blank"
						>
							<div className="flex gap-3 items-center justify-center cursor-pointer">
								<p>Resume</p>
								<ButtonIcon
									size={30}
									className="text-lime-300 hover:text-gray-200"
								/>
							</div>
						</Link>
					</Card>
					<Card>
						<div className="flex gap-4 justify-center">
							<Link
								href="https://github.com/victor234256"
								target="_blank"
							>
								<GitHubIcon />
							</Link>
							<Link
								href="https://www.linkedin.com/in/jimoh-victor-omeiza/"
								target="_blank"
							>
								<LinkedInIcon />
							</Link>
						</div>
					</Card>
				</div>
			</motion.div>

			<div className="pt-6">
				<CardWithIcon
					icon="/icon3.png"
					iconPosition="left"
					titlePosition="center"
					title={
						<SectionHeader
							title="My Stack"
							justify="center"
						/>
					}
				>
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.7 }}
						className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center items-center text-center"
					>
						<div>
							<CSSIcon />
							<span>CSS</span>
						</div>
						<div>
							<BootstrapIcon />
							<span>Bootstrap</span>
						</div>
						<div>
							<TailwindIcon />
							<span>Tailwind</span>
						</div>
						<div>
							<FigmaIcon />
							<span>Figma</span>
						</div>
						<div>
							<JSIcon />
							<span>Javascript</span>
						</div>
						<div>
							<ReactLogo size={50} />
							<span>React JS</span>
						</div>
						<div>
							<ReduxIcon size={50} />
							<span>Redux</span>
						</div>
						<div>
							<TypeScriptIcon />
							<span>TypeScript</span>
						</div>
						<div>
							<NextIcon />
							<span>Next JS</span>
						</div>
					</motion.div>
				</CardWithIcon>
			</div>
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

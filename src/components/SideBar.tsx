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

export default function SideBar() {
	return (
		<div>
			<div className=" flex gap-4">
				<Card>
					<Image
						src="/profile.jpeg"
						alt="Profile"
						className=" rounded-lg object-cover "
						width={250}
						height={250}
					/>
				</Card>
				<div className="flex flex-col gap-5 justify-center">
					<SectionHeader title="SELF-SUMMARY" />
					<div>
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
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Perferendis perspiciatis
									voluptatibus{" "}
								</p>
							</div>
						</CardWithIcon>
					</div>
				</div>
			</div>
			<div className="flex gap-4 justify-between py-4">
				{/* Education */}
				<div className="w-[80%]">
					<div className="flex flex-col gap-2">
						<SectionHeader title="Experience" />
						<Card>
							<div className="flex gap-5 items-center justify-between p-3">
								<div>
									<div className="border-b border-gray-400 pb-2">
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
									<div className="pt-2">
										<p className="font-semibold">
											STEM Instructor
										</p>
										<p className="text-xs">STEMWonders</p>
										<p className="text-sm text-gray-400">
											MD United State
										</p>
										<p className="text-xs">2024 -2025</p>
									</div>
								</div>
								<div>
									<div className="border-b border-gray-400 pb-2">
										<p className="font-semibold">
											Coding Instructor
										</p>
										<p className="text-xs text-gray-400">
											Instinctech Academy
										</p>
										<p className="text-sm">Lagos Nigeria</p>
										<p className="text-xs">2019 - 2024</p>
									</div>
									<div className="pt-2">
										<p className="font-semibold">
											STEM Instructor
										</p>
										<p className="text-xs">
											Science Screw Educational Consult
										</p>
										<p className="text-sm text-gray-400">
											Lagos Nigeria
										</p>
										<p className="text-xs">2020 -2025</p>
									</div>
								</div>
							</div>
						</Card>
					</div>
				</div>
				{/* buttons */}
				<div className="flex flex-col items-center gap-5 my-3">
					<Card>
						<div className="flex gap-5 items-center">
							<p>Hire Me</p>
							<Image
								src="/icon.svg"
								alt="icon"
								width={30}
								height={30}
							/>
						</div>
					</Card>

					<Card>
						<div className="flex gap-5 items-center">
							<p> Resume</p>
							<Image
								src="/icon.svg"
								alt="icon"
								width={30}
								height={30}
							/>
						</div>
					</Card>
					<Card>
						<div className="flex gap-4">
							<GitHubIcon />
							<LinkedInIcon />
						</div>
					</Card>
				</div>
			</div>
			<div className="pt-3">
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
					<div className="flex justify-around gap-4 items-center">
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
							<FigmaIcon /> <span>Figma</span>
						</div>
						<div>
							<JSIcon /> <span>Javascript</span>
						</div>
						<div>
							<ReactLogo size={50} />
							<span>React JS</span>
						</div>
						<div>
							<ReduxIcon size={50} />
							<span>Redux</span>
						</div>
						<div className="flex flex-col gap-2">
							<TypeScriptIcon /> <span>TypeScript</span>
						</div>
						<div>
							<NextIcon />
							<span>Next JS</span>
						</div>
					</div>
				</CardWithIcon>
				<div></div>
			</div>
		</div>
	);
}

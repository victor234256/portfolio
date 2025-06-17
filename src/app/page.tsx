"use client";

import Accordion from "@/components/Accordion";
import Card from "@/components/Card";
import ContactForm from "@/components/Contact";
import Projects from "@/components/Projects";
import SectionHeader from "@/components/SessionHeader";
import MainPage from "@/components/MainPage";
import React from "react";

export default function Page() {
	return (
		<div className="w-full">
			<div className="grid grid-cols-1 md:grid-cols-[1fr_410px] min-h-screen">
				<main className="overflow-hidden">
					<MainPage />
				</main>

				<aside className="h-full md:max-h-screen overflow-y-auto px-4 py-6 space-y-6 bg-black/10 backdrop-blur-md">
					<Card>
						<div className="p-4">
							<SectionHeader title="My Projects" />
							<div className="py-3">
								<Projects />
							</div>
						</div>
					</Card>

					<div>
						<SectionHeader title="Education" />
						<Card>
							<div className="space-y-4 p-4">
								<div className="border-b border-gray-400 pb-2">
									<p className="font-semibold">
										National Open University of Nigeria
									</p>
									<p className="text-xs text-gray-400">
										B.SC
									</p>
									<p className="text-sm">
										Communication Technology
									</p>
									<p className="text-xs">2021</p>
								</div>
								<div className="pt-2">
									<p className="font-semibold">
										Altschool Africa
									</p>
									<p className="text-xs">Diploma</p>
									<p className="text-sm text-gray-400">
										Front End Engineering
									</p>
									<p className="text-xs">2023 - 2024</p>
								</div>
							</div>
						</Card>
					</div>
				</aside>
			</div>
		</div>
	);
}

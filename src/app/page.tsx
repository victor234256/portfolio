"use client";
import Accordion from "@/components/Accordion";
import Card from "@/components/Card";
import ContactForm from "@/components/Contact";
import SectionHeader from "@/components/SessionHeader";
import SideBar from "@/components/SideBar";
import React from "react";

export default function page() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-[700px_400px] gap-4 p-4">
			<div>
				<SideBar />
			</div>
			<div className="w-full">
				<Accordion
					title={
						<SectionHeader
							title="Contact"
							justify="center"
						/>
					}
					defaultOpen
				>
					<Card>
						<div>
							<ContactForm />
						</div>
					</Card>
				</Accordion>
			</div>
		</div>
	);
}

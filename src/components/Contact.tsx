import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

export default function ContactForm() {
	const [status, setStatus] = useState("");
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const form = useRef<HTMLFormElement | null>(null);

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement
		>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!form.current) return;
		emailjs
			.sendForm(
				"service_9qa8rxf",
				"template_65lagzd",
				form.current,
				{
					publicKey: "9Gf6DRS2hfXgobcDx",
				},
			)
			.then(
				() => {
					toast.success("Message sent successfully!");
					console.log("SUCCESS!");
				},
				(error) => {
					console.log("FAILED...", error.text);
					toast.error(
						"Failed to send message.. please try again!",
					);
				},
			);
	};

	return (
		<div>
			<form
				ref={form}
				onSubmit={handleSubmit}
				className="space-y-4 w-full max-w-xl"
			>
				<div>
					<input
						type="text"
						name="name"
						placeholder="Your Name"
						value={formData.name}
						onChange={handleChange}
						required
						className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:border-white"
					/>
				</div>
				<div>
					<input
						type="email"
						name="email"
						placeholder="Your Email"
						value={formData.email}
						onChange={handleChange}
						required
						className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:border-white"
					/>
				</div>
				<div>
					<input
						type="text"
						name="subject"
						placeholder="Subject"
						value={formData.subject}
						onChange={handleChange}
						required
						className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:border-white"
					/>
				</div>
				<div>
					<textarea
						name="message"
						rows={5}
						placeholder="Your Message"
						value={formData.message}
						onChange={handleChange}
						required
						className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:border-white"
					/>
				</div>
				<button
					type="submit"
					className="px-6 py-2  bg-gradient-to-r from-lime-500 to-blue-500  text-white font-semibold rounded-md hover:bg-white/10 transition-all duration-300"
				>
					Send Message
				</button>
			</form>
			<ToastContainer position="top-right" />
		</div>
	);
}

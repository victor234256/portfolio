import React, { useState } from "react";

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

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
		// handle form submission logic here
		console.log(formData);
	};

	return (
		<form
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
				className="px-6 py-2 bg-gradient-to-br from-white/10 to-white/5 text-white font-semibold rounded-md hover:bg-white/10 transition-all duration-300"
			>
				Send Message
			</button>
		</form>
	);
}

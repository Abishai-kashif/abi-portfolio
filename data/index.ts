import type { IconType } from "react-icons";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import {
	SiNextdotjs,
	SiTailwindcss,
	SiTypescript,
	SiBootstrap,
} from "react-icons/si";

export const skillsList: { icon: IconType; name: string }[] = [
	{ icon: FaHtml5, name: "html 5" },
	{ icon: FaCss3, name: "css 3" },
	{ icon: FaJs, name: "javascript" },
	{ icon: FaReact, name: "react.js" },
	{ icon: SiNextdotjs, name: "next.js" },
	{ icon: SiTailwindcss, name: "tailwind.css" },
	{ icon: SiTypescript, name: "typescript" },
	{ icon: SiBootstrap, name: "bootstrap" },
];

export const links = [
	{ name: "Work", path: "#work" },
	{ name: "Skills", path: "#skills" },
	{ name: "Contact Me", path: "#contact" },
];

export const faqs = [
	{
		question: "What technologies do you specialize in?",
		answer:
			"I specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and various cloud platforms. I'm always learning new technologies to stay current with industry trends.",
	},
	{
		question: "How long does a typical project take?",
		answer:
			"Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 2-6 months. I provide detailed timelines during the planning phase.",
	},
	{
		question: "Do you work with clients remotely?",
		answer:
			"Yes, I work with clients worldwide remotely. I use modern collaboration tools and maintain regular communication to ensure project success regardless of location.",
	},
	{
		question: "What is your development process?",
		answer:
			"I follow an agile development process with regular check-ins, iterative development, and continuous feedback. This ensures the final product meets your expectations and requirements.",
	},
	{
		question: "Do you provide ongoing support?",
		answer:
			"Yes, I offer ongoing support and maintenance packages to keep your applications running smoothly and up-to-date with the latest security patches and features.",
	},
];

export const milestones = [
	{
		year: "2024",
		title: "Senior Full Stack Developer",
		description: "Promoted to senior role, leading a team of 5 developers",
	},
	{
		year: "2023",
		title: "Best Innovation Award",
		description: "Recognized for developing cutting-edge solutions",
	},
	{
		year: "2022",
		title: "100+ Projects Completed",
		description: "Successfully delivered over 100 client projects",
	},
	{
		year: "2021",
		title: "Tech Conference Speaker",
		description: "Spoke at major tech conferences about modern web development",
	},
];

export const offerings = [
	{
		title: "Web Development",
		description: "Full-stack web applications using modern technologies",
		icon: "🌐",
	},
	{
		title: "Mobile Development",
		description: "Cross-platform mobile apps with React Native",
		icon: "📱",
	},
	{
		title: "UI/UX Design",
		description: "Beautiful and intuitive user interface designs",
		icon: "🎨",
	},
	{
		title: "Consulting",
		description: "Technical consulting and architecture planning",
		icon: "💡",
	},
];

export const socialLinks = [
	{ name: "GitHub", url: "#", icon: "🐙" },
	{ name: "LinkedIn", url: "#", icon: "💼" },
	{ name: "Twitter", url: "#", icon: "🐦" },
	{ name: "Portfolio", url: "#", icon: "🌐" },
	{ name: "Blog", url: "#", icon: "📝" },
	{ name: "YouTube", url: "#", icon: "📺" },
];

export const skills = [
	"React",
	"Next.js",
	"TypeScript",
	"Node.js",
	"Python",
	"PostgreSQL",
	"MongoDB",
	"AWS",
	"Docker",
	"Kubernetes",
	"GraphQL",
	"REST APIs",
	"Tailwind CSS",
	"Shadcn UI",
	"Git",
	"CI/CD",
];

export const network = [
	{
		name: "Tyler Durden",
		image:
			"https://images.unsplash.com/photo-1732310216648-603c0255c000?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		style: {
			position: "absolute" as const,
			top: "6.5rem",
			left: "30%",
			rotate: "-5deg",
		},
		description: "Founder of Fight Club, anarchist, and soap salesman",
	},
	{
		name: "The Narrator",
		image:
			"https://images.unsplash.com/photo-1697909623564-3dae17f6c20b?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		style: {
			position: "absolute" as const,
			top: "8rem",
			right: "5%",
			rotate: "-7deg",
		},
		description: "Founder of Fight Club, anarchist, and soap salesman",
	},
	{
		name: "Iceland",
		image:
			"https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		style: {
			position: "absolute" as const,
			bottom: "0.1rem",
			left: "40%",
			rotate: "-3deg",
		},
		description: "Founder of Fight Club, anarchist, and soap salesman",
	},
	{
		name: "Japan",
		image:
			"https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		style: {
			position: "absolute" as const,
			bottom: "8.5rem",
			left: "35%",
			rotate: "10deg",
		},
		description: "Founder of Fight Club, anarchist, and soap salesman",
	},
	{
		name: "Norway",
		image:
			"https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		style: {
			position: "absolute" as const,
			bottom: "5rem",
			right: "10%",
			rotate: "2deg",
		},
		description: "Founder of Fight Club, anarchist, and soap salesman",
	},
	{
		name: "New Zealand",
		image:
			"https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		style: {
			position: "absolute" as const,
			bottom: "7rem",
			left: "-2%",
			rotate: "-7deg",
		},
		description: "Founder of Fight Club, anarchist, and soap salesman",
	},
	{
		name: "Canada",
		image:
			"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		style: {
			position: "absolute" as const,
			top: "5rem",
			left: "10%",
			rotate: "4deg",
		},
		description: "Founder of Fight Club, anarchist, and soap salesman",
	},
];

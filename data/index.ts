import type { IconType } from "react-icons";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import {
	SiNextdotjs,
	SiTailwindcss,
	SiTypescript,
	SiBootstrap,
} from "react-icons/si";
import {
	AiOutlineDesktop,
	AiOutlineApi,
	AiOutlineRobot,
	AiOutlineMessage,
} from "react-icons/ai";
import { Project } from "@/components/project-card";

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

export const services = [
	{
		name: "Modern Frontend Development",
		description:
			"Crafting fast, responsive, and visually polished user interfaces using React, Next.js, and Tailwind CSS. Optimized for accessibility and SEO.",
		icon: AiOutlineDesktop,
	},
	{
		name: "Scalable Backend Architecture",
		description:
			"Building secure, scalable APIs and server-side systems with authentication, database design (PostgreSQL, MongoDB), and integrations like Stripe or headless CMS.",
		icon: AiOutlineApi,
	},
	{
		name: "Agentic AI Solutions",
		description:
			"Designing intelligent AI agents using OpenAI’s Open Agent SDK to automate workflows, interact with systems, and complete tasks autonomously.",
		icon: AiOutlineRobot,
	},
	{
		name: "Custom AI Integrations & Chatbots",
		description:
			"Embedding GPT‑powered chatbots and assistants into websites and apps—tailored for support, onboarding, content automation, and enterprise use cases.",
		icon: AiOutlineMessage,
	},
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
		title: "Full Stack ~ Intern",
		description: "Crack the interview and selected as Intern at Devotic Labs",
	},
	{
		year: "2023",
		title: "Full Stack ~ Developer",
		description: "Promoted to senior role, managing multiple projects",
	},
	{
		year: "2022",
		title: "50+ Projects Completed",
		description: "Successfully delivered over 50 projects github",
	},
	{
		year: "2021",
		title: "GIAIC Student",
		description: "Learning cutting-edge technologies while working.",
	},
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
		name: "Ubaid",
		image: "friends/friend1.png",
		style: {
			position: "absolute" as const,
			top: "6.5rem",
			left: "30%",
			rotate: "-5deg",
		},
		description: "Full-stack developer | Chatbot | Agentic AI",
	},
	{
		name: "Umer",
		image: "friends/friend2.png",
		style: {
			position: "absolute" as const,
			top: "8rem",
			right: "5%",
			rotate: "-7deg",
		},
		description: "Full-stack developer | Chatbot | Agentic AI",
	},
	{
		name: "Muzaffar",
		image: "friends/friend3.png",
		style: {
			position: "absolute" as const,
			bottom: "0.1rem",
			left: "40%",
			rotate: "-3deg",
		},
		description: "Full-stack developer | Chatbot | Agentic AI",
	},
	{
		name: "Huzair",
		image: "friends/friend4.png",
		style: {
			position: "absolute" as const,
			bottom: "8.5rem",
			left: "35%",
			rotate: "10deg",
		},
		description: "Full-stack developer | Chatbot | Agentic AI",
	},
	{
		name: "Nadeem",
		image: "friends/friend5.jpeg",
		style: {
			position: "absolute" as const,
			bottom: "5rem",
			right: "10%",
			rotate: "2deg",
		},
		description: "Full-stack developer | Chatbot | Agentic AI",
	},
	{
		name: "Abdullah",
		image: "friends/friend6.jpeg",
		style: {
			position: "absolute" as const,
			bottom: "7rem",
			left: "-2%",
			rotate: "-7deg",
		},
		description: "Full-stack developer | Chatbot | Agentic AI",
	},
	{
		name: "Shahab uddin",
		image: "friends/friend7.png",
		style: {
			position: "absolute" as const,
			top: "5rem",
			left: "10%",
			rotate: "4deg",
		},
		description: "Full-stack developer | Chatbot | Agentic AI",
	},
];

// export const projects = {
// 	aiProjects: [
// 		{
// 			name: "Joker Chatbot",
// 			description: "AI chatbot emulating Joker's witty style.",
// 			image: "/projects/joker.png",

// 			className: "sm:col-span-2",
// 		},
// 		{
// 			name: "Coming Soon",
// 			description: "coming soon......",
// 			image: "/coming-soon.jpg",
// 		},
// 		{
// 			name: "Coming Soon",
// 			description: "coming soon......",
// 			image: "/coming-soon.jpg",
// 		},
// 	],
// 	eCommerceProjects: [
// 		{
// 			name: "Furniture Press",
// 			description: "E-commerce platform for furniture.",
// 			image: "/projects/furniture-project.png",
// 		},
// 		{
// 			name: "Flexiby",
// 			description: "E-commerce platform for flexiby yet styling clothes.",
// 			image: "/projects/flexiby.png",
// 			className: "sm:-row-start-2 sm:col-start-2",
// 		},
// 	],
// 	moreProjects: [
// 		{
// 			name: "Coming Soon",
// 			description: "coming soon......",
// 			image: "/coming-soon.jpg",
// 		},
// 		{
// 			name: "Coming Soon",
// 			description: "coming soon......",
// 			image: "/coming-soon.jpg",
// 		},
// 		{
// 			name: "Coming Soon",
// 			description: "coming soon......",
// 			image: "/coming-soon.jpg",
// 		},
// 		{
// 			name: "Coming Soon",
// 			description: "coming soon......",
// 			image: "/coming-soon.jpg",
// 		},
// 	],
// };

interface Projects {
	aiProjects: Project[];
	eCommerceProjects: Project[];
	moreProjects: Project[];
}

export const projects: Projects = {
	aiProjects: [
		{
			id: 1,
			title: "Joker Chatbot",
			description: "AI chatbot emulating Joker's witty style.",
			image: "/projects/joker.png",
			link: "https://github.com/Abishai-kashif/nextjs-dashboard.git",
			iconLists: [
				"icons/tail.svg",
				"icons/ts.svg",
				"icons/next.svg",
				"icons/pgsql.svg",
			],
			className: "sm:col-span-2",
		},
		{
			id: 2,
			title: "Coming Soon",
			description: "coming soon......",
			image: "/coming-soon.jpg",
			iconLists: [
				"icons/next.svg",
				"icons/tail.svg",
				"icons/ts.svg",
				"icons/fm.svg",
			],
			link: "https://github.com/Abishai-kashif/positivus.git",
		},
		{
			id: 3,
			title: "Coming Soon",
			description: "coming soon......",
			image: "/coming-soon.jpg",
			iconLists: ["icons/next.svg", "icons/tail.svg", "icons/ts.svg"],
			link: "https://github.com/Abishai-kashif/birthday_celebrator_for_bro.git",
		},
	],
	eCommerceProjects: [
		{
			id: 4,
			title: "Furniture Press",
			description: "E-commerce platform for furniture.",
			image: "/projects/furniture-project.png",
			link: "https://github.com/Abishai-kashif/nextjs-dashboard.git",
			iconLists: [
				"icons/tail.svg",
				"icons/ts.svg",
				"icons/next.svg",
				"icons/pgsql.svg",
			],
		},
		{
			id: 5,
			title: "Flexiby",
			description: "E-commerce platform for flexiby yet styling clothes.",
			image: "/projects/flexiby.png",
			iconLists: [
				"icons/next.svg",
				"icons/tail.svg",
				"icons/ts.svg",
				"icons/fm.svg",
			],
			link: "https://github.com/Abishai-kashif/positivus.git",
			className: "sm:-row-start-2 sm:col-start-2",
		},
	],
	moreProjects: [
		{
			id: 6,
			title: "Coming Soon",
			description: "coming soon......",
			image: "/coming-soon.jpg",
			link: "https://github.com/Abishai-kashif/nextjs-dashboard.git",
			iconLists: [
				"icons/tail.svg",
				"icons/ts.svg",
				"icons/next.svg",
				"icons/pgsql.svg",
			],
		},
		{
			id: 7,
			title: "Coming Soon",
			description: "coming soon......",
			image: "/coming-soon.jpg",
			iconLists: [
				"icons/next.svg",
				"icons/tail.svg",
				"icons/ts.svg",
				"icons/fm.svg",
			],
			link: "https://github.com/Abishai-kashif/positivus.git",
		},
		{
			id: 8,
			title: "Coming Soon",
			description: "coming soon......",
			image: "/coming-soon.jpg",
			iconLists: ["icons/next.svg", "icons/tail.svg", "icons/ts.svg"],
			link: "https://github.com/Abishai-kashif/birthday_celebrator_for_bro.git",
		},
		{
			id: 9,
			title: "Coming Soon",
			description: "coming soon......",
			image: "/coming-soon.jpg",
			iconLists: ["icons/css-3.svg", "icons/html-1.svg", "icons/ts.svg"],
			link: "https://github.com/Abishai-kashif/resume-builder-app.git",
		},
	],
};
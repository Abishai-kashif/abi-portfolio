import { CardCarousel } from "@/components/ui/card-carousel";
import { Pill, PillIndicator } from "@/components/ui/kibo-ui/pill";
import GradientBackground from "../gradient-background";
import Underline from "../underline";

// const images = [
//   { src: "/projects/flexiby.png", alt: "Image 1" },
//   { src: "/projects/furniture-project.png", alt: "Image 2" },
//   { src: "/projects/joker.png", alt: "Image 3" },
// ];

const cards = [
  {
    title: "Flexiby - E-Commerce Platform",
    description:
      "How to design with gestures and motion that feel intuitive and natural.",
    src: "/projects/flexiby.png",
    iconList: [
      "icons/tail.svg",
      "icons/ts.svg",
      "icons/next.svg",
      "icons/pgsql.svg",
    ],
    link: "https://flexiby.vercel.app/",
  },
  {
    title: "Furniture Press - E-Commerce Platform",
    description:
      "How to design with gestures and motion that feel intuitive and natural.",
    src: "/projects/furniture-project.png",
    iconList: [
      "icons/tail.svg",
      "icons/ts.svg",
      "icons/next.svg",
      "icons/pgsql.svg",
    ],
    link: "https://furniture-press.vercel.app/",
  },
  {
    title: "Joker - AI based Chatbot",
    description:
      "How to design with gestures and motion that feel intuitive and natural.",
    src: "/projects/joker.png",
    iconList: [
      "icons/tail.svg",
      "icons/ts.svg",
      "icons/next.svg",
      "icons/pgsql.svg",
    ],
    link: "https://joker-master-agent.vercel.app/",
  },
];

// const data = [
//   {
//     title: "AI Powered Applications",
//     content: (
//       <div>
//         <p className="mb-8 font-normal text-white/50">
//           Built and launched AI powered applications from scratch
//         </p>
//         <div className="grid md:grid-cols-2 gap-6">
//           {projects["aiProjects"].map((project) => (
//             <ProjectCard project={project} key={project.id} />
//           ))}
//         </div>
//       </div>
//     ),
//   },
//   {
//     title: "E-Commerce Websites",
//     content: (
//       <div>
//         <p className="mb-8 font-normal text-white/50">
//           Built and launched E-Commerce websites from scratch
//         </p>
//         <div className="grid md:grid-cols-2 md:grid-rows-2 gap-6">
//           {projects["eCommerceProjects"].map((project, index) => (
//             <ProjectCard project={project} key={index} />
//           ))}
//         </div>
//       </div>
//     ),
//   },
//   {
//     title: "Project Collections",
//     content: (
//       <div>
//         <p className="mb-8 font-normal text-white/50">
//           My more recent projects you can check out to judge my basics ;)
//         </p>
//         <div className="grid md:grid-cols-2 gap-6">
//           {projects["moreProjects"].map((project, index) => (
//             <ProjectCard project={project} key={index} />
//           ))}
//         </div>
//       </div>
//     ),
//   },
// ];

export default function ShowcaseOfWorkSection() {
  return (
    <section className="py-24 pb-14 flex-center relative [perspective:3000px] bg-[#050505]">
      <div className="absolute top-0 left-2/3 flex h-8 items-start overflow-hidden -translate-x-1/2">
        <div className="-mt-px flex h-[2px] w-80 -scale-x-100">
          <div className="w-full flex-none blur-xs [background-image:linear-gradient(90deg,rgba(255,178,0,0)_0%,#FFB200_32.29%,rgba(236,72,153,0.25)_67.19%,rgba(236,72,153,0)_100%)]"></div>
          <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(255,178,0,0)_0%,#FFB200_32.29%,rgba(255,178,0,0.5)_67.19%,rgba(236,72,153,0)_100%)]"></div>
        </div>
      </div>
      <GradientBackground className="rotate-180" />
      <GradientBackground className="from-dark-purple/20 to-transparent rotate-180" />
      <div className="container-layout">
        <div className="flex-center flex-col">
          <Pill className="mb-8 bg-dark-purple/20 text-white border-[0.2px] border-white/20 font-lora w-fit">
            <PillIndicator pulse variant="section" />
            Projects
          </Pill>
          <h2 className="_h2 text-center text-white relative">
            Showcase of <span className="text-light-purple">My Work</span>
            <Underline className="hidden md:inline absolute -bottom-2 left-1/2 text-light-purple" />
          </h2>
        </div>

        <div className="pt-20">
          <CardCarousel
            cards={cards}
            autoplayDelay={4000}
            showNavigation={true}
          />
        </div>
      </div>
    </section>
  );
}

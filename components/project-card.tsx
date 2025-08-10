import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";

function ProjectCard({ project }: IProps) {
  const { title, description, image, iconLists, link, className } = project;

  return (
    <div
      className={className}
    >
      {/* images */}
      <div className="relative flex items-center justify-center w-full overflow-hidden sm:h-[40vh] h-[30vh] mb-10 border-b border-light-purple lg:rounded-t-lg">
        <Image
          src={image}
          alt={title}
          width="435"
          height="100"
          className={"z-10 absolute -bottom-6 rounded-xl object-contain object-center border-[0.5px] border-light-purple/30"}
        />
      </div>
      {/* images ends here */}

      <div>
        <h4 className="_h4 text-white/90 mb-5 line-clamp-1">
          {title}
        </h4>
        <p className="_p line-clamp-1">
          {description}
        </p>

        <div className="flex items-center justify-between mt-7 mb-3">
          <div className="flex items-center">
            {iconLists.map((icon, idx) => (
              <div
                key={icon}
                className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center "
                style={{
                  transform: `translateX(-${5 * idx * 2}px)`,
                }}
              >
                <img src={icon} alt={icon} className="p-2" />
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center text-light-purple/70 group">
            <FaLocationArrow className="ms-3 transition-all duration-200 group-hover:-rotate-45" />
          </div>
        </div>
      </div>
    </div>
  );
}

interface IProps {
  project: Project;
  className?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  iconLists: string[];
  link: string;
  className?: string;
}

export default ProjectCard;

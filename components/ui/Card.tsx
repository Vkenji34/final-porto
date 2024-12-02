import Image from "next/image";

type ProjectType = {
  title: string;
  description: string;
  techIcons: { src: string; alt: string }[];
  projectLink: string;
  imageSrc: string;
};

export const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <div className="bg-black text-white rounded-lg shadow-lg p-6 flex flex-col w-80 h-auto relative">
      {/* Title and Description */}
      <div className="mb-2">
        <h3 className="text-lg font-bold">{project.title}</h3>
        <p className="text-sm text-gray-400 mt-1">{project.description}</p>
      </div>

      {/* Technology Icons */}
      <div className="flex gap-2">
        {project.techIcons.map((icon, index) => (
          <Image
            key={index}
            src={icon.src}
            alt={icon.alt}
            width={24}
            height={24}
            className="h-6 w-6"
          />
        ))}
      </div>

      {/* Project Image */}
      <div className="mt-2 w-full h-48 relative">
        <Image
          src={project.imageSrc}
          alt={project.title}
          fill
          className="rounded-lg object-cover"
        />
      </div>

      {/* Link Button */}
      <a
        href={project.projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200"
      >
        View Project
      </a>
    </div>
  );
};
